const fs = require("fs");
const getFilesAndFolders = (folder) => {

  const items = [];
  fs.readdirSync(folder).forEach((item) => {

    const itemPath = `${folder}/${item}`;
    const stats = fs.statSync(itemPath);

    if (stats.isFile()) {
      items.push({
        type: "file",
        name: item,
        path: itemPath,
      });
    } 
    else if (stats.isDirectory()) {
      items.push({
        type: "folder",
        name: item,
        path: itemPath,
      });
      items.push(...getFilesAndFolders(itemPath));
    }
  });
  console.log(items);
  return items;
};

const folderPath = "./my-folder";
const items = getFilesAndFolders(folderPath);
const result = JSON.stringify(items, null, 2);
console.log(result);
