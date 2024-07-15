function replaceSpace(str, length) {
    let result = [];
    let p = 0;
    while(p < length) {
        if (str.at(p) !== ' ') {
            result.push(str.at(p))
        } else {
            result.push('%20');
        }
        p+=1;
    }

    return result.join('');
}


console.log(replaceSpace('Mr John Smith      ', 13));
