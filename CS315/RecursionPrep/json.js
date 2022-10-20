let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        new1:[{name:'Jean',salary:1000000}],
        innner:{
            inner2:{
            sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
            internals: [{ name: 'Jack', salary: 1300 }],
            computer: [{ name: 'Duyen', salary: 9300 }]
        }
    }
    }
    
}

function sumSalaries(department){
    let sum=0;
    for(dept in department){
        let eachD=department[dept];
    if(Array.isArray(eachD)){
      for(let p of eachD){
        sum=sum+p.salary;
      }
    }

    else{
        for(let subDep in department){
            for(let person of subDep){
                sum=sum+person.salary;
            }
        }
    }
    return sum;
}
}
console.log(sumSalaries(company));

//count leaves

function countLeaves(department){
    let count=0;
   for(let key in department){
    if(typeof department[key]!=="object"|| Array.isArray(department[key])){
        count++;
    }
    else if(typeof department[key]==='object'){
        count=count+countLeaves(department[key])

    }
   }
   return count;
}
console.log(countLeaves(company));
//reverving

function reversing(department){
    let obj=[];
    for(let key in department){
    if(typeof department[key]!=='object' && Array.isArray){
        obj[department[key]]=key;
    }
  else if (typeof department[key]==='object' && ! Array.isArray(department[key])){
    obj[key]='object';
    obj={...obj,...reversing(department[key])}
  }

  else{
    obj[department[key].join(" ")]=key;
  }

    }
   return obj;
}

console.log(reversing(company));