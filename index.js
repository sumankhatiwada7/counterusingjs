let count = 0
let count1=0
let countsgirls=document.getElementById("count-g")
let countsboys=document.getElementById("count-b")
let saveel=document.getElementById("previous-entries")
let saveel1=document.getElementById("previous-entrie")
function girls(){
    count +=1
    countsgirls.innerText=count
    
}
function boys(){
    count1 +=1
    countsboys.innerText=count1
    
}
function saveboys(){
    let countstr=count1+'-'
    saveel1.innerText+=countstr
    countsboys.textContent=0
    count1=0
}
function savegirls(){
    let countstr=count +'-'
    saveel.innerText+=countstr
    countsgirls.textContent=0
    count=0
}