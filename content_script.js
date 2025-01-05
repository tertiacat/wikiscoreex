"use strict";
const excludeNodes = ['SUP', 'TABLE'];
const includeParents = ['P', 'LI', 'I'];
const includeNodes = ['#text', 'A', 'B', 'H2', 'H3', 'H4', 'H5'];
const excludeTexts = ['.', ',', "'", '?', '!', '.\n', '\n'];
let n = 0;
(async () => {
    const title = location.pathname.replace(/\/+$/, "").split('/').pop();
    let age = await computeAgeOnline(title);
    const prob = 0.99;
    for (let i = 0; i < age.length; i++)
        age[i] = (1 - Math.pow(prob, age[i]));
    let mx = -1;
    for (let i = 0; i < age.length; i++)
        mx = Math.max(mx, age[i]);
    for (let i = 0; i < age.length; i++)
        age[i] = Math.floor(age[i] / mx * 256);
    console.log(JSON.stringify(age));
    console.log(age.length);
    return age;
})().then(age => {
    const mainText = document.getElementsByClassName('mw-content-ltr')[0];
    const mainTextArr = mainText.childNodes;
    for (let i = 0; i < mainTextArr.length; i++) {
        numbering(mainTextArr[i]);
    }
    //highlight background
    for (let i = 0; i < n; i++) {
        const elm = document.getElementById(`ws${i}`);
        if (elm)
            elm.style.backgroundColor = `rgb(255,${160 + age[i] * 96 / 256},${age[i]})`;
    }
});
function query(params) {
    var url = "https://en.wikipedia.org/w/api.php";
    url = url + "?origin=*";
    for (const key in params)
        url += "&" + key + "=" + params[key];
    console.log(url);
    return fetch(url).then(res => res.json());
}
function processXML(xml) {
    let angle = 0;
    let braces = 0;
    xml = xml.split(/==\s*References\s*==/)[0];
    let result = '';
    for (let i = 0; i < xml.length; i++) {
        // NOTE: This is random hack to do things
        if (xml[i] === "<")
            angle++;
        if (xml[i] === "{")
            braces++;
        if (angle === 0 && braces === 0 && xml[i] !== '=' && xml[i] !== '*')
            result += xml[i];
        if (xml[i] === ">")
            angle--;
        if (xml[i] === "}")
            braces--;
    }
    return result;
}
async function computeAgeOnline(title) {
    let out = [];
    let id = -1;
    let params = {
        action: "query",
        prop: "revisions",
        titles: title,
        rvprop: "timestamp|user|comment|ids|content",
        rvslots: "main",
        formatversion: 2,
        format: "json",
        rvlimit: 50,
    };
    let prev = [];
    let age = [];
    let redir = [];
    let promise = query(params);
    while (true) {
        if (id != -1)
            params.rvstartid = id;
        let data = await promise;
        if (!data.batchcomplete) {
            params.rvcontinue = data.continue.rvcontinue;
            promise = query(params);
        }
        let start = new Date();
        for (let i = 0; i < data.query.pages[0].revisions.length; i++) {
            let rev = data.query.pages[0].revisions[i];
            let content = processXML(rev.slots.main.content);
            let xml = content.trim().split(/\s+/);
            if (!prev.length) {
                age = new Array(xml.length).fill(-1);
                redir = new Array(xml.length).fill(0);
                for (let j = 0; j < redir.length; j++)
                    redir[j] = j;
                prev = xml;
            }
            else {
                let rd = movesQuadratic(xml, prev);
                prev = xml;
                for (let j = 0; j < rd.length; j++)
                    rd[j] = redir[rd[j]];
                redir = rd;
            }
            for (let j = 0; j < redir.length; j++)
                age[redir[j]]++;
        }
        let end = new Date();
        console.log(end - start);
        if (data.batchcomplete)
            break;
    }
    return age;
}
function movesQuadratic(start, target) {
    let len = new Array(target.length).fill(0);
    let inv = new Array(target.length).fill(-1);
    for (let i = 0; i < start.length;) {
        let maxl = 0;
        let targetStart = -1;
        for (let j = 0; j < target.length; j++) {
            let l = 0;
            while (i + l < start.length && j + l < target.length
                && start[i + l] == target[j + l])
                l++;
            if (l > maxl) {
                maxl = l;
                targetStart = j;
            }
        }
        if (targetStart != -1) {
            for (let j = 0; j < maxl; j++) {
                if (len[targetStart + j] < maxl) {
                    len[targetStart + j] = maxl;
                    inv[targetStart + j] = i + j;
                }
            }
        }
        i += Math.max(maxl, 1);
    }
    let redir = new Array(start.length).fill(-1);
    for (let i = 0; i < target.length; i++)
        if (inv[i] != -1)
            redir[inv[i]] = i;
    return redir;
}
function numbering(node) {
    if (node.parentNode) {
        const parentNode = node.parentNode;
        if (!includeNodes.includes(node.nodeName) && !excludeNodes.includes(node.nodeName)) {
            for (const childNode of node.childNodes) {
                numbering(childNode);
            }
        }
        else if (node.textContent) {
            if (node.nodeName == 'H2' || node.nodeName == 'H3' || node.nodeName == 'H4' || node.nodeName == 'H5' || includeParents.includes(parentNode.nodeName)) {
                const href = node.nodeName == 'A' ? (node instanceof HTMLElement ? node.getAttribute('href') : null) : null;
                const title = node.nodeName == 'A' ? (node instanceof HTMLElement ? node.getAttribute('title') : null) : null;
                if (includeNodes.includes(node.nodeName))
                    parentNode.replaceChild(split(node.textContent, node.nodeName, href, title), node);
            }
        }
    }
}
function split(text, tag, href, title) {
    const newNodes = document.createElement('span');
    let textArr = text.split(' ');
    textArr = textArr.filter((value) => {
        if (value != '')
            return value;
    });
    for (let i = 0; i < textArr.length; i++) {
        const textNode = tag == '#text' ? document.createElement('span') : document.createElement(tag);
        textNode.innerHTML = textArr[i];
        if (textArr[i] && !excludeTexts.includes(textArr[i])) {
            textNode.id = `ws${n}`;
            n++;
        }
        if (href)
            textNode.setAttribute('href', href);
        if (title)
            textNode.setAttribute('title', title);
        newNodes.appendChild(textNode);
        //add placeholder
        const placeholder = document.createElement('span');
        placeholder.innerHTML = ' ';
        newNodes.appendChild(placeholder);
    }
    return newNodes;
}
