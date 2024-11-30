var singUp = document.getElementById("signUp");
var page = document.getElementById("formGroup");

var emailLog = document.getElementById("logineEmailInput");
var passLog = document.getElementById("LoginPassInput");
var logbut = document.getElementById("Login");
var sigInCont = JSON.parse(localStorage.getItem("signInOpt")) || [];
/****************************************************************/

function login() {
  for (var i = 0; i < sigInCont.length; i++) {
    if (
   
      sigInCont[i].email.toLowerCase() === emailLog.value.toLowerCase() &&
      sigInCont[i].pass.toLowerCase() === passLog.value.toLowerCase()
    ) {
      page.innerHTML = ` <section id="welcome">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid mx-5">
          <a class="navbar-brand text-white text-decoration-none" href="#"
            >SMART LOGIN</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <button
                id="logout"
                type="button"
                class="btn btn-outline-warning text-secondary p-2"
              >
                logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div class="container vh-100 text-center d-flex align-items-center">
        <div class="form-group w-75">
          <h1>Hello ${sigInCont[i].name}</h1>
        </div>
      </div>
    </section>`;

      var logoutButtom = document.getElementById("logout");
      logoutButtom.addEventListener("click", function () {
        logout();
      });

      page.classList.remove("form-group");
    } else if (!emailLog.value || !passLog.value) {
      document.getElementById("incorrectmsg").classList.remove("d-none");
      document.getElementById("validmessageLog").classList.remove("d-none");
    } else if (emailLogValid() == false || passLogValid() == false) {
      document.getElementById("validmessageLog").classList.remove("d-none");
      document.getElementById('vaidpassmail').classList.remove('d-none');

    }
  }
}

/********************************************************************/
logbut.addEventListener("click", function () {
  login();
});

/*******************************************************************/
function emailLogValid() {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var text = emailLog.value;
  if (regex.test(text)) {
    return true;
  } else {
    return false;
  }
}
/***************************************************/

function passLogValid() {
  var regex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
  var text = passLog.value;
  if (regex.test(text)) {
    return true;
  } else {
    return false;
  }
}

/*********************************************************************************/
function changePage() {
  page.innerHTML = `   <h1 class="text-center">Smart Login System</h1>

      <div class="mb-3">
        <input
          type="text"
          class="form-control text-white"
          id="nameInput"
          placeholder=" Enter Your Name"
        />
      </div>
      <div class="mb-3">
        <input
          type="email"
          class="form-control text-white"
          id="emailInput"
          placeholder=" Enter Your Email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="passInput"
          placeholder="Enter Your Password"
        />
      </div>
      <p id="incorrect" class="text-center text-danger d-none">
        All inputs is required
      </p>
          <p class="text-center text-danger d-none " id="validmessage">"Name must contain only letters." <br>
       "Email must contain "@" and ".com"<br>
       "Password must contain letters and numbers"</p>
         <p class="text-center text-danger d-none " id="emailReapeat">
    This email address or name is already used
      </p> 


      <button 
        id="signUpButton"
        type="button"
        class="btn btn-outline-info text-center w-100"
      >
        sign Up
      </button>
      <p class="text-center text-white my-3">
        You have an account?  <a id="signIn" class="text-white text-decoration-none" href=""
          >Sign in</a
        >
      </p>
</div>`;
  var signUpButton = document.getElementById("signUpButton");
  signUpButton.addEventListener("click", signUpCheck);
}
/**********************************************************************************/

function signUpCheck() {
  var inputName = document.getElementById("nameInput");
  var inputEmail = document.getElementById("emailInput");
  var inputPass = document.getElementById("passInput");

  if (
    nameValid() == true &&
    emailValid() == true &&
    passValid() == true &&
    ValiTo() == true
  ) {
    //  ******************************************************
    var sigInObj = {
      name: inputName.value,
      email: inputEmail.value,
      pass: inputPass.value,
    };

    sigInCont.push(sigInObj);
    localStorage.setItem("signInOpt", JSON.stringify(sigInCont));
    //****************************************************************** */
    page.innerHTML = `
   <section id="welcome">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid mx-5">
          <a class="navbar-brand text-white text-decoration-none" href="#"
            >SMART LOGIN</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <button
                id="logout"
                type="button"
                class="btn btn-outline-warning text-secondary p-2"
              >
                logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div class="container vh-100 text-center d-flex align-items-center">
        <div class="form-group w-75">
          <h1>Hello ${inputName.value.toLowerCase()}</h1>
        </div>
      </div>
    </section>`;

    var logoutButtom = document.getElementById("logout");

    logoutButtom.addEventListener("click", function () {
      logout();
    });

    page.classList.remove("form-group");
  } else if (!inputName.value || !inputEmail.value || !inputPass.value) {
  /*********************************************************************/
    document.getElementById("incorrect").classList.remove("d-none");
  } else if (
    nameValid() == false ||
    emailValid() == false ||
    passValid() == false
  ) {
    document.getElementById("validmessage").classList.remove("d-none");
  }

  /*************************************************************************/

  function ValiTo() {
    for (var i = 0; i < sigInCont.length; i++){
      if (
        sigInCont[i].email.toLowerCase() === inputEmail.value.toLowerCase() ||
        sigInCont[i].name.toLowerCase() === inputName.value.toLowerCase()
      ) {
        document.getElementById("emailReapeat").classList.remove("d-none");
        return false;
      }
    }

    document.getElementById("emailReapeat").classList.add("d-none");
    return true;
  }
  /*****************************************************************************/
  function nameValid() {
    var regex = /^[a-zA-Z]+$/;
    var text = inputName.value;
    if (regex.test(text)) {
      return true;
    } else {
      return false;
    }
  }

  /***********************************************/

  function emailValid() {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var text = inputEmail.value;
    if (regex.test(text)) {
      return true;
    } else {
      return false;
    }
  }
  /***************************************************/

  function passValid() {
    var regex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    var text = inputPass.value;
    if (regex.test(text)) {
      return true;
    } else {
      return false;
    }
  }
}
/*************************************************************/
function logout() {
  location.reload();
}
/***********************************************************/
singUp.addEventListener("click", function () {
  changePage();
});
