let family = new Object();
family.name = "DooGande";
family.headOfFamily = "Husband";
family.motherOfFamily = "Wife";
family.wife = "Dooshima Abur";
family.husband = "Gandepuun Lanshima"
family.children = "Ngueavese Abur";
family.bioInfo = function() {
    return family.husband + " is married to " + family.wife + " bringing to gether what became know as " + family.name;
}

console.log(family.bioInfo());

let Man = {
    name: "Gandepuun Lanshima",
    age: 23,
    sex: "Male",
    bioData: function() {
        return this.name + " is a " + this.age + " boy";
    }
}
console.log(Man.bioData());

function Boy(name, age, sex, status) {
    this.name = name,
        this.age = age,
        this.sex = sex,
        this.status = status
};

let student = new Boy("Terfa Lanshima", 24, "Male", "Single");

console.log(student.status);

document.querySelector(".sphere1").innerHTML = "<h1>This is the div</h1>";