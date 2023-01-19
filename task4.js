/*
Create object "utils". It should contain:
- function to generate random number
- function to generate random alphanumeric string
- simple logger: has to contain 2 arguments - level (default value is "INFO"), message
*/

const utils = {
  getRandomNumber(count) {
    let result = Math.floor(Math.random()*count);
    return result;
  },
  getRandomString(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));

    }
    return result;
},
  logger(level, message) {
    console.log(`[${level.toUpperCase()}]:`, message)
} 
};

const newUtils = Object.create(utils);
console.log("Random number: ", newUtils.getRandomNumber(10000000));


console.log("Random alphanumeric string: ", newUtils.getRandomString(10));

let loggerLvl = 'info';
let messageFoLog = 'message';
console.log(newUtils.logger(loggerLvl, messageFoLog));


// console.log(utils.getRandomNumer);
// module.exports = {
//   utils,
// };