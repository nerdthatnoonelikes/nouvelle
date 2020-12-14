import fs from "fs";
import { lexer } from "./lexer";
import { parse } from "./parser";

const data = fs.readFileSync("test/main.nv", "utf-8");

const toks = lexer(data);
parse(toks);