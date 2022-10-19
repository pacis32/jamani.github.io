let el4 ={
    value: 4,
    next: null
};
let el3 ={
    value: 3,
    next: el4
};
let el2 ={
    value: 2,
    next: el3
};
let list ={
    value: 1,
    next: el2
};

function print(list){
    console.log(list.value);
    if(list.next)
        print(list.next);
}

function print(list){
   while(list.next){
        console.log(list.value);
        list =list.next;
   }
   console.log(list.value)
}

print(list)

// remove 2
// let element3 = list.next.next;
// list.next=element3;
// console.log(JSON.stringify(list));
// add btn 2 and 3
let newElement={value:'2.5'};
let element2=list.next;
let element3=list.next.next;
element2.next=newElement;
newElement.next=element3;

 console.log(JSON.stringify(list));

 //remove last
 list.next.next.next=null;
  console.log(JSON.stringify(list));

  //remove first
  let secondElement=list.next;
  list=secondElement;

   console.log(JSON.stringify(list));

   // add first
   let newElement1={value:0.5};
   newElement1.next=list;
   list=newElement1;
   console.log(JSON.stringify(list));