'use strict';

module.exports = function( grunt ) {

    var settings = require("../../settings");
    var path = require("path");


    grunt.registerTask( 'generate-vendor-less', function( ){

        var lines = [ "/* THIS FILE IS GENERATED */", "" ];

        var files = grunt.file.expand( { cwd: settings.source.styles }, ["vendor/**/*.less"] );
        files.forEach( function( file ){
            lines.push( "@import '"+file+"';");
        });

        grunt.file.write( path.join( settings.source.styles, "vendor.less" ) , lines.join("\n") );

    });

    grunt.registerTask( 'generate-vendor-scss', function( ){

        var lines = [ "/* THIS FILE IS GENERATED */", "" ];

        var files = grunt.file.expand( { cwd: settings.source.styles }, ["vendor/**/*.scss"] );
        files.forEach( function( file ){
            var name = file.replace( ".scss","" );
            lines.push( "@import '"+name+"';");
        });

        grunt.file.write( path.join( settings.source.styles, "_vendor.scss" ), lines.join("\n") );

    });

};
