<?php

function kebabToCamelCase($string, $capitalizeFirstCharacter = false)
{

    $str = str_replace('-', '', ucwords($string, '-'));

    if (!$capitalizeFirstCharacter) {
        $str = lcfirst($str);
    }

    return $str;
}


$path="./src/svgs-opti";
$export=[];
$files = array_diff(scandir($path), array('.', '..'));
foreach ($files as $f){
    preg_match("#(.*).svg$#",$f,$m);
    $name=$m[1];
    $export[kebabToCamelCase($name)]=file_get_contents("$path/$f");
}
$fileContent=json_encode($export,JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);
ob_start();
?>
export default
<?php echo $fileContent;?>
<?php
$outputJS = ob_get_contents();
ob_end_clean();

header('Content-Type: application/javascript');

echo $outputJS;
file_put_contents("./lib/icons.js",$outputJS);
