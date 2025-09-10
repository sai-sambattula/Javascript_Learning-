
/* 
// There two types of DataTypes
    1)Primitives (Number , Boolean , String , null , undefined )
    2)Non-Primitives (object,arrays,functions)
*/

// let num = 12233;
// console.log(typeof num); //number type

// let bool = true ;
// console.log(typeof bool); //boolean type

// let str ="Chatgpt Mawa"; 
// console.log(typeof str) // string type

// let nullvariable = null;
// console.log(nullvariable)
// console.log(typeof nullvariable)  //object type (js quirk)

// let undefinedvariable = undefined;
// console.log(undefinedvariable)
// console.log(typeof undefinedvariable)


let a =10;
let b=a;

console.log("Value of A: ",a);
console.log("Value of B(before changing a value) : ",b);
a=40;
console.log("Value of B(after changing a value) : ",b);

/*
here in primitives values are stored in the stack memory as seprate container like invidual container
we are just assinging the value of a to b
not the address like in the nonprrimitives 
so value is shared 
whemver value changed in a it doesnot refelct the b
because values stored is stack memory as seperate container 
pass by values
*/

let arr1 = [1,2,3];
let arr2 = arr1;
arr1=[]
console.log("assign data of arr1 to arr2",arr1, arr2); // [1,2,3,4] [1,2,3,4]
arr2.push(4);
console.log("after changing data in arr2",arr1, arr2); // [1,2,3,4] [1,2,3,4]

/* 
Stack:                        Heap:
 arr1 ──┐
        │
 arr2 ──┘─────►  [ 1, 2, 3 ]  (array in heap memory)

After arr2.push(4):
 Heap array becomes [1, 2, 3, 4]

Stack:
 arr1 ──┐
        │
 arr2 ──┘─────►  [ 1, 2, 3, 4 ]

 from this diagram in the non primitive dataypes 
 data is not stored in the stack,mememory address is stored in the stack memory and actual data is stored in heap memory

 step1 : creating arr1 addfress is stored in the stack and data is stored in the heap memory
 step2 : assifning the arr1 to arr2 so that both variable pointing to the same memory address 
 ste3 : changinf arr2 data so data is the heap memory is changed 
 step4 : here two variables holding same address so that address of that particualr data is changed it reflects in the both the vaiables 

*/

// Golden Rule:

// Primitives → copy by value (independent).

// References → copy by reference (shared).
