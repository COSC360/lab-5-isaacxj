window.addEventListener('load', () => {
    var nodes = [...document.body.getElementsByTagName('*')];
    var parentInfo = [];
    var newNodes = [];
  
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeType === 3) {
        console.log(nodes[i].nodeName, nodes[i].nodeType)
      } else {
        newNodes[i] = nodes[i].appendChild(document.createElement('button'));
        newNodes[i].classList.add('hoverNode');
        parentInfo[i] = newNodes.innerHTML || nodes[i]?.innerHTML;
        newNodes[i].innerHTML = nodes[i].parentElement.tagName;
        newNodes[i].addEventListener('click', () => {
          window.alert('ID: ' + i.toString() + ", innerHTML: " + parentInfo[i]);
        })
      }
    }
  })