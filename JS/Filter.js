let filterLogo = document.querySelector('.filter__logo')
let filterList = document.getElementById('filterList');
let filterBtn = document.getElementById('filterBtn');
let filterTitle = document.getElementById('filterTitle')

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