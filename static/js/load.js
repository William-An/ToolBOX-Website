function loadTemplate(element,id){
    var par = element.parentElement.parentElement.parentElement.parentElement;  // a li ul div
    var httpxml=GetXmlHttpObject();
    if (httpxml==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url = "loadtmp.php?tmp="+id+"&t="+Math.random();
    httpxml.onreadystatechange=function()  // Call back function
       {
        if (httpxml.readyState==4 && httpxml.status==200)
          {
           var nodes = string2element(httpxml.responseText);
           // console.log(nodes); // First element in body
           nodes.id = element.textContent;
           if(par.querySelector(nodes.tagName) == null){
               console.log("First");
               par.appendChild(nodes);
               $(par.lastChild).slideToggle("slow");
           }
           else if (par.querySelector(nodes.tagName) != nodes){
                nodes.style.display='';
                $(par.lastChild).replaceWith(nodes);
           }
           $(par.lastChild).submit(function(){
               return false;
            });
            $(par.lastChild).reset(function(){
               $(par.lastChild).clearForm();
             });
           // console.log(nodes.id);
       }
       }
    httpxml.open("GET",url,true);
    httpxml.send(null);
}
function string2element(str){
    // console.log(str);
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    return doc.firstChild.lastChild.firstChild;
}
function GetXmlHttpObject(){
var xmlHttp=null;
try
 {
 // Firefox, Opera 8.0+, Safari
 xmlHttp=new XMLHttpRequest();
 }
catch (e)
 {
 // Internet Explorer
 try
  {
  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
  }
 catch (e)
  {
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 }
return xmlHttp;
}
