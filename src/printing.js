import caesar from "./caesar.js";

export default function printing(shift, action){
   process.stdout.write("enter your text:\n");
   process.stdin.on('data', (data) => {
      process.stdout.write("your text after encryption:\n");
      process.stdout.write(caesar(data.toString('utf8'), shift, action));
      process.exit(0);
   })
}