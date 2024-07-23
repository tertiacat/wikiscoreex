window.addEventListener("load", function () {
  const parentNode = document.getElementsByClassName('mw-content-ltr')[0];
  let mainText = parentNode.children;
  let done = false;
  let i = 0;
  while(!done){
    if(i < mainText.length){
      if(mainText[i].nodeName == 'P'){
        mainText[i].remove();
        //write division code here
      }else{
        i++;
      }
    }else{
      done = true;
    }
  }
});