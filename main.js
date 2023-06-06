function scrollToBlock() {
      var block = document.getElementById('div7');
      if (block) {
            block.scrollIntoView({ behavior: 'smooth' }); // Прокрутка до блока с плавным эффектом
      }
}

/**/

function scrollToBlock1() {
      var block = document.getElementById('div81');
      if (block) {
            block.scrollIntoView({ behavior: 'smooth' }); // Прокрутка до блока с плавным эффектом
      }
}

/**/

var texts = ["Печать на холсте по фото со скидкой -25%", "Коллаж из фото на холсте со скидкой -25%", 
"Портрет Поп-Арт на холсте со скидкой -25%", "Портрет под живопись со скидкой -25%", 
"Портрет по фото со скидкой -25%", "Портрет Love Is по фото со скидкой -25%", 
"Мужской портрет по фото со скидкой -25%",  "Женский портрет по фото со скидкой -25%", 
"Детский портрет по фото со скидкой -25%", "Портрет в образе по фото со скидкой -25%"];
var currentIndex = 0; 

function changeText() {
      var element = document.getElementById("b2");
      element.style.opacity = 0;
  
setTimeout(function() {
currentIndex = (currentIndex + 1) % texts.length; // циклический переход к следующему тексту при помощи увеличения индекса
element.textContent = texts[currentIndex]; // замена на следующий текст
element.style.opacity = 1;
    
setTimeout(changeText, 3000); // смена через 3с
}, 300); // задержка 0,3с
}

window.onload = function() {
changeText();
};

/**/

function scrollToBlock2() {
      var block = document.getElementById('child50');
      if (block) {
            block.scrollIntoView({ behavior: 'smooth' }); // Прокрутка до блока с плавным эффектом
      }
}

/**/

function showInput() {
      var input2 = document.getElementById('input2',).value;
      var input3 = document.getElementById('input3',).value;
      var input4 = document.getElementById('input4',).value;
      var input5 = document.getElementById('input5',).value;
      var input6 = document.getElementById('input6',).value;
      var input1 = document.getElementById('input1',).value;

      if (input2 === '' || input3 === '' || input4 === '' || input5 === '' || input6 === '' || input1 === ''){
            window.alert("Заполните все поля!")
      } else {
      var output = "Имя: " + input2 + "\nПочта: " + input3 + "\nТелефон: " + input4 + "\nПромокод: " + input5 + "\nКомментарий: " + input6 + "\nАдрес: " + input1;
      window.alert(output);
      }}

/**/      

function scrollToBlock3() {
var block = document.getElementById('b25');
      if (block) {
            block.scrollIntoView({ behavior: 'smooth' }); // Прокрутка до блока с плавным эффектом
      }
}

/**/

       /* function toggleText() {
            var hiddenContent = document.querySelector('.hidden-content');
            var container = document.querySelector('.container');
            
            if (hiddenContent.style.maxHeight) {
              hiddenContent.style.maxHeight = null;
              container.style.height = null;
            } else {
              hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
              container.style.height = container.scrollHeight + 'px';
            }
          } */

/**/

function handleEnter(event, inputId1, inputId2) {
      if (event.key === 'Enter') {
            var input1 = document.getElementById(inputId1);
            var div34 = document.getElementById('div34');
          
            var text1 = input1.value;

            var combinedText = text1;
          
            div34.textContent = combinedText;
          
            input1.value = '';
          
            event.preventDefault();
      }}

/**/

/* const button = document.getElementById("button10");
const div34 = document.getElementById("div34");

button.addEventListener("click", function copyText() {
  div34.textContent = button.id;
}); */

/**/

const button = document.getElementById("button");

setInterval(function() {
  button.classList.toggle("pulsating-button");
}, 1500);

const button1 = document.getElementById("button1");

setInterval(function() {
  button.classList.toggle("pulsating-button");
}, 1500);

/**/

function output() {
      var groupButton = "Вы выбрали Холст льняной!";

      window.alert(groupButton);
}
function output1() {
      var groupButton = "Вы выбрали Холст натуральный!";

      window.alert(groupButton);
}
function output2() {
      var groupButton = "Вы выбрали холст Без обработки!";

      window.alert(groupButton);
}
function output3() {
      var groupButton = "Вы выбрали холст Живопись!";

      window.alert(groupButton);
}
function output4() {
      var groupButton = "Вы выбрали холст Дрим-арт!";

      window.alert(groupButton);
}
function output5() {
      var groupButton = "Вы выбрали холст Фотоколлаж!";

      window.alert(groupButton);
}      
function output6() {
      var groupButton = "Вы выбрали холст Портрет маслом!";

      window.alert(groupButton);
}
function output7() {
      var groupButton = "Вы выбрали холст Портрет в образе!";

      window.alert(groupButton);
}
function output8() {
      var groupButton = "Вы выбрали холст Фотомазайка!";

      window.alert(groupButton);
}
function output9() {
      var groupButton = "Вы выбрали холст Love-is!";

      window.alert(groupButton);
}
function output10() {
      var groupButton = "Вы выбрали холст покрытый лаком!";

      window.alert(groupButton);
}   
function output11() {
      var groupButton = "Вы выбрали холст покрытый 3D-гелем!";

      window.alert(groupButton);
}   
function output12() {
      var groupButton = "Вы добавили багетную рамку!";

      window.alert(groupButton);
}   

/**/

function openConsultantForm() {
      const consultantForm = document.getElementById("consultant-form");
      consultantForm.style.display = "block";
    }
    
function closeConsultantForm() {
  const consultantForm = document.getElementById("consultant-form");
  consultantForm.style.display = "none";
}