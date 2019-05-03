var tinymceConfigs = [{
    selector: "#area3",
    // allow_script_urls: true,
    // autolink_pattern: /^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)(.+)$/i,
    autosave_interval: "10s",
    autosave_retention: "10m",
    branding: false,
    // cache_suffix: '?cachebuster=' + new Date().getTime(),
    // charmap: [["0256","A - kahako"],["0257","a - kahako"],["0274","E - kahako"],["0275","e - kahako"],["0298","I - kahako"],["0299","i - kahako"],["0332","O - kahako"],["0333","o - kahako"],["0362","U - kahako"],["0363","u - kahako"],["0699","okina"]],
    // charmap_append: [["0256","A - kahako"],["0257","a - kahako"],["0274","E - kahako"],["0275","e - kahako"],["0298","I - kahako"],["0299","i - kahako"],["0332","O - kahako"],["0333","o - kahako"],["0362","U - kahako"],["0363","u - kahako"],["0699","okina"]],
    content_css : [
        "CSS/content.css?"  + new Date().getTime(),
        "CSS/content2.css"
    ],
    // content_css: [
    //     '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    //     '//www.tinymce.com/css/codepen.min.css'
    // ],
      // You have to redefine contextmenu if you want to add a custom menu to the context menu - there is no option to just "add"
    // contextmenu: 'searchreplace link openlink image inserttable | cell row column deletetable | bold italic underline strikethrough',
    // convert_urls: false,
    // custom_elements : 'custom,~custominline', // Notice the ~ prefix to force a span element for the element
    // default_link_target: "_blank",
    // directionality : 'rtl',
    // doctype: '<!DOCTYPE html>',
      // Specific entity encoding only works for unicode above 126!
    // entities : "162,cent",
    // entity_encoding : "named",
    // entity_encoding : "numeric",
    // entity_encoding : "raw",
    extended_valid_elements: "*[*]",
    // external_plugins: {
    //     'tdg': 'http://localhost/~mfromin/tinytestbench/plugins/test/plugin.js'
    // },
    // file_picker_callback: function(callback, value, meta) {
    //     // Provide file and text for the link dialog
    //     // if (meta.filetype == 'file') {
    //     //   callback('mypage.html', {text: 'My text'});
    //     // }

    //     // Provide image and alt text for the image dialog
    //     if (meta.filetype == 'image') {
    //       callback('myimage.jpg', {alt: 'My alt text'});
    //     }

    //     // Provide alternative source and posted for the media dialog
    //     if (meta.filetype == 'media') {
    //       callback('movie.mp4', {source2: 'alt.ogg', poster: 'image.jpg'});
    //     }
    // },
    // file_picker_types: 'file image media',
    // font_formats: 'Lato=lato;Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;',
    fontsize_formats: "8pt 9pt 10pt 11pt 12pt 26pt 36pt",
    // forced_root_block : false,
    // forced_root_block : 'p',
    // forced_root_block_attrs: {
    //     'class': 'myclass',
    //     'style': 'font-family: arial times sans-serif; font-size: 14pt;'
    // },
    // height: 60,
    image_advtab: true,
    image_caption: true,
    image_class_list: [
        {title: 'None', value: ''},
        {title: 'Summary', value: 'summary'},
        {title: 'Title', value: 'title'},
        {title: 'Summary and Title', value: 'summary title'}
    ],
    // image_dimensions: false,
    images_reuse_filename: true,
    // imagetools_toolbar: 'editimage imageoptions | alignleft aligncenter alignright',
    importcss_append: true,
    // importcss_file_filter: "content2.css",
    importcss_selector_filter: ".mhf-",
    // init_instance_callback: function (editor) {
    //     editor.on('SpellCheckerIgnore', function (e) {
    //       console.log('Ignore called with:', e.word);
    //     });
    //     editor.on('SpellCheckerIgnoreAll', function (e) {
    //       console.log('Ignore ALL called with:', e.word);
    //     });
    // },
    inline_boundaries: true,
    insertdatetime_formats: ["%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D"],
    // invalid_elements: "o:p",
    // invalid_elements : 'strong,em',
    // language: 'en_US',   //Force custom translations of button/menu text in English.
    // language_url : 'languageFiles/es.js',
    link_assume_external_targets: false,
    // link_list: [
    //     {title: 'Link with dash', value: 'http://www.tinymce.com/my-test-link'},
    //     {title: 'Link with underscore', value: 'http://www.ephox.com/my_test_link'}
    // ],
    // menu defaults found in defaultMenus variable in ..themes/modern/theme.js
    // menu : {
        // file: {title: 'File', items: 'newdocument'},
        // edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
        // insert: {title: 'Insert', items: 'image link media template codesample inserttable | charmap hr | pagebreak nonbreaking anchor toc | insertdatetime'},
        // view: {title: 'View', items: 'visualaid |'},
        // format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
        // table: {title: 'Table'},
        // tools: {title: 'Tools'}
        // tags: {title : 'Sample Menu', items : 'menuitem1 menuitem2'}
    // },
    // menubar: false,
    // menubar: 'file edit format table tags',
    // nonbreaking_force_tab: true,
    // paste_as_text: true,
    // paste_data_images: false,
    // paste_preprocess: function(editor, fragment) {
    //     console.log('PREprocess called!');
    //     // console.log('Pasted content fragment: ', fragment.node);
    //     // tinymce.activeEditor.getBody().setAttribute('contenteditable', false);
    // },
    // paste_postprocess: function(editor, fragment) {
        // console.log('POSTprocess called!', fragment.node);
        // var textnode = document.createTextNode("Water");
        // fragment.node.appendChild(textnode);
        // var fileImages = fragment.node.querySelectorAll("img[src^='file://']");
        // var blobImages = fragment.node.querySelectorAll("img[src^='blob:http://']");
        // console.log('FILE:', fileImages);
        // console.log('BLOB:',blobImages);
        // blobImages.forEach(function(element) {
        //     element.parentNode.removeChild(element);
        // });
    // },
    plugins: [
        "advlist anchor autolink autosave charmap code codesample colorpicker contextmenu directionality ",
        "emoticons fullscreen hr importcss insertdatetime lists link image imagetools media nonbreaking ",
        "noneditable pagebreak preview print save searchreplace table template textcolor visualblocks ",
        "visualchars wordcount" // help
    ],
    preview_styles: false,
    // protect: [
    //     /\<\/?(if|endif)\>/g, // Protect <if> & </endif>
    //     /\<!\[if !mso\]\>/g, // Protect <![if !mso]>
    //     /\<!\[if !vml\]\>/g, // Protect <![if !vml]>
    //     /\<!\[endif\]\>/g, // Protect <![endif]>
    //     /\<xsl\:[^>]+\>/g, // Protect <xsl:...>
    //     // /<\?php.*?\?>/g // Protect php code
    //     /<\?php[\s\S]*?\?>/g // Protect php code
    // ],
    // readonly: true,
    // relative_urls: false,
    // --> For insert image dialog - add a rel option
    // rel_list: [
    //     {title: 'Lightbox', value: 'lightbox'},
    //     {title: 'Table of contents', value: 'toc'}
    // ],
    // remove_script_host: false,
    // resize: 'both',
    // rtl_ui: true,
    // statusbar: false,
    style_formats: [
        {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
        {title: 'Red paragraph', block: 'p', styles: {color: '#ff0000'}},
        {title: 'Example 1', inline: 'span', classes: 'example1'},
        {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'},
        {title: 'LI List Class', selector: 'li', classes: 'liclass'},
        {title: 'UL List Class', selector: 'ul', classes: 'listclass'},
        {title: 'Image Float Right', selector: 'img', styles: {float: 'right'}},
        {title: 'Large Line Height', block: 'p', styles: {'line-height': '300%'}},
        {title: 'Blue Underline', inline: 'span', styles: {'text-decoration-color': 'blue'}}
    ],
    style_formats_merge: true,
    table_default_styles: {
        width: '100%',
        // border: '5px solid red'
    },
    // table_default_attributes: {},
    table_default_attributes: {
        border: 1,
        class: 'testClass2'
    },
    // table_default_attributes: {
    //     cellpadding: '20',
    //     cellspacing: '10'
    // },2
    // target_list: false,
    templates: [
        {title: 'Basic Table Example', description: 'Basic table example.', content: table2},
        {title: 'Non-editable Example', description: 'Non-editable example.', content: table},
        {title: 'Example Template', description: 'A simple template to insert a snipplet.', content: '<h2>Template functionality</h2><small>- It is here!</small>'},
    ],
    // theme: "modern",
    // toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
    // toolbar2: "removeformat | fontsizeselect | ephoxpaste print preview media | forecolor backcolor emoticons | template codesample | errornotification infonotification | spellchecker | a11ycheck",
    toolbar: [
        "insert table | insertfile undo redo | styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | anchor link image",
        "pastetext | fontselect | restoredraft | removeformat | fontsizeselect | fullscreen preview media | forecolor backcolor emoticons | template codesample | code"
    ],
    // toolbar_items_size: 'small',
    // valid_children : '+a[div]',
    // verify_html: false,
    setup: function (editor) {
        editor.on('init', function () {
            // editor.setContent('Using the on init stuff!');
            // editor.getBody().style.backgroundColor = "#FFFF66";
            // editor.focus();
            // editor.selection.select(editor.getBody(), true);
            // editor.selection.collapse(false);
            // editor.shortcuts.add('alt+118', 'Test ALT F7', function() {
            //     alert('ALT F7!');
            // });
        });
        // editor.on('remove', function(ed) {
        //     console.debug('Editor was removed');
        // });
        // editor.on('paste', function () {
        //     console.log('On Paste....');
        //     tinymce.dom.Event.cancel();
        //     return false;
        // });
        // editor.on('newblock', function (e) {
        //     console.log('newblock...', e);
        // });
        // editor.on('ResizeEditor', function (e) {
        //     console.log('Editor was resized', e);
        // });
        // editor.on('keydown', function (event) {
        //     console.log(event);
        //     if (event.keyCode == 13)  {
        //       event.preventDefault();
        //       event.stopPropagation();
        //       return false;
        //   }
        // });
        // editor.on('change', function (e) {
        //     console.log('change event fired');
        //     console.log(e);
        //     // console.log('Content changed to:  ' + editor.getContent());
        // });
        // editor.on('SetContent', function (e) {
        //     console.log('SetContent event fired');
        //     console.log(e);
        // });
        // editor.on('NodeChange', function (e) {
        //     console.log('NodeChange event fired');
        // });
        // editor.on('BeforeRenderUI', function(e) {
        //     console.log('BeforeRenderUI: ' + this.buttons.styleselect.text);
        //     this.buttons.styleselect.text = 'NEW TEXT';
        //     // this.buttons.styleselect.repaint();
        // });
        // editor.on('BeforeSetContent', function(e) {
        //     console.log('BeforeSetContent: ' + e.content);
        //     console.log(e);
        //     // if (e.content.startsWith('<span class="mention"')) {
        //     //     e.content = e.content + '&nbsp;&nbsp;&nbsp;';
        //     // }
        //     // if (e.content.startsWith("<table ")) {
        //     //     console.log('ADDING CONTENT');
        //     //     e.content = '<p>BEFORE</p>' + e.content + '<p>AFTER</p>';
        //     // }
        //     // if (e.content.startsWith("<!-- replace -->")) {
        //     //     console.log('REMOVING EXISTING CONTENT');
        //     //     editor.setContent("");
        //     // }
        // });
        // editor.on('ExecCommand', function (e) {
        //     console.log('ExecCommand:');
        //     console.log(e);
        //     console.log(e.command);
        //     // if(e.command === "JustifyCenter") {
        //     //     if(editor.selection.getNode().tagName === "IMG") {
        //     //         // Add the appropriate styles to the parent
        //     //         tinymce.DOM.setStyle(editor.selection.selectedRange.commonAncestorContainer, 'text-align', 'center');
        //     //     }
        //     // }
        // });
        // editor.addMenuItem('menuitem1', {
        //     text: 'Text for Menu Item 1',
        //     customAttrib: 'Colorado Avalanche',
        //     context: 'insert',
        //     onclick: function () {
        //         // console.log(this.settings.text);
        //         // console.log(this.settings.customAttrib);
        //         tinymce.activeEditor.insertContent(this.settings.customAttrib);
        //     }
        // });
        // editor.addMenuItem('menuitem2', {
        //     text: 'Text for Menu Item 2',
        //     customAttrib: 'Colorado Rockies',
        //     context: 'insert',
        //     onclick: function () {
        //         // console.log(this.settings.text);
        //         // console.log(this.settings.customAttrib);
        //         tinymce.activeEditor.insertContent(this.settings.customAttrib);
        //     }
        // });
        // editor.addButton('hidetoolbar2', {
        //     text: 'Hide Toolbar 2',
        //     onclick: function () {
        //         $('div.mce-toolbar.mce-last').toggle();
        //     }
        // });
        // editor.addButton('slider', {
        //     text: 'Slider Example',
        //     onclick: function () {
        //         editor.windowManager.open({
        //             title: 'font resize',
        //             body: [
        //                 {type: 'slider', name: 'size', label: 'Size', value: 30, minValue: 25, maxValue: 50}
        //             ],
        //             onsubmit: function(e) {
        //                 alert(e.data['size']);
        //             }
        //         });
        //     }
        // });
        // editor.addButton('avalanche', {
        //     text: 'Insert Avalanche',
        //     customAttrib: 'Colorado Avalanche',
        //     context: 'tags',
        //     onclick: function () {
        //         // console.log(this.settings.text);
        //         // console.log(this.settings.customAttrib);
        //         editor.insertContent(this.settings.customAttrib);
        //     }
        // });
        // var myButton;
        // editor.addButton('styleupdate', {
        //     text: 'Style Update',
        //     icon: false,
        //     disabledStateSelector : '*:not(span)',
        //     onclick: function () {
        //         //console.log('Selection Node: ' + editor.selection.getNode());
        //         tinymce.DOM.setStyle(editor.selection.getNode(), 'font-weight', 'bold');
        //     },
        //     onPostRender : function() { myButton = this; },
        // });
        // editor.on('NodeChange', function(e) {
        //     console.log(e);
        //     console.log(editor.selection.getNode());
            // var isCEFalse = false;
            // var isSpan = false;
            // if (editor.selection.getNode().nodeName == 'SPAN') {
            //     isSpan = true;
            // }
            // if (editor.selection.getNode().hasAttribute("contentEditable")) {
            //     if (editor.selection.getNode().getAttribute("contentEditable") == "false") {
            //         isCEFalse = true;
            //     }
            // }
            // if(myButton) {
            //     myButton.disabled(!(isCEFalse && isSpan));
            // }
        // });
        // editor.addButton('wrapselection', {
        //     text: 'Wrap Selection',
        //     icon: false,
        //     onclick: function () {
        //         //console.log('Selection: ' + editor.selection.getNode());
        //         editor.insertContent("<span class='test'>" + editor.selection.getContent() + "</span>");
        //         // editor.insertContent("<strong class='test'>" + editor.selection.getContent() + "</strong>");
        //         // editor.insertContent("<pre>" + editor.selection.getContent() + "</pre>");
        //     }
        // });
        editor.addButton('errornotification', {
            text: 'Error',
            icon: false,
            onclick: function () {
                // console.log('Selection: ' + editor.selection.getContent());
                // editor.selection.setContent('<span id="boo">BOOOO!</span>');
                editor.notificationManager.open({
                    text: 'This is a sample error notification! <br /> It will close automatically in 5 seconds.',
                    type: 'error',
                    timeout: 5000,
                    closeButton: true
                });
            }
        });
        editor.addButton('infonotification', {
            text: 'Info',
            icon: false,
            onclick: function () {
                // console.log(this);
                // console.log('Selection: ' + editor.selection.getContent());
                editor.notificationManager.open({
                    text: 'This is a sample info notification! <br /> It will close automatically in 5 seconds.',
                    type: 'info',
                    timeout: 5000,
                    closeButton: true
                });
            }
        });
        // editor.addButton('scrolltest', {
        //     text: 'ScrollTest',
        //     icon: false,
        //     onclick: function () {
        //         // console.log(this);
        //         // console.log('Selection: ' + editor.selection.getContent());
        //         console.log('ScrollTest!', editor.getDoc());
        //         var elm = editor.getDoc().getElementById('test');
        //         console.log(elm);
        //         editor.selection.scrollIntoView(elm);
        //     }
        // });
        // editor.addMenuItem('michael', {
        //     separator: 'before',
        //     text: 'Michael',
        //     context: 'table',
        //     prependToContext: true,
        //     menu: [
        //       { text: 'Parker', onclick: function() {console.log('Parker selected')} },
        //       { text: 'Sadie', onclick: function() {console.log('Sadie selected')} },
        //       { text: 'Mia', disabled: true, onclick: function() {console.log('Mia selected')}}
        //     ]
        // });
    }
},
{
    language: 'es',
    content_css : "CSS/content.css",
    selector: "#area4"
}];
