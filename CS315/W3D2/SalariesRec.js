let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }], //subdepartments
    internals: [{name: 'Jack', salary: 1300}]
    }
    }

    const SumSalary= function(department){
        let sum=0;
        for(let el in company){
       
            console.log(el);
            let dept=company[el];
            if(Array.isArray(dept)){
            for(let item of dept)
             sum+= item.salary;

            }
            else {
                for(let subDp in dept){
                    for(let  person of dept[subDp] )
                    sum+=person.salary;
                }
            }

             
        }


        return sum;

    }


    function sumSalaries(department) {
        if (Array.isArray(department)) { // case (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
        } else { // case (2)
        let sum = 0;
        for (let subdepName in department) {
        let subDep=department[subdepName];
        sum += sumSalaries(subDep); // recursively call for subdepartments, sum the results
        }
        return sum;
        }
       }
       console.log(sumSalaries(company))
       function nameList(department) {
        if (Array.isArray(department)) { // case (1)
        return department.reduce((prev ,current) => prev.concat(current.name + " ") , " "); // sum the array
        } else { // case (2)
        let names= "";
        for (let subdepName in department) {
        let subDep=department[subdepName];
        names+=(nameList(subDep)); // recursively call for subdepartments, sum the results
        }
        return names;
        }
       }

       console.log(nameList(company))


       