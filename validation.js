module.exports.validation = function(options){
   if (!options.shift) {
      process.stderr.write("you don't enter shift parametr \n");
      process.exitCode = 1;
      process.exit(1);
   }
   
   if (!options.action) {
      process.stderr.write("you don't enter action parametr \n");
      process.exitCode = 1;
      process.exit(1);
   }
   
   if (!Number.isInteger(+options.shift)) {
      process.stderr.write("you need enter integer shift \n");
      process.exitCode = 1;
      process.exit(1);
   }
   
   if (options.action !== "encode" && options.action !== "decode") {
      process.stderr.write("you need enter encode/decode action \n");
      process.exitCode = 1;
      process.exit(1);
   }
}