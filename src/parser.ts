export const parse = (toks: string[]) => {
    let i = 0;
    while (i < toks.length) {
        if (toks[i] + " " + toks[i+1].slice(0, 6) === "PRINT STRING" || toks[i] + " " + toks[i+1].slice(0,3) === "PRINT NUM" || toks[i] + " " + toks[i+1].slice(0,4) === "PRINT EXPR") {
            if (toks[i+1].slice(0, 6) === "STRING") {
                console.log(toks[i+1].slice(8));
            } else if (toks[i+1].slice(0, 3) === "NUM") {
                console.log(toks[i+1].slice(4));
            } else if (toks[i+1].slice(0, 4) === "EXPR") {
                console.log(toks[i+1].slice(5));
            }
            i+=2;
        }
    }
}