function testVar() {
    var v = 10;
    if (true) {
        var v = 20; //ตัวแปร x ถูกประกาศใหม่ใน block นี้ แต่จะไปทับซ้อนกับตัวแปร x ที่ประกาศไว้ก่อนหน้านี้
        console.log(v); // 20
    }
    console.log(v); // 20 - x ถูกประกาศใหม่ใน block และค่าใหม่ถูกรำไปใช้ทั่วทุกฟังก์ชัน
}
//ตัวอย่างการใช้ let
function testLet() {
    let l = 10;
    if(true) {
        let l = 20; // ตัวแปร y ถูกประกาศใหม่ใน block นี้และจะมีผลเฉพาะใน block นี้เท่านั้น
        console.log(l); // 20
    }
    console.log(l); // 10 - y ภายนอก block ยังคงเป็น 10 เนื่องจาก y ใน block ไม่มีผลนอก block 
}
// ตัวอย่างการใช้ const
function testConst() {
    const c = 10;
    if (true) {
        const c = 20; // ตัวแปร c ถูกประกาศใหม่ใน block นีและจะมีผลเฉพาะใน block นี้เท่านั้น
        console.log(c); // 20 - c ภายนอก block ยังคงเป็น 10 เนื่องจาก c ใน block ไม่มีผลนอก block
    }
    console.log(c);
}
testVar();
console.log();
testLet();
console.log();
testConst();

let message = "Hello, World!"; //string
let score = 95; // Number
let isPassed = true; //Boolean
let emptyValue = null; //Null
let notDefined; // Undefined
let person = { name: "Alice", aeg: 25 }; // Object
let numbers = [1,2,3,4]; //Array 

console.log(typeof message); // "string"
console.log(typeof score); // "number"

// Logical Operators (ตัวดำเนินการทางตรรกะ)
let age = 20;
let isAdult = (age >= 18) && (age < 65); // AND
let isChild = (age < 18) || (age > 65); //OR
let notAdult = !isAdult; //NOT
console.log("isAdult:", isAdult);
console.log("isChild", isChild);
console.log("notAdult:", notAdult);

// Ternary Operators (ตัวดำเนินการแบ่งสามส่วน)
let score2 = 85;
let grade = (score2 >= 80) ? "A" : "B"; // ถ้า score >=9 ให้ A, ไม่งั้นให้ B
console.log("Grade:", grade);



let score3 = 75;
if (score3 >= 80) {
    console.group("เกรด A" );
} else if (score3 >= 70) {
    console.log("เกรด B");
} else if (score3 >= 60) {
    console.log("เกรด C");
} else {
    console.log("ตก");
}

//while lopp: แสดงตัวเลข 1 ถึง 5le
// let j = 1;
// while (j <= 5) {
//     console.log(j);
//     j++;
// }

//สร้าง Array ของชื่อผลไม้
let fruits = ["Apple", "Banana", "Cherry"];

// วนลูปผ่าน Array โดยใช้ for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
} 









