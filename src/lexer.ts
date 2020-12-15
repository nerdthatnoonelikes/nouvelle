const list = (contents: string) => {
    let list = [];
    for (const x of contents) {
        list.push(x);
    }
    return list;
}

export const lexer = (contents: string) => {
    let tok = "";
    let state = 0;
    let string = "";
    let expr = "";
    let tokens: string[] = [];
    let isexpr = 0;
    for (const x of list(contents)) {
        tok += x;
        if (tok === " ") {
            if (state === 0) {
                tok = "";
            } else {
                tok = " ";
            }
        } else if (tok === "\n" || tok === "<EOF>") {
            if (expr != "" && isexpr === 1) {
                tokens.push(`EXPR:${expr}`); 
                expr = "";
            } else if (expr != "" && isexpr === 0) {
                tokens.push(`NUM:${expr}`);
                expr = ""
            }
            tok = ""
        } else if (tok === "PRINT" || tok === "print") {
            tokens.push("PRINT");
            tok = "";
        } else if (tok === "0" || tok === "1" || tok === "2" || tok === "3" || tok === "4" || tok === "5" || tok === "6" || tok === "7" || tok === "8" || tok === "9") {
            expr += tok;
            tok = "";
        } else if (tok === "+" || tok === "-" || tok === "*" || tok === "/" || tok === "(" || tok === ")") {
            isexpr = 1;
            expr += tok;
            tok = "";
        } else if (tok === "\"") {
            if (state === 0) {
                state = 1;
            } else if (state === 1) {
                tokens.push(`STRING:${string}`)
                string = "";
                state = 0;
                tok = "";
            };
        } else if (state === 1) {
            string += tok;
            tok = "";
        }
    }
    return tokens;
};