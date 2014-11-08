module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        clean: ['build'],
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['**'], dest: 'build/'},
                ]
            }
        },
        devserver: {
            server: {},
            options: {
                "base": "src/",
                "port": 8080    
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-devserver');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'copy', 'devserver']);
};
