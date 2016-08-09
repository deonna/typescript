function sendEmail(contact: Object) {
    console.log(contact.name + " <" + contact.email + ">");
}

sendEmail({fullName: "Deonna Hodges", emailAddress: "dnhodges@gmail.com"});