const array = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, [1, 2, 3], { key: 'value' }];

const dynamicTypeCount = {};

for (const item of array) {
    const type = typeof item;
    if (!(type in dynamicTypeCount)) {
        dynamicTypeCount[type] = 0;
    }
    dynamicTypeCount[type]++;
}

console.dir(dynamicTypeCount);
