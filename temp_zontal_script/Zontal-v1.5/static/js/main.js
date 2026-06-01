var passwordInput = document.getElementById('R_password');
var inputGroup = document.getElementById('input-group');
var inputtag = document.getElementById('input-tag');
var signup_form = document.getElementById('signup_form');
var signup_form_button = document.getElementById('sign_up_button');

if (passwordInput !== null) {
    passwordInput.addEventListener("keyup", (e) => {
        if (e.target.value !== '') {
            inputGroup.style.display = 'flex';
            inputtag.value = e.target.value;
        }else {
            inputGroup.style.display = 'none';
        }

    });
}

function verifyPassword() {  
    // var pw = document.getElementById("pswd").value;  
    //check empty password field  
    if(passwordInput.value == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(passwordInput.value.length < 8) {  
       document.getElementById("message").innerHTML = "Password length must be at least 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    }  
  }  


  function toggleFullScreen() {
    var iframe = document.getElementById("my-iframe");
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) { /* Safari */
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { /* IE11 */
        iframe.msRequestFullscreen();
    }
}

// var button_1 = document.querySelector(".cat-container .left");
// var button_2 = document.querySelector(".cat-container .right");

// var cat_container = document.querySelector(".cat-item-container");

// button_1.addEventListener("click", () => {
//   cat_container.scrollLeft -= 300;

  
//   if (cat_container.scrollLeft) {
//     button_2.classList.remove("hidden");
//   }

//   if (cat_container.scrollLeft == 0) {
//     button_1.classList.add("hidden")
//   }

// });

// button_2.addEventListener("click", () => {
//   cat_container.scrollLeft += 300;

//   let scrollWidth = cat_container.scrollWidth - cat_container.clientWidth;


//   if (cat_container.scrollLeft >= scrollWidth) {
//     button_2.classList.add("hidden");
//   }

//   if (cat_container.scrollLeft > 20) {
//     button_1.classList.remove("hidden")
//   }

// });

//   const close


// var open_Search = document.getElementById("open-search");
// if (open_Search !== null) {
//     open_Search.addEventListener("click", () => {
//         document.querySelector(".mobile-header").classList.toggle("active-search");
//     })
// }
