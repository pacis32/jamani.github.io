document.body.innerHTML="<h1>Inventory</h1>"

let h1 = document.querySelector("h1");
// let myDiv=document.createElement('div');
// document.body.append('myDiv');
const itemName = document.createElement("label");
h1.after(itemName);
itemName.innerHTML="<br>ITEM NAME: </br>";
let prodName = document.createElement("input");
prodName.id="prodName";
itemName.after(prodName);




const itemCategory = document.createElement("label");
prodName.after(itemCategory);
itemCategory.innerHTML= "<br>ITEM CATEGORY:</br>"
let prodCategory = document.createElement("select");
prodCategory.innerHTML = 
'<option selected value="Men">Men</option>' +
'<option value="Women">Women</option>';
prodCategory.id="prodCategory";
itemCategory.after(prodCategory)


const itemQuantity = document.createElement("label");
prodCategory.after(itemQuantity);
itemQuantity.innerHTML="<br>QUANTITY:</br>";

let prodQuantity = document.createElement("input");
prodQuantity.id="prodQuantity";
itemQuantity.after(prodQuantity);

let rate = document.createElement("div");
prodQuantity.after(rate)
rate.innerHTML='Rating: <input type="number" id="rating" min="1" max="10" steps="10" placeholder="1-10" value=""onfocus="this.value="" style="margin-top:10px"><br><br>'

//add button
let addBtn = document.createElement("label");
rate.after(addBtn);
addBtn.innerHTML=' <input type="button" id="add" value="add" style="padding: 3px; margin-left: 20px; margin-top: 10px;">'

//filter button
const lblItemFilter = document.createElement("label");
lblItemFilter.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Filter by: ";
let filterBtn = document.createElement("button");
filterBtn.id = "filterBtn";
filterBtn.innerText = "Filter";

// Filter
let filterCategory = document.createElement("select");
filterCategory.innerHTML = 
'<option selected value="Men">Men</option>' +
'<option value="Women">Women</option>';
filterCategory.id="filterCategory";
// End filter

addBtn.after(filterBtn);
addBtn.after(filterCategory);
addBtn.after(lblItemFilter);



let myTable = document.createElement("table");
document.body.after(myTable);


myTable.innerHTML="<tr><th>Product Name</th>"+
"<th>Category</th><th>Quantity</th></tr>"
myTable.id="tableId";
let arrayItem= [];
addBtn.onclick=function(){
let itemName = document.getElementById("prodName").value;
let Cat  = document.getElementById("prodCategory").value;
let qte  = document.getElementById("prodQuantity").value;

let dataTable = document.querySelector("table")
let newRow = document.createElement("tr");
dataTable.append(newRow);
newRow.innerHTML = '<tr><td>'+itemName+'</td><td>'+Cat+'</td><td>'+qte+'</td></tr>';


newRow.style.color="red";
itemName.value="";
Cat.value ="";
qte.value ="";
let product={iteName:itemName,Cat:Cat,qte:qte}
arrayItem.push(product);
// console.log(arrayItem);
}

filterBtn.onclick =
    function () {
        console.log(arrayItem);
        let myFilter = document.getElementById("filterCategory");
        let filterBy = myFilter.selectedOptions[0].text;
        let filteredArray = arrayItem.filter((item) => item.Cat == filterBy);
        console.log(filteredArray);
        let dataTable = document.getElementById("tableId");

        dataTable.innerHTML = "";
        console.log(arrayItem);
        for(let j = 0; j < filteredArray.length; j++){
            //Insert row
            let filteredRow = document.createElement('tr');
            filteredRow.innerHTML ='<td>' + filteredArray[j].itemName +
            '</td><td>' + filteredArray[j].Cat + '</td>' +
            '<td>' + filteredArray[j].qte + '</td>'
            dataTable.appendChild(filteredRow);
        }
      }
    



