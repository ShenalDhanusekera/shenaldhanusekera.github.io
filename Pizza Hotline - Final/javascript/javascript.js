//This is the Javascript for the Hamburger Menu. When the Screen is a specific witdh the Hamburger Menu will pop up. If not it will stay the same
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}