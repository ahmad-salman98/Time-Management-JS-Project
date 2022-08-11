let name = prompt("Pleasae enter your name");
const gender = prompt("Please enter your gender", "male or female");

let age = prompt("Please enter your age");


while (age <= 0) {
    alert("Please enter a valid age");
    age = prompt("Please enter your age");
}
if (confirm("Do you want to receive welcoming message?")) {
    if (gender == "male") {
        alert("Welcome Mr " + name + ", glad to see you here ");
    }
    else if (gender == "female") {
        alert("Welcome Ms " + name + ", glad to see you here ");

    }
    else {
        alert("Welcome " + name + ", glad to see you here ");

    }
}

const questions = [];
questions[0] = "Do you feel good today?";
questions[1] = "would you like to invite your friends to our website? ";
questions[2] = "have you enjoyed answering those questions?";

const answers = [];

for (let i = 0; i < 3; i++) {
    answers[i] = prompt(questions[i]);

    if (answers[i] == "y" || answers[i] == "yes" || answers[i] == "Y" || answers[i] == "Yes") {
        answers[i] = "\nyes";
    }
    else if (answers[i] == "N" || answers[i] == "No" || answers[i] == "n" || answers[i] == "no") {
        answers[i] = "\nno";
    }
    else {
        answers[i] = "\ninvalid";
    }

}
for (let i = 0; i < 3; i++) {
    console.log(questions[i] + answers[i]);

}

let rating = prompt("How many stars out of 5 do yo rate our page?\n");
if (0 <= rating <= 5) {
    for (let i = 0; i < rating; i++) {
        console.log("★");
    }
}
else if (6 <= rating) {
    console.log("★★★★★");

}
else {
    console.log("you entered an invalid number");
}
