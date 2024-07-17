import express from "express";
import { MULTIPLICATION_FACTOR } from "../utils/constants.js";
import { getNumbersFromFiles, storeNumberInFile } from "../utils/storage.js";

const router = express.Router();

/** GET: /numbers to get the list of all numbers stored in all files */
router.get("/numbers", async (req, res) => {
  const numbers = await getNumbersFromFiles();
  return res.json({ numbers });
});

/** POST: /numbers to store a number in a file */
router.post("/numbers", async (req, res) => {
  const { number: originalNumber } = req.body;

  if (originalNumber === undefined) {
    return res.status(400).json({ msg: "BAD REQUEST: Number is required" });
  }

  if (typeof originalNumber !== "number") {
    return res
      .status(400)
      .json({ msg: "BAD REQUEST: Expected a number but received something else" });
  }

  if (originalNumber < 1 || originalNumber > 25) {
    return res.status(400).json({ msg: "BAD REQUEST: Number should be between 1 to 25" });
  }

  const finalNumber = originalNumber * MULTIPLICATION_FACTOR;

  if (finalNumber > 140) {
    // store in file A
    await storeNumberInFile("A", finalNumber);
  } else if (finalNumber > 100) {
    // store in file B
    await storeNumberInFile("B", finalNumber);
  } else if (finalNumber > 60) {
    // store in file C
    await storeNumberInFile("C", finalNumber);
  } else {
    // store in file D
    await storeNumberInFile("D", finalNumber);
  }

  return res.json({ msg: "Number has been stored" });
});

export default router;
