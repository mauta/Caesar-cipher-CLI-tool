module.exports.caesar = function (str, shift, type) {
   const codeArr = [];
   const temp = str.split('').map(el => el.charCodeAt(0))
   shift = shift % 26;
   shift = (type === 'encode') ? shift : -1 * shift;
   if (shift < 0) {
      shift = 26 + shift
   }
   temp.forEach(el => {
      if (el < 91 && el > 64) {
         let inner = el - 65;
         inner = (inner + shift) % 26;
         el = 65 + inner;
         codeArr.push(el)
      } else if (el < 123 && el > 91) {
         let inner = el - 97;
         inner = (inner + shift) % 26;
         el = 97 + inner;
         codeArr.push(el)
      } else {
         codeArr.push(el)
      }
   })
   return String.fromCharCode(...codeArr);
}