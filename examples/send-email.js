function sendEmail(contact) {
    console.log(contact.name + " <" + contact.email + ">");
}
sendEmail({ name: "Deonna Hodges", email: "dnhodges@gmail.com" });
var Company = (function () {
    function Company(companyName, emailAddress) {
        this.name = companyName;
        this.email = emailAddress;
    }
    return Company;
}());
var deityGames = new Company("Deity Games", "hello@deitygames.com");
sendEmail(deityGames);
