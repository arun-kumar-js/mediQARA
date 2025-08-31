<?php
// PHP fallback for GoDaddy hosting
// This file ensures the React app loads properly

// Set proper headers
header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Sat, 26 Jul 1997 05:00:00 GMT');

// Read and output the HTML file
$htmlContent = file_get_contents('index.html');
echo $htmlContent;
?>
