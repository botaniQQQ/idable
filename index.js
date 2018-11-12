module.exports = (len = 8, only) => {
    let str = '';
    let letters = {
        vowels:     ['a','e','i','o','u'],
        consonants: ['b','c','d','f','g','h','j','k','l','m']
    };
    let numbers = {
        numbers: ['1','2','3','4','5','6','7','8','9','0']
    };
    for (let i = 0; i < len; i++) {
        let letter = {
            vowel:     letters.vowels[Math.floor(Math.random()*letters.vowels.length)],
            consonant: letters.consonants[Math.floor(Math.random()*letters.consonants.length)],
        };
        let number = {
            number: numbers.numbers[Math.floor(Math.random()*numbers.numbers.length)]
        };
        let types = only === true
            ? number
            : only === false
                ? letter
                : Object.assign(letter, number);
        let type = Object.keys(types)[Math.floor(Math.random()*Object.keys(types).length)];
        let l1 = letter[type];
        let l2 = type === 'vowel'
            ? (str && letters.vowels.filter((l) => l === str[str.length-1]).length)
                ? letter.consonant + types[type]
                : types[type] + letter.consonant
            : type === 'consonant'
                ? (str && letters.consonants.filter((l) => l === str[str.length-1]).length)
                    ? letter.vowel + types[type]
                    : types[type] + letter.vowel
                : type === 'number'
                    ? types[type] + numbers.numbers[Math.floor(Math.random()*numbers.numbers.length)]
                    : '';
        str += (str + l2).length <= len
            ? l2
            : (str + l1).length <= len
                ? l1
                : '';
    }
    return str;
};