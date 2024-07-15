function isPermutate(s1, s2) {
    if (s1.length !== s2.length) return false;

    const table1 = s1.split('').reduce((acc, l) => ({ ...acc, [l]: acc[l] ? acc[l] + 1 : 1 }), {});
    const table2 = s2.split('').reduce((acc, l) => ({ ...acc, [l]: acc[l] ? acc[l] + 1 : 1 }), {});

    console.log(table1);
    console.log(table2);

    for (const p in table1) {
        if (!table2[p] || table2[p] !== table1[p]) return false;
    }
    return true;
}

console.log('abcs', 'acsb');
console.log(isPermutate('abcs', 'acsb'));

console.log('aaabv', 'aaabc');
console.log(isPermutate('aaabv', 'aaabc'));


