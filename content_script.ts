const age = [253, 213, 253, 256, 255, 255, 255, 145, 145, 145, 145, 145, 255, 255, 241, 255, 256, 255, 255, 255, 255, 255, 255, 255, 256, 256, 255, 255, 254, 254, 255, 255, 156, 156, 156, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 197, 197, 197, 197, 255, 255, 255, 256, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 156, 255, 255, 156, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 256, 255, 255, 156, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 230, 255, 255, 230, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 256, 256, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 246, 246, 255, 255, 253, 255, 253, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 227, 227, 227, 227, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 241, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 224, 224, 224, 224, 224, 224, 224, 255, 255, 255, 255, 255, 255, 255, 255, 255, 224, 255, 255, 255, 255, 250, 255, 250, 250, 255, 255, 250, 250, 250, 156, 156, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 156, 156, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 252, 252, 252, 252, 252, 252, 156, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 156, 156, 156, 156, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 183, 252, 252, 156, 156, 252, 252, 252, 241, 166, 166];
const excludeNodes = ['SUP', 'TABLE'];
const includeParents = ['P', 'LI', 'I'];
const includeNodes = ['#text', 'A', 'B', 'H2'];
const excludeTexts = ['.', ',', "'", '?', '!', '.\n'];
let n = 0;

window.addEventListener("load", () => {
  const mainText = document.getElementsByClassName('mw-content-ltr')[0];
  const mainTextArr = mainText.childNodes;
  for (let i = 0; i < mainTextArr.length; i++) {
    numbering(mainTextArr[i]);
  }

  function numbering(node: Node): void {
    if (node.parentNode) {
      const parentNode = node.parentNode;
      if (!includeNodes.includes(node.nodeName) && !excludeNodes.includes(node.nodeName)) {
        for (const childNode of node.childNodes) {
          numbering(childNode);
        }
      } else if (node.textContent) {
        if (node.nodeName == 'H2' || includeParents.includes(parentNode.nodeName)) {
          const href = node.nodeName == 'A' ? (node instanceof HTMLElement ? node.getAttribute('href') : null) : null;
          const title = node.nodeName == 'A' ? (node instanceof HTMLElement ? node.getAttribute('title') : null) : null;
          if (includeNodes.includes(node.nodeName)) parentNode.replaceChild(split(node.textContent, node.nodeName, href, title), node);
        }
      }
    }
  }

  function split(text: string, tag: string, href?: string | null, title?: string | null): HTMLSpanElement {
    const newNodes: HTMLSpanElement = document.createElement('span');
    let textArr: string[] = text.split(' ');
    textArr = textArr.filter((value) => {
      if (value != '') return value;
    });
    for (let i = 0; i < textArr.length; i++) {
      const textNode = tag == '#text' ? document.createElement('span') : document.createElement(tag);
      textNode.innerHTML = textArr[i];
      if (textArr[i] && !excludeTexts.includes(textArr[i])) {
        textNode.id = `ws${n}`;
        n++;
      }
      if (href) textNode.setAttribute('href', href);
      if (title) textNode.setAttribute('title', title);
      newNodes.appendChild(textNode);
      //add placeholder
      const placeholder = document.createElement('span');
      placeholder.innerHTML = ' ';
      newNodes.appendChild(placeholder);
    }
    return newNodes;
  }

  //highlight background
  for (let i = 0; i < n; i++) {
    const elm = document.getElementById(`ws${i}`);
    if (elm) elm.style.backgroundColor = `rgb(255,${age[i]},${age[i]})`;
  }
});