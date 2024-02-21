console.log("Append.js connected successfully! ")
// Where to add
const membersList = document.getElementById('members-list')
// console.log(membersList)
// What will add
const newMember = document.createElement('li');
// set added text
newMember.innerText = 'Sister-in-law';
// Bind with parent
membersList.appendChild(newMember)