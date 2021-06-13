let data = {
    username : "redtiger192",
    password : 123456780
  }
  var container = document.getElementById("login");
  
  
  function clicked(){
      let name = document.getElementById("name");
      let password = document.getElementById("password");
  
      if(name.value == ""){
          document.getElementsByTagName("span")[0].innerHTML = "Username is required!"
          document.getElementsByTagName("label")[0].innerHTML = ""
          document.getElementsByTagName("span")[0].style.color = "red";
  
      }else if(name.value != data["username"]){
          document.getElementsByTagName("span")[0].style.color = "red";
          document.getElementsByTagName("span")[0].innerHTML = "Username is not correct!"
      
      }
      else if(name.value != "" && password.value == "" && name.value == data["username"] ){
          document.getElementsByTagName("span")[1].innerHTML = "Password is required!";
          document.getElementsByTagName("span")[0].innerHTML = "";
          document.getElementsByTagName("label")[0].innerHTML = "Username"
          document.getElementsByTagName("label")[1].innerHTML = ""
          document.getElementsByTagName("span")[1].style.color = "red";
  
          
  
  
  
      }
      else if(password.value != data["password"]){
          document.getElementsByTagName("span")[0].innerHTML = ""
          document.getElementsByTagName("span")[1].style.color = "red";
          document.getElementsByTagName("span")[1].innerHTML = "Password is not correct!"
      }else{
          fetch('https://randomuser.me/api/')
   .then(response => response.json())
   .then(user => {
    var firstname = user["results"][0]["name"]["first"]
    var lastname = user["results"][0]["name"]["last"]
   
  
    var row = `<div class="info">
      <h1> WELCOME </h1>
      <h3> We want to inform you that you should verify your account by email sent to you </h3>
      <a href="index.html"> Ok, Continue </a>
      `;
      container.innerHTML += row;
   
  })
  
          document.getElementById("formlogin").style.display = "none"
      }
  
  
  }
  