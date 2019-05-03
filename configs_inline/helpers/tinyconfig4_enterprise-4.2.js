var table = `<table border="1" style="width: 60%">
    <caption contentEditable="false">Ephox Sales Analysis</caption>
    <tr contentEditable="false">
        <th style="width: 40%">&nbsp;</th>
        <th style="width: 15%">Q1</th>
        <th style="width: 15%">Q2</th>
        <th style="width: 15%">Q3</th>
        <th style="width: 15%">Q4</th>
    </tr>
    <tr>
        <td contentEditable="false">East Region</td>
        <td>100</td>
        <td>110</td>
        <td>115</td>
        <td>130</td>
    </tr>
    <tr>
        <td contentEditable="false">Central Region</td>
        <td>100</td>
        <td>110</td>
        <td>115</td>
        <td>130</td>
    </tr>
    <tr>
        <td contentEditable="false">West Region</td>
        <td>100</td>
        <td>110</td>
        <td>115</td>
        <td>130</td>
    </tr>
</table>`;

var table2 = `<div>
    <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
    <p>Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
    <table style="width: 522px;">
    <tbody>
    <tr style="height: 84px;">
    <td style="width: 34px; height: 84;"></td>
    <td style="width: 20px; height: 84px;"></td>
    <td style="width: 62px; height: 84px;"></td>
    <td style="width: 437px; height: 84px;"></td>
    </tr>
    <tr style="height: 18px;">
    <td style="width: 34px; height: 18px;"></td>
    <td style="width: 20px; height: 18px;"></td>
    <td style="width: 62px; height: 18px;"></td>
    <td style="width: 437px; height: 18px;"></td>
    </tr>
    </tbody>
    </table>
    <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
</div>`;
/* 
The testbench has logic to add various Enterprise Edition plugins into the editor.
Each of these objects represents one plugin and what has to be done to make it work in the editor.
    * plugin attribute is added to the plugins array
    * toolbar attribute defines which toolbar should have the button and what the button name is
    * initParams contains an object that is merged into the base configuration object via $.extend
*/


var powerpaste = {
    plugin: 'powerpaste'
};

// var spelling = {
//     plugin: 'tinymcespellchecker',
//     toolbar: {
//         toolbarLocation: 1,
//         toolbarButton: 'spellchecker'
//     },
//     initParams: {
//         spellchecker_rpc_url: "https://spelling.tinymce.com/ephox-spelling",
//         spellchecker_api_key: "h22wb7h8xi78b4fyo46hhx5k7fbh46vt5f6yqmvd492iy00c"
//     }
// };

var imageUpload = {
    initParams: {
        images_upload_url: 'imagehandler.php'
        
    }
};

var moxiemanager = {
    // plugin: 'moxiemanager'
    external: {
        external_plugins: {
            'moxiemanager': urlForPlugins + 'moxiemanager/plugin.js'
        }
    }
};
