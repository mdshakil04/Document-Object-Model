// console.log("Hello! From my awesome DOM!");
const liCollection = document.getElementsByTagName("li");
for(const li of liCollection){
    // console.log(li);
}
const allHeading = document.getElementsByTagName('h1');
for(const h1 of allHeading){
    // console.log(h1.innerText);
}
const myDaughter = document.getElementById('my-star').style.backgroundColor = 'skyblue';
console.log(myDaughter.innerText);
myDaughter.innerText = 'Jannatul Ferdous Akhi';
const mainHeader = document.getElementById('header');
mainHeader.innerText = "Only DOM is real"