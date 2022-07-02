// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
const age_2 = 18
const age_3 = 60

const checkAge = function(age) {
    if(age && !isNaN(age)) {
if(age < age_2){
    console.log("You don't have access cause your age is " + age + " It's less than")
} else if(age  >= age_2 && age < age_3){
console.log("Welcome!")
} else if(age > age_3){
    console.log("Keep calm and watch Culture channel")
} else {
    console.log("Technical work")
}
    } else console.log( "Not a number")
}
checkAge("Bob")
checkAge("20")
checkAge(18)
checkAge(61)
checkAge("0")