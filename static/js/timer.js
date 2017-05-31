function timer(element){
    loadTemplate(element,"Timer/timer");
    $(element.parentNode).find("h1").text("30:00");
    //$(element).find("div#"+element.id).attr("style","display:''");
    
}