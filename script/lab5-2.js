window.onload = function(){
    var elements = document.getElementsByTagName("*");
    
    for (var i = 1; i < elements.length; i++){
        if (elements[i].nodeType == 1){
            var txt = elements[i].tagName;
            var newNode = document.createTextNode(txt)
            elements[i].appendChild(newNode);

            elements[i].classList.add(".hoverNode");
            elements[i].className = "hoverNode";
            
            elements[i].style.backgroundColor = "yellow";

            elements[i].addEventListener("click", function(){
                alert("Tag Name: " + elements[i].tagName + " innerHTML: " + elements[i].innerHTML);
            })
           
        }
    }
}