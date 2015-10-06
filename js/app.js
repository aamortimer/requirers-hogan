require.config({
    // set paths since they are outside the baseUrl
    paths : {
        hgn : '../bower_components/requirejs-hogan-plugin/hgn',
        text : '../bower_components/requirejs-hogan-plugin/text',
        hogan : '../bower_components/requirejs-hogan-plugin/hogan'
    }
});

require(['TripAdvisor','hgn!mustache/review'], function(TripAdvisor, hogan){
  TripAdvisor.init({
    baseUrl: 'http://code.local/template/js/tripadvisor.location.json',
    version: '',
    request: '',
    success: function(readyState, responseText) {
      var markup = hogan(JSON.parse(responseText));

      var div = document.createElement("div");
      div.innerHTML = markup;
      document.querySelector("body").appendChild(div);
    },
    error: function(readyState, responseText) {

    }
  });
});
