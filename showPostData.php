<?php
    echo "POST DATA:<br />\n";
    if (isset($_POST) ) {
        foreach ($_POST as $key => $value) {
            echo "Key: $key; Value: $value<br />\n";
        }
    }
?>