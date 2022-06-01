
const fs = require("fs");

console.time("sync"); //"sync" puede ser cualquier palabra, pero deben ser iguales
const data = fs.readFileSync("bigfile.pdf");
console.timeEnd("sync"); //"sync" puede ser cualquier palabra, pero deben ser iguales

console.time("callback"); //"callback" puede ser cualquier palabra, pero deben ser iguales
console.time("async"); //"async" puede ser cualquier palabra, pero deben ser iguales
fs.readFile("bigfile.pdf", (err,data) => {
    console.timeEnd("callback"); //"callback" puede ser cualquier palabra, pero deben ser iguales
    if (err) throw err;

});
console.timeEnd("async");//"async" puede ser cualquier palabra, pero deben ser iguales