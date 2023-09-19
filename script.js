function btn(){
    alert("please fill the booking form in booking page.Thank you for choosing us")
}


let profile = document.getElementById("profile");
let iconp = document.getElementById("iconpro");
let v=true;
iconp.addEventListener("click", function(){
    if(v){
            profile.classList.remove("d-none");
        
        v=false;
    }
    else{
            profile.classList.add("d-none");
        
        v=true;
    }
});
