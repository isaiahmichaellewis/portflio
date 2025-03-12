function expo(){
    var num = document.getElementById("number").value;
    var ex  = document.getElementById("expodent").value;
    var result =(num ** ex)
    document.getElementById("demo").innerHTML = result
}
