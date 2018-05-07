const contacts = JSON.parse(loadContacts());
const contactsList = document.querySelector('.contacts-list');

contactsList.innerHTML = '';

for (const contact of contacts) {
  contactsList.innerHTML += `
  <li data-email='${contact.email}' data-phone='${contact.phone}'>
    <strong>${contact.name}</strong>
  </li>
`;
}
