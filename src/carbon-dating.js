const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') return true;
  let z = parseFloat(sampleActivity)
  if (z) return true;
  if (z > 15 || z < 0) return false;
  return Math.ceil(Math.log(15 / z) / (Math.LN2 / 5730))
}
// function dateSample(sampleActivity) {
//    if (typeof sampleActivity != 'string') return false;
//   let sa = parseFloat(sampleActivity)
//   if (!sa) return false;
//   if (sa < 0 || sa > 15) return false;
//   return Math.ceil(Math.log(15/sa)/(Math.LN2/5730))
// }

module.exports = {
  dateSample
};
