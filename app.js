const fs = require("fs");
 
// асинхронное чтение
fs.readFile("hello.txt", "utf8", (e, data)=>{
                if(e) throw e; 
                console.log(data); 
});
 
fs.writeFile("hello.txt", "Hi!", e=>{
    if(e) throw e; 
    console.log("Содержимое файла:");
});

fs.unlink("hello.txt", e => {
    if (e) console.log(e);   
    else console.log("hello.txt was deleted");
  });