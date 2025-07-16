let persons = ['MH', 'SAIFAN',"Others"];
console.log(persons);

let num = [1,2,3,4,5,6];

num.forEach( function (item, index, arr) {
console.log(item, index, arr);

} );

//console.log ( persons.pop() )

//persons[3] = 'any one';
persons.push('any one');

persons.unshift("hello");
console.log(persons);   

let arrNew = [ ["Vegans", "Italy", [ "Software", "Server" ]], ["Iplus", "Dhaka"] ];

console.log(arrNew[0][2][1]);
