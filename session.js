// Get Elements
var naame=document.getElementById('name');
var category=document.getElementById('category');
var price=document.getElementById('price');
var evaluation=document.getElementById('evaluation');
var updateBtn=document.getElementById('update');
var deleteBtn=document.getElementById('delete');
var sub = document.getElementById("sub");
var search=document.getElementById("search");

var productContainer = [];

if (localStorage.getItem("product") != null) {
    productContainer = JSON.parse(localStorage.getItem("product"));
}
var mood="add";
// Add Product
function Add(){

 if(mood=="new"){
 productContainer[gloindx].Name= naame.value ;
    productContainer[gloindx].Category=category.value ;
   productContainer[gloindx].Price=  price.value;
 productContainer[gloindx].Evaluation=  evaluation.value ;
    mood="add"
    sub.innerHTML="Add Product"
 }
 else{
  var nproduct={ Name:naame.value, 
    Category:category.value, 
    Price:price.value, 
    Evaluation:evaluation.value }
  productContainer.push(nproduct)}
 localStorage.setItem('product',JSON.stringify(productContainer));
  
 
  Display(productContainer);
 clr();
 
}

// Display
function Display(arr) {
    var cartona="";
  for (let index = 0; index < arr.length; index++) {
   cartona+=`

        <tr>
            <td>${arr[index].Name}</td>
            <td>${arr[index].Category}</td>
            <td>${arr[index].Price}</td>
            <td>${arr[index].Evaluation}</td>
          <td><button class="bt2" onclick="upd(${index})">update</button></td>
          <td><button class="bt3" onclick="del(${index})">delete</button></td>

        </tr>
        `
        ;
    }
    document.getElementById("tableBody").innerHTML = cartona;
  }

    

// Search Products

function searchProducts() {
  var term=search.value;
    var matchedProducts = [];
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].Name.toLowerCase().includes(term.toLowerCase())) {
            matchedProducts.push(productContainer[i]);
        }
    }
    Display(matchedProducts);
}

// Clear Inputs
function clr(){
naame.value="",
 category.value="",
   price.value="",
    evaluation.value=""

}


// Delete
function del(index){

  
        productContainer.splice(index, 1);


    localStorage.setItem("product", JSON.stringify(productContainer));

    Display( productContainer);

}

// update
var gloindx;
function upd(indx){
 gloindx=indx;
    naame.value = productContainer[indx].Name;
    category.value = productContainer[indx].Category;
    price.value = productContainer[indx].Price;
    evaluation.value = productContainer[indx].Evaluation;
    sub.innerHTML="update";
    mood="new";
    window.scrollTo({
  top: 0,
  behavior: "smooth"

})
}
 Display(productContainer);
