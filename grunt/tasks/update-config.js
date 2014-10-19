/***********************************************************************
 * update config updates dynamic values in config
 ***********************************************************************/

/**
 * @param grunt
 */
module.exports = function( grunt ){

    'use strict';

    /*================================================
     * Dependencies
     *===============================================*/

    /*================================================
     * Attributes
     *===============================================*/

    /*================================================
     * Tasks
     *===============================================*/
    grunt.registerTask( 'update-config', function(){

        var updated = {
            copy: {
                'dist-js':{
                    files: grunt.file.expandMapping(['dist/assets/js/**/*.min.js'], '', {
                        rename: function( destBase, destPath ) {
                            return destBase+destPath.replace('.min','');
                        }
                    } )
                },

                'dist-css':{
                    files: grunt.file.expandMapping(['dist/assets/css/**/*.min.css'], '', {
                        rename: function( destBase, destPath ) {
                            return destBase+destPath.replace('.min','');
                        }
                    } )
                },

                'sketch-icons': {
                    files: grunt.file.expandMapping(['source/sketch/img/**/icon-*.svg'], '', {
                        rename: function( destBase, destPath ) {
                            return destBase+destPath.replace('icon-', '').replace('/img/', '/icon-svg/');
                        }
                    } )
                }
            },
            uglify:{
                js: {
                    files: grunt.file.expandMapping(['webroot/assets/js/**/*.js', '!webroot/assets/js/**/*.min.js'], '', {
                        rename: function(destBase, destPath) {
                            return destBase+destPath.replace('.js', '.min.js');
                        }
                    })
                }
            },
            clean:{
                //only remove images that have an original in assets/img
                img: grunt.file.expandMapping(['source/img/**/*.{png,jpg,gif,svg}','source/sketch/img/**/*.{png,jpg,gif,svg}'], '', {
                    rename: function( destBase, destPath ) {
                        return destBase+destPath.replace('source/img/', 'webroot/assets/img/' )
                            .replace('source/sketch/img/', 'webroot/assets/img/');
                    }
                } ).map( function( item ){ return item.dest; }),

            }
        };

        grunt.config.merge( updated );

    });


};
