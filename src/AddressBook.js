function AddressBook() {
	this.contacts = []; // add a new property to the class
}

//write a new function for AddresBook to add the Contact
AdressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact);
}