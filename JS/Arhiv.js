
let arch = [
    {
     name: "Принципы формирования туристического кластера в Причерноморье как инструмента развития территории",
     img: "image/arh1.png",
     category:"RA",
      date: '02.2023',
      creater:'Берова П.А.',
    },
    {
      name: "Принципы формирования туристического кластера в Причерноморье как инструмента развития территории",
      img: "image/arch1b.png",
      category:"RA",
       date: '02.2023',
       creater:'Берова П.А.',
     },
     {
      name: "Принципы формирования туристического кластера в Причерноморье как инструмента развития территории",
      img: "image/arch2.png",
      category:"RR",
       date: '02.2023',
       creater:'Берова П.А.',
     },
     {
      name: "Принципы формирования туристического кластера в Причерноморье как инструмента развития территории",
      img: "image/arch2b.png",
      category:"AOZ",
       date: '02.2023',
       creater:'Берова П.А.',
     },
     {
      name: "Принципы формирования туристического кластера в Причерноморье как инструмента развития территории",
      img: "image/arch3.png",
      category:"AOZ",
       date: '02.2023',
       creater:'Берова П.А.',
     },

     {
      name: "Принципы формирования туристического кластера в Причерноморье как инструмента развития территории",
      img: "image/arch3b.png",
      category:"AOZ",
       date: '02.2023',
       creater:'Берова П.А.',
     },
     {
      name: "Принципы формирования туристического кластера в Причерноморье как инструмента развития территории",
      img: "image/arch4.png",
      category:"PZS",
       date: '02.2023',
       creater:'Берова П.А.',
     },
     {
      name: "Принципы формирования туристического кластера в Причерноморье как инструмента развития территории",
      img: "image/arch4b.png",
      category:"PZS",
       date: '02.2023',
       creater:'Берова П.А.',
     },
     {
      name: "Принципы формирования туристического кластера в Причерноморье как инструмента развития территории",
      img: "image/arch5.png",
      category:"PZS",
       date: '02.2023',
       creater:'Берова П.А.',
     },
     {
      name: "Принципы формирования туристического кластера в Причерноморье как инструмента развития территории",
      img: "image/arch5b.png",
      category:"PZS",
       date: '02.2023',
       creater:'Берова П.А.',
     },

    
] 

let container = document.getElementsByClassName('containerFilter');

var element = document.getElementById("containerForFilter");

createadd();
function createadd(){
    for (let i=0; arch.length>i; i++ ) {
        
        let newItem = document.createElement('div'); //Главный блок 

        let newImage = document.createElement('img'); // Изображдение
        let containerNameDate = document.createElement('div'); // Контейнер для даты и имени
        let divadd = document.createElement('div');
        let divadd2 = document.createElement('div');
        let newDescription = document.createElement('div'); //Описание 
        let divContainer = document.createElement('div'); // для всекго
        let divText = document.createElement('p'); //ДЛЯ ТЕКСТА
        
        

        
        let nameProject = arch[i]['name'];
        let category = arch[i]['category'];
        newImage.src = arch[i]['img'];
        let dateB = arch[i]['date'];
        let createrB = arch[i]['creater'];

        let nodeTitle = document.createTextNode(nameProject); // оПИСАНИЕ ПРОЕКТА
        divText.appendChild(nodeTitle); // добавляем описание в элемент <p>



        let nodeDescription = document.createTextNode(divText);
        let nodeDateB = document.createTextNode(dateB);
        let nodeCreaterB = document.createTextNode(createrB);

        

        newItem.appendChild(divContainer);
        divContainer.appendChild(newImage);
        divContainer.appendChild(containerNameDate);
        containerNameDate.appendChild(divadd);
        divadd.appendChild(nodeDateB);
        containerNameDate.appendChild(divadd2);
        divadd2.appendChild(nodeCreaterB);
        divContainer.appendChild(divText);
        
        

        divText.classList.add('correctTextDes');
        divContainer.classList.add('toBottom');
        newItem.classList.add('filterItem');
        newItem.classList.add(category);
        newItem.classList.add('show');
        containerNameDate.classList.add('dateCreater');

        element.appendChild(newItem);
        
        
        
        
    }
}



