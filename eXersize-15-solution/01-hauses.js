console.log("This is Houses program  ")

let students = ["Aakash", "Vishnu", "Chandrma", "Chandana", "Sanjeev", " Ujjwal", "Khushi", "Shivangi", "Muskan", "Divya", "Pankaj", "Amit", "kiran", "joti", "vishal", "Ashish", "Abhishek", "Lalu", "Kuldeep"]

let houses = []
for (const student of students) {
    if(student.length < 6){
        houses.push("Gryffindor")
    }
    else if(student.length < 8){
        houses.push("Hufflepuff")
    }
    else if(student.length < 12){
        houses.push("Ravenclaw")
    }
    else{
        houses.push("Slytherin")
    }
}


console.log(houses)