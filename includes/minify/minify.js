const { glob } = require('glob');
const CleanCSS = require('clean-css');
const fs = require('fs');
console.log(`running`);
glob("**/*.css", (err, files) => {
    if (err) {
        console.error("An error occurred while fetching the stylesheets", err);
        return;
    }
    
    let minifiedStyles = '';
    
    files.forEach((file) => {
        const styles = fs.readFileSync(file, 'utf8');
        const minified = new CleanCSS().minify(styles);
        
        if (minified.errors.length) {
            console.error("An error occurred while minifying the styles", minified.errors);
            return;
        }

        if (files.length === 0) {
            console.log('No CSS files found');
            return;
        }

        minifiedStyles += minified.styles;
    });
    console.log(`Writing minified styles to newStylesheet.min.css`);
    fs.writeFileSync('newStylesheet.min.css', minifiedStyles, 'utf8');
});