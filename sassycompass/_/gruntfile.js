module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.initConfig({
        uglify:{
            my_target:{
                files:{
                    'js/script.js' : ['components/js/script.js']
                }//files
            }//my_target
        }//uglify
    }) //initConfig
} //exports