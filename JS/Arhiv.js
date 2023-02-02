
let arch = [
    {
     name: "Название Привет",
     description: "Описание 1",
     img: "/image/arh1.png",
     category:"RA",
      date: '02.2023',
      creater:'Берова П.А.',
    },

    {
        name: "Название 2",
        description: "Описание 2",
        img: "/image/arch1b.png",
        category:"RR" ,
        date: '',
      creater:'',
       },
       {
        name: " Сегодня",
        description: "Описание 55",
        img: "/image/arch2.png",
        category:"AOZ" ,
       },

       {
        name: "Название 3",
        description: "Описание 3",
        img: "/image/arch2b.png",
        category:"AOZ" ,
       },

       {
        name: "Название 4",
        description: "Описание 4",
        img: "/image/arch3.png",
        category:"RR" ,
       },

       {
        name: "Название 5",
        description: "Описание 5",
        img: "/image/arch3b.png",
        category:"PZS" ,
       },
       {
        name: "Название Привет",
        description: "Описание 1",
        img: "/image/arh1.png",
        category:"RA",
         date: '02.2023',
         creater:'Берова П.А.',
       },
   
       {
           name: "Название 2",
           description: "Описание 2",
           img: "/image/arch1b.png",
           category:"RR" ,
           date: '',
         creater:'',
          },
          {
           name: " Сегодня",
           description: "Описание 55",
           img: "/image/arch2.png",
           category:"AOZ" ,
          },
   
          {
           name: "Название 3",
           description: "Описание 3",
           img: "/image/arch2b.png",
           category:"AOZ" ,
          },
   
          {
           name: "Название 4",
           description: "Описание 4",
           img: "/image/arch3.png",
           category:"RR" ,
          },
   
          {
           name: "Название 5",
           description: "Описание 5",
           img: "/image/arch3b.png",
           category:"PZS" ,
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
        
        

        
        let nameProject = arch[i]['name'];
        let descriptionText = arch[i]['description'];
        let category = arch[i]['category'];
        newImage.src = arch[i]['img'];
        let dateB = arch[i]['date'];
        let createrB = arch[i]['creater'];


        let nodeTitle = document.createTextNode(nameProject);
        let nodeDescription = document.createTextNode(descriptionText);
        let nodeDateB = document.createTextNode(dateB);
        let nodeCreaterB = document.createTextNode(createrB);

        newDescription.appendChild(nodeDescription);

        newItem.appendChild(newImage);
        newItem.appendChild(nodeTitle);
        newItem.appendChild(newDescription);
        newItem.appendChild(containerNameDate);
        containerNameDate.appendChild(divadd);
        divadd.appendChild(nodeDateB);
        containerNameDate.appendChild(divadd2);
        divadd2.appendChild(nodeCreaterB);

        newItem.classList.add('filterItem');
        newItem.classList.add(category);
        newItem.classList.add('show');
        containerNameDate.classList.add('dateCreater');

        element.appendChild(newItem);
        
        
        
        
    }
}


console.log(arch);
