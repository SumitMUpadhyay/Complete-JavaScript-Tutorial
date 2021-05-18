// console.log("Welcome to tut 14");

/*
element selectors:
1. Single element selector
2. multi element selector






*/

//1. single element selector

// let element = document.getElementById('myfirst');
// element= element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color= 'red';
// element.innerText = 'Sumit is a good boy';
// element.innerHTML = '<b>Sumit is a good boy<b>';
// console.log(element.innerHTML);
// console.log(element.innerText);

// let sel = document.querySelector('#myfirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('b');
// sel = document.querySelector('h1');
// sel = document.querySelector('div');
// sel.style.color = 'green';
// console.log(sel)

//2. Multi element selector

let elems =  document.getElementsByClassName('child');
elems =      document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'))

elems = document.getElementsByTagName('div');
console.log(elems);

// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = 'blue';
// });

for (let index=0; index<elems.length; index++)
 {
    const element = elems[index];

    console.log(element);

    element.style.color = 'blue';
}

//     element.style.color = 'blue';
// }