


// let array = [1,2,3,4,5];
// function change(array,...args){
//     let arr = [...array];
//     arr.push(...args);
//     console.log(arr);
// }
// change(array,6,7,8,9)
// console.log(array)

// fetch("https://jsonplaceholder.typicode.com/users/1").then(resp => {
//     console.log(resp);
//     return resp.json()
// }).then()


fetch('https://randomuser.me/api/')
 .then(response => response.json())
 .then(user => {
   let amount = user["results"].length;
   let array = user["results"][amount - 1];
  console.log(user["results"][0]["name"]["first"]);
  var firstname = array["name"]["first"]
  var lastname = array["name"]["last"]
  var title = array["name"]["title"]
  var age = array["dob"]["age"]
  var fullname = title + " " + firstname + " " + lastname;
  var image = array["picture"]["thumbnail"];
  var gender = array["gender"];
  var location = array["location"]["street"]["number"] + " " + array["location"]["street"]["name"];
  var email = array["email"];
  var phone = array["phone"];
  var country = array["location"]["country"];
  var City = array["location"]["city"]
  var State = array["location"]["state"];
  var tbody = document.getElementById("tablebody");

  var row = `<tr><td><img id="image" src=${image}></td>
  <td>${fullname}</td>

  <td>${gender}</td>  
  <td>${age}</td>
  <td>${location}</td>
  <td>${email}</td>
  <td>${phone}</td>
  <td>${country}</td>
  <td>${City}</td>
  <td>${State}</td>
  </tr>`;
  tbody.innerHTML += row;

  document.getElementsByTagName("h1")[0].innerHTML = `Data's of ${firstname} ${lastname}`
  sessionStorage.setItem("FirstName",firstname);
  sessionStorage.setItem("LastName",lastname);
  sessionStorage.setItem("Title",title);
  sessionStorage.setItem("Gender",gender);
  sessionStorage.setItem("Email",email);
  sessionStorage.setItem("Phone",phone);
  sessionStorage.setItem("Country",country);
  sessionStorage.setItem("City",City);
  sessionStorage.setItem("State",State);
  sessionStorage.setItem("Location",location);





}
).catch(err => console.log(err))



function darkmode(){
  document.body.style.backgroundColor = "dimgray";
  document.getElementById("table").classList.remove("table-dark");
  document.getElementById("table").classList.add("table-light");
  document.getElementsByTagName("h1")[0].style.color = "white";
  document.getElementById("link").innerHTML = "Light Mode";
  document.getElementById("link").setAttribute("onclick","lightmode()")
}
function lightmode(){
  document.body.style.backgroundColor = "rgb(226, 236, 236)";
  document.getElementById("table").classList.remove("table-light");
  document.getElementById("table").classList.add("table-dark");
  document.getElementsByTagName("h1")[0].style.color = "black";
  document.getElementById("link").innerHTML = "Dark Mode";
  document.getElementById("link").setAttribute("onclick","darkmode()")
}

// async function getData(url) {
//     let res = await fetch(url);
//     return await res.json()
// }
// const user = await getData('https://jsonplaceholder.typicode.com/users/1');
// const posts = await getData(`https://jsonplaceholder.typicode.com/posts?${user.id}`);
// const comments = await getData(`https://jsonplaceholder.typicode.com/comments?${posts.id}`);


// var fullname = document.getElementById('userName');
// var addres = document.getElementById('addres');
// var post_wrapper = document.getElementById('posts');
// fullname.innerHTML = user.name;
// addres.innerHTML = user.address.street;


// function createPosts() {
//     for (var i = 0; i < posts.length; i++) {
//         var t = document.createElement('dir');
//         t.setAttribute('class', 'card');
//         t.setAttribute('style', 'width: 20rem')
//         t.innerHTML = `
//         <div class="card-body">
//             <h5 id="post Title" class="card-title">${posts[i].title}</h5>
//             <p id="postBody" class="card-text">${posts[i].body}</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>`
//         post_wrapper.appendChild(t);
//     }

// }
// createPosts()