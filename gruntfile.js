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
          "angular-bootstrap/ui-bootstrap.min.js",
          "angular-animate/angular-animate.min.js",
          "angular-animate/angular-animate.min.js.map"
        ],
        "dest": "server/public/assets/vendors/"
      },
      bootstrap: {
        expand: true,
        cwd: "node_modules/bootstrap/dist/",
        src: [
          "css/bootstrap.min.css",
          "css/bootstrap.min.css.map",
          "css/bootstrap.css"
          //"js/boostrap.min.js"
        ],
        "dest": "server/public/assets/vendors/bootstrap/"
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
