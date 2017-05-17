// use http://jquery.malsup.com/form/#api to submit form
function initializeBot(element){
    console.log($(element).formSerialize());    // malsup is blocked
    $.get('citationbot.php?URL='+$(element).formSerialize(),function(data){
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
                    var submitButton = par.lastChild;
                    var formLength = 3;
                    $(submitButton).submit(function(){  // Generate citation
                        // console.log("Start to bind");
                        if(par.lastChild.childNodes.length != formLength){  // Resubmit
                                // console.log("Resubmit");
                                par.lastChild.removeChild(par.lastChild.lastChild);
                                // Clear citation
                            }
                        var citationtext = "";
                        switch (par.lastChild.id) {
                            case 'MLA': // SHould not use citationdata
                            // TODO: MLA, APA citation format and then we are done!
                            
                                for(var i in $(par.lastChild).find("input").toArray()){
                                    citationtext += $(par.lastChild).find("input")[i].value+" ";
                                }
                                // citationtext = $(par.lastChild).find("input#author").attr("value");
                                // console.log("Detect");
                                // code
                                break;
                            case 'APA':
                                break;
                            default:
                                citationtext = "Still under develop"
                                // code
                        }
                        $(par.lastChild).append("<p>Please copy me<br>"+citationtext+"</p>");   // Place citation inside the form
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
    