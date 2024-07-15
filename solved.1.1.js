function isUniq(str) {
    let p = 0;
    let step = 1;
    while(step < str.length) {
        const letter = str.at(p);

        for(let j = step; j < str.length; j++) {
            if (letter === str.at(j)) return false;
        }
		p += 1;
		step += 1;

    }
    return true;
}

console.log(isUniq('abc'));
console.log(isUniq('bcdc'));
