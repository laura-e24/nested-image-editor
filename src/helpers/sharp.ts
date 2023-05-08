import sharp from "sharp";
import fs from "fs";

export const grayscaleFn = async (path: string) => {
  const newPath = `${process.cwd()}/src/thumbnails/mocked.jpg`;

  if (!fs.existsSync(`${process.cwd()}/src/thumbnails`)) {
    fs.mkdirSync(`${process.cwd()}/src/thumbnails`);
  }

  await sharp(path).withMetadata().grayscale().toFile(newPath)
}