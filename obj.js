var prefixesDivBy5 = function(nums) {
    let res = [];
    let value = 0;

    for (let bit of nums) {
        value = (value * 2 + bit) % 5;
        res.push(value === 0);
    }

    return res;
};
