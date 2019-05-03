var dialogFlag = false;
if ((location.search) && (location.search.indexOf("&sct=ayr") != -1)) {
    var params = location.search;
    dialogFlag = true;
}

// Simulated data for the Mentions plugin
var users = [
    "Terry Green", "Edward Carroll", "Virginia Turner", "Alexander Schneider", "Gary Vasquez", "Randy Howell",
    "Katherine Moore", "Betty Washington", "Grace Chapman", "Christina Nguyen", "Danielle Rose", "Thomas Freeman",
    "Thomas Armstrong", "Vincent Lee", "Brittany Kelley", "Brenda Wheeler", "Amy Price", "Hannah Harvey",
    "Bobby Howard", "Frank Fox", "Diane Hopkins", "Johnny Hawkins", "Sean Alexander", "Emma Roberts", "Thomas Snyder",
    "Thomas Allen", "Rebecca Ross", "Amy Boyd", "Kenneth Watkins", "Sarah Tucker", "Lawrence Burke", "Emma Carr",
    "Zachary Mason", "John Scott", "Michelle Davis", "Nicholas Cole", "Gerald Nelson", "Emily Smith", "Christian Stephens",
    "Grace Carr", "Arthur Watkins", "Frances Baker", "Katherine Cook", "Roger Wallace", "Pamela Arnold", "Linda Barnes",
    "Jacob Warren", "Billy Ramirez", "Pamela Walsh", "Paul Wade", "Katherine Campbell", "Jeffrey Berry", "Patrick Bowman",
    "Dennis Alvarez", "Crystal Lucas", "Howard Mendoza", "Patricia Wallace", "Peter Stone", "Tiffany Lane", "Joe Perkins",
    "Gloria Reynolds", "Willie Fernandez", "Doris Harper", "Heather Sandoval", "Danielle Franklin", "Ann Ellis",
    "Christopher Hernandez", "Pamela Perry", "Matthew Henderson", "Jesse Mitchell", "Olivia Reed", "David Clark", "Juan Taylor",
    "Michael Garrett", "Gerald Guerrero", "Jerry Coleman", "Joyce Vasquez", "Jane Bryant", "Sean West", "Deborah Bradley",
    "Phillip Castillo", "Martha Coleman", "Ryan Santos", "Harold Hanson", "Frances Hoffman", "Heather Fisher", "Martha Martin",
    "George Gray", "Rachel Herrera", "Billy Hart", "Kelly Campbell", "Kelly Marshall", "Doris Simmons", "Julie George",
    "Raymond Burke", "Ruth Hart", "Jack Schmidt", "Billy Schmidt", "Ruth Wagner", "Zachary Estrada", "Olivia Griffin", "Ann Hayes",
    "Julia Weaver", "Anna Nelson", "Willie Anderson", "Anna Schneider", "Debra Torres", "Jordan Holmes", "Thomas Dean",
    "Maria Burton", "Terry Long", "Danielle McDonald", "Kyle Flores", "Cheryl Garcia", "Judy Delgado", "Karen Elliott",
    "Vincent Ortiz", "Ann Wright", "Ann Ramos", "Roy Jensen", "Keith Cunningham", "Mary Campbell", "Jesse Ortiz", "Joseph Mendoza",
    "Nathan Bishop", "Lori Valdez", "Tammy Jacobs", "Mary West", "Juan Mitchell", "Thomas Adams", "Christian Martinez", "James Ramos",
    "Deborah Ross", "Eric Holmes", "Thomas Diaz", "Sharon Morales", "Kathryn Hamilton", "Helen Edwards", "Betty Powell",
    "Harry Campbell", "Raymond Perkins", "Melissa Wallace", "Danielle Hicks", "Harold Brewer", "Jack Burns", "Anna Robinson",
    "Dorothy Nguyen", "Jane Dean", "Janice Hunter", "Ryan Moore", "Brian Riley", "Brittany Bradley", "Phillip Ortega", "William Fisher",
    "Jennifer Schultz", "Samantha Perez", "Linda Carr", "Ann Brown", "Shirley Kim", "Jeremy Alvarez", "Dylan Oliver", "Roy Gomez",
    "Ethan Brewer", "Ruth Lucas", "Marilyn Myers", "Danielle Wright", "Jose Meyer", "Bobby Brown", "Angela Crawford", "Brandon Willis",
    "Kyle McDonald", "Aaron Valdez", "Kevin Webb", "Ashley Gordon", "Karen Jenkins", "Johnny Santos", "Ashley Henderson", "Amy Walters",
    "Amber Rodriguez", "Thomas Ross", "Dorothy Wells", "Jennifer Murphy", "Douglas Phillips", "Helen Johnston", "Nathan Hawkins",
    "Roger Mitchell", "Michael Young", "Eugene Cruz", "Kevin Snyder", "Frank Ryan", "Tiffany Peters", "Beverly Garza", "Maria Wright",
    "Shirley Jensen", "Carolyn Munoz", "Kathleen Day", "Ethan Meyer", "Rachel Fields", "Joan Bell", "Ashley Sims", "Sara Fields",
    "Elizabeth Willis", "Ralph Torres", "Charles Lopez", "Aaron Green", "Arthur Hanson", "Betty Snyder", "Jose Romero", "Linda Martinez",
    "Zachary Tran", "Sean Matthews", "Eric Elliott", "Kimberly Welch", "Jason Bennett", "Nicole Patel", "Emily Guzman", "Lori Snyder",
    "Sandra White", "Christina Lawson", "Jacob Campbell", "Ruth Foster", "Mark McDonald", "Carol Williams", "Alice Washington",
    "Brandon Ross", "Judy Burns", "Zachary Hawkins", "Julie Chavez", "Randy Duncan", "Lisa Robinson", "Jacqueline Reynolds", "Paul Weaver",
    "Edward Gilbert", "Deborah Butler", "Frances Fox", "Joshua Schmidt", "Ashley Oliver", "Martha Chavez", "Heather Hudson",
    "Lauren Collins", "Catherine Marshall", "Katherine Wells", "Robert Munoz", "Pamela Nelson", "Dylan Bowman", "Virginia Snyder",
    "Janet Ruiz", "Ralph Burton", "Jose Bryant", "Russell Medina", "Brittany Snyder", "Richard Cruz", "Matthew Jimenez", "Danielle Graham",
    "Steven Guerrero", "Benjamin Matthews", "Janet Mendoza", "Harry Brewer", "Scott Cooper", "Alexander Keller", "Virginia Gordon",
    "Randy Scott", "Kimberly Olson", "Helen Lynch", "Ronald Garcia", "Joseph Willis", "Philip Walker", "Tiffany Harris", "Brittany Weber",
    "Gregory Harris", "Sean Owens", "Wayne Meyer", "Roy McCoy", "Keith Lucas", "Christian Watkins", "Christopher Porter", "Sandra Lopez",
    "Harry Ward", "Julie Sims", "Albert Keller", "Lori Ortiz", "Virginia Henry", "Samuel Green", "Judith Cole", "Ethan Castillo", "Angela Ellis",
    "Amy Reid", "Jason Brewer", "Aaron Clark", "Aaron Elliott", "Doris Herrera", "Howard Castro", "Kenneth Davis", "Austin Spencer",
    "Jonathan Marshall", "Phillip Nelson", "Julia Guzman", "Robert Hansen", "Kevin Anderson", "Gerald Arnold", "Austin Castro", "Zachary Moore",
    "Joseph Cooper", "Barbara Black", "Albert Mendez", "Marie Lane", "Jacob Nichols", "Virginia Marshall", "Aaron Miller", "Linda Harvey",
    "Christopher Morris", "Emma Fields", "Scott Guzman", "Olivia Alexander", "Kelly Garrett", "Jesse Hanson", "Henry Wong", "Billy Vasquez",
    "Larry Ramirez", "Bryan Brooks", "Alan Berry", "Nicole Powell", "Stephen Bowman", "Eric Hughes", "Elizabeth Obrien", "Timothy Ramos",
    "Michelle Russell", "Denise Ruiz", "Sean Carter", "Amanda Barnett", "Kathy Black", "Terry Gutierrez", "John Jensen", "Grace Sanchez",
    "Tiffany Harvey", "Jacqueline Sims", "Wayne Lee", "Roy Foster", "Joyce Hart", "Joseph Russell", "Harold Washington", "Beverly Cox",
    "Nicole Morales", "Anna Carpenter", "Jesse Ray", "Ann Snyder", "Mark Diaz", "Elizabeth Harper", "Andrew Guerrero", "Cheryl Silva",
    "Michelle Hudson", "Jeffrey Santos", "Victoria Vasquez", "Matthew Meyer", "Jacob Murray", "Jose Munoz", "Edward Howell", "Vincent Hunter",
    "Daniel Walters", "Samantha Obrien", "Laura Elliott", "Richard Olson", "Daniel Graham", "Carol Lee", "Grace Sullivan", "Nancy Rodriguez",
    "Tyler Tran", "Crystal Shaw", "Madison Allen", "Ralph Sims", "Joe Jenkins", "Dennis Ray", "Arthur Davidson", "Victoria Allen", "Arthur Jackson",
    "Joan Thomas", "Daniel Hopkins", "Gloria Hicks", "Danielle Price", "Craig Keller", "Alan Morgan", "Gregory Silva", "Samantha Kelly",
    "Rachel Williamson", "Bruce Garrett", "Jacob Smith", "Kathleen Nichols", "Sarah Long", "Carol Pearson", "Virginia Mendez", "Judy Valdez",
    "Jason Garza", "Brenda Fowler", "Karen Edwards", "Alexander Anderson", "Pamela Wallace", "Ruth Howell", "Walter Hernandez", "George Lucas",
    "Samantha Long", "Margaret Garza", "Kathleen Schultz", "Frances Guerrero", "Amber Meyer", "Rachel Morales", "Teresa Curtis", "Heather Bell",
    "Grace Johnson", "Melissa King", "Zachary Cook", "Carol Schultz", "Jane Beck", "Karen Stone", "Roger Brooks", "Carolyn Fuller", "Nicholas Coleman",
    "William Bishop", "Christine May", "Linda George", "Jean Meyer", "Cheryl Armstrong", "Danielle Welch", "Amanda Graham", "Janice Carter",
    "Catherine Brooks", "Lawrence Gonzalez", "Amy Russell", "Eugene Jimenez", "Joseph Carlson", "Peter McCoy", "Jerry Washington", "Carolyn Obrien",
    "Mark Walker", "Stephanie Hoffman", "Julie Pena", "Karen Curtis", "Bryan Cruz", "Madison Shaw", "Rachel Graham", "Susan Simpson", "Andrea Harrison",
    "Bryan Miller", "Vincent McDonald", "Jesse McCoy", "Christine Ramos", "Dorothy Riley", "Karen Warren", "Ashley Weber", "Judith Robinson",
    "Alan Mendez", "Donna Medina", "Helen Lane", "Douglas Clark", "Brenda Romero", "Doris Wells", "Patrick Howell", "Doris Lawrence", "Harry Jacobs",
    "Phillip Rose", "Deborah Patel", "Bryan Day", "Rachel Butler", "Paul Butler", "Judy Knight", "Willie Wallace", "Phillip Anderson", "Emma Black",
    "Lisa Lynch", "Kimberly Freeman", "Ronald West", "Kathleen Harris", "Martha Ruiz", "Phillip Moreno", "Robert Vargas", "Jesse Diaz", "Christine Weber",
    "Karen Stanley", "Theresa Edwards", "Kathryn Chavez", "Sarah Rios", "Danielle Wong", "Kathy Carr", "Joan Diaz", "Albert Walters",
    "Denise Kim", "Katherine Pearson", "Diana Richardson", "Harry Ford", "Eric Mills", "Sean Hicks", "Joe Brown", "Judith Morgan", "Harry Hunter",
    "Matthew Bryant", "Tyler Rose", "Mildred Delgado", "Emma Peters", "Walter Delgado", "Lauren Gilbert", "Christopher Romero"
];

