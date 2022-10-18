//concantinating array's elements into a string

function concatinate(arrayName){
    if (arrayName.length <= 1){
       return arrayName[0];
    } else {
       return arrayName[0]+concatinate(arrayName.slice(1));
    }
 }


// console.log(concatinate(arr1));

//contains in an array using recursion

function contain(arr,el){
    
    if(arr[el]==el){
        return true;
    }
    if(arr.length<0)
    return;

    
    else{

        return contain(arr, el);
    }
}
let arr=['apple', 'banana', 'grapes'];
console.log(contain(arr,'banana'));

