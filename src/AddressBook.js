function AddressBook() {
	this.contacts = []; // add a new property to the class
}

//write a new function for AddresBook to add the Contact
AddressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact);
}
AddressBook.prototype.getContact = function(contactIndex) {
	return this.contacts[contactIndex];
}