var images = [
    "camilarocun", "brianmichel", "absolutehype", "4l3d", "hi_kendall", "4ae78e7058d2434", "yusuf_y7",
    "beauty__tattoos", "mehrank36176270", "fabriziocuscini", "hassaminian", "mediajorge", "alexbienz", "eesates", "donjain",
    "austinknight", "ehlersd", "bipiiin", "victorstuber", "curiousoffice", "chowdhury_sayan", "upslon", "gcauchon", "pawel_murawski",
    "mr_r_a", "jeremieges", "nickttng", "patrikward", "sinecdoques", "gabrielbeduschi", "ashmigosh", "shxnx", "laborisova",
    "anand_2688", "mefahad", "puneetsmail", "jefrydagucci", "verbaux", "nicolasjengler", "sorousht_", "am0rz",
    "dominiklevitsky", "jarjan", "ganilaughs", "namphong122", "tiggreen", "allisongrayce", "messagepadapp", "madebylipsum",
    "tweetubhai", "avonelink", "ahmedkojito", "piripipirics", "dmackerman", "markcipolla"
];

//Functions needed for the Mentions plugin
var userData = users.map(function (fullName) {
    var image, name = fullName.toLowerCase().replace(/ /g, '');

    image = 'https://s3.amazonaws.com/uifaces/faces/twitter/' + images[Math.round(images.length * Math.random())] + '/128.jpg';

    return {
      id: name,
      name: name,
      fullName: fullName,
      image: image
    };
});

