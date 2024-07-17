import fs from "fs/promises";
import path from "path";
import { FILENAMES } from "./constants.js";

const rootDir = path.join(path.resolve(), "files");

/** Utility to create /files directory if one doesn't exist */
export const createFilesDir = async () => {
  await fs.mkdir(rootDir, { recursive: true });
  console.log("[INFO] Files directory has been created");
};

/** Utility to store a number in a particular file (overwrites previous entry) */
export const storeNumberInFile = async (filename, number) => {
  const filePath = path.join(rootDir, filename);
  try {
    await fs.writeFile(filePath, String(number), { encoding: "utf8" });
  } catch (err) {
    throw new Error("Something went wrong while storing in file " + filename);
  }
};

/** Utility to return a number stored in a file or else undefined */
export const getNumberFromFile = async (filename) => {
  const filePath = path.join(rootDir, filename);
  try {
    const data = await fs.readFile(filePath, "utf8");
    return Number(data);
  } catch (err) {
    throw new Error("Something went wrong while reading from file " + filename);
  }
};

/** Utility to return a list of numbers stored in all files */
export const getNumbersFromFiles = async () => {
  const filePaths = FILENAMES.map((filename) => path.join(rootDir, filename));
  const numbers = [];

  for (const filePath of filePaths) {
    try {
      const data = await fs.readFile(filePath, "utf8");
      numbers.push({ path: filePath, number: Number(data) });
    } catch (err) {
      console.error("Couldn't access file or file doesn't exist at " + filePath);
      // number would be undefined
      numbers.push({ path: filePath });
    }
  }

  return numbers;
};
