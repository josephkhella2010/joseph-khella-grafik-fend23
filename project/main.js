let produkts=[{img:"../asset/foto/galaxy A 15.jpg",produktname:"iphone15", price:2000,
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias, voluptas distinctio hic nobis consequuntur vel cum quidem? Quia error consequatur facere dicta necessitatibus voluptatem dolor dolore, repudiandae aperiam? Necessitatibus"
},
{img:"../asset/foto/galaxy A 15.jpg",produktname:"iphone14", price:1800,
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias, voluptas distinctio hic nobis consequuntur vel cum quidem? Quia error consequatur facere dicta necessitatibus voluptatem dolor dolore, repudiandae aperiam? Necessitatibus"
},
{img:"../asset/foto/galaxy A 15.jpg",produktname:"iphone13", price:1600,
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias, voluptas distinctio hic nobis consequuntur vel cum quidem? Quia error consequatur facere dicta necessitatibus voluptatem dolor dolore, repudiandae aperiam? Necessitatibus"
},
{img:"../asset/foto/galaxy A 15.jpg",produktname:"iphone12", price:1400,
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias, voluptas distinctio hic nobis consequuntur vel cum quidem? Quia error consequatur facere dicta necessitatibus voluptatem dolor dolore, repudiandae aperiam? Necessitatibus"
},
{img:"../asset/foto/galaxy A 15.jpg",produktname:"Galaxy A 15", price:1900,
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias, voluptas distinctio hic nobis consequuntur vel cum quidem? Quia error consequatur facere dicta necessitatibus voluptatem dolor dolore, repudiandae aperiam? Necessitatibus"
},
{img:"../asset/foto/galaxy A 15.jpg",produktname:"Galaxy A 14", price:1700,
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias, voluptas distinctio hic nobis consequuntur vel cum quidem? Quia error consequatur facere dicta necessitatibus voluptatem dolor dolore, repudiandae aperiam? Necessitatibus"
},
{img:"../asset/foto/galaxy A 15.jpg",produktname:"Galaxy A 13", price:1500,
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias, voluptas distinctio hic nobis consequuntur vel cum quidem? Quia error consequatur facere dicta necessitatibus voluptatem dolor dolore, repudiandae aperiam? Necessitatibus"
},
{img:"../asset/foto/galaxy A 15.jpg",produktname:"Galaxy A 12", price:1300,
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias, voluptas distinctio hic nobis consequuntur vel cum quidem? Quia error consequatur facere dicta necessitatibus voluptatem dolor dolore, repudiandae aperiam? Necessitatibus"
},
{img:"../asset/foto/galaxy A 15.jpg",produktname:"MAC 15", price:6000,
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias, voluptas distinctio hic nobis consequuntur vel cum quidem? Quia error consequatur facere dicta necessitatibus voluptatem dolor dolore, repudiandae aperiam? Necessitatibus"
},
{img:"../asset/foto/galaxy A 15.jpg",produktname:"MAC 14", price:5000,
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias, voluptas distinctio hic nobis consequuntur vel cum quidem? Quia error consequatur facere dicta necessitatibus voluptatem dolor dolore, repudiandae aperiam? Necessitatibus"
},
{img:"../asset/foto/galaxy A 15.jpg",produktname:"MAC 13", price:4000,
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias, voluptas distinctio hic nobis consequuntur vel cum quidem? Quia error consequatur facere dicta necessitatibus voluptatem dolor dolore, repudiandae aperiam? Necessitatibus"
},
{img:"../asset/foto/galaxy A 15.jpg",produktname:"MAC 12", price:3000,
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias, voluptas distinctio hic nobis consequuntur vel cum quidem? Quia error consequatur facere dicta necessitatibus voluptatem dolor dolore, repudiandae aperiam? Necessitatibus"
},

]
let containerprodukt=document.querySelector(".container-produkt");
let creatprodukt=()=>{
produkts.forEach((product)=>{
    let newdiv=document.createElement("div");
    newdiv.classList.add("produkt")
    newdiv.innerHTML=`
          <img src="${product.img}" class=" foto">
          <div class="produkt-text">
          <p class=produkt-namn> product : ${product.produktname}</p>
          <p class="price"> price: ${product.price} kr</p>
          <p class="description"> description:</p>
          <p class="description-text"> ${product.description}</p>
          </div>
        <button onclick="clickme()" class="add-to-card-btn">add to cart</button>

  
    `
    containerprodukt.append(newdiv)
})
}
creatprodukt()
let closebtn=document.querySelector(".close");
let betalabtn=document.querySelector(".bet-btn")
let betalningsida=document.querySelector(".betalning-sida");
let showbetalningsida=()=>{
betalningsida.classList.add("active")
}
let hidebetalningsida=()=>{
    betalningsida.classList.remove("active")
    }

betalabtn.addEventListener("click",showbetalningsida)
closebtn.addEventListener("click",hidebetalningsida)
