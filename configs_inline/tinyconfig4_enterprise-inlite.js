var tinymceConfigs = [ 
    {        
        // language: 'es',
        // selector: "#mce_div1, #mce_div2",
        selector: 'div.mce_div',
        inline: true,
        theme: 'inlite',
        // powerpaste_word_import: 'prompt',
        // powerpaste_html_import: 'inline_styles',
        // powerpaste_text_sticky: false,
        // powerpaste_block_drop: false,
        // powerpaste_allow_local_images: true,
        paste_data_images: true,
        image_advtab: true,
        plugins: [
            "advlist autolink lists link image charmap codesample print anchor preview hr pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime media nonbreaking save table contextmenu directionality",
            "emoticons template textcolor imagetools"
        ],
        insert_toolbar: 'h1 h2 h3 | bold italic | quickimage quicktable | code a11ycheck | media',
        selection_toolbar: 'bold italic | quicklink h1 h2 h3 | blockquote | code a11ycheck | media',
        // insert_toolbar: '',
        // selection_toolbar: '',
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
        ]
	},
    {        
            selector: "h1.mce_h1",
            inline: true,
            theme: "modern",
            toolbar: "undo redo",
            menubar: false
    }
];