// // function fruit(apple, orange){
// //     const juice = `Juice with ${apple} apple and ${orange} orange`;
// //     return juice;
// // }

// // fruit(10, 20);


// // //function DECLARATION

// // function calcAge(birthYear){
// //     const age1 = 2017 - birthYear;
// //     return age1;
// // }

// // const age = calcAge(2000);
// // console.log(age);


// // //FUNCTION EXPRESSION
// // const age2 = calAge(2000);
// // console.log(age2);

// // const calAge = function(birthYear){
// //     return 2017 - birthYear;
// // }




// //ARROW FUNCTION

// const calAge2 = (birthYear) => 2017 - birthYear;
// const age = calAge2(2000);
// console.log(age);


// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2018 - birthYear;
//     const retirement = 65 - age;
//     return `I am ${firstName} retired in ${retirement}`;
// }

// console.log(yearUntilRetirement(2000, "suhail"));



// // FUNCTION CALLING & Nested Function

// function cutFruitPieces(fruits){
//     return 4 * fruits;
// }

// function fruit(apple, orange){
//     const applePiece = cutFruitPieces(apple);
//     const orangePiece = cutFruitPieces(orange);
//     const juice =  `juice with ${applePiece} pieces of apple and ${orangePiece} pieces of orange`;
//     return juice;
// }

// console.log(fruit(3, 4));



// // ARRAYS

// const friend = ["james", "Steven", "Rahul"];
// console.log(friend[friend.length - 1]);

// //Exercise Array

//     const birthYear = [1001, 2000, 2002, 1995];

//     function calcAge(birthYear){
//         return 2017 - birthYear;
//     }

//     const age1 = calcAge(birthYear[0]);
//     const age2 = calcAge(birthYear[1]);
//     const age3 = calcAge(birthYear[3]);
//     const age4 = calcAge(birthYear[0]);

//     console.log(age1, age2, age3, age4);

//     const age = [age1, age2, age3, age4];
//     console.log(age);


// // ARRAY METHODS

    //push (ADD element)

            // const friends = ["james", "Steven", "rahul"];

            // const newLength = friends.push("joy");
            // console.log(newLength);

            // friends.unshift("Suhail");
            // console.log(friends);


    // POP (remove last element)

    // const friends = ["james", "Steven", "rahul"];

    // friends.pop();   //last
    // console.log(friends);

    // friends.shift();   // First element removed
    // console.log(friends);

    // console.log(friends.indexOf("james"));

    // console.log(friends.includes("james"));



// //  OBJECT

// const suhail = {
//     firstName : "Mohammed",
//     lastName : "Suhail",
//     job : "teacher"
// }

// console.log(suhail.firstName);
// console.log(suhail["firstName"]);

// const namekey = "Name";
// console.log(suhail["first" + namekey]);
// console.log(suhail["last" + namekey]);


// suhail.country = "India";     
// suhail["friends"] = ["jon", "james", "Rahul"];  // Add Object
// console.log(suhail);

// const Interested = prompt("Give a detail : ");
// console.log(Interested);


////////CHALLENGE

////// Suhail has 3 friends and his best friend is rahul

    // console.log(`${suhail.lastName} has ${suhail.friends.length} friends and his best friend is ${suhail.friends[2]}`);



// // // OBJECT METHODS

// const suhail = {
//         firstName : "Mohammed",
//         lastName : "Suhail",
//         birthYear : 2000,
//         job : "teacher",
//         friends : ["jon", "james", "Rahul"],
//         hasDrivingLicense : true,

//         calAge : function(){
//             // return 2017 - this.birthYear;   OR
//             this.age = 2017 - this.birthYear;
//             return this.age;
//         },
        
//     //CHALLENGES

//     // // Suhail is a 17 year old teacher and he has a drivers licence

//         getSummary:function(){
//             return `${this.lastName} is a ${this.calAge()} year old ${this.job} and he has a ${this.hasDrivingLicense ? "a" : "no"} driverse licence`
//         }
//     };

//     console.log(suhail.getSummary());



// // ITERATION - THE FOR LOOP





// // LOOPING ARRAY, BREAKING AND CONTINUING




// // LOOPING BACKWARDS AND LOOP INSIDE A LOOP