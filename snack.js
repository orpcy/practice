function calculateSupply(age, amntPerDay){
    var year = 365 * age;
    var snack = amntPerDay * year;
    console.log("You will need " + snack + " snacks to last you until the ripe old age of " + age);

}

calculateSupply(1, 2);
calculateSupply(5, 1);
calculateSupply(20, 5);
