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
