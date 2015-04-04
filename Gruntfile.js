module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // stage path needs to be set
    ftpush: {
      stage: {
        auth: {
          host: 'host.coxmediagroup.com',
          port: 21,
          authKey: 'cmg'
        },
        src: 'public',
        dest: '/stage_aas/projects/features/funniest-person-austin/',
        exclusions: ['dist/tmp','Thumbs.db'],
        simple: false,
        useList: false
      },
      // prod path will need to change
      prod: {
        auth: {
          host: 'host.coxmediagroup.com',
          port: 21,
          authKey: 'cmg'
        },
        src: 'public',
        dest: '/prod_aas/projects/features/funniest-person-austin/',
        exclusions: ['dist/tmp','Thumbs.db'],
        simple: false,
        useList: false
      }
    }


  });

  // Load the task plugins
  grunt.loadNpmTasks('grunt-ftpush');

  grunt.registerTask('stage', ['ftpush:stage']);
  grunt.registerTask('prod', ['ftpush:prod']);

};
