/*
Control Flow in JS
if (condition) { ... }
if (condition) { ... } else { ... }
if (condition) { ... } else if (condition2) { ... }
if (condition) { ... } else if (condition2) { ... } else if (condition3) { ... }
if (condition) { ... } else if (condition2) { ... } else { ... }
*/

var str;
var value = prompt('Number?');
switch (value) {
  case 1:
  case '1':
    str = "One";
    console.log('before break', str);
    break;
  case 2:
  case '2':
    str = "Two";
    break;
  default:
    str = value.toString();
    break;
}
console.log(str);

/*
// Loop until condition turns not-truthy
while (condition) { condition _has to change_ }

do { ... } while (condition);

for (setup; condition; change variable)
for (var i = 0; i < value; i++) { ... }

var i = 0;
while (i < value) {
  ...
  i++;
}
*/

var names = [ 'Keith', 'Kevin' ];
for (var i = 0; i < names.length; i++) {
  console.log(i, names[i]);
}

var name;
do {
  name = prompt('Name?');
  console.log('Name', name);
} while (!name);
console.log(name);

/* 
More loop stuff:
- break means stop looping
- continue means skip the rest of this iteration, go back to beginning
*/

for (var i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('continuing');
    continue;
  }

  if (i === 4) {
    console.log('breaking');
    break;
  }

  console.log('i = ', i);
}


/*
Falsey values
- 0
- null
- NaN
- undefined
- false
- ''
Truthy values: everything else

Combining conditions:
- Not: !
- And: &&
- Or:  ||

- Keith to be one of 'teacher' or 'instructor'
- Keith === 'teacher' || 'instructor'   <= DOES NOT WORK
- Keith === 'teacher' || Keith === 'instructor'   <= DOES WORK

- (n < 5 && n > 0) || n === 7 || n < 0

Short-circuiting:
- If we know the answer from the first expression, don't evaluate the second expression

false && console.log('hi');
true || console.log('hi');


*/

var answer;
do {
  answer = prompt('Is today good?');

  answer = answer && answer.toUpperCase();

  if (answer) { // or answer == null or answer === null
    answer = answer.toUpperCase();
  }

  console.log('Good?', answer);
} while (answer != 'N' && answer != 'Y');
console.log(answer);

/*

Comparison operators:
- <   Less than
- <=  Less then or equal to
- >   Greater than
- >=  Greater than or equal to

- ==  Kinda equals
- !=  Kinda not equals

- === Strictly equals
- !== Strictly not equals

*/
