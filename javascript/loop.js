

function use(){
    let star = parseInt(document.getElementById("starnum").value)
    let num = parseInt(document.getElementById("number").value)
    let inked = parseInt(document.getElementById("ink").value)


    let ooo = document.getElementById("output")

    //ooo.innerHTML = "";
    
    for(let i = star; i < num; i += inked){

        ooo.innerHTML += i + "<br>"
    }
   
}




//alert("hi world")