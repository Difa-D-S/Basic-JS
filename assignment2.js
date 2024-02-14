// Assignment @2

// // Functions

    // function describeCountry(country, population, capitalCity){
    //     const countryPopulation = `${country} has ${population} people and its capital city is ${capitalCity}`;
    //     return countryPopulation;        
    // }

    // var input1 = describeCountry("Finland", "6 million", "Helsinki");
    // var input2 = describeCountry("Europe", "10 million", "Hels_inki");
    // var input3 = describeCountry("Portugu", "2 million", "TamilNadu");
    // console.log(input1);
    // console.log(input2);
    // console.log(input3);



// // Funtion Declaration 

    // var worldPopulation = 7900;

    // function percentageOfWorld1(population){
    //     const percentage = `China has ${population} million people,so it's about ${(population / worldPopulation) * 100}% of the world population`;
    //     return percentage;
    // }

    // const populationValue = percentageOfWorld1(1441);
    // console.log(percentageOfWorld1(1441));


// Function Expressions

    // var worldPopulation = 7900;
    // var country = "China"
    // var percentageOfWorld2 = function(population){
    //     // var averagePopulation = (population / worldPopulation) * 100 ; 
    //     const percentage = `${country} has ${population} million people,so it's about ${(population / worldPopulation) * 100}% of the world population`;
    //     return percentage;
    // }
    // const percentageFunction = percentageOfWorld2(1441);
    // console.log(percentageFunction);



// Arrow Function

    //  var worldPopulation = 7900;
    // var country = "China"
    // var percentageOfWorld3 = (population) => {
    //     // var averagePopulation = (population / worldPopulation) * 100 ; 
    //     const percentage = `${country} has ${population} million people,so it's about ${(population / worldPopulation) * 100}% of the world population`;
    //     return percentage;
    // }
    // const percentageFunction = percentageOfWorld3(1441);
    // console.log(percentageFunction);



// Function Calling Other Functions

    // var worldPopulation = 7900;
    // var country = "China"

    // var percentageOfWorld1 = function(population){
    //     var averagePopulation = (population / worldPopulation) * 100 ; 
    //     return averagePopulation;
    // }
    //  function describePopulation(country, population) {
    //     const function1 = percentageOfWorld1(population);
    //     const percentage = `${country} has ${population} million people,so it's about ${function1}% of the world population`;
    //     return percentage;
    //  }

    //  console.log(describePopulation("China", 2026));
    //  console.log(describePopulation("Europe", 2026));
    //  console.log(describePopulation("Finland", 2026));



// Array

    // worldPopulation = 7900

    // var populations = [1441, 3920, 1836, 2836];
    // console.log(populations);

    // function percentageOfWorld1(population){
    //     return (population / worldPopulation) * 100;
    // }

    // var percentage1 = percentageOfWorld1(populations[0]);
    // var percentage2 = percentageOfWorld1(populations[1]);
    // var percentage3 = percentageOfWorld1(populations[2]);
    // var percentage4 = percentageOfWorld1(populations[3]);

    // console.log(percentage1, percentage2, percentage3, percentage4);

    // var percentage = [percentage1, percentage2, percentage3, percentage4]
    // console.log(percentage);




// Array Methods

    var neighbours = ["Finland", "China", "Europe", "Portugu"];
    console.log(neighbours);

    neighbours.push("Utopia");
    console.log(neighbours);

    neighbours.pop();
    console.log(neighbours);

    if(neighbours.includes("Germany")){
        console.log("Probably not a central Europen country");
    }
    else{
        console.log("yes")
    }