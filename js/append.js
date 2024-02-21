console.log("Append.js connected successfully! ")
// Where to add
const membersList = document.getElementById('members-list')
// console.log(membersList)
// What will add
const newMember = document.createElement('li');
// set added text
newMember.innerText = 'বেজাইল্লা Sister-in-law';
// Bind with parent
membersList.appendChild(newMember)

const memberContainer = document.getElementById('family-container')
const newContainer = document.createElement('section')
memberContainer.appendChild(newContainer)
newContainer.innerHTML = `
    <h1>My Permanent Family</h1>
    <ul>
        <li>Maa</li>
        <li>Baba</li>
        <li>Bai</li>
        <li>Bon</li>
    </ul>
`