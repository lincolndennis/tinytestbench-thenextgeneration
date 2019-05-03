<?php
if ($_POST) {
   	if ($_POST['releaseChange']) {
   		$urlString = "?emv=" . $_POST['releaseNumber'];
   	} else {
		/*
			Toggling the editor mode inline or regular should reset all other settings
			to their defaults
		*/
		if ($_POST['inlineEditButtonClicked'] == "true") {
            $inlineEditToggle = ($_POST['inlineEditToggle'] == "false") ? 0 : 1;
            $demoMode = $_POST['demoMode'];
            $urlString = "?iet=" . $inlineEditToggle . "&dm=" . $demoMode;
		} else {
			$accessibilityCB = ($_POST['cbAccessibility'] == "false") ? 0 : 1;
			$powerpasteCB = ($_POST['cbPowerpaste'] == "false") ? 0 : 1;
			$spellcheckCB = ($_POST['cbSpellcheck'] == "false") ? 0 : 1;
			$uploadCB = ($_POST['cbUpload'] == "false") ? 0 : 1;
			$mentionsCB = ($_POST['cbMentions'] == "false") ? 0 : 1;
			$moxiemanagerCB = ($_POST['cbMoxiemanager'] == "false") ? 0 : 1;
			$codemirrorCB = ($_POST['cbCodemirror'] == "false") ? 0 : 1;
      $linkcheckerCB = ($_POST['cbLinkchecker'] == "false") ? 0 : 1;
      $permanentpenCB = ($_POST['cbPermanentPen'] == "false") ? 0 : 1;
      $formatpainterCB = ($_POST['cbFormatpainter'] == "false") ? 0 : 1;
      $checklistCB = ($_POST['cbChecklist'] == "false") ? 0 : 1;
      $casechangeCB = ($_POST['cbCasechange'] == "false") ? 0 : 1;
      $pageembedCB = ($_POST['cbPageembed'] == "false") ? 0 : 1;
      $mediaembedCB = ($_POST['cbMediaembed'] == "false") ? 0 : 1;
			$scToggle = $_POST['scToggle'];
			$inlineEditToggle = ($_POST['inlineEditToggle'] == 0) ? 0 : 1;
			$editorMajorVersion = $_POST['releaseNumber'];
			$editorVersion = $_POST["editorVersion"];
			$tinyDev = $_POST["tinyDev"];
			$editorConfig = urlencode($_POST["editorConfig"]);
			$helperConfig = urlencode($_POST["editorHelper"]);
			$demoMode = $_POST['demoMode'];

			$urlString = "?iet=" . $inlineEditToggle .
                "&pp=" . $powerpasteCB .
				        "&ac=" . $accessibilityCB .
                "&sp=" . $spellcheckCB .
				        "&ul=" . $uploadCB .
                "&am=" . $mentionsCB .
			          "&mm=" . $moxiemanagerCB .
                "&sct=" . $scToggle .
                "&cm=" . $codemirrorCB .
                "&pn=" . $permanentpenCB .
                "&fp=" . $formatpainterCB .
                "&cl=" . $checklistCB .
                "&cc=" . $casechangeCB .
                "&pe=" . $pageembedCB .
                "&emv=" . $editorMajorVersion .
                "&lc=" . $linkcheckerCB .
                "&me=" . $mediaembedCB .
                "&ev=" . $editorVersion .
                "&td=" . $tinyDev .
                "&ec=" . $editorConfig .
                "&hc=" . $helperConfig .
                "&dm=" . $demoMode;
		}
   	}

    // Redirect to page that posted to this script.
	header("Location: tinyindex.php" . $urlString);

   exit();
}
?>
