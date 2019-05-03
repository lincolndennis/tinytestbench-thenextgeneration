var accessibilityContent = './HTML/a11y-tinymce2.html?' + new Date().getTime();

function loadA11Y(theEditor){
  replaceHTMLInEditor(theEditor, accessibilityContent);
}

function replaceHTMLInEditor(theEditor, url) {
    $.get(url, function(data) {
        //alert(data);
        theEditor.setContent(data);
    });
}