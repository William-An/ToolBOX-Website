<?php
    include_once('simple_html_dom.php');
    $tmp = $_GET['tmp'];    // Which template
    // $type = $_GET['type'];  // Type of citaition; Switch to JS
    $tmpfile = file_get_html("static/Template/".$tmp.".html");
    // $type=$tmpfile->id;
    echo $tmpfile;
?>
