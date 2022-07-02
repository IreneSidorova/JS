// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
const age_2 = 18
const age_3 = 60

const checkAge = function(age) {
if(age < age_2){
    console.log("You don't have access cause your age is " + age + " It's less than")
} else if(age  >= age_2 && age < age_3){
console.log("Welcome!")
} else if(age > age_3){
    console.log("Keep calm and watch Culture channel")
} else {
    console.log("Technical work")
}
}
checkAge(17)
checkAge(18)
checkAge(61)

