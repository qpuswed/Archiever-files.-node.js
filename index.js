import fs from "fs";
import { createGzip } from "zlib";
const path = "./dist/numb1.txt"


let files = ["./dist/numb1.txt","./dist/numb2.txt","./dist/numb3.txt","./dist/numb4.txt","./dist/numb5.txt","./dist/numb6.txt","./dist/numb7.txt","./dist/numb8.txt","./dist/numb9.txt","./dist/numb10.txt"
]

let index = 0;

for (let file of files){
    index++;
    let readableStream = fs.createReadStream(file);
    let writeableWrite = fs.createWriteStream(`./dist/numb${index}.txt.gz`);
    readableStream.pipe(createGzip()).pipe(writeableWrite).on("finish", () => {
     console.log(`Файл успешно сжат и сохранён как ${file}.gz`)});
}

