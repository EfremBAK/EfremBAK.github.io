

window.onload = function(){
    var okButton = document.getElementById("ok");
    okButton.onclick = hello;
    var okCheck = document.getElementById("bling");
    okCheck.onchange= sytleChange;
}
function hello(){
    //alert("hello world");
    var textArea = document.getElementById("note");
    var fonts = textArea.style.fontSize;
    textArea.style.fontSize=parseInt(fonts+2)+"pt";
}


function sytleChange(){
    var textArea = document.getElementById("note");
       if( textArea.style.fontWeight!="bold"){ 
        textArea.style.fontWeight="bold";
        textArea.style.color="green";
        textArea.style.textDecoration="underline";
    }
    else{
        textArea.style.fontWeight="normal";
        textArea.style.color="black";
        textArea.style.textDecoration="none";
    }
}
