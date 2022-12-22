

const username= document.getElementById('user_id');
const password = document.getElementById('password');


loginfunc = ()=>{
    let usr = {username:username.value, password:password.value}
    
    fetch('http://localhost:3002/login', {
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body: JSON.stringify(usr)
    }).then(res => res.json()).then(result=>{
        if(result.success){
            localStorage.setItem("@usr", JSON.stringify({
                username:result.data.username,
                userid:result.data.userid
            }))

            if(result.data.role === "user"){
                    window.location = "./home.html"
            }else if(result.data.role === "admin"){
                window.location = "./inventory.html"
            }
   
    
}else{
    
    console.log("wrong password/userid");
}
    })
  


}