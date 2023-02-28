window.onload = function (){
    document.getElementById("mainForm").onsubmit = function(e){
        var reqTitle = document.getElementsByName("title");
        var reqDesc = document.getElementsByName("description");
        var reqCheckBox = document.getElementsByName("accept").checked;
        var req = document.getElementsByClassName("required");

        if (reqTitle.value == undefined || reqTitle.value == "" || reqDesc.value == undefined || reqDesc.value == "" || reqCheckBox.checked == false){
            e.preventDefault();
            req[0].style.backgroundColor = "lightcoral";
            req[1].style.backgroundColor = "lightcoral";
        }

        if (req[0].value && req[0].value){
            document.getElementById("mainForm").submit();
        }
    }

    document.getElementsByClassName("required")[0].addEventListener("input", function(){
        document.getElementsByClassName("required")[0].style.background = "transparent";
    })

    document.getElementsByClassName("required")[1].addEventListener("input", function(){
        document.getElementsByClassName("required")[1].style.background = "transparent";
    })
    
    
}