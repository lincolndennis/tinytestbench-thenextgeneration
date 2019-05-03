/*
    Scripts are loaded in sequence to allow for the helper variables and objects to be in place
    before we attempt to load & manipulate the configuration itself.
*/

// urlForPlugins is used in helpers to calculate the path for loading external plugins
var currentURL = window.location.toString().lastIndexOf('/');
var urlForPlugins = window.location.toString().substring(0, currentURL) + '/plugins/';
var initHelperFound = true;

function setupEditorHeight() {
    //Dynamically set the height of the DIV so that depending on screen resolution I don't have
    //to scroll to see the entire editor.
    var heightPct = $(window).height() * .55;
    var txtHeightPct = Math.round(heightPct) + "px";
    $("#area3").css({'height': txtHeightPct});
}
function setupSpellingButtonText() {
    var textForSpellingButton = 'Spell Checker';
    var scDialogFlag = document.location.href.indexOf("&sct=ayr");
    if (scDialogFlag == -1) {
        textForSpellingButton += ' (AYT)';
    } else {
        textForSpellingButton += ' (AYR)';
    }
    $('#spellCheckLabel').text(textForSpellingButton);
}

function loadScripts(loadScriptsParameters) {
    // console.log('hsp: ' + loadScriptsParameters.helperScriptPath);
    // console.log('csp: ' + loadScriptsParameters.configScriptPath);
    // console.log('isInline: ' + loadScriptsParameters.isInline);
    $.getScript("." + loadScriptsParameters.helperScriptPath)
        .done(function( script, textStatus ) {
            // console.log( "Load 1 was performed." );
            initHelperFound = true;
            initTiny(loadScriptsParameters.configScriptPath, loadScriptsParameters.isInline);
        })
        .fail(function( jqxhr, settings, exception ) {
            console.log('WARNING: could not load helper javascript file!');
            initTiny(loadScriptsParameters.configScriptPath, loadScriptsParameters.isInline);
        });
}
function initTiny(configScriptPath, isInline) {
    $.getScript("." + configScriptPath)
        .done(function(script, textStatus) {
            // console.log( "Load 2 was performed." );
            if (initHelperFound) {
                if (addPowerpaste && (typeof powerpaste !== 'undefined')) {
                    addEnterpriseOption(powerpaste, tinymceConfigs["0"]);
                } else {
                    addStandardPaste(tinymceConfigs["0"]);
                }
                if (addSpellcheck && (typeof spelling !== 'undefined')) addEnterpriseOption(spelling, tinymceConfigs["0"]);
                if (addAccessibility && (typeof accessibility !== 'undefined')) addEnterpriseOption(accessibility, tinymceConfigs["0"]);
                if (addImageUpload && (typeof imageUpload !== 'undefined')) addEnterpriseOption(imageUpload, tinymceConfigs["0"]);
                if (addMentions && (typeof mentions !== 'undefined')) addEnterpriseOption(mentions, tinymceConfigs["0"]);
                if (addMoxiemanager && (typeof moxiemanager !== 'undefined')) addEnterpriseOption(moxiemanager, tinymceConfigs["0"]);
                if (addCodemirror && (typeof codemirror !== 'undefined')) addEnterpriseOption(codemirror, tinymceConfigs["0"]);
                if (addPermanentpen && (typeof permanentpen !== 'undefined')) addEnterpriseOption(permanentpen, tinymceConfigs["0"]);
                if (addFormatpainter && (typeof formatpainter !== 'undefined')) addEnterpriseOption(formatpainter, tinymceConfigs["0"]);
                if (addChecklist && (typeof checklist !== 'undefined')) addEnterpriseOption(checklist, tinymceConfigs["0"]);
                if (addCasechange && (typeof casechange !== 'undefined')) addEnterpriseOption(casechange, tinymceConfigs["0"]);
                if (addPageembed && (typeof pageembed !== 'undefined')) addEnterpriseOption(pageembed, tinymceConfigs["0"]);
                if (addLinkchecker && (typeof linkchecker !== 'undefined')) addEnterpriseOption(linkchecker, tinymceConfigs["0"]);
                if (addMediaembed && (typeof mediaembed !== 'undefined')) addEnterpriseOption(mediaembed, tinymceConfigs["0"]);
            }
            tinymce.init(tinymceConfigs["0"]);
            if (isInline) {
                tinymce.init(tinymceConfigs["1"]);
            }
            setupEditorHeight();
            setupSpellingButtonText();
        })
        .fail(function( jqxhr, settings, exception ) {
            console.log('ERROR: could not load configuration script!');
            console.log('ERROR: ' + exception);
        });
}

