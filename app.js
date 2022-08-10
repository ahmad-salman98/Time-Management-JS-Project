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