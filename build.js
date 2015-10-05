({
  baseUrl: 'js',

  out: 'js/app.min.js',
  optimize: 'uglify2',

  name: 'app',
  wrap: true,
  paths: {
    hgn : '../bower_components/requirejs-hogan-plugin/hgn',
    text : '../bower_components/requirejs-hogan-plugin/text',
    hogan : '../bower_components/requirejs-hogan-plugin/hogan'
  },
  uglify2: {
       output: {
           beautify: false
       },
       compress: {
           sequences: true,
           global_defs: {
               DEBUG: false
           }
       },
       warnings: true,
       mangle: true
   },
})