function addStandardPaste(baseInit) {
    console.log('PowerPaste not selected; Using standard paste');
    baseInit.plugins[baseInit.plugins.length-1] += (" paste");
}

function addEnterpriseOption(option, baseInit) {
    //Load the appropriate plugin (assumes plugin is in the plugin folder within TinyMCE
    if (option.plugin) {
        baseInit.plugins[baseInit.plugins.length-1] += (" " + option.plugin);
    }
    //Add a button to the toolbar if the plugin needs a button
    if (option.toolbar) {
        baseInit.toolbar[option.toolbar.toolbarLocation] += " | " + option.toolbar.toolbarButton;
    }
    //Add relevant properties to the configuration for this plugin
    if (option.initParams) {
        $.extend(baseInit, option.initParams);
    }
    //Load an external plugin (as opposed to a plugin in the TinyMCE plugins folder
    //Used to load (at a minimum) MoxieManager so we don't have to install that in each
    //installation of TinyMCE.
    if (option.external) {
        //Check if we already have an "external_plugins" property on the configuration.  If we
        //do we need to merge these properties into the existing values.  If there is not an
        //external_plugins property on the configuration we create one.
        if (!baseInit.hasOwnProperty('external_plugins')) {
            $.extend(baseInit, option.external);
        } else {
            $.extend(baseInit.external_plugins, option.external.external_plugins);
        }
    }
}

function toggleSpellchecker() {
    var toggleValue = "ayt";
    // no value should become &sct=ayt
    if (document.location.href) {
        if ((document.location.href.indexOf("&sct=ayt") != -1) || (document.location.href.indexOf("&sct=") == -1)) {
            toggleValue = "ayr";
        }
    }
    document.forms['VersionControlForm']['scToggle'].value = toggleValue;
    preprocess();
    document.forms['VersionControlForm'].submit();
}

function inlineEditToggle() {
    var toggleValue = "false";
    // no value should become &iet=1 after toggling (no value is "false" for inline mode)
    if (document.location.href) {
        if (document.location.href.indexOf("?iet=") == -1) {  //no flag at all
            toggleValue = "true";
        } else if (document.location.href.indexOf("?iet=0") != -1) {  //currently in standard mode
            toggleValue = "true";
        }
    }
    // console.log('IE toggleValue' + toggleValue);
    document.forms['VersionControlForm']['inlineEditToggle'].value = toggleValue;
    document.forms['VersionControlForm']['inlineEditButtonClicked'].value = "true";
    preprocess();
    document.forms['VersionControlForm'].submit();
}


function changeRelease() {
    document.forms['VersionControlForm']['releaseNumber'].value = $('#slReleaseNumber').val();
    document.forms['VersionControlForm']['releaseChange'].value = "true";
    document.forms['VersionControlForm'].submit();
}
function preprocess() {
    // console.log('preprocess called!');
    document.forms['VersionControlForm']['releaseNumber'].value = $('#slReleaseNumber').val();
    document.forms['VersionControlForm']['cbPowerpaste'].value = $('.ecoPowerpaste').prop('checked');
    document.forms['VersionControlForm']['cbAccessibility'].value = $('.ecoAccessibility').prop('checked');
    document.forms['VersionControlForm']['cbSpellcheck'].value = $('.ecoSpellcheck').prop('checked');
    document.forms['VersionControlForm']['cbUpload'].value = $('.ecoUpload').prop('checked');
    document.forms['VersionControlForm']['cbMentions'].value = $('.ecoMentions').prop('checked');
    document.forms['VersionControlForm']['cbMoxiemanager'].value = $('.ecoMoxiemanager').prop('checked');
    document.forms['VersionControlForm']['cbCodemirror'].value = $('.ecoCodemirror').prop('checked');
    document.forms['VersionControlForm']['cbPermanentPen'].value = $('.ecoPermanentPen').prop('checked');
    document.forms['VersionControlForm']['cbFormatpainter'].value = $('.ecoFormatpainter').prop('checked');
    document.forms['VersionControlForm']['cbChecklist'].value = $('.ecoChecklist').prop('checked');
    document.forms['VersionControlForm']['cbCasechange'].value = $('.ecoCasechange').prop('checked');
    document.forms['VersionControlForm']['cbPageembed'].value = $('.ecoPageembed').prop('checked');
    document.forms['VersionControlForm']['cbLinkchecker'].value = $('.ecoLinkchecker').prop('checked');
    document.forms['VersionControlForm']['cbMediaembed'].value = $('.ecoMediaembed').prop('checked');
}

//Testing how to grab code sample stuff and render in a regular page
//uses Prism.js for code highlighting just like the plugin does
function loadResultDiv() {
    document.getElementById("result").innerHTML = tinyMCE.get('area3').getContent();
    Prism.highlightAll();
}
