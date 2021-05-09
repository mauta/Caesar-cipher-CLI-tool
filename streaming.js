const fs = require("fs");
const {
   Transform
} = require('stream');

const {
   caesar
} = require("./caesar");

module.exports.streaming = function (input, output, shift, action) {
   fs.readFile(input, "utf8",
      function (error, data) {
         if (error) {
            process.stderr.write("Sorry, I cann't read this file \n");
            process.exitCode = 1;
            process.exit(1);
         }
      });
   let readStream = fs.createReadStream(input, "utf8");
   let writeableStream = fs.createWriteStream(output, {
      flags: 'a'
   });
   const transformStream = new Transform({
      transform(chunk, encoding, callback) {
         this.push('\n');
         this.push(caesar(chunk.toString("utf8"), shift, action))
         callback();
      }
   });

   readStream.pipe(transformStream).pipe(writeableStream)
}