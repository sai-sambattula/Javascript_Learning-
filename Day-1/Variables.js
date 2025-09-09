/* 

    -----var keyword

        1) Redeclare,reassign can be done
        2) Function scoped not block scoped 
        3) hoisted

*/

// function a() {
//     console.log(x)
//     var x=10;
//     var x=20;
//     console.log(x + " Before Declaration")
//     {
//         console.log(x)
//         var x = 20;
//     }
//     console.log(x + " After Declaration")
// }


// function b() {
//     console.log(x)
//     var x = 20;
//     var x = 30;
//     console.log(x + " Before Declaration")
//     {
//         console.log(x)
//         var x = 40;
//     }
//     console.log(x + " After Declaration")
// }

// ------------------------------------------------------------------------

/* 

    let Variable Declaration ------------------------------------------

    1) Cannot be Declare with in the blockscoped 
    2) reassingment can be done
    3) hoisting is not supportted (we cannot access the varibale before its decalration (due to temporal dead Zone))
*/

// function a() {
//     console.log("Funtion A Scoped........")
//     // console.log(x)  // cannot access before its
//     let x =10;
//     console.log(x + "With in First block before reassingment")
//     {
//         let x = 20;
//         console.log(x + "with in the another block befoere reassingment");
//         x = 40
//         console.log(x + "With in the another after reassignment.......")
//     }
//     // let x =20 // this is not possible with in the sameblock of scope 
//     x = 30
//     console.log(x + "With in First block after reassingment")
// }

// function b() {
//     console.log("Funtion B Scoped........")
//     // console.log(x)  // cannot access before its
//     let x =10;
//     console.log(x + "With in First block before reassingment")
//     {
//         let x = 20;
//         console.log(x + "with in the another block befoere reassingment");
//         x = 40
//         console.log(x + "With in the another after reassignment.......")
//     }
//     // let x =20 // this is not possible with in the sameblock of scope 
//     x = 30
//     console.log(x + "With in First block after reassingment")
// }


// -----------------------------------------------------------------------------------------

/* 
    const keyword

    cannot be redecalred and reassined also
    hoisting is not supportted (we cannot access the varibale before its decalration (due to temporal dead Zone))
    these are block scoped (with in the another block we can decalre another variavle wiht samename)

*/

function a() {
    console.log("Fucntion A scoped......")
    // const x; // must be initilize at the time of decalration 

    // console.log(x); // Cannot access 'x' before initialization
    const x =10

    {
    //     console.log(x) // here two conidtion (if x is declared in main block and another x is declared in hild block so that 
            // so that if i console(x) it gets error 
            //  if i console x and that not declared in the child block the we get the console
    // // )
        const x = 20; // redecalre the variable with in the another block
        // x=20 
        console.log(x)
    }
    // x=30; redeclaring cannnot be possible 
    console.log(x)
    
}

function b() {
    console.log("Fucntion B scoped......")
    // const x; // must be initilize at the time of decalration 

    // console.log(x); // Cannot access 'x' before initialization
    const x =10

    {
    //     console.log(x) // here two conidtion (if x is declared in main block and another x is declared in hild block so that 
            // so that if i console(x) it gets error 
            //  if i console x and that not declared in the child block the we get the console
    // // )
        const x = 20; // redecalre the variable with in the another block
        // x=20 
        console.log(x)
    }
    // x=30; redeclaring cannnot be possible 
    console.log(x)
}

a();
b();