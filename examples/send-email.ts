interface IEmailable {
    name: string,
    email: string
}

function sendEmail(contact: IEmailable) {
    console.log(`${contact.name} <${contact.email}>`);
}

sendEmail({name: "Deonna Hodges", email: "dnhodges@gmail.com"});

class Company implements IEmailable {
    name: string;
    email: string;
    phoneNumber: string;
    constructor(companyName: string, emailAddress: string) {
        this.name = companyName;
        this.email = emailAddress;
    }
}

var deityGames = new Company("Deity Games", "hello@deitygames.com");

sendEmail(deityGames);