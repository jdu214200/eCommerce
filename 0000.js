import products from "./0000.json" assert{type: "json"};


// for(let i = 0; i < products.length; i++){
//     let user = `<div class = ramka>${products[i].name} </div>`;
// }


// var addAudit = function() {
// 	var elemKod = document.querySelector('.ramka').innerHTML;
// 	var elemOutKod = document.querySelector('.out__kod');

// 	elemOutKod.innerHTML += '<div>' + elemKod + '</div>';
// };

// function out() {
// 	var elem = window.event.EventTarget;
// 	if (elem.className === "btn") {
// 		addAudit();
// 	}
// };

let content = document.querySelector(".content")

for(let i = 0; i < products.length; i++){
    let user = ` 
    <div class = "ramka">
    <div class="imeg1">
        <img src="./images/${products[i].image}" alt="">
    </div>
    <div class="title">
        ${products[i].name}
    </div>
    <div class="price">
        ${products[i].price + "$"}
    </div> 
    <button class="btn" data-id="${products[i].id}">Buy</button>
    </div>`
    
    content.innerHTML += user;

}



// let bar= document.querySelector(".out__cod");
// for(let i = 0; i < products.length; i++){
//     let user = ` 
//     <div class="ramkaAll">
//     <div class = "ramka1">
//     <div class="im"></div>
//     <div class="imeg2">
//         <img src="./images/${products[i].image}" alt="">
//     </div>
//     </div>
//     <div class = "abouts">
//     <div class="title">
//         ${products[i].name}
//     </div>
//     <div class="price">
//         ${products[i].price +"$"}
//         <button class="buton">xxx</button>
//     </div> 
    
//     </div>
//     </div>`
    
    

//     bar.innerHTML += user;
// } 

document.querySelectorAll(".btn").forEach(button=>{
    button.addEventListener('click', function(e){
        addToCart(this.dataset.id)
    })
})

function addToCart(id){
    let elem;
    for (let i = 0,len = products.length; i < len; i++) {
        if(products[i].id == id) {
            elem=  products[i];
            break;  
        }   
    }

    document.querySelector(".out__cod").innerHTML += `      
    <div class="small-cart">
        <img class="jpeg" src="./images/${elem.image}">
        <div class="cart-content">
            ${elem.name}
            ${elem.price}
        </div>
        <div class="button"> 
            <button class = "delete"  data-id="${elem.id}">Delete</button>
        </div>
    </div>
    `

    document.querySelectorAll(".delete").forEach(btn => {
        btn.addEventListener('click', function(e){
            this.parentNode.parentNode.remove()
        })
    })
}
    

