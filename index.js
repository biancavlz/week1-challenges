console.log('Welcome to the array & DOM challenges');

// -----------CHALLENGE 1----------
// INSTRUCTIONS: use Array.forEach() to console.log() each element

// DO NOT TOUCH BELOW
var arr = [
    'Hello',
    'my',
    'name',
    'is',
    'John',
];
// DO NOT TOUCH ABOVE

function logArrayElements(input) {

    input.forEach(function(el){
        console.log(el)
    })
}

logArrayElements(arr);

// -----------CHALLENGE 2----------
// INSTRUCTIONS: use Array.map() to return a new array with the uppercase elements
// expected result:
// [
//     'HELLO',
//     'MY',
//     'NAME',
//     'IS',
//     'JOHN',
// ]

function transformUppercase(input) {
    var elements = input.map(function(el){
        return el.toUpperCase()
    })
    return elements
}

// UNCOMMENT BELOW
console.log(transformUppercase(arr));

// -----------CHALLENGE 3----------
// INSTRUCTIONS: use Array.reduce() to concatenate all the strings in the array
// expected result: 'Hello my name is John'
function reduceStrings(input) {

    var string = input.reduce(function(acc, curr){
        return acc + curr + " "
    }, '')

    return string
}
console.log(reduceStrings(arr))


// -----------CHALLENGE 4----------
// INSTRUCTIONS: use Array.map() to return an array containing the city of each element
// expected result:
// [
//     'Berlin',
//     'New York',
//     'Sydney',
//     'Tokyo',
// ];

// DO NOT TOUCH BELOW
arr = [
    {
        name: 'John',
        address: { city: 'Berlin' },
        age: 30
    },
    {
        name: 'Albert',
        address: { city: 'New York' },
        age: 25
    },
    {
        name: 'Hannah',
        address: { city: 'Sydney' },
        age: 19
    },
    {
        name: 'Paul',
        address: { city: 'Tokyo' },
        age: 41
    },
]

// DO NOT TOUCH ABOVE

function getCitiesArray(input) {
    var cities = input.map(function(el){
        return el.address.city
    })

    return cities
}

console.log(getCitiesArray(arr));

// -----------CHALLENGE 4----------
// INSTRUCTIONS: use Array.find() to return the person living in Sydney
// expected result:
// {
//     name: 'Hannah',
//     address: { city: 'Sydney' },
// },

function getSydneyCitizen(input) {
    var inSydney = input.find(function(el){
        return el.address.city === 'Sydney'
    })
    return inSydney
}


console.log(getSydneyCitizen(arr));

// -----------CHALLENGE 5----------
// INSTRUCTIONS: use Array.filter() to return a new Array with persons older than 24 years
// expected result:
// [
//     {
//         name: 'Hannah',
//         age: 36
//         address: { city: 'Sydney' },
//     },
//     {
//         name: 'Paul',
//         age: 48,
//         address: { city: 'Tokyo' },
//     },
// ];

// DO NOT TOUCH BELOW
arr.forEach(function(el, index) {
    el.age = (index + 1) * 12;
});
// DO NOT TOUCH ABOVE
function getWisePeople(input) {
    var olderPeople = input.filter(function(el){
        if (el.age > 25){
            return el
        } 
    })

    return olderPeople
}

console.log(getWisePeople(arr));

// -----------CHALLENGE 5----------
// INSTRUCTIONS: use Array.slice() to return a new array with the two people in the middle
// expected result:
// [
//     {
//         name: 'Albert',
//         age: 24,
//         address: { city: 'New York' },
//     },
//     {
//         name: 'Hannah',
//         age: 36,
//         address: { city: 'Sydney' },
//     },
// ]

function getMiddlePeople(input) {
    return input.slice(1,3)
}

console.log(getMiddlePeople(arr));

// -----------CHALLENGE 6----------
// INSTRUCTIONS:
// 1. Use document.querySelector to select all paragraphs.
// 2. Use Array.map() to return a new array with all of the heights (element.clientHeight) of the selected paragraphs.
// HINT: don't forget to wrap document.querySelector in Array.from()

function getParagraphHeights() {
    var getsParagraphs = document.querySelectorAll('.paragraph')
    var array = Array.from(getsParagraphs)

    var heights = array.map(function(el){
        return el.clientHeight;
    })
    return heights
}

console.log(getParagraphHeights())

// -----------CHALLENGE 6----------
// INSTRUCTIONS:
// 1. Use document.querySelector to select one paragraph
// 2. Use Object.keys() to get an array of all keys of the element.style property
// 3. Finally, use Array.filter() to return a new array with keys that start with the letter 'm'

function getFilteredStyleKeys() {
    var paragraph = document.querySelector('.paragraph')
    var styleKeys = Object.keys(paragraph.style)
    var keysWithM = styleKeys.filter(function(el){
        return el[0] === 'm'
    })
    return keysWithM
}
    
console.log(getFilteredStyleKeys())

// -----------CHALLENGE 7----------
// INSTRUCTIONS:
// 1. Use document.querySelectorAll to select all paragraphs.
// 2. Use Array.forEach() to modify the 'innerHTML' of each element. You can set just any text inside.

function changeHtml() {
    var getsParagraphs = document.querySelectorAll('.paragraph')
    var array = Array.from(getsParagraphs)
    array.forEach(function(el){
        el.innerHTML = "Stay true to yourself, yet always be open to learn. Work hard, and never give up on your dreams, even when nobody else believes they can come true but you."
    })
}


changeHtml()
