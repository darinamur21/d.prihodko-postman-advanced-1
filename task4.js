/*
Create object "utils". It should contain:
- function to generate random number
- function to generate random alphanumeric string
- simple logger: has to contain 2 arguments - level (default value is "INFO"), message
*/

const utils = {
  getRandomNumber(count) {
    return Math.floor(Math.random() * count);
  },
  getRandomString(length) {
    let result =  "";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  logger(level, message) {
    console.log(`[${level.toUpperCase()}]:`, message)
  }
};

const newUtils = Object.create(utils);
console.log(newUtils.getRandomNumber(15));
console.log(newUtils.getRandomString(15));
console.log(newUtils.logger('WARN', 'message'));