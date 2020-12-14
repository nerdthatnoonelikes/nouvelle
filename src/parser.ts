export const parse = (toks: string[]) => {
    let i = 0;
    while (i < toks.length) {
        if (toks[i] + " " + toks[i+1].slice(0, 6) === "PRINT STRING") {
            console.log(toks[i+1].slice(8));
            i+=2;
        }
    }
}