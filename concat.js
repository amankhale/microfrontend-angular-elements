const concat = require("concat");

(async function build() {
    const files = [
        "./dist/angular-elements/main.js",
        "./dist/angular-elements/polyfills.js",
        "./dist/angular-elements/runtime.js"
    ];

    await concat(files, "./dist/angular-elements/elements.js");
})();