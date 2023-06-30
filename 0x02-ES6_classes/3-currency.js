export default class Currency {
  constructor(code , name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a String');
    if (typeof code !== 'number') throw new TypeError('Code must be a String');
    this._code = code; 
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a String');
    }
  }

  get code() {
    return this._code;
  }

  set code(newLength) {
    if (typeof newLength === 'string') {
      this._code  = newLength;
    } else {
      throw new TypeError('Code must be a String');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})}`
  }
}
