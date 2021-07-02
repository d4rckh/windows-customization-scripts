class Script {
    constructor(scriptInterpreter, scriptContents) {
        this.scriptInterpreter = scriptInterpreter
        this.scriptContents = scriptContents 
    }
}

class Customization {
    constructor(obj) {
        this.name = obj.name
        this.description = obj.description
        if (obj.notes) this.notes = obj.notes
        else this.notes = []
        this.on = obj.on
        this.commitScripts = []
        Object.keys(obj.commitScripts).forEach(scriptName => {
            this.commitScripts.push(new Script(scriptName, obj.commitScripts[scriptName]))
        })
        this.uncommitScripts = []
        Object.keys(obj.uncommitScripts).forEach(scriptName => {
            this.uncommitScripts.push(new Script(scriptName, obj.uncommitScripts[scriptName]))
        })
    }
}

module.exports = {
    Customization, Script
}
