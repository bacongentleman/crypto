const price = document.querySelectorAll('.price');
const dailyChange = document.querySelectorAll('.dailyChange');

for(let i = 0; i < 100; ++i){
    if(parseInt(dailyChange[i].innerText) < 0){
        price[i].style.color = "red"
    }
    else{
        price[i].style.color = "green"
    }
}



