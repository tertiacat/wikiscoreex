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
        } else if (node.nodeName == 'A' || node.nodeName == 'B' || node.nodeName == 'I') {
          const abNode = node.cloneNode(node);
          if (node.nodeName == 'A' || node.nodeName == 'B') {
            abNode.id = `ws${j}`;
            j++;
            newNodes.appendChild(abNode);
          } else {
            if (abNode.childNodes[0].nodeName == 'A') abNode.childNodes[0].id = `ws${j}`;
            else abNode.id = `ws${j}`;
            j++;
            newNodes.appendChild(abNode);
          }
          const placeholder = document.createElement('span');
          placeholder.innerHTML = ' ';
          newNodes.appendChild(placeholder);
        }
      }
      mainText[i].replaceWith(newNodes);
    }
  }
  //highlight background
  /*
  for (let i = 0; i < j; i++) {
    const hoge = document.getElementById(`ws${i}`);
    hoge.style.backgroundColor = 'red';
  }
  */
});