

let imageObj = {
   0:"Images/shoes1.avif",
   1:"Images/newBalance.jpeg",
   2:"Images/rebook.png",
   3:"Images/adiNew.avif" ,
   4:"Images/last.avif" ,
   5:"Images/adiNewArrival.avif",
   6:"Images/sambaNew.avif",
};
let Name = [
   "Campus 00s Shoes",
   
   "Fresh Foam 680v8",
   
   "Flexagon Energy 4 Training Shoes",
   
   "Racer TR23 Shoes",
   
   "Advantage Base 2.0 Shoes",
   
   "Samba OG Shoes",
  
   "Forum Mid Shoes",
  
];
let price = ["7,900 EGP","7,900 EGP","7,900 EGP",
   "4,000 EGP","5,500 EGP","8,000 EGP","8,399 EGP",
];


 for (let i=0 ; i< 7;i++){
   let mainContainer = document.querySelector(".container");
   let container1 = document.createElement("div");
   let shoesImage = document.createElement("img");
   let innerContainer = document.createElement("div");
   let iconsDiv = document.createElement("div")
   let addToFavoriteImage = document.createElement("img");
   let addToBasketImage =document.createElement("img");
   let classInfo = document.createElement("div");
   let h5 = document.createElement("h5");
   let txt1=document.createTextNode(Name[i])
   let p = document.createElement("p");
   let txt2=document.createTextNode(price[i])
 if ( i > 4){
      mainContainer = document.querySelector(".container2");
 }
   
mainContainer.appendChild(container1);
container1.appendChild(shoesImage);
shoesImage.setAttribute("alt","shoes");
shoesImage.style.width= "100%"
iconsDiv.classList.add("icons")
shoesImage.setAttribute("src",`${imageObj[i]}`);
container1.style.position="relative"
container1.appendChild(innerContainer);
innerContainer.appendChild(iconsDiv);
addToBasketImage.classList.add("img")
addToFavoriteImage.classList.add("img")
innerContainer.classList.add("inner-container")
addToBasketImage.setAttribute("src","Images/add-to-basket.png");
addToBasketImage.setAttribute("alt","addToCart");
iconsDiv.appendChild(addToFavoriteImage);
addToFavoriteImage.setAttribute("src","Images/favorite.png");
addToFavoriteImage.setAttribute("alt","addToFavorite");
iconsDiv.appendChild(addToBasketImage);
container1.appendChild(classInfo);
classInfo.appendChild(h5)
p.classList.add(".pr")
h5.classList.add(".h5")
h5.appendChild(txt1)
classInfo.appendChild(p)
p.appendChild(txt2)
 }


 


 

