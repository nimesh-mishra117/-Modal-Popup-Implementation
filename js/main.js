
// document.getElementById("modal").addEventListener('click', function () {
//     window.alert("click");
// })


function change() {
    document.getElementById('modal').style.opacity = ".3"
    document.getElementById('boxes').style.backgroundColor = "white";
    document.getElementById('boxes').style.border = "2px solid black";
    document.getElementById('boxes').style.borderRadius = "10px";
    document.getElementById('boxes').style.display = "flex";
    document.getElementById('boxes').style.alignItems = "center";
    document.getElementById('boxes').style.flexDirection = "column";
    document.getElementById('body').style.backgroundColor = "#00000080"
    console.log('click')
}

document.getElementById('close').addEventListener("click", function () {
    console.log("click2");
    document.getElementById('boxes').style.display = "none";
    document.getElementById('modal').style.opacity = "1"
    document.getElementById('body').style.backgroundColor = "#fff"


})