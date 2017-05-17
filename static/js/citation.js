// use http://jquery.malsup.com/form/#api to submit form
function initializeBot(element){
    console.log($(element).formSerialize());    // malsup is blocked
    $.get('citationbot.php?URL='+$(element).formSerialize()+"&type="+element.id,function(data){
            var citationdata = JSON.parse(data);
            $.get('loadtmp.php',{'tmp':'Citation/fullCitation'},function(data){
                    var htmltmp = data;
                    var par = element.parentElement;
                    par.removeChild(element);   // Delete urlCitation
                    par.appendChild(string2element(htmltmp));   // Add fullCitation
                    $(par.lastChild).attr("id",element.id);
                    // Set initial values 
                    for(i in citationdata){
                        $(par.lastChild).find("input#"+i).attr("value",citationdata[i]);
                    }
                    var form = par.lastChild;
                    var formLength = 3;
                    $(form).submit(function(){  // Generate citation
                        // console.log("Start to bind");
                        if(form.childNodes.length != formLength){  // Resubmit
                                // console.log("Resubmit");
                                form.removeChild(form.lastChild);
                                // Clear citation
                            }
                        var citationtext = "";
                        switch (form.id) {
                            case 'MLA': // SHould not use citationdata
                            // TODO: MLA, APA citation format and then we are done!
                                citationtext += $(form).find("input#author").attr("value")+". ";
                                citationtext += "\""+$(form).find("input#article").attr("value")+"\" ";
                                citationtext += "<i>"+$(form).find("input#publisher").attr("value")+".</i> ";
                                citationtext += $(form).find("input#sitename").attr("value")+", ";
                                citationtext += $(form).find("input#pubdate").attr("value")+". Web. ";
                                citationtext += $(form).find("input#accdate").attr("value")+".";
                                // citationtext = $(par.lastChild).find("input#author").attr("value");
                                // console.log("Detect");
                                // code
                                break;
                            case 'APA':
                                citationtext += $(form).find("input#author").attr("value")+". ";
                                citationtext += "("+$(form).find("input#pubdate").attr("value")+"). ";
                                citationtext += "In <i>"+$(form).find("input#publisher").attr("value")+".</i> ";
                                citationtext += "Retrieved "+$(form).find("input#accdate").attr("value")+", ";
                                citationtext += "from "+$(form).find("input#url").attr("value");
                                break;
                            default:
                                citationtext = "Still under develop"
                                // code
                        }
                        $(par.lastChild).append("<p><h3>Please copy me</h3>"+citationtext+"</p>");   // Place citation inside the form
                        return false;   // Prohibit submit
                    });
                    $(par.lastChild).slideToggle('slow');
                    
                    
                });
            console.log(citationdata['url'])    // Load fullCitation tmp
        });
    // 向bot发送url; Get JSON
    // console.log(result);
    // replace citation 
    // ajax生成citation(可能在不同的函数)
    
    /*issues: 
        1. Regenerate 时不能消去上一个citation
        2. MLA <=> APA 转换
    
    */
}
    