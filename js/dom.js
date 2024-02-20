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
// console.log(myDaughter.innerText);
myDaughter.innerText = 'Miftahul';
const mainHeader = document.getElementById('header');
// mainHeader.innerText = "Only DOM is real";
mainHeader.innerHTML = "<h1>This is my Awesome DOM</h1>"

const mains = document.querySelectorAll('main');
// console.log(mains)
for(const main of mains){
    // console.log(main)
    main.style.border = ' 2px solid steelblue';
    main.style.padding = '10px'
}