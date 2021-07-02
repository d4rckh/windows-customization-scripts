const ejs = require('ejs');
const YAML = require('yaml');
const fs = require('fs');
const path = require("path");
const {Script, Customization} = require('./classes')

const file = fs.readFileSync(path.resolve(__dirname, "../objects/scripts.yml"), 'utf8')
const {Customizations} = YAML.parse(file)

const parsedCustomizations = []
const platforms = []
const categories = []

Customizations.forEach(customization => {
    console.log(customization)
    const parsed = new Customization(customization)
    parsedCustomizations.push(parsed)

    parsed.on.forEach(platform => {
        if (!platforms.includes(platform)) {
            platforms.push(platform)
        } 
    })

    parsed.categories.forEach(category => {
        if (!categories.includes(category)) {
            categories.push(category)
        } 
    })
})

const ReadmeTemplate = path.resolve(__dirname, "../templates/README.md.ejs")
const Readme = path.resolve(__dirname, "../README.md")
ejs.renderFile(ReadmeTemplate, {parsedCustomizations, platforms}, {}, function(err, str){
    if (err) return console.log(err);
    fs.writeFile(Readme, str, function (err) {
        if (err) return console.log(err);
        console.log('Wrriten README.md');
    });      
});

platforms.forEach(platform => {
    const PlatformTemplate = path.resolve(__dirname, "../templates/{PLATFORM}.md.ejs")
    const Platform = path.resolve(__dirname, "../" + platform + ".md")
    ejs.renderFile(PlatformTemplate, {Customizations: parsedCustomizations.filter(
        c => c.on.includes(platform)
    ), platformName: platform, categories}, {}, function(err, str){
        if (err) return console.log(err);
        fs.writeFile(Platform, str, function (err) {
            if (err) return console.log(err);
            console.log('Wrriten ' + platform +'.md');
        });      
    });    
})

