<!DOCTYPE html>
<html>
<head>
    <title>TinyMCE Testbench: TNG</title>
    <!-- Favicon -->
    <link rel="icon" href="images/favicon-48x48.png" type="image/x-icon"/>

    <link rel="stylesheet" href="bootstrap-4.3.1/css/bootstrap.css" />
    <link rel="stylesheet" href="CSS/prism.css" type="text/css"/>
    <link rel="stylesheet" href="CSS/ephox.css" type="text/css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="bootstrap-4.3.1/js/bootstrap.js"></script>
    <script type="text/javascript" src="js/demo_jquery.js"></script>
    <script type="text/javascript" src="js/utilityFunctions.js"></script>
    <?php require './includes/utilityFunctions.php'; ?>

    <?php
    //Defaults for the Editor Options Checkboxes
    $powerpasteCB = (isset($_GET['pp']) && $_GET['pp'] == "0") ? false : true;
    $accessibilityCB = (isset($_GET['ac']) && $_GET['ac'] == "0") ? false : true;
    $uploadCB = (isset($_GET['ul']) && $_GET['ul'] == "0") ? false : true;
    $mentionsCB = (isset($_GET['am']) && $_GET['am'] == "0") ? false : true;
    $moxiemanagerCB = (isset($_GET['mm']) && $_GET['mm'] == "0") ? false : true;
    $codemirrorCB = (isset($_GET['cm']) && $_GET['cm'] == "0") ? false : true;
    $permanentpenCB = (isset($_GET['pn']) && $_GET['pn'] == "0") ? false : true;
    $formatpainterCB = (isset($_GET['fp']) && $_GET['fp'] == "0") ? false : true;
    $checklistCB = (isset($_GET['cl']) && $_GET['cl'] == "0") ? false : true;
    $casechangeCB = (isset($_GET['cc']) && $_GET['cc'] == "0") ? false : true;
    $pageembedCB = (isset($_GET['pe']) && $_GET['pe'] == "0") ? false : true;

    $spellcheckCB = (isset($_GET['sp']) && $_GET['sp'] == "0") ? false : true;
    $linkcheckerCB = (isset($_GET['lc']) && $_GET['lc'] == "0") ? false : true;
    $mediaembedCB = (isset($_GET['me']) && $_GET['me'] == "0") ? false : true;
    $inlineEdit = (isset($_GET['iet']) && $_GET['iet'] == "1") ? true : false;
    $demoMode = (isset($_GET['dm']) && $_GET['dm'] == "1") ? true : false;
    // $demoMode = true;

    $formToInclude = './HTML/standardBody.html';
    // $formToInclude = './HTML/standardBodyFullPage.html';
    // $formToInclude = './HTML/standardBody-wordpress.html';

    if ($inlineEdit) {
        $formToInclude = './HTML/inlineBody.html';
    }

    //Empty the image upload directory so it never gets full of useless old images
    emptyPostedImagesDirectory(dirname(__FILE__) . '/postedImages/*');

    //Where will I find configuration files and TinyMCE executables?
    $editorParentDir = './editors';
    $editorParentUrl = 'editors';
    if ($inlineEdit) {
        $configParentDir = './configs_inline';
        $helperParentDir = './configs_inline/helpers';
    } else {
        $configParentDir = './configs';
        $helperParentDir = './configs/helpers';
    }

    $tinyDev = true;

    // Generate major version list from installed editors
    $editorMajorVersions = getEditorMajorVersions($editorParentDir);
    $editorMajorVersion = $editorMajorVersions[0];
    if (isset($_GET['emv']) && $_GET["emv"]) {
        $editorMajorVersion = $_GET["emv"];
    }

    // Need to set $editorVersion and $editorConfig for page to load properly
    if (array_key_exists("ev", $_GET)) {
        $editorVersion = $_GET["ev"];
        $tinyDev = $_GET["td"];
        $editorConfig = $_GET["ec"];
        $helperConfig = $_GET["hc"];

        //Find all TinyMCE versions
        $editorVersions = getEditorVersions($editorParentDir, $editorMajorVersion);
    } else {
        $editorConfig = "enterprise";
        $helperConfig = "enterprise";

        //Find all TinyMCE versions
        $editorVersions = getEditorVersions($editorParentDir, $editorMajorVersion);
        $editorVersion = $editorVersions[0];
    }
    //Find all configuration files for TinyMCE version
    $configVersions = getConfigFiles($configParentDir, $editorMajorVersion);
    $helperVersions = getConfigFiles($helperParentDir, $editorMajorVersion);

    //Create paths to the JS files needed as well as the appropriate configuration file
    $editorLibPath = $editorParentUrl . "/tinymce_" . $editorVersion . "/tinymce/tinymce.js";
    $editorConfigPath = $configParentDir . "/tinyconfig" . $editorMajorVersion . "_" . $editorConfig . ".js";
    $editorHelperPath = $configParentDir . "/helpers/tinyconfig" . $editorMajorVersion . "_" . $helperConfig . ".js";

    if ($editorMajorVersion === "4") {
      $checklistCB = false;
      $casechangeCB = false;
      $pageembedCB = false;
    }
    ?>

    <script type="text/javascript" src="js/demo_jquery.js"></script>
    <script type="text/javascript" src="js/prism.js"></script>
    <script src="<?php echo $editorLibPath ?>" type="text/javascript"></script>

    <?php
    //If we are not internet connected don't load the cloud code for Link Checker and Media Embeds
    //and disable those checkbox options by default.
    // $connected = false;
    $connected = @fsockopen("cloud.tinymce.com", 80);
    if ($connected){
        //Loading only the Media Embed and Link Checker from the Cloud server
        //84djod3btzdz93gbd4tqqyvvbpp3jar52s8n1mwvqm7vs2sr
        //xd07v20tr9lkq76touopi4qo1kid5364z39ztvhucpamw8hz
        echo('<script src="http://cloud.tinymce.com/stable/plugins.min.js?apiKey=84djod3btzdz93gbd4tqqyvvbpp3jar52s8n1mwvqm7vs2sr&powerpaste=sdk&a11ychecker=sdk&advcode=sdk&checklist=sdk&casechange=sdk&permanentpen=sdk&formatpainter=sdk&pageembed=sdk&mentions=sdk"></script>');
//        $cloud_connected = true;
        fclose($connected);
    }else{
//        $cloud_connected = false;
        $spellcheckCB = false;
        $linkcheckerCB = false;
        $mediaembedCB = false;
    }
    ?>
    <script type="text/javascript">
        var initHelperFound = false;
        var addPowerpaste = Boolean(<?php echo $powerpasteCB ?>);
        var addAccessibility = Boolean(<?php echo $accessibilityCB ?>);
        var addSpellcheck = Boolean(<?php echo $spellcheckCB ?>);
        var addImageUpload = Boolean(<?php echo $uploadCB ?>);
        var addMentions = Boolean(<?php echo $mentionsCB ?>);
        var addMoxiemanager = Boolean(<?php echo $moxiemanagerCB ?>);
        var addCodemirror = Boolean(<?php echo $codemirrorCB ?>);
        var addPermanentpen = Boolean(<?php echo $permanentpenCB ?>);
        var addFormatpainter = Boolean(<?php echo $formatpainterCB ?>);
        var addChecklist = Boolean(<?php echo $checklistCB ?>);
        var addCasechange = Boolean(<?php echo $casechangeCB ?>);
        var addPageembed = Boolean(<?php echo $pageembedCB ?>);
        var addLinkchecker = Boolean(<?php echo $linkcheckerCB ?>);
        var addMediaembed = Boolean(<?php echo $mediaembedCB ?>);
        var loadScriptsParameters = {
            helperScriptPath: '<?php echo substr($editorHelperPath, 1); ?>',
            configScriptPath: '<?php echo substr($editorConfigPath, 1) ?>',
            isInline: Boolean(<?php echo $inlineEdit ?>)
        }
    </script>
