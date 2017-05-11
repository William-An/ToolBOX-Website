function selectButton(element){
    var nodelist = element.parentElement.parentElement.children; // Get button list
    for(var i = 0; i < nodelist.length; i++){
        nodelist[i].children.item(0).setAttribute("class","button");
    }
    element.setAttribute("class","button special");
}
/*function loadTemplate(element,id){
    var tmp = document.querySelector('#'+id);
    var par = element.parentElement.parentElement.parentElement.parentElement;
    try{
        // console.log(par.contains(tmp.content.cloneNode(true))); // Always return false because (tmp.content.cloneNode(true) hasn't loaded in DOM
        var lis = tmp.content.cloneNode(true).children;
        for(var i =0; i < lis.length; i++){
            par.removeChild(par.querySelector(lis[i].tagName));
        }
        
    }
    catch(err){
        console.log(err);
    }
    par.appendChild(tmp.content.cloneNode(true));
    par.lastChild.textContent=element.textContent;
    console.log(par.childNodes)
}*/
<<<<<<< HEAD
function loadTemplate(element,id){
    var par = element.parentElement.parentElement.parentElement.parentElement;  // a li ul div
    var httpxml=GetXmlHttpObject();
    if (httpxml==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    var url = "citaition?tmp="+id;
    xmlHttp.open("GET",url,true)
    xmlHttp.send(null)
    par.appendChild(xmlHttp.responseText);
    console.log("Loaded template");
    
}
function GetXmlHttpObject()
{
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
=======

>>>>>>> loadhtmltemplate

