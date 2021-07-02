const ejs = require('ejs');
const YAML = require('yaml');
const fs = require('fs');
const path = require("path");
const {Script, Customization} = require('./classes')

const file = fs.readFileSync(path.resolve(__dirname, "../objects/scripts.yml"), 'utf8')
const {Customizations} = YAML.parse(file)

const parsedCustomizations = []
const platforms = []


Customizations.forEach(customization => {
    console.log(customization)
    customization.on.forEach(platform => {
        if (!platforms.includes(platform)) {
            platforms.push(platform)
        } 
    })

    parsedCustomizations.push(new Customization(customization))
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
    ), platformName: platform}, {}, function(err, str){
        if (err) return console.log(err);
        fs.writeFile(Platform, str, function (err) {
            if (err) return console.log(err);
            console.log('Wrriten ' + platform +'.md');
        });      
    });    
})

