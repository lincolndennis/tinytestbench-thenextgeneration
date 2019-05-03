var tinymceConfigs = [ 
    {        
        // language: 'es',
        selector: "#mce_div1,#mce_div2",
        inline: true,
        theme: "modern",
        powerpaste_word_import: 'prompt',
        // fixed_toolbar_container: '#mytoolbar',
        powerpaste_html_import: 'inline_styles',
        powerpaste_text_sticky: false,
        powerpaste_block_drop: false,
        powerpaste_allow_local_images: true,
        // forced_root_block : false,
        image_advtab: true,
        plugins: [
            "advlist autolink lists link image charmap codesample print anchor preview hr pagebreak",
            "searchreplace wordcount visualblocks visualchars code",
            "insertdatetime media nonbreaking save table contextmenu directionality",
            "emoticons template textcolor imagetools"
        ],
        toolbar: [
            "insertfile undo redo | styleselect | bold italic | codesample | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
        ],
        valid_elements: "*[*]",
        content_css : "CSS/content_inline.css?"  + new Date().getTime(),
        // style_formats: [
        //     {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
        //     {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
        //     {title: 'Example 1', inline: 'span', classes: 'example1'},
        //     {title: 'Example 2', inline: 'span', classes: 'example2'},
        //     {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
        // ],
        templates: [
            {title: 'Test template 1', content: 'Test 1'},
            {title: 'Test template 2', content: 'Test 2'}
        ],
        setup: function (editor) {
            editor.on('remove', function(ed) {
                console.debug('Editor was removed');
            });
            // editor.on('blur', function (e) {
            //     console.log(editor.getContent());
            //     console.log('Editor was blurred!');
            // });
        }
	},
    {        
        selector: "h1.mce_h1",
        inline: true,
        theme: "modern",
        toolbar: "undo redo",
        menubar: false,
        setup: function (editor) {
            editor.on('remove', function(ed) {
                console.debug('Editor was removed');
            });
            // editor.on('blur', function (e) {
            //     console.log(editor.getContent());
            //     console.log('Editor was blurred!');
            // });
        }
    }
];