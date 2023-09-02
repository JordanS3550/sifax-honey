const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
})
 let menu = document.querySelector('#menu-icon');
 let navlist = document.querySelector('.navlist');
 menu.onclick = () =>{
 menu.classList.toggle('bx-x');
 navlist.classList.toggle('open')
 }; 



// const myArr =['daniel','clinton','joseph',22,true];
//         console.log(myArr);
//         console.table(myArr);

//         const myobj = {
//             name: 'clinton',
//             luckynum: 22,
//             lovesfootball: true
//         };
//         console.log(myobj);
//         console.table(myobj);

//   const name = 'clinton';
//     const age = 23;
//     const plusConcat =
//     'Hi there 🎶 \nMy name is ' + name + 'and i am ' +  age ' years old.';