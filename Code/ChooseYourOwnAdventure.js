var person = prompt("Please enter your name", "Name");

if (person == null || person == "") {
    txt = "User cancelled the prompt.";
} else {
    alert("Hello " + person + "! How are you today?");
}

