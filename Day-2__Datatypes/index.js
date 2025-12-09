// Data Type.........


console.log("by value");


const n1 = 100;

let n2 = 200;

console.log("n1->",n1);
console.log("n2->",n2);

n2 = n1;

console.log("n1->",n1);
console.log("n2->",n2);

console.log("By Reference");

const obj1 = {
    Name : "Pratik",
    course : "Master in Fronted"
}

const obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj2.Name = "Utsav";
obj2.course ="Fullstack Devlopment";


console.log(obj1);
console.log(obj2);

console.log("Type=",typeof obj1);

//1. String

let place = "Bhavanger";
console.log("Place=>",place);
console.log("Type:",typeof place);

//2. Number 

let age = 20;
console.log("Age:",age);
console.log("Type:",typeof age);

//3. Bigint

let bigNum = 65434682341654656565684563546n;

console.log("BigInt:",bigNum);
console.log("Type:",typeof bigNum);

//4. Boolean

let isStudent = true;
console.log("isStudent: " , isStudent);
console.log("Type of isStudent:", typeof isStudent);

//5. Null

let nullvalue = null;
console.log("Null Datatype:",nullvalue);
console.log("Type:",typeof nullvalue);


//6. Undefined

let uninitialized;
console.log("uninitialized: " ,uninitialized);
console.log("Type of uninitialized:", typeof uninitialized);

