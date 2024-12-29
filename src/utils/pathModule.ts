import path from "path";

const myPath = String.raw`C:\programming\githu-pessoal\node-chronicles-part-1\src\utils`

const pathInfo = {
  fileName: path.basename(myPath),
  folderName: path.dirname(myPath),
  fileExtension: path.extname(myPath),
  absoluteOrNot: path.isAbsolute(myPath),
  detailInfo: path.parse(myPath),
}

export function showPathInfo() {
  console.log(pathInfo);
}
