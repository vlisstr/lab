const array = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, [1, 2, 3], { key: 'value' }];

const typeCount = { number: 0, string: 0, boolean: 0, object: 0, undefined: 0 };

for (const item of array) {
    const type = typeof item;
    if (type in typeCount) {
        typeCount[type]++;
    }
}

console.dir(typeCount);
