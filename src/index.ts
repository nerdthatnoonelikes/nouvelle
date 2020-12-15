import fs from "fs";
import { lexer } from "./lexer";
import { parse } from "./parser";

let data = fs.readFileSync("test/main.nv", "utf-8");

data += "<EOF>"

const toks = lexer(data);
parse(toks);