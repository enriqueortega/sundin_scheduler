module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: { // Not sure if necessary
      files: 'client/client.js'
    },
    watch: {
      scripts: {
        files: 'client/client.js',
        tasks: ['jshint', 'uglify'],
        options: {
          spawn: false
        }
      }
    },
    uglify: {
      build: {
        src: [
          'client/scripts/client.js',
          'client/scripts/controllers/*.js',
          'client/scripts/factories/*.js'
        ],
        dest: 'server/public/assets/scripts/client.min.js'
      }
    },
    copy: {
      angular: {
        expand: true,
        cwd: "node_modules/",
        src: [
          "angular/angular.min.js",
          "angular/angular.min.js.map",
          "angular/angular-csp.css",
          "angular-route/angular-route.min.js",
          "angular-route/angular-route.min.js.map",
          "angular-smart-table/dist/smart-table.min.js",
          "angular-smart-table/dist/smart-table.min.js.map",
          "angular-bootstrap-npm/dist/angular-bootstrap.min.js",
          "angular-ui-bootstrap/dist/ui-bootstrap-tpls.js",
          "angular-ui-bootstrap/dist/ui-bootstrap.js",
          "angular-ui-bootstrap/template/modal/backdrop.html",
          "angular-ui-bootstrap/template/modal/backdrop.html.js",
          "angular-ui-bootstrap/template/modal/window.html",
          "angular-ui-bootstrap/template/modal/window.html.js",
          "angular-animate/angular-animate.min.js",
          "angular-animate/angular-animate.min.js.map"
        ],
        "dest": "server/public/assets/vendors/"
      },
      bootstrap: {
        expand: true,
        cwd: "node_modules/bootstrap/dist/css/",
        src: [
          "bootstrap.min.css",
          "bootstrap.min.css.map",
          "bootstrap.css"
        ],
        "dest": "server/public/assets/vendors/bootstrap"
      },
      bootstrapGlyphicons: {
        expand: true,
        cwd: "node_modules/bootstrap/dist/",
        src: [
          "fonts/glyphicons-halflings-regular.eot",
          "fonts/glyphicons-halflings-regular.svg",
          "fonts/glyphicons-halflings-regular.ttf",
          "fonts/glyphicons-halflings-regular.woff",
          "fonts/glyphicons-halflings-regular.woff2"
        ],
        "dest": "server/public/assets/vendors/"
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default Task(s).
  grunt.registerTask('default', ['copy', 'uglify']);
};
