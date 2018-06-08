function AddressBook() {
    this.contacts = []; // add a new property to the class
    this.initialComplete = false;
}

//write a new function for AddresBook to add the Contact
AddressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact);
}
AddressBook.prototype.getContact = function(contactIndex) {
	return this.contacts[contactIndex];
}

AddressBook.prototype.deleteContact = function(contactIndex) {
    this.contacts.splice(contactIndex, 1);
}

AddressBook.prototype.getInitialContacts = function (cb) {
    var self = this;

    setTimeout(() => {
        self.initialComplete = true;
        if (cb) {
            return cb;
        }
    }, 30);
}