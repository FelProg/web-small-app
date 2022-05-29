
let str = 'using System; class Program {  public static void Main (string[] args) {    Console.WriteLine ("Hello World");  }}';
//let str = 'console.log("Hola mundo");';

let result = str.split(/([\s\[\];,\(\).\{\}\"\'])/);

result = result.filter(function(e){return e.trim() != '';})
console.log(result);
result.forEach(element => {
    console.log(element);    
});

