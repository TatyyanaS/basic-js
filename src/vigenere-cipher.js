class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let shift = (this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[keyIndex])) % this.alphabet.length;
        result += this.alphabet[shift];
        keyIndex = ++keyIndex % key.length;
      } else {
        result += message[i];
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (this.alphabet.includes(encryptedMessage[i])) {
        let shift = (this.alphabet.indexOf(encryptedMessage[i]) + this.alphabet.length - this.alphabet.indexOf(key[keyIndex])) % this.alphabet.length;
        result += this.alphabet[shift];
        keyIndex = ++keyIndex % key.length;
      } else {
        result += encryptedMessage[i];
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
