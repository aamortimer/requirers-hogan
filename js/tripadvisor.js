var TripAdvisor = TripAdvisor || {};

(function (TripAdvisor, $) {
  var defaults;

  defaults = {
    baseUrl: 'http://api.tripadvisor.com/api/partner',
    version: '2.0',
    request: 'location',
    key: '6F68653205274A7CB39C85196F450A6E',
    method: 'GET'
  };

  /**
   * Make build the URL
   * @param {Object} options
   * @private
   */
  function buildUrl(options) {
    var url = options.baseUrl;
    url += options.version !== '' ? '/' + options.version : '';
    url += options.request !== '' ? '/' + options.request : '';

    return url;
  }

  /**
   * Make AJAX request
   * @private
   * @param {Object} options
   */
  function ajax(options) {
    var request = new XMLHttpRequest();
    request.open(options.method, buildUrl(options), true);
    request.onreadystatechange = function () {
      if (request.readyState != 4 || request.status != 200) {
        options.error(request.readyState, request.responseText);
      }else{
        options.success(request.readyState, request.responseText);
      }
    };

    request.send(options.data);
  }

  /**
   * Merge defaults with user options
   * @private
   * @param {Object} defaults Default settings
   * @param {Object} options User options
   * @returns {Object} Merged values of defaults and options
   */
  var extend = function ( defaults, options ) {
      var extended = {};
      var prop;
      for (prop in defaults) {
          if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
              extended[prop] = defaults[prop];
          }
      }
      for (prop in options) {
          if (Object.prototype.hasOwnProperty.call(options, prop)) {
              extended[prop] = options[prop];
          }
      }
      return extended;
  };

  /**
   * Init function
   */
  TripAdvisor.init = function(options) {
    var options = extend(defaults, options);
    return ajax(options);
  };

}(TripAdvisor));

if (typeof define === 'function' && define.amd) {
  define(TripAdvisor);
}
