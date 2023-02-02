let symbols = 
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validation(){
    let email = document.getElementById("email").value
    let text = document.getElementById("txt")
    let errorImg = document.getElementById("error-img")

    let input= document.getElementsByClassName("input")

    if(email.match(symbols)){
        text.innerHTML=""
        errorImg.style.display = 'none'
    }else if(email == ""){
        text.innerHTML= "Please enter an email"
        errorImg.style.display = "block"
        input[0].style.borderColor = "hsl(0, 93%, 68%)"
    }else{
        text.innerHTML = "Please provide a valid email"
        errorImg.style.display = "block"
        input[0].style.borderColor = "hsl(0, 93%, 68%)"
    }

    console.log("hi")
}