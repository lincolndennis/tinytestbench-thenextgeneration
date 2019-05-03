<?php
//Function to compare TinyMCE versions
function cmp($a_string, $b_string) {
    $a = explode(".", $a_string);
    $b = explode(".", $b_string);
    foreach ($a as &$component) {
        $component *= 1;  //Converts this to a number removing leading zeros from each version component
    }
    foreach ($b as &$component) {
        $component *= 1;  //Converts this to a number removing leading zeros from each version component
    }
    if ($a[0] != $b[0]) {
        return ($a[0] < $b[0]) ? 1 : -1;
    } elseif ($a[1] != $b[1]) {
        return ($a[1] < $b[1]) ? 1 : -1;
    } elseif ($a[2] != $b[2]) {
        return ($a[2] < $b[2]) ? 1 : -1;
    } elseif ($a[3] != $b[3]) {
        return ($a[3] < $b[3]) ? 1 : -1;
    }
    return 0;
}
function getEditorVersions($parentDir, $majorVersion) {
    $files = scandir($parentDir, 1);
    $tmpVersionArray = array();
    foreach ($files as $filename) {
        //calculate length of prefix as opposed to hard code "4" in string manipulation
        if (strpos($filename,"tinymce_") === 0 ) {
            $version = substr ($filename, 8);
            if (strpos($version,$majorVersion) === 0 ){

                $tmpVersionArray[] = $version;
            }
        }
    }
    usort($tmpVersionArray, "cmp");
    return $tmpVersionArray;
}
function getEditorMajorVersions($parentDir) {
    $files = scandir($parentDir, 1);
    $tmpVersionArray = array();
    foreach ($files as $filename) {
        //calculate length of prefix as opposed to hard code "4" in string manipulation
        if (strpos($filename,"tinymce_") === 0 ) {
            $version = substr ($filename, 8, 1);
            if (!in_array($version, $tmpVersionArray)) {
              $tmpVersionArray[] = $version;
            }
        }
    }
    return $tmpVersionArray;
}
function getConfigFiles($parentDir, $majorVersion) {
    $files = scandir($parentDir);
    $tmpConfigArray = array();
    foreach ($files as $filename) {
        //calculate length of prefix as opposed to hard code "4" in string manipulation
        if (strpos($filename,"tinyconfig". $majorVersion . "_") === 0 ) {
            $config = substr ($filename, 12);
            $config = str_replace ( ".js" , "" , $config );
            $tmpConfigArray[] = $config;
        }
    }
    return $tmpConfigArray;
}

function emptyPostedImagesDirectory($directory) {
    $files = glob($directory); // get all file names
    foreach($files as $file){ // iterate files
        if(is_file($file))
            unlink($file); // delete file
        }
    }
?>