var findUsers = function (term, success) {
    var users = userData;

    users = users.filter(function (user) {
      return user.name.indexOf(term.toLowerCase()) === 0;
    });

    users = users.slice(0, 10);

    // console.log('users: ', users);

    window.setTimeout(function () {
      success(users);
    }, 0);
};


var hoverLogic = function(userInfo, success) {
    setTimeout(function() {
      var div = document.createElement('div');

      div.innerHTML = (
        '<div style="border: 1px solid #ccc; background-color: white; font-size: 20px; padding: 5px;">' +
          '<img src="' + userInfo.image +'" />' + userInfo.fullName + '' +
        '</div>'
      );

      success(div);
    }, 0);
}


var table = `
    <table style="width: 60%; border-collapse: collapse;" border="1">
        <caption class="mceNonEditable">Ephox Sales Analysis</caption> 
        <tbody> 
            <tr class="mceNonEditable"> 
                <th style="width: 40%;">&nbsp;</th><th style="width: 15%;">Q1</th> 
                <th style="width: 15%;">Q2</th><th style="width: 15%;">Q3</th> 
                <th style="width: 15%;">Q4</th> 
            </tr> 
            <tr> 
                <td class="mceNonEditable">East Region</td> 
                <td>100</td> <td>110</td> <td>115</td> <td>130</td> 
            </tr> 
            <tr> 
                <td class="mceNonEditable">Central Region</td> 
                <td>100</td> <td>110</td> <td>115</td> <td>130</td> 
            </tr> 
            <tr> 
                <td class="mceNonEditable">West Region</td> 
                <td>100</td> <td>110</td> <td>115</td> <td>130</td> 
            </tr> 
        </tbody> 
    </table>`;

