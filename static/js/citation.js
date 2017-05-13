// use http://jquery.malsup.com/form/#api to submit form
function initializeBot(element){
    console.log($(element).formSerialize());    // malsup is blocked
    var result = $.get('citationbot.php?URL='+$(element).formSerialize());// 向bot发送url; Get JSON
    console.log(result);
    // replace citation 
    // ajax生成citation(可能在不同的函数)
}
    