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
    let tokens = [];
    for (const x of list(contents)) {
        tok += x;
        if (tok === " ") {
            if (state === 0) {
                tok = "";
            } else {
                tok = " ";
            }
        } else if (tok === "PRINT") {
            tokens.push("PRINT");
            tok = "";
        } else if (tok === "\"") {
            if (state === 0) {
                state = 1;
            } else if (state === 1) {
                tokens.push(`STRING:${string}`)
                string = "";
                state = 0;
            };
        } else if (state === 1) {
            string += tok;
            tok = "";
        }
    }
    return tokens;
}