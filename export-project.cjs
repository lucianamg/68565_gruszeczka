const fs = require("fs");
const path = require("path");

const outputFile = "exported_project.txt";
const extensions = [".js", ".jsx", ".ts", ".tsx", ".css", ".html", ".json"];

const shouldIgnore = (filePath) => {
  return (
    filePath.includes("node_modules") ||
    filePath.includes("dist") ||
    filePath.includes(".git") ||
    filePath.includes(".next") ||
    filePath.includes("build")
  );
};

const exportFiles = (dir, output) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (shouldIgnore(fullPath)) continue;

    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      exportFiles(fullPath, output);
    } else if (extensions.includes(path.extname(fullPath))) {
      const content = fs.readFileSync(fullPath, "utf8");
      output.write(`\n\n==== ${fullPath} ====\n\n`);
      output.write(content);
    }
  }
};

const out = fs.createWriteStream(outputFile);
exportFiles(".", out);
console.log(`✅ Proyecto exportado a ${outputFile}`);