var table2 = `<!-- replace -->
    <div>
        <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
        <table style="width: 522px; border-collapse: collapse;" border="1">
        <tbody>
        <tr style="height: 84px;">
            <td style="width: 34px; height: 84;"></td><td style="width: 20px; height: 84px;"></td>
            <td style="width: 62px; height: 84px;"></td><td style="width: 437px; height: 84px;"></td>
        </tr>
        <tr style="height: 18px;">
            <td style="width: 34px; height: 18px;"></td><td style="width: 20px; height: 18px;"></td>
            <td style="width: 62px; height: 18px;"></td><td style="width: 437px; height: 18px;"></td>
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
    // plugin: 'powerpaste'
    external: {
        external_plugins: {
            'powerpaste': urlForPlugins + 'powerpaste/plugin.js'
        }
    },
    initParams: {
        powerpaste_word_import: 'prompt',
        powerpaste_html_import: 'prompt',
        // powerpaste_html_import: 'merge',
        // powerpaste_text_sticky: false,
        powerpaste_block_drop: false,
        powerpaste_allow_local_images: true,
        // powerpaste_word_import: 'clean',
        // powerpaste_html_import: 'clean',
    }
};

var accessibility = {
    // plugin: 'a11ychecker',
    external: {
        external_plugins: {
            'a11ychecker': urlForPlugins + 'a11ychecker/plugin.js'
        }
    },
    toolbar: {
        toolbarLocation: 1,
        toolbarButton: 'a11ycheck'
    }
};

var spelling = {
    plugin: 'tinymcespellchecker',
    // external: {
    //     external_plugins: {
    //         'tinymcespellchecker': urlForPlugins + 'tinymcespellchecker/plugin.js'
    //     }
    // },
    toolbar: {
        toolbarLocation: 1,
        toolbarButton: 'spellchecker'
    },
    initParams: {
        // spellchecker_rpc_url: "https://spelling.tinymce.com/ephox-spelling",
        // spellchecker_api_key: "h22wb7h8xi78b4fyo46hhx5k7fbh46vt5f6yqmvd492iy00c",
        spellchecker_dialog: dialogFlag,
        spellchecker_whitelist: ['fromin', 'coffeerific'],
        // spellchecker_on_load: true,
        spellchecker_active: false
        
    }
};

var imageUpload = {
    initParams: {
        images_upload_url: 'imagehandler.php',
        images_reuse_filename: true       
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

var codemirror = {
    // plugin: 'advcode'
    external: {
        external_plugins: {
            'advcode': urlForPlugins + 'advcode/plugin.js'
        }
    },
    initParams: {
        code_dialog_width: 1000,
        code_dialog_height: 500
    }
};

var mentions = {
    // plugin: 'mentions',
    external: {
        external_plugins: {
            'mentions': urlForPlugins + 'mentions/plugin.js'
        }
    },
    initParams: {
        mentions_fetch: function (query, success) {
            findUsers(query.term, success);
        },
        mentions_menu_hover: function (userInfo, success) {
            hoverLogic(userInfo, success);
        }
    }
};

var linkchecker  = {
    plugin: 'linkchecker'
};


var mediaembed = {
    plugin: 'mediaembed'
};
