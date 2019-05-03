
var tinymceConfigs = [ 
    {
        // language: 'es',
        selector: "textarea#area3",
        theme: "modern",
        paste_postprocess: function(editor, fragment) {
          console.log('Pasted content fragment: ', fragment.node);
          // var allElements = fragment.node.getElementsByTagName("td");

          // for (i = 0; i < allElements.length; ++i) {
          //   console.log('initial font family: ', allElements[i].style.fontFamily);

          //   var st = allElements[i].style;
          //   stCleaned = st.fontFamily.replace("sans-serif", "").replace("Calibri", "Arial");
          //   st.fontFamily = stCleaned; // Indirectly

          //   console.log('new font family: ', st.fontFamily);
          // }
        },
        image_advtab: true,
        plugins: [
            "advlist autolink lists link image charmap print anchor preview hr pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime media nonbreaking save table contextmenu directionality",
            "emoticons template textcolor imagetools"
        ],
        toolbars: [
            "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            "ephoxpaste print preview media | forecolor backcolor emoticons"
        ],
        image_advtab: true,
        valid_elements: "*[*]",
        content_css : "CSS/content.css?"  + new Date().getTime(),
        protect: [
            /\<\/?(if|endif)\>/g, // Protect <if> & </endif>
            /\<xsl\:[^>]+\>/g, // Protect <xsl:...>
            // /<\?php.*?\?>/g // Protect php code
            /<\?php[\s\S]*?\?>/g // Protect php code
        ],
        style_formats: [
            {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
            {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
            {title: 'Example 1', inline: 'span', classes: 'example1'},
            {title: 'Example 2', inline: 'span', classes: 'example2'},
            {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
        ],
        templates: [
            {title: 'Test template 1', content: 'Test 1'},
            {title: 'Test template 2', content: 'Test 2'}
        ]
	}
];