# TinyMCE Testbench - The Next Generation!

## Purpose
This tool is used by the Client Services team (and others) to test support issues
in TinyMCE. In addition its used to demo TinyMCE to prospects.

## Key Files
`tinyindex.php` - the main page that is used to invoke the testbench.  It loads a variety of other PHP and JavaScript pages to perform much of the work.

`js/utilityFunctions.js` - functions that add the dynamic behaviors in the page when its loaded.

`includes/utilityFunctions.php` - functions that handle some of the PHP functions used in the testbench (e.g. building lists of files).

## Configuration and Helper Files
A `configuration` file is the main TinyMCE init that will be loaded for TinyMCE.  The
configuration file returns an array and (for inline editing) expects two different
configurations - one for the title and another for all the paragraphs/divs.

A `helper` file is JavaScript that the testbench uses to inject specific behavior into
the configuration file.  See the `initTiny` function in `utilityFunctions.js` for more
details on this.  Note there is a requirement for jQuery as I use `$.extend`.

## What goes in the `editors` folder?
This folder contains copies of TinyMCE. The folder names follow the pattern:

tinymce_`x.x.x`

For example:

`tinymce_4.3.8` or `tinymce_5.0.4`

The testbench uses the folder names to know a few details:

 * The major version of TinyMCE (e.g. 3 or 4)
 * The version number (e.g. 4.3.8) to show in the select list

The files for each editor version go inside each folder so the path
would end up like this for TinyMCE 4:

`editors/tinymce_4.3.8/tinymce/tinymce.js`

... and like this for TinyMCE 3:

`editors/tinymce_3.5.10/jscripts/tiny_mce/tiny_mce.js`

***The editor files are NOT in the Git repo in order to keep the
size of the repo reasonable.***
