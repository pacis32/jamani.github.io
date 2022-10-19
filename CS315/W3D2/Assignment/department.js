

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
    if(Array.isArray(department)){
        return department.reduce((prev,curr)=>{
            return prev+curr.salary
        },0)
    }
    let sum=0;
    for(let subDep of Object.values(department)){
        sum+=sumSalaries(subDep);
    }
    return sum;

}
// second way

function sumSal(department){
    
  if(Array.isArray(department)){
  return department.reduce((prev, curr)=> prev+curr.salary,0);
  }
  else{
    let sum =0;
     for(let sub in department ){
        sum+= sumSal(department[sub]);
     }
     return sum;
  }
        
    
}

console.log(sumSal(company));

//print names

function printNames(department){
    if(Array.isArray(department)){
      return  department.map((item)=> item.name);
    }

    else{
        let names=[];
        for(let sub in department ){
            let subName= department[sub];
            names=names.concat(subName);
        }

        return names;
    }
}
console.log(printNames(company));
