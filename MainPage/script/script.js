const nav = document.querySelector('.nav')
nav.addEventListener('click', function(){
    nav.classList.toggle('nav_active');
})
const cards = document.querySelectorAll(".card")
for(const card of cards){
    card.addEventListener('click', ()=>{
        GetOutHere()
        card.classList.add("card_active");
})}
function GetOutHere(){
    for(const card of cards){
        card.classList.remove('card_active');
    }
}