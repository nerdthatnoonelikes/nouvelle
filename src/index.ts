import fs from "fs";
import { lexer } from "./lexer";

const data = fs.readFileSync("test/main.nv", "utf-8");

console.log(lexer(data));