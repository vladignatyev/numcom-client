module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
copy: {
  koding: {
    files: [
      // includes files within path and its sub-directories
      {expand: true, src: ['static/**'], dest: process.env.HOME + '/Web/'},

      {expand: true, src: ['bower_components/**'], dest: process.env.HOME + '/Web/'}
    ],
  },
}
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy']);

};


