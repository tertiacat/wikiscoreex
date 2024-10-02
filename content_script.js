const age = [253,213,253,256,255,255,255,145,145,145,145,145,255,255,241,255,256,255,255,255,255,255,255,255,256,256,255,255,254,254,255,255,156,156,156,255,255,255,255,255,255,255,255,255,255,255,255,255,197,197,197,197,255,255,255,256,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,156,255,255,156,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,256,255,255,156,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,230,255,255,230,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,256,256,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,246,246,255,255,253,255,253,246,255,255,255,255,255,255,255,255,255,255,255,227,227,227,227,255,255,255,255,255,255,255,255,255,255,255,255,241,255,255,255,255,255,255,255,255,255,255,224,224,224,224,224,224,224,255,255,255,255,255,255,255,255,255,224,255,255,255,255,250,255,250,250,255,255,250,250,250,156,156,255,255,255,255,255,255,255,255,255,255,255,255,156,156,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,252,255,255,255,255,255,255,255,255,255,255,255,252,252,252,252,252,252,156,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,156,156,156,156,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,183,252,252,156,156,252,252,252,241,166,166
 ];

window.addEventListener("load", () => {
  const parentNode = document.getElementsByClassName('mw-content-ltr')[0];
  const mainText = parentNode.children;
  let j = 0;
  for (let i = 0; i < mainText.length; i++) {
    if (mainText[i].nodeName == 'P') {
      const nodes = mainText[i].childNodes;
      const newNodes = document.createElement('p');
      for (node of nodes) {
        if (node.nodeName == '#text') {
          if (node.nodeValue != null) {
            let textArr = node.nodeValue.split(' ');
            textArr = textArr.filter((value) => {
              if (value != '') return value;
            });
            for (let k = 0; k < textArr.length; k++) {
              const textNode = document.createElement('span');
              textNode.innerHTML = textArr[k];
              if (textArr[k] != null && textArr[k] != '.' && textArr[k] != '.\n' && textArr[k] != ',' && textArr[k] != "'" && textArr[k] != '?' && textArr[k] != '!') {
                textNode.id = `ws${j}`;
                j++;
              }
              newNodes.appendChild(textNode);
              const placeholder = document.createElement('span');
              placeholder.innerHTML = ' ';
              newNodes.appendChild(placeholder);
            }
          }
        } else if (node.nodeName == 'A' || node.nodeName == 'B' || node.nodeName == 'I') {
          const abNode = node.cloneNode(true);
          if (node.nodeName == 'A') {
            const spanNode = document.createElement('span');
            abNode.innerHTML.split(' ').forEach(elm => {
              let newAnchor = document.createElement('a');
              newAnchor.href = abNode.href;
              newAnchor.innerHTML = elm;
              newAnchor.id = `ws${j}`;
              j++;
              spanNode.appendChild(newAnchor);
              const placeholder = document.createElement('span');
              placeholder.innerHTML = ' ';
              spanNode.appendChild(placeholder);
            });
            newNodes.appendChild(spanNode);
          } else if (node.nodeName == 'B') {
            const spanNode = document.createElement('span');
            abNode.innerHTML.split(' ').forEach(elm => {
              let newBold = document.createElement('b');
              newBold.innerHTML = elm;
              newBold.id = `ws${j}`;
              j++;
              spanNode.appendChild(newBold);
              const placeholder = document.createElement('span');
              placeholder.innerHTML = ' ';
              spanNode.appendChild(placeholder);
            });
            newNodes.appendChild(spanNode);
          } else {
            if (abNode.childNodes[0].nodeName == 'A'){
              const spanNode = document.createElement('I');
              abNode.childNodes[0].innerHTML.split(' ').forEach(elm => {
                let newAnchor = document.createElement('a');
                newAnchor.href = abNode.childNodes[0].href;
                newAnchor.innerHTML = elm;
                newAnchor.id = `ws${j}`;
                j++;
                spanNode.appendChild(newAnchor);
                const placeholder = document.createElement('span');
                placeholder.innerHTML = ' ';
                spanNode.appendChild(placeholder);
              });
              newNodes.appendChild(spanNode);
            } else{ 
              abNode.id = `ws${j}`;
              j++;
              newNodes.appendChild(abNode);
            }
          }
          const placeholder = document.createElement('span');
          placeholder.innerHTML = ' ';
          newNodes.appendChild(placeholder);
        }
      }
      mainText[i].replaceWith(newNodes);
    } else if (mainText[i].nodeName == 'DIV') {
      for (childnode of mainText[i].childNodes) {
        if (childnode.nodeName == 'H2') {
          const nodes = childnode.childNodes;
          const newNodes = document.createElement('H2');
          for (node of nodes) {
            if (node.nodeName == '#text') {
              if (node.nodeValue != null) {
                let textArr = node.nodeValue.split(' ');
                textArr = textArr.filter((value) => {
                  if (value != '') return value;
                });
                for (let k = 0; k < textArr.length; k++) {
                  const textNode = document.createElement('span');
                  textNode.innerHTML = textArr[k];
                  if (textArr[k] != null && textArr[k] != '.' && textArr[k] != ',') {
                    textNode.id = `ws${j}`;
                    j++;
                  }
                  newNodes.appendChild(textNode);
                  const placeholder = document.createElement('span');
                  placeholder.innerHTML = ' ';
                  newNodes.appendChild(placeholder);
                }
              }
            }
          }
          childnode.replaceWith(newNodes);
        }
      }
    } else if (mainText[i].nodeName == 'UL') {
      for (childnode of mainText[i].childNodes) {
        if (childnode.nodeName == 'LI') {
          const nodes = childnode.childNodes;
          const newNodes = document.createElement('LI');
          for (node of nodes) {
            if (node.nodeName == '#text') {
              if (node.nodeValue != null) {
                let textArr = node.nodeValue.split(' ');
                textArr = textArr.filter((value) => {
                  if (value != '') return value;
                });
                for (let k = 0; k < textArr.length; k++) {
                  const textNode = document.createElement('span');
                  textNode.innerHTML = textArr[k];
                  if (textArr[k] != null && textArr[k] != '.' && textArr[k] != '.\n' && textArr[k] != ',' && textArr[k] != "'" && textArr[k] != '?' && textArr[k] != '!') {
                    textNode.id = `ws${j}`;
                    j++;
                  }
                  newNodes.appendChild(textNode);
                  const placeholder = document.createElement('span');
                  placeholder.innerHTML = ' ';
                  newNodes.appendChild(placeholder);
                }
              }
            } else if (node.nodeName == 'A' || node.nodeName == 'I') {
              const aNode = node.cloneNode(node);
              if (node.nodeName == 'A') {
                const spanNode = document.createElement('span');
                aNode.innerHTML.split(' ').forEach(elm => {
                  let newAnchor = document.createElement('a');
                  newAnchor.href = aNode.href;
                  newAnchor.innerHTML = elm;
                  newAnchor.id = `ws${j}`;
                  j++;
                  spanNode.appendChild(newAnchor);
                  const placeholder = document.createElement('span');
                  placeholder.innerHTML = ' ';
                  spanNode.appendChild(placeholder);
                });
                newNodes.appendChild(spanNode);
              } else {
                if (aNode.childNodes[0].nodeName == 'A'){
                  const spanNode = document.createElement('I');
                  aNode.childNodes[0].innerHTML.split(' ').forEach(elm => {
                    let newAnchor = document.createElement('a');
                    newAnchor.href = aNode.childNodes[0].href;
                    newAnchor.innerHTML = elm;
                    newAnchor.id = `ws${j}`;
                    j++;
                    spanNode.appendChild(newAnchor);
                    const placeholder = document.createElement('span');
                    placeholder.innerHTML = ' ';
                    spanNode.appendChild(placeholder);
                  });
                  newNodes.appendChild(spanNode);
                } else{
                  aNode.id = `ws${j}`;
                  j++;
                  newNodes.appendChild(aNode);
                }
              }
              const placeholder = document.createElement('span');
              placeholder.innerHTML = ' ';
              newNodes.appendChild(placeholder);
            }
          }
          childnode.replaceWith(newNodes);
        }
      }
    }
  }
  //highlight background
  for (let i = 0; i < j; i++) {
    const elm = document.getElementById(`ws${i}`);
    elm.style.backgroundColor = `rgb(255,${age[i]},${age[i]})`;
  }



  /*
  for (let i = 0; i < j; i++) {
    const hoge = document.getElementById(`ws${i}`);
    hoge.style.backgroundColor = 'red';
  }
  */
});