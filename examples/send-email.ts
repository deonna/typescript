interface IEmailable {
    name: string,
    email: string
}

function sendEmail(contact: IEmailable) {
    console.log(contact.name + " <" + contact.email + ">");
}

sendEmail({name: "Deonna Hodges", email: "dnhodges@gmail.com"});