 let hide = document.getElementById("Pass");
    let btn = document.getElementById("btn");

    function toggle(){
        if(hide.type === "password"){
            hide.type = "text";
            btn.innerHTML = `<i class='fa-solid fa-eye'></i> Hide`;
        } else { 
            hide.type = "password";
            btn.innerHTML = `<i class='fa-solid fa-eye'></i> Show`;
        }
    }