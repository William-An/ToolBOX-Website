<?php
    include_once("simple_html_dom.php");
    $url = $_GET['URL'];
    $html = file_get_html($url);
    $tmp = file_get_html()
    foreach($html->find('meta') as $metainfo){
        print $metainfo->content;
    }
    
?>