let plus= document.querySelectorAll(".btn-plus");
let minus= document.querySelectorAll(".btn-minus"); 
let hrt = document.querySelectorAll(".btn-hrt");
let qt = document.querySelectorAll(".qt");
let sum = document.querySelector(".sum");
let price= document.querySelectorAll(".price")
let card= document.querySelectorAll(".block")
let rmv= document.querySelectorAll(".btn-dl")



for(let i=0;i<rmv.length;i++){
    rmv[i].addEventListener("click",function(){
        card[i].remove();
        sum.textContent=Number(sum.textContent)- Number(price[i].innerHTML)*Number(qt[i].innerHTML)

}
    )
}

for(let i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function(){
        qt[i].innerHTML++
        sum.textContent=Number(sum.textContent)+ Number(price[i].innerHTML)

}
    )
}

for(let i=0;i<minus.length;i++){
    minus[i].addEventListener("click",function(){
        if(qt[i].innerHTML>0){
        qt[i].innerHTML--
        sum.textContent=Number(sum.textContent)- Number(price[i].innerHTML)

    }
        

}
    )
}
for(let i=0;i<hrt.length;i++){
    hrt[i].addEventListener("click",function(){

    document.querySelectorAll('.btn-hrt')[i].style.backgroundColor = "red";
    })
}
for(let i=0;i<hrt.length;i++){
    hrt[i].addEventListener("dblclick",function(){
    document.querySelectorAll('.btn-hrt')[i].style.backgroundColor = "white";
    })
}
for(let i=0;i<hrt.length;i++){
    hrt[i].addEventListener("dblclick",function(){
    document.querySelectorAll('.btn-hrt')[i].style.backgroundColor = "white";
    })
}
