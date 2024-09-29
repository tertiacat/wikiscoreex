const age = [22, 22, 40, 93, 192, 129, 129, 129, 19, 19, 19, 19, 19, 110, 110, 60, 129, 192, 145, 144, 144, 144, 144, 129, 129, 192, 192, 129, 129, 97, 97, 129, 129, 22, 22, 22, 128, 128, 128, 128, 129, 129, 129, 128, 128, 128, 129, 128, 129, 33, 33, 33, 33, 114, 114, 114, 192, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 22, 114, 114, 22, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 192, 114, 114, 22, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 50, 114, 114, 50, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 192, 192, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 68, 68, 114, 129, 91, 114, 91, 68, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 48, 48, 48, 48, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 60, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 46, 46, 46, 46, 46, 46, 46, 114, 114, 114, 114, 114, 114, 114, 114, 114, 46, 114, 114, 129, 114, 77, 114, 77, 77, 114, 114, 77, 77, 77, 22, 22, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 22, 22, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 120, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 86, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 86, 86, 86, 86, 86, 86, 22, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 22, 22, 22, 22, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 29, 86, 86, 22, 22, 86, 86, 86, 60, 24, 24, 86];

window.addEventListener("load", function () {
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
              if (textArr[k] != null && textArr[k] != '.' && textArr[k] != '.\n' && textArr[k] != ',') {
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
                console.log(abNode);
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
    elm.style.backgroundColor = `rgb(255,${255-age[i]},${255-age[i]})`;
  }



  /*
  for (let i = 0; i < j; i++) {
    const hoge = document.getElementById(`ws${i}`);
    hoge.style.backgroundColor = 'red';
  }
  */
});