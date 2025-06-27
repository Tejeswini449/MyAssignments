function studentGrade()
{
let marks=80
switch(true)
{
    case(marks<50):
        console.log("Grade F")
        break
    case(marks >=50 && marks <=59):
        console.log("Grade D")
        break
    case(marks >=60 && marks <= 69):
        console.log("Grade C")
        break
    case(marks >=70 && marks <= 79):
        console.log("Grade B")
        break
    case(marks >=80 && marks <= 89):
        console.log("Grade A")
        break
    default:
        console.log("Grade A+")
}
}

studentGrade()