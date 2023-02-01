
let arch = [
    {
     name: "Название Привет",
     description: "Описание 1",
     img: "/image/filter_logo.png",
     category:"RA",
    },

    {
        name: "Название 2",
        description: "Описание 2",
        img: "/image/filter_logo.png",
        category:"RR" ,
       },
       {
        name: " Сегодня",
        description: "Описание 55",
        img: "/image/filter_logo.png",
        category:"AOZ" ,
       },

       {
        name: "Название 3",
        description: "Описание 3",
        img: "/image/filter_logo.png",
        category:"AOZ" ,
       },

       {
        name: "Название 4",
        description: "Описание 4",
        img: "/image/filter_logo.png",
        category:"RR" ,
       },

       {
        name: "Название 5",
        description: "Описание 5",
        img: "/image/filter_logo.png",
        category:"PZS" ,
       },
] 

let container = document.getElementsByClassName('containerFilter');

var element = document.getElementById("containerForFilter");

createadd();
function createadd(){
    for (let i=0; arch.length>i; i++ ) {
        let newItem = document.createElement('div');
        let newDescription = document.createElement('div');
        let nameProject = arch[i]['name'];
        let descriptionText = arch[i]['description'];
        let category = arch[i]['category'];
        let newImage = document.createElement('img');

        let nodeTitle = document.createTextNode(nameProject);
        let nodeDescription = document.createTextNode(descriptionText);

        
        newImage.src = arch[i]['img'];
        

        newItem.appendChild(nodeTitle);
        newDescription.appendChild(nodeDescription);

        newItem.classList.add('filterItem');
        newItem.classList.add(category);
        newItem.classList.add('show');
        
        element.appendChild(newItem);
        newItem.appendChild(newDescription);
        newItem.appendChild(newImage);
        
    }
}


console.log(arch);
