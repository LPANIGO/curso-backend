import yargs from "yargs";

const yargInstance = yargs(process.argv.slice(2)).default({ //seteo args
    m:'prod',
    p:0,
    d:false
}).alias({
    m:"MODE",
    p:"PORT",
    d:"DEBUG"
})

const args = yargInstance.argv; //accedo a args
const config = {
    mode: args.MODE,
    port:args.PORT,
    debug: args.DEBUG,
    others: args._
} 

//console.log(yargInstance);
console.log(args);