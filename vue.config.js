const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        extract: false,
        loaderOptions: {
            sass: {
                additionalData:
                    '@import "src/scss/variables.scss"; @import "src/scss/main.scss";'
            }
        }
    }
});
