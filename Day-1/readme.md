from Now started rebuilding the strong foundation in javascript 

Day 1 -> 09-09-2025

    Datatypes and Variables

    ----------------------------------------    Variables --------------------------------
    
        variables are like named containers which is used to store the  any type of data (like primitives and nonprimitives types of data)

            variables are declared in 3 ways in javascript 

                1.Var 2.let 3.Const 


                --------------------  So first Discuss about the Var  -------------------

                    ---------------------------------using var keyword to decalre the variable 

                     *using var keyword we can redecalre and reassign the variables 

                            var a =10 
                            then 
                            var a=20 
                            a=30 
                            this is allowed in the var variable decalration

                            and and also function scoped 

                                            function a() {
                                                    console.log(x) // undefined (due to hoisting)
                                                    var x=10;
                                                    console.log(x + " Before Declaration")
                                                    {
                                                        console.log(x) // undefined (due to hoisting)
                                                        var x = 20;
                                                    }
                                                    x=30
                                                    console.log(x + " After Declaration")
                                                }


                                                function b() {
                                                    console.log(x)   // undefined (due to hoisting)
                                                    var x =20;
                                                    var x= 30 (redeclare is possible)
                                                    console.log(x + " Before Declaration")
                                                    {
                                                        console.log(x)  // undefined (due to hoisting)
                                                        var x = 40;
                                                    }
                                                    x=60
                                                    console.log(x + " After Declaration")
                                                }

                                    these doesnt care about the block 
                        
                        --------------- using let variable ----------------------------------------------------

                                            function a() {
                                                console.log("Funtion A Scoped........")
                                                // console.log(x)  // cannot access before its
                                                let x =10;
                                                console.log(x + "With in First block before reassingment")
                                                {
                                                    let x = 20;
                                                    console.log(x + "with in the another block befoere reassingment");
                                                    x = 40
                                                    console.log(x + "With in the another after reassignment.......")
                                                }
                                                // let x =20 // this is not possible with in the sameblock of scope 
                                                x = 30
                                                console.log(x + "With in First block after reassingment")
                                            }

                                            function b() {
                                                console.log("Funtion B Scoped........")
                                                // console.log(x)  // cannot access before its
                                                let x =10;
                                                console.log(x + "With in First block before reassingment")
                                                {
                                                    let x = 20;
                                                    console.log(x + "with in the another block befoere reassingment");
                                                    x = 40
                                                    console.log(x + "With in the another after reassignment.......")
                                                }
                                                // let x =20 // this is not possible with in the sameblock of scope 
                                                x = 30
                                                console.log(x + "With in First block after reassingment")
                                            }


