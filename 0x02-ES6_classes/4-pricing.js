export default class Pricing {
    constructor(amount, currency){
        this._amount = amount
        this._currency = currency
    }
    get amount (){
        return this._amount
    }
    set amount (amount) {
        if(amount == 'number'){
            return this._amount
        }
    }
    get currency () {
        return this._currency
    }
    set currency (currency) {
        if (currency == 'number'){
            return this._currency
        }
    }
    displayFullPrice (){
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }
    convertPrice (amount, conversionRate){
        return amount * conversionRate 
    }
}