</head>

<body onload="loadScripts(loadScriptsParameters)">

  <header class="navbar navbar-dark bg-primary fixed-top">
      <span class="title navbar-brand">TinyMCE <em>THE NEXT GENERATION</em> - v<?php echo $editorVersion ?></span>
      <div class="form-inline">
        <div class="input-group" style="<?php if ($demoMode) echo 'display:none;'?>">
          <div class="input-group-prepend">
            <label class="input-group-text" for="slReleaseNumber">Version: </label>
          </div>
          <select name="slReleaseNumber" id="slReleaseNumber" class="custom-select custom-select-lg">
            <?php foreach ($editorMajorVersions as $thisMajorVersion) { ?>
              <option value="<?php echo $thisMajorVersion ?>"
                <?php if ($thisMajorVersion === $editorMajorVersion) echo "selected" ?> ><?php echo ucwords($thisMajorVersion) ?>
              </option>
            <?php } ?>
          </select>
          <input class="ml-3 btn btn-secondary" type="submit" value="Change" onclick="changeRelease(); return false;">
      </div>
    </div>
  </header>

  <div class="main container-fluid">
  <div class="editor-config">
    <form onsubmit="preprocess()"  method="post" name="VersionControlForm" id="VersionControlForm" action="postRedirector.php">
      <input type="hidden" name="cbPowerpaste" id="cbPowerpaste"/>
      <input type="hidden" name="cbAccessibility" id="cbAccessibility"/>
      <input type="hidden" name="cbSpellcheck" id="cbSpellcheck"/>
      <input type="hidden" name="cbUpload" id="cbUpload"/>
      <input type="hidden" name="cbMentions" id="cbMentions"/>
      <input type="hidden" name="cbMoxiemanager" id="cbMoxiemanager"/>
      <input type="hidden" name="cbCodemirror" id="cbCodemirror"/>
      <input type="hidden" name="cbPermanentPen" id="cbPermanentPen"/>
      <input type="hidden" name="cbFormatpainter" id="cbFormatpainter"/>
      <input type="hidden" name="cbChecklist" id="cbChecklist"/>
      <input type="hidden" name="cbCasechange" id="cbCasechange"/>
      <input type="hidden" name="cbPageembed" id="cbPageembed"/>
      <input type="hidden" name="cbLinkchecker" id="cbLinkchecker"/>
      <input type="hidden" name="cbMediaembed" id="cbMediaembed"/>
      <input type="hidden" name="releaseNumber" id="releaseNumber"/>
      <input type="hidden" name="releaseChange" id="releaseChange"/>
      <input type="hidden" name="scToggle" id="scToggle" value="ayt"/>
      <input type="hidden" name="inlineEditToggle" id="inlineEditToggle" value="<?php echo (($inlineEdit) ? '1' : '0') ?>"/>
      <input type="hidden" name="inlineEditButtonClicked" id="inlineEditButtonClicked" value="false"/>
      <input type="hidden" name="demoMode" id="demoMode" value="<?php echo (($demoMode) ? '1' : '0') ?>"/>

      <span id="bottomSelectOptions" style="<?php if ($demoMode) echo 'display:none;' ?>">
        <div class="row">
          <div class="editor-config-options col-md-10">
            <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="editorVersion">Minor Version: </label>
                  </div>
                  <select class="custom-select" name="editorVersion" id="editorVersion">
                    <?php foreach ($editorVersions as $version) { $name = str_replace("_", ".", $version); ?>
                      <option value="<?php echo $version ?>" <?php if ($version === $editorVersion) echo "selected" ?> >
                        <?php echo $name ?>
                      </option>
                    <?php } ?>
                  </select>
                </div>

            <div class="input-group">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="editorHelper">Helper: </label>
                </div>
                <select class="custom-select" name="editorHelper" id="editorHelper">
                  <?php foreach ($helperVersions as $thisVersion) { ?>
                    <option value="<?php echo $thisVersion ?>" <?php if ($thisVersion === $helperConfig) echo "selected" ?> >
                      <?php echo ucwords($thisVersion) ?>
                    </option>
                  <?php } ?>
                </select>
              </div>

            <div class="input-group">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="editorConfig">Configuration: </label>
                </div>
                <select class="custom-select" name="editorConfig" id="editorConfig">
                  <?php foreach ($configVersions as $thisVersion) { ?>
                    <option value="<?php echo $thisVersion ?>" <?php if ($thisVersion === $editorConfig) echo "selected" ?> >
                      <?php echo ucwords($thisVersion) ?>
                    </option>
                  <?php } ?>
                </select>
              </div>

            <div class="custom-control custom-switch pt-1">
                <input
                name="tinyDev"
                class="custom-control-input"
                type="checkbox"
                id="tinyDev"
                value="true"
                <?php if ($tinyDev) echo "checked" ?> >
                <label class="custom-control-label" for="tinyDev">Dev</label>
              </div>
          </div>

          <div class="col-md-2">
            <input class="btn btn-info btn-block reload-btn" type="submit" name="configSubmitButton" value="Reload With New Settings">
          </div>

        </div>
      </span>
    </form>
  </div>

  <div class="editor row">
        <div class="col-md-10">
            <form method="POST" name="MainForm" id="MainForm" action="#">
                <?php require $formToInclude; ?>
            </form>
        </div>

        <div class="controls col-md-2" id="rightCol">
          <div class="form-group">
            <h5>
                SDK Services
            </h5>
            <div class="plugins">
              <div class="custom-control custom-switch">
                <input
                  name="ecoPowerpaste"
                  class="custom-control-input ecoPowerpaste"
                  type="checkbox"
                  id="pptoggle"
                  <?php if ($powerpasteCB) echo "checked" ?>>
                <label class="custom-control-label" for="pptoggle">PowerPaste</label>
              </div>

              <div class="custom-control custom-switch">
                <input
                  name="ecoAccessibility"
                  class="custom-control-input ecoAccessibility"
                  type="checkbox"
                  id="actoggle"
                  <?php if ($accessibilityCB) echo "checked" ?>>
                <label class="custom-control-label" for="actoggle">Accessibility Checker</label>
              </div>

              <div class="custom-control custom-switch">
                <input
                  name="ecoUpload"
                  class="custom-control-input ecoUpload"
                  type="checkbox"
                  id="ultoggle"
                  <?php if ($uploadCB) echo "checked" ?>>
                <label class="custom-control-label" for="ultoggle">Upload Images</label>
              </div>

              <div class="custom-control custom-switch">
                <input
                  name="ecoMentions"
                  class="custom-control-input ecoMentions"
                  type="checkbox"
                  id="amtoggle"
                  <?php if ($mentionsCB) echo "checked" ?>>
                <label class="custom-control-label" for="amtoggle">@Mentions</label>
              </div>

              <div class="custom-control custom-switch">
                <input
                  name="ecoMoxiemanager"
                  class="custom-control-input ecoMoxiemanager"
                  type="checkbox"
                  id="mmtoggle"
                  <?php if ($moxiemanagerCB) echo "checked" ?>>
                <label class="custom-control-label" for="mmtoggle">Moxie Manager</label>
              </div>

              <div class="custom-control custom-switch">
                <input
                  name="ecoCodemirror"
                  class="custom-control-input ecoCodemirror"
                  type="checkbox"
                  id="cmtoggle"
                  <?php if ($codemirrorCB) echo "checked" ?>>
                <label class="custom-control-label" for="cmtoggle">Advanced Code</label>
              </div>

              <div class="custom-control custom-switch">
                <input
                  name="ecoPermanentPen"
                  class="custom-control-input ecoPermanentPen"
                  type="checkbox"
                  id="pntoggle"
                  <?php if ($permanentpenCB) echo "checked" ?>>
                <label class="custom-control-label" for="pntoggle">Permanent Pen</label>
              </div>

              <div class="custom-control custom-switch">
                <input
                  name="ecoFormatpainter"
                  class="custom-control-input ecoFormatpainter"
                  type="checkbox"
                  id="fptoggle"
                  <?php if ($formatpainterCB) echo "checked" ?>>
                <label class="custom-control-label" for="fptoggle">Format Painter</label>
              </div>

              <div class="custom-control custom-switch">
                <input
                  name="ecoChecklist"
                  class="custom-control-input ecoChecklist"
                  type="checkbox"
                  id="cltoggle"
                  <?php if ($editorMajorVersion === "4") echo 'disabled=""' ?>
                  <?php if ($checklistCB) echo "checked" ?>>
                <label class="custom-control-label" for="cltoggle">Checklist</label>
              </div>

              <div class="custom-control custom-switch">
                <input
                name="ecoCasechange"
                class="custom-control-input ecoCasechange"
                type="checkbox"
                id="cctoggle"
                <?php if ($editorMajorVersion === "4") echo 'disabled=""' ?>
                <?php if ($casechangeCB) echo "checked" ?>>
                <label class="custom-control-label" for="cctoggle">Case Change</label>
              </div>

              <div class="custom-control custom-switch">
                <input
                  name="ecoPageembed"
                  class="custom-control-input ecoPageembed"
                  type="checkbox"
                  id="petoggle"
                  <?php if ($editorMajorVersion === "4") echo 'disabled=""' ?>
                  <?php if ($pageembedCB) echo "checked" ?>>
                <label class="custom-control-label" for="petoggle">Page Embed</label>
              </div>
            </div>

            <h5>
                Cloud Services
            </h5>
            <div class="plugins">
              <div class="custom-control custom-switch">
                <input
                  name="ecoSpellcheck"
                  class="custom-control-input ecoSpellcheck"
                  type="checkbox"
                  id="sctoggle"
                  <?php if ($connected === false) echo 'disabled=""' ?>

                  <?php if ($spellcheckCB) echo "checked" ?>>
                <label class="custom-control-label" for="sctoggle">Spell Checker</label>
              </div>

              <div class="custom-control custom-switch">
                <input
                  name="ecoLinkchecker"
                  class="custom-control-input ecoLinkchecker"
                  type="checkbox"
                  id="lctoggle"
                  <?php if ($connected === false) echo 'disabled=""' ?>
                  <?php if ($linkcheckerCB) echo "checked" ?>>
                <label class="custom-control-label" for="lctoggle">Link Checker</label>
              </div>

              <div class="custom-control custom-switch">
                <input
                  name="ecoMediaembed"
                  class="custom-control-input ecoMediaembed"
                  type="checkbox"
                  id="metoggle"
                  <?php if ($connected === false) echo 'disabled=""' ?>

                  <?php if ($mediaembedCB) echo "checked" ?>>
                <label class="custom-control-label" for="metoggle">Media Embed</label>
              </div>
            </div>
          </div>

          <div class="form-group">

          <input class="btn btn-primary btn-block" type="submit" value="Load A11Y"
                 onclick="loadA11Y(tinymce.activeEditor); return false;"/>

          <input class="btn btn-primary btn-block" type="submit" value="Spelling Toggle"
                 onclick="toggleSpellchecker(); return false;"/>

          <input class="btn btn-primary btn-block" type="submit" value="Inline Toggle"
                 onclick="inlineEditToggle(); return false;"/>
        </div>

      </div>

    </div>
  </div>
</div>
</body>
</html>
