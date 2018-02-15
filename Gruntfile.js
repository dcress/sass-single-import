/*
 * sass-single-import
 * https://github.com/danielcress/grunt
 *
 * Copyright (c) 2018 Dan Cress
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		sass_single_import: {
			atoms: {
				src: ["atoms/**/*.scss"],
				dest: "page-styles/",
				cwd: "./test/sass"
			}, 
			molecules: { 
				src: ["molecules/**/*.scss"],
				dest: "page-styles/",
				cwd: "./test/sass"
			}, 
			organisms: {
				src: ["organisms/**/*.scss"],
				dest: "page-styles/",
				cwd: "./test/sass"
			}
		},
		
		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'sass_single_import', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
