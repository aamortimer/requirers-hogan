require.config({
    // set paths since they are outside the baseUrl
    paths : {
        hgn : '../bower_components/requirejs-hogan-plugin/hgn',
        text : '../bower_components/requirejs-hogan-plugin/text',
        hogan : '../bower_components/requirejs-hogan-plugin/hogan'
    }
});

require(['hgn!mustache/foo'], function(hogan){
    var markup = hogan({
        title : 'Hello!',
        names : ['world', 'foo bar', 'lorem ipsum', 'nurse']
    });

    var div = document.createElement("div");
    div.innerHTML = markup;
    document.querySelector("body").appendChild(div);
});
