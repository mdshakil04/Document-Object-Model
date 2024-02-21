// console.log("Hello! From my awesome DOM!");
const liCollection = document.getElementsByTagName("li");
for(const li of liCollection){
    // console.log(li);
}
const allHeading = document.getElementsByTagName('h1');
for(const h1 of allHeading){
    h1.style.textAlign = 'center';
    h1.style.color= 'red';
    h1.style.backgroundColor = 'green'
    h1.style.borderRadius= '10px'
    // console.log(h1.innerText);
}
const myDaughter = document.getElementById('my-star').style.backgroundColor = 'skyblue';
// console.log(myDaughter.innerText);
myDaughter.innerText = 'Miftahul';
const mainHeader = document.getElementById('header');
// mainHeader.innerText = "Only DOM is real";
mainHeader.innerHTML = "<h1>This is my Awesome JS DOM</h1>"
// mainHeader.title = "DOM"

const mains = document.querySelectorAll('main');
// console.log(mains)
for(const main of mains){
    // console.log(main)
    main.style.border = ' 2px solid steelblue';
    main.style.padding = '10px';
    main.style.backgroundColor = 'skyblue';
    main.style.borderRadius = '10px';
    // main.style.textAlign = 'center';
}