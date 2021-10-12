// let check1 = document.querySelectorAll(".checks");


function printMousePos(event) {
    console.log("clientX: " + event.clientX +
    " - clientY: " + event.clientY)

    let CX = event.clientX;
    let CY = event.clientY;

        if(CX >= 1186 && CX <= 1236 && CY <= 165 && CY >=109){
            console.log("ok");
            let check1 = document.querySelector("#firstCheck")
            let checkn1 = document.createElement("img");
            checkn1.src = "imgs/check.png";
            checkn1.className = "checks";
            checkn1.id = "check1";
            check1.appendChild(checkn1);
            
        }
        else if(CX >= 1048 && CX <= 1101 && CY <= 529 && CY >=473){
            console.log("ok2");
            let check2 = document.querySelector("#secondCheck")
            let checkn2 = document.createElement("img");
            checkn2.src = "imgs/check.png";
            checkn2.className = "checks";
            checkn2.id = "check2";
            check2.appendChild(checkn2);
            
        }
        else if(CX >= 1220 && CX <= 1264 && CY <= 698 && CY >=629){
            console.log("ok3");
            let check3 = document.querySelector("#thridCheck")
            let checkn3 = document.createElement("img");
            checkn3.src = "imgs/check.png";
            checkn3.className = "checks";
            checkn3.id = "check3";
            check3.appendChild(checkn3);
            
        }
        else{
            console.log("okCross");
            let crossn = document.querySelector(".rightSide");
            let divCross = document.createElement("div");
            let cross = document.createElement("img");
            divCross.className = "divCross";
            cross.src = "imgs/cross.png";
            cross.className = "cross";
            cross.id = "cross1";
            divCross.style.marginLeft = `${CX-800}px`;
            divCross.style.marginTop = `${CY-45}px`;

            divCross.appendChild(cross);
            crossn.appendChild(divCross);
        }
  }
  
  document.addEventListener("click", printMousePos);