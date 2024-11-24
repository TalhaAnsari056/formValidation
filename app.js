var data = [
    {
        username: "Ali",
        email: "emfg7i4@gmail.com",
        password: "fgywif",
        gender: "fbue",
        city: "nebyue",
    },
    {
        username: "Talha",
        email: "emfg7i4@gmail.com",
        password: "fgywif",
        gender: "fbue",
        city: "nebyue",
    },
    {
        username: "mehmood",
        email: "emfg7i4@gmail.com",
        password: "fgywif",
        gender: "fbue",
        city: "nebyue",
    },
    {
        username: "Ahmad",
        email: "emfg7i4@gmail.com",
        password: "fgywif",
        gender: "fbue",
        city: "nebyue",
    },

];
console.log(" data :", data);
var userName = document.getElementsByClassName("userName")[0];
var useremail = document.getElementsByClassName("useremail")[0];
var userPass = document.getElementsByClassName("userPass")[0];
var radios = document.getElementsByName("gender");

function UserData(a, b, c, d, e) {
    this.username = a;
    this.email = b;
    this.password = c;
    this.gender = d;
    this.city = e;
}

var userSp = document.getElementsByClassName("userSp")[0];
function checkName() {
    var userName = document.getElementsByClassName("userName")[0];
    for (var i = 0; i < userName.value.length; i++) {
        if (userName.value.length < 3) {
            userSp.innerText = "at least 3 words"
            return;
        }
        userSp.innerText = "";

    }
}
var emailBoolean = false;
function checkEmail() {
    var useremail = document.getElementsByClassName("useremail")[0];
    var emailSp = document.getElementsByClassName("emailSp")[0];
    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    if (!useremail.value.match(regex)) {
        emailSp.innerText = "Invalid Email";
        return;
    }
    if (useremail.value.match(regex)) {
        emailSp.innerText = "";
        emailBoolean = true;


    }

    // console.log("emailboolean",emailBoolean);
}
function checkPassword() {
    var userPass = document.getElementsByClassName("userPass")[0];
    var passSp = document.getElementsByClassName("passSp")[0];
    for (var i = 0; i < userPass.value.length; i++) {
        if (userPass.value.length < 5) {
            passSp.innerText = "weak Password"
            return;
        }
        passSp.innerText = "";
    }
}
var boolean = true;
function toggleBtn() {
    var userPass = document.getElementsByClassName("userPass")[0]
    var passBtn = document.getElementsByClassName("passBtn")[0];
    if (userPass.value === "") return;
    if (boolean) {
        userPass.setAttribute("type", "text");
        passBtn.innerText = "hide";
        boolean = false;
        return;
    }
    else {
        userPass.setAttribute("type", "password");
        passBtn.innerText = "show";
        boolean = true;

    }

}
var radioBoolean = false;
var i;
function checkRadio() {
    var radios = document.getElementsByName("gend");
    // var radioSp = document.getElementsByClassName("radioSp")[0];
    // console.log(radios);
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioBoolean = true;
            // radios[i].unchecked;
            // console.log("radio value", radios[i].value);
            // console.log( "radioboolean",radioBoolean);
            return;

        }
    }
}

function allValidation(e) {

    var cities = document.getElementById("cities");
    e.preventDefault();
    // console.log("Hi 1")
    // var citiesSp = document.getElementsByClassName("citiesSp")[0];
    // if (userName.value === ""  || useremail.value === "  ") return;
    // console.log("Hi 2")
    // for (var i = 0; i < userName.value.length; i++) {
    //     if (userName.value === "   ") {
    //         alert("consecutive double Spaces not Allowed");
            
    //         break;
    //     }
    //     return;
    // }
    // console.log("Hi 3")

    if (cities.selectedIndex === 0) {
        alert("Plz select a city");

        return;

    }
    // console.log(cities.value);

    var checkCondition = false;
    console.log("ist", checkCondition);
    if (userName.value.length >= 3 && userPass.value.length >= 5 && emailBoolean == true && radioBoolean == true) {
        checkCondition = true;

    }
    console.log("2nd", checkCondition);
    if (!checkCondition) return;


    for (let i = 0; i < data.length; i++) {
        if (data[i].username === userName.value) {
            alert("User Name Already exist");
            return;

        }
    }
    // data = [...data ,];
    data.push(new UserData(userName.value, useremail.value, userPass.value, radios.value, cities.value));
    console.log("updated data :", data);

    alert("successful");

    userName.value = "";
    useremail.value = "";
    userPass.value = "";
    cities.value = "first";
    // radios[i].checked = false;
   


}

