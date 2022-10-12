
// create an element
// const body=document.body;
// const div= document.createElement("div");

// //add the text to dev
// div.innerText="Hey";
// div.textContent="hello";
// body.append(div);
// getting element
// const para = document.querySelector('p');
// console.log(para)
// // get an elemennt by ID
// const title= document.getElementById("page-title");
// console.log(title);
// geting an elements by their class name
// const errors=document.getElementsByClassName("error");
// console.log(errors);
// errors.forEach(element => {
    
// });
//get elements by their tag name

// const paras= document.getElementsByTagName('p');
// console.log(paras)
// console.log(paras[0]);

// // change text insider html

// const pa= document.querySelector('p');
// // console.log(pa.innerText);
// // pa.innerText +="hello there";
// const pat= document.querySelectorAll('p');
// // pat.forEach(pat=>{
// //     console.log(pat.innerText);
// //     pat.innerText+= ' new text';
// // })

//  const content = document.querySelector(".content");
// //  content.innerHTML +='<h2> THIS IS A NEW H2</h2>';
// const people=['amani','Lulu', 'yoshi'];

// people.forEach(person=>{
//     content.innerHTML+= `<p>${person}</>`;
// });

//Anchor tag
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.apple.com');
// link.innerText="The Apple's website";

// const msg= document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class','success');
// msg.setAttribute('style','color:red;')

// adding an attribute to an existing one

// const title = document.querySelector('h1');
//  //title.setAttribute('style','color:orange;') this will overwrite the existing color
//  console.log(title.style.color)// this will show the color that is in.

//>>>>>>>>>>>> ADDING AND CHANGING CLASSES

const content= document.querySelector('p');
console.log(content.classList);
content.classList.add('error'); 
// content.classList.remove('error');
content.classList.add('success');

