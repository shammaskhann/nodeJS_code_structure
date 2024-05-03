// // import fs from ""; // Advance way to import file in javsascript es6 feature default node js does not support this feature
//  const fs = require("fs"); // es5 way to import file in node js

//  fs.writeFileSync("hello.txt", "Hello World from Node JS"); // writeFileSync is a synchronous function
 
// //console.log("Hello World!"); // console.log is a synchronous function
// // var http = require('http');
// fs.unlink("hello.txt", (err) => {
//     if (!err) console.log("File Deleted"); // if file is deleted successfully then it will print this message
// }); // unlink is a synchronous function
// fs.appendFileSync("hello.txt", "Hello World from Node JS2"); // appendFileSync is a synchronous function]
// fs.readFile("hello.txt","utf-8" ,(err, data) => {
//        if (!err) console.log(data);
   
// }); // readFileSync is a synchronous function
// fs.renameSync("hello.txt", "hello2.txt"); // renameSync is a synchronous function
 const fs = require("fs"); // es5 way to import file in node js
function readFile(srcPath){
       fs.readFile(srcPath,"utf-8" ,(err, data) => {
              err ? console.log(err) : console.log('Read: '+data);
       });
}
function writeFile(srcPath, data){
       fs.writeFile(srcPath, data, (err) => {
              err ? console.log(err) : console.log('Write Successfull');
       });
}
function appendFile(srcPath,data){
       fs.appendFile(srcPath, data, (err) => {
              err ? console.log(err) : console.log('Append Successfull');
       });
}
function unlinkFile(srcPath){
       fs.unlink(srcPath, (err) => {
              err ? console.log(err) : console.log('Delete Successfull');
       });
}
function renameFile(srcPath, destPath){
       fs.rename(srcPath, destPath, (err) => {
              err ? console.log(err) : console.log('Rename Successfull');
       });
}
function copyFile(srcPath, destPath){
       fs.copyFile(srcPath, destPath, (err) => {
              err ? console.log(err) : console.log('Copy Successfull');
       });
}
function readDir(srcPath){
       fs.readdir(srcPath, (err, data) => {
              err ? console.log(err) : console.log('Read Directory Successfull');
       });
}
function makeDir(srcPath){
       fs.mkdir(srcPath, (err) => {
              err ? console.log(err) : console.log('Make Directory Successfull');
       });
}
writeFile("hello.txt", "Hello World from Node JS");
readFile("hello.txt");
appendFile("hello.txt", "Hello World from Node JS2");
readFile("hello.txt");
readDir("hello.txt");
makeDir("hello.txt");
unlinkFile("hello.txt");
readFile("hello.txt");
renameFile("hello.txt", "hello2.txt");
readFile("hello2.txt");
copyFile("hello2.txt", "hello3.txt");
readFile("hello3.txt");
unlinkFile("hello2.txt");
unlinkFile("hello3.txt");
readFile("hello2.txt");
readFile("hello3.txt");