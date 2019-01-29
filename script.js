
function Phone(brand, price, color, weight, diagonal) {
   this.brand = brand;
   //by using this, the "brand" property of the object we create will assume the value of the brand argument
   this.price = price;
   this.color = color;
   this.weight = weight;
   this.diagonal = diagonal;
}

Phone.prototype.printInfo = function() {
   console.log("The phone brand is " + this.brand + ", color is "+ this.color + ", the price is " + this.price + ", weight is " + this.weight + "g, and diagonal is " + this.diagonal + '".')
}

//iPhone6
var iPhone6 = new Phone("Apple", 2250, "silver", 129, "4,7" );

//Samsung Galaxy S6
var GalaxyS6 = new Phone("Samsung", 2000, "grey", 138, "5.10");

//OnePlus One
var OnePlus = new Phone("OnePlus", 1850, "black", 162, "5.50");

iPhone6.printInfo();
GalaxyS6 .printInfo();
OnePlus.printInfo();