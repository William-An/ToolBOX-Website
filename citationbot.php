<?php
    include_once("simple_html_dom.php");
    $url = $_GET['URL'];
    $url = substr($url,4);
    $result = array('url'=>$url,'article'=>'','author'=>'','sitename'=>'','publisher'=>'','pubdate'=>'','accdate'=>'');   // Initialize result array
    $html = file_get_html($url);
    // Return list of contents
    $result['article'] = $html->find('title',0)->innertext; // Get artcile title
    $result['author'] = $html->find('meta[name="author"]',0)->content;    // Get author's name
    $result['sitename'] = $html->find('meta[property="og:site_name"]',0)->content;
    $result['publisher'] = $html->find('meta[property="og:site_name]',0)->content;
    $result['pubdate'] = substr($html->find('meta[property="article:published_time"]',0)->content,0,10);
    $result['accdate'] = date('Y-m-d');
    echo json_encode($result);
    
?>