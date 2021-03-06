/*
 * grunt-csproj
 * https://github.com/LiquidLiquids/grunt-csproj
 *
 * Copyright (c) 2016 LiquidLiquids
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		csproj: {
			// default: {
			// 	files: {
			// 		'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
			// 	}
			// },
			custom: {
				options: {
					projectPath: 'E:\\projects\\SVNS\\wallet-branches\\2.0\\BestWalletBox\\Best.WalletBox.Web',
					csporjLocation: 'Best.WalletBox.Web.csproj',
					watch: ['Scripts/SiteCharge/*.js', 'Content/SiteCharge/*.css', 'fonts/SiteCharge/**/*', 'Views/SiteCharge/*.cshtml'],	
				}
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
	grunt.registerTask('test', ['clean', 'csproj', 'nodeunit']);
};
