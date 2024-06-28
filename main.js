const elInput = document.querySelector("input");
const elBtn = document.querySelector("#btn");
const elResult = document.querySelector("#result");
const elWrapper = document.querySelector(".wrapper");
let salom = "dunyo";

elBtn.addEventListener("click", function () {
    const score = Number(elInput.value);
    let content = elResult.textContent;
    let textColor = elResult.style.color;
   
    if (score > 0 && score < 80) {
        content = "Siz yiqildingiz";
        textColor = "red";
    } else if (score >= 80 && score < 100) {
        content = "Siz super kontraktga kirdingiz";
        textColor = "blue";

        const resultTeg = document.createElement("p");
        const resultInput = document.createElement("input");
        const resultBtn = document.createElement("button");
        resultTeg.textContent = "Super kontrakt narxi 3000$ iltimos summani kiriting";

        resultTeg.className = "result"
        resultBtn.textContent ="Submit"

        resultBtn.addEventListener("click", function(){
            if(resultInput.value >=3000){
                content = "siz o'qishga kirdingiz"
            }else(
                content = "mablag'ingiz yetmadi"
            )
        })
       
        elWrapper.appendChild(resultTeg);
        elWrapper.appendChild(resultInput);
        elWrapper.appendChild(resultBtn);


    } else if (score >= 100 && score < 130) {
        content = "Siz  kontraktga kirdingiz";
        textColor = "blue";


        const resultTeg = document.createElement("p");
        const resultInput = document.createElement("input");
        const resultBtn = document.createElement("button");
        resultTeg.textContent = "kontrakt narxi 2000$ iltimos summani kiriting";

        resultBtn.textContent ="Submit"

        resultBtn.addEventListener("click", function(){
            if(resultInput.value >=2000){
                content = "siz o'qishga kirdingiz"
            }else(
                content = "mablag'ingiz yetmadi"
            )
        })

        elWrapper.appendChild(resultTeg);
        elWrapper.appendChild(resultInput);
        elWrapper.appendChild(resultBtn);

    } else if (score >= 130 && score <= 180) {
        content = "Siz  grant asosida kiritdingiz kirdingiz";
        textColor = "green";
    } else {
        content = "Noto'g'ri qiymat kiritildi";
        textColor = "blue";
    }


    elResult.textContent = content;
    elResult.style.color = textColor;

});
