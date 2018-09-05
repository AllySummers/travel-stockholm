function validateForm() {
    var name = document.forms["contact"]["contact-name"].value;
    var email = document.forms["contact"]["contact-email"].value;
    var subject = document.forms["contact"]["contact-subject"].value;
    var message = document.forms["contact"]["contact-message"].value;
    var error = "";

    if (name == "") {
        name.focus;
        error+= "Please enter your name.<br>";
    }
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        error+= "Please enter a valid email address.<br>";
        email.focus
    }
    if (subject == "") {
        error+= "Please enter a message subject.<br>";
        subject.focus;
    }
    if (message == "") {
        error+= "Please enter a message.<br>";
        message.focus;
    }
    document.getElementById("form-error").innerHTML = error;

    if(error != "") {
        event.preventDefault()
    }
}