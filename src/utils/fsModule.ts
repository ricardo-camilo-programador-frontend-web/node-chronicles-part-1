import fs from "fs";

export function createFile(path: string, data: string) {
  fs.writeFile(path, data, (err) => {
    if  (err) throw err;
    console.log("File created successfully");
  })
}

export function writeFile(path: string, data: string) {
  fs.writeFile(path, data, (err) => {
    if (err) throw err;
    console.log("File written successfully");
  });
}

export function readFile(path:string) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data)
  });
}

export function deleteFile(path: string) {
  fs.unlink(path, (err) => {
    if (err) throw err;
    console.log("File deleted successfully");
  })
}

export function renameFile(path: string, newPath: string) {
  fs.rename(path, newPath, (err) => {
    if (err) throw err;
    console.log("File renamed successfully");
  })
}