
class Product {
    constructor(title, topping, price) {
        this.title = title;
        this.topping = topping;
        this.price = price;
    }
    show() {
        for (let i = 0; i < document.getElementsByClassName("card-title").length; i++) {
            document.getElementsByClassName("card-title")[i].innerHTML = this.title
        }
    }

}

for (j = 0; j < document.getElementsByClassName("card-body").length; j++) {
    document.getElementsByClassName("card-body")[j].setAttribute("data-id", j)
}
var arr = [];
let array = []
document.querySelectorAll(".card-link").forEach((item) => {

    item.addEventListener("click", (e) => {
        var dataid = e.target.parentElement.getAttribute("data-id");
        e.preventDefault();
        arr.push(dataid)
        console.log(arr)
        for (let k = 0; k < 1; k++) {
            let table = document.getElementById("table");
            let title = document.getElementsByClassName("card-body")[dataid].children[0].innerText
            let price = document.getElementsByClassName("card-body")[dataid].children[2].innerText

            var row = ` <tr>
            <td><img src="./assets/images/pic1 5.png"></td>
            <td style="padding:0 0.2rem;">x1</td>
            <td colspan="3" class="productname">
               ${title}
               <span class="size"> size : small</span>
            </td>
            <td style="font-weight:bold;padding-left:0.5rem" class="productprice">${price}</td>
        </tr>`
            table.innerHTML += row;
            array.push(table)
            console.log(array)
            if (array.length >= 4) {
                table.innerHTML = "";
                array = []
            }
            let sum = document.getElementById("sum");
            sum.innerHTML = Number(price) * array.length;
            let total = document.querySelector(".basket a");
            total.innerHTML = String(Number(price) * array.length) + "$"
            document.querySelector(".basket span")[0];
            let amount = document.getElementById("amount");
            amount.innerHTML = array.length;
            if (array.length < 0) { amount.innerHTML = 0 }
        }
    })
});
var card = document.getElementsByClassName("card");
function sibling0() {
    document.getElementsByClassName("card-img-top")[0].style.display = "none";
    var added = ` <div class="card-header">
<h5 class="card-title">Sizes</h5>
<p class="card-text radio"><input type="radio" name="select" >  small - 20 cm</p>
<p class="card-text radio"><input type="radio" name="select" >  medium - 25 cm</p>
<p class="card-text radio"><input type="radio" name="select" >  big - 30 cm</p>
<button type="button" class="btn btn-warning d-flex justify-content-center">Checkout</button> `
    card[0].innerHTML += added;
}
function sibling1() {
    document.getElementsByClassName("card-img-top")[1].style.display = "none";
    var added = ` <div class="card-header">
    <h5 class="card-title">Sizes</h5>
    <p class="card-text radio"><input type="radio" name="select" >  small - 20 cm</p>
    <p class="card-text radio"><input type="radio" name="select" >  medium - 25 cm</p>
    <p class="card-text radio"><input type="radio" name="select" >  big - 30 cm</p>
    <button type="button" class="btn btn-warning d-flex justify-content-center">Checkout</button> `
    card[1].innerHTML += added;
}
function sibling2() {
    document.getElementsByClassName("card-img-top")[2].style.display = "none";
    var added = ` <div class="card-header">
    <h5 class="card-title">Sizes</h5>
    <p class="card-text radio"><input type="radio" name="select" >  small - 20 cm</p>
    <p class="card-text radio"><input type="radio" name="select" >  medium - 25 cm</p>
    <p class="card-text radio"><input type="radio" name="select" >  big - 30 cm</p>

    <button type="button" class="btn btn-warning d-flex justify-content-center">Checkout</button> `
    card[2].innerHTML += added;
}
function sibling3() {
    document.getElementsByClassName("card-img-top")[3].style.display = "none";
    var added = ` <div class="card-header">
        <h5 class="card-title">Sizes</h5>
        <p class="card-text radio"><input type="radio" name="select" >  small - 20 cm</p>
        <p class="card-text radio"><input type="radio" name="select" >  medium - 25 cm</p>
        <p class="card-text radio"><input type="radio" name="select" >  big - 30 cm</p>
        <button type="button" class="btn btn-warning d-flex justify-content-center">Checkout</button> `
    card[4].innerHTML += added;
}

function sibling4() {
    document.getElementsByClassName("card-img-top")[4].style.display = "none";

    var added = ` <div class="card-header">
            <h5 class="card-title">Sizes</h5>
            <p class="card-text radio"><input type="radio" name="select" >  small - 20 cm</p>
            <p class="card-text radio"><input type="radio" name="select" >  medium - 25 cm</p>
            <p class="card-text radio"><input type="radio" name="select" >  big - 30 cm</p>
            
            <button type="button" class="btn btn-warning d-flex justify-content-center">Checkout</button> `
    card[5].innerHTML += added;
}
function sibling5() {
    document.getElementsByClassName("card-img-top")[5].style.display = "none";
    var added = ` <div class="card-header">
                <h5 class="card-title">Sizes</h5>
                <p class="card-text radio"><input type="radio" name="select" >  small - 20 cm</p>
                <p class="card-text radio"><input type="radio" name="select" >  medium - 25 cm</p>
                <p class="card-text radio"><input type="radio" name="select" >  big - 30 cm</p>
                
                <button type="button" class="btn btn-warning d-flex justify-content-center">Checkout</button> `

    card[6].innerHTML += added;
}

function sibling6() {
    document.getElementsByClassName("card-img-top")[6].style.display = "none";

    var added = ` <div class="card-header">
                    <h5 class="card-title">Sizes</h5>
                    <p class="card-text radio"><input type="radio" name="select" >  small - 20 cm</p>
                    <p class="card-text radio"><input type="radio" name="select" >  medium - 25 cm</p>
                    <p class="card-text radio"><input type="radio" name="select" >  big - 30 cm</p>
                    
                    <button type="button" class="btn btn-warning d-flex justify-content-center">Checkout</button> `

    card[7].innerHTML += added;
}
