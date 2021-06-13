export const require = fetch('https://isko88.github.io/apipizza.json')
 .then(response => response.json())
 .then(products => {
     for(let i = 0; i < products.length; i++){
     let info  = document.getElementsByClassName("data")[i],;
     let data = `<img class="card-img-top" src="${products[i]["image"]}">
     <div class="card-body" >
       <h6 class="card-title changed">${products[i]["name"]}<a href="#" > - 32cm</a></h6>
       <p class="card-text changed">${products[i]["topping"].join(" ")}</p>
       <a href="#"  class="d-flex justify-content-center card-link changed">${products[i]["price"] + 10} $</a>
     </div>
     <span class="design"></span>
     <i class="fas fa-shopping-basket" data-id=${i}></i>
     `
      info.innerHTML += data;
      
}
})