class Script {
    constructor(scriptInterpreter, scriptContents) {
        this.scriptInterpreter = scriptInterpreter
        this.scriptContents = scriptContents 
    }
}

class Customization {
    constructor(obj) {
        this.name = obj.name
        this.description = obj.description || "No description."
        if (obj.notes) this.notes = obj.notes
        else this.notes = []
        this.on = obj.on || ['Windows 10']
        this.commitScripts = []
        this.uncommitScripts = []
        if (typeof obj.commitScripts == 'object') {
            Object.keys(obj.commitScripts).forEach(scriptName => {
                this.commitScripts.push(new Script(scriptName, obj.commitScripts[scriptName]))
            })
        } else {
            this.commitScripts.push(new Script('powershell', obj.uncommitScripts))
        }
        if (typeof obj.uncommitScripts == 'object') {
            Object.keys(obj.uncommitScripts).forEach(scriptName => {
                this.uncommitScripts.push(new Script(scriptName, obj.uncommitScripts[scriptName]))
            })
        } else {
            this.uncommitScripts.push(new Script('powershell', obj.uncommitScripts))
        }
    }
}

module.exports = {
    Customization, Script
}
