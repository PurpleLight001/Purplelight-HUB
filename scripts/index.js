document.getElementById("navbar-mobile-btn").addEventListener("click" , function() {
    if (document.getElementById("navbar-list").style.display == "") {
        document.getElementById("navbar").style.position = "fixed"
        document.getElementById("navbar-list").style.display = "grid"
    } else {
        document.getElementById("navbar-list").style.display = ""
        document.getElementById("navbar").style.position = ""
    }
    console.log("Button Working...")
})

function closeNavbarList() {
    document.getElementById("navbar-list").style.display = ""
}
