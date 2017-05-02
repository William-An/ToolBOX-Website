function selectButton(it){
    var nodelist = it.parentElement.parentElement.children; // Get button list
    for(var i = 0; i < nodelist.length; i++){
        nodelist[i].children.item(0).setAttribute("class","button");
    }
    it.setAttribute("class","button special");
    var citationform = document.getElementById("citationform"); // Get citationform
    switch (it.textContent) {
        case 'MLA': // Switch to using template
            citationform.innerHTML="<h2>CitationBox</h2>";
            break;
        case 'APA':
            citationform.innerHTML="<h2>CitationBox</h2>";
            break;
        case 'Wiki':
            citationform.innerHTML="<h2>CitationBox</h2>";
            break;
        default:
            // code
    }
}
