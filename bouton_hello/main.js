const btn_hello = document.querySelector(".hello");
const body = document.querySelector("body");

btn_hello.addEventListener("click", () => {
  let inp = document.createElement("input");
  inp.placeholder = "Entre votre nom";

  let btn_ok = document.createElement("button");
  btn_ok.textContent = "ok";
  btn_ok.className = "ok";
  body.append(inp);
  body.append(btn_ok);


    if (body.contains(btn_ok) ) {
        
        btn_ok.addEventListener("click", ()=>{
            let inp1 = document.createElement("input");
            inp1.placeholder = "Confirme votre nom"
           
            let btn_confirm = document.createElement("button");
            btn_confirm.textContent = "confirm";
            btn_confirm.className = "confirm";
            body.append(inp1);
            body.append(btn_confirm);
            btn_ok.style.display = "none";

            btn_confirm.addEventListener("click", ()=>{
                 if (inp.value === inp1.value) {
                let p = document.createElement("p");
               p.textContent = inp.value;
               body.append(p);
            }else {
                inp1.remove();
                inp.value = "";
                btn_ok.style.display = "inline";
                btn_confirm.remove();

            }
            })

           
            

        })

    }

});



// document.querySelector(".ok").addEventListener("click", ()=>{
//   let inp = document.createElement("input");
//    inp.placeholder = "Confirme votre nom"

//   body.append(inp);

//  })
