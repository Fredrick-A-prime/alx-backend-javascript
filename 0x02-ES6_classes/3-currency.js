export default class Currency {
    constructor(code, name){
        this._code = code 
        this._name = name
    }
    get code() {
        return this._code
    }
    set code(code) {
        if (code == 'string'){
            return this.code
        }
    }
    get name () {
        return this._name
    }
    set name (name) {
        if (name == 'string'){
            return this.name
        }
    }
    displayFullCurrency (){
        return `${this.name} (${this.code})`
    }
}
