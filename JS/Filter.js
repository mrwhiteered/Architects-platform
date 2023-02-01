let filterLogo = document.querySelector('.filter__logo')
let filterList = document.getElementById('filterList');
let filterBtn = document.getElementById('filterBtn');
let filterTitle = document.getElementById('filterTitle')
let filterItem = document.querySelectorAll('.filter__item');


// Смена цвета выбранного фильтра
// for( let i = 0; i < filterItem.length; i++){ 
//     filterItem[i].addEventListener('click', function(){
// filterItem[i].classList.toggle('activn')
//     }); 
//   }


    	
  

// ----------Открытие фильтра-------------------------------------------
// При нажатии на кнопку ,ему присваивается событие и выполняется функция 
filterBtn.addEventListener('click', function(){
filterList.classList.toggle('activFilter'); // добавляем новый класс списку фильтров, дисплэй блок 
filterTitle.classList.toggle('enableTitle'); // добавляем новый класс титлу, прозрачность ему бахаем

// проверяем если добавлен класс для активных списков, то тогда меняется иконка фильтра 
if (filterList.classList.contains('activFilter')) {
    filterLogo.src="/image/menu_logo.png";
} else {
    filterLogo.src="/image/filter_logo.png";
}
});
//---------------------------------------------------


window.onload = addAll(); 
// Фильтр
function filter(prop) {
 if (prop == 'All'){
    addAll();
 } else {
    removeClass();
    addToScreen(prop);
    
}   
}



// Добавить элемент на страницу 
function addToScreen(prop){
    let addShow = document.getElementsByClassName(prop);
    for (let i =0; addShow.length > i; i++){
        addShow[i].classList.add('show');
    }
}

// Добавить ВСЕ элемент на страницу 
function addAll(){
    let all = document.getElementsByClassName('filterItem');
    for (let i =0; all.length > i; i++){
        all[i].classList.add('show');
    }
}

// Удалить классы с невыбранных
function removeClass () {
    let allFilterItem = document.getElementsByClassName('filterItem');
    for (let i =0; allFilterItem.length > i; i++){
        allFilterItem[i].classList.remove('show');
    }
}