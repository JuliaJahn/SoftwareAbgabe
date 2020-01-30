/*
@author Julia Jahn
@copyright Julia 
@date 27.01.2020
@version Version: V1.1
@description In this file the points for every level are calculated and it handles the levels with multiple choices
*/

/*Points Level 1*/
/**
 * @description if the Elements with Id's "answerBread" and "answerEgg" are clicked function "addPoint1" will be executed
 */
document.getElementById("answerBread").addEventListener("click", addPoint1);
document.getElementById("answerEgg").addEventListener("click", addPoint1);
var k= 0;

/**
 * @function addPoint1 increases the variable k by 1
 */
function addPoint1(){
    k++;
}

/*Points Level 2*/
/**
 * @description if the Elements with Id's "answerRed" and "answerGreen" are clicked function "addPoint2" will be executed
 */
document.getElementById("answerRed").addEventListener("click", addPoint2);
document.getElementById("answerGreen").addEventListener("click", addPoint2);

/**
 * @function addPoint2 increases the variable k by 1
 */
function addPoint2(){
    k++;
}

/**
 * @description if the Element with the Id "answerCat" is clicked function "addPoint3" will be executed
 */
/*Points Level 3*/
document.getElementById("answerCat").addEventListener("click", addPoint3);

/**
 * @description if the Element with Id "answerDog" is clicked function "addPoint3" will be executed. 
 * With "document.getElementById("success6").innerHTML = k +"/3";" the span- element with the id="success6" is filled with the text "k/3", while k is the number of passed levels.
 * If "answerDog" is clicked, you will be forwarded to the page with id="goodl3p3"
 */
document.getElementById("answerDog").addEventListener("click", () => {    
    addPoint3();
    document.getElementById("success6").innerHTML = k +"/3";
    window.location.href = "#goodl3p3";
});

/**
 * @description if the other buttons of Level 3 Page 3 are clicked function "fail" will be executed
 */
document.getElementById("imgButton1").addEventListener("click", fail);
document.getElementById("imgButton2").addEventListener("click", fail);
document.getElementById("imgButton3").addEventListener("click", fail);

/**
 * @function fail the span- element with the id="success5" is filled with the text "k/3", while k is the number of passed levels
 */
function fail(){
    document.getElementById("success5").innerHTML = k +"/3";
}

/**
 * @function addPoint3 increases the variable k by 1, every time a right answer is clicked
 */
function addPoint3(){
    k++;
}

/*Multiple Choice Level 1 page 3*/
/**
 * @description the element with the id="multipleCarrot" is saved in the variable "carrot"
 * the element with the id="multipleApple" is saved in the variable "apple"
 * the element with the id="chocolate" is saved in the variable "chocolate"
 * the element with the id="lollipops" is saved in the variable "lollipops"
 */
var carrot = document.getElementById("multipleCarrot");
var apple = document.getElementById("multipleApple");
var chocolate = document.getElementById("chocolate");
var lollipops = document.getElementById("lollipops");

/**
 * @description variables a, b, c, d with the initial value 0 are initialized
 */
var a = 0;
var b = 0;
var c = 0;
var d = 0;

/**
 * @description if carrot is clicked a function is executed that sets a=1, and executes the functions multiple1() and opacity1()
 */
carrot.addEventListener("click", () => { 
    a = 1;     
    multiple1();
    opacity1();  
});

/**
 * @description if apple is clicked a function is executed that sets b=1, and executes the functions multiple1() and opacity2()
 */
apple.addEventListener("click", () => {    
    b = 1;
    multiple1();
    opacity2();   
});

/**
 * @description if chocolate is clicked a function is executed that sets c=1, and executes the functions multiple1() and opacity3()
 */
chocolate.addEventListener("click", () => {    
    c = 1;
    multiple1();
    opacity3();
});

/**
 * @description if lollipops is clicked a function is executed that sets d=1, and executes the functions multiple1() and opacity4()
 */
lollipops.addEventListener("click", () => {    
    d = 1;
    multiple1();
    opacity4();    
});

/**
 * @function opacity1 changes the opacity every time the carrot was clicked
 */
function opacity1(){
    carrot.style.opacity = 0.5;
}

/**
 * @function opacity2 changes the opacity every time the apple was clicked
 */
function opacity2(){
    apple.style.opacity = 0.5;
}

/**
 * @function opacity3 changes the opacity every time the chocolate was clicked
 */
function opacity3(){
    chocolate.style.opacity = 0.5;
}

/**
 * @function opacity4 changes the opacity every time lollipops was clicked
 */
function opacity4(){
    lollipops.style.opacity = 0.5;
}

/**
 * @function multiple1 tests if 2 pictures are clicked, if that's true it tests if the two right answers are clicked. 
 * A, b, c, d are reset to null and one point is added to the counter. The span- element with the id="success1" is filled with the text "k/3", while k is the number of passed levels.
 * You will be forwarded to the page with id="goodl1p3". k is reset to 0.
 * If you click the wrong pictures a, b, c, d are reset to null, the span- element with the id="success2" is filled with the text "k/3" and you will be forwarded to the page "tryl1p3"
 */
function multiple1(){
    if(a + b + c + d == 2){
    if(a + b == 2){
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        addPoint1();
        document.getElementById('success1').innerHTML = k+"/3";
        window.location.href = "#goodl1p3";
        k = 0;
    }
    else{
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        document.getElementById('success2').innerHTML = k+"/3";
        window.location.href = "#tryl1p3";
    }
}
}

/*Multiple Choice Level 2 page 3*/
/**
 * @description the element with the id="multipleDuck" is saved in the variable "duck"
 * the element with the id="multipleTaxi" is saved in the variable "taxi"
 * the element with the id="strawberry" is saved in the variable "strawberry"
 * the element with the id="tomato" is saved in the variable "tomato"
 */
var duck = document.getElementById("multipleDuck");
var taxi = document.getElementById("multipleTaxi");
var strawberry = document.getElementById("strawberry");
var tomato = document.getElementById("tomato");

/**
 * @description variables a, b, c, d with the initial value 0 are initialized
 */
var a = 0;
var b = 0;
var c = 0;
var d = 0;

/**
 * @description if duck is clicked a function is executed that sets a=1, and executes the functions multiple2() and opacity5()
 */
duck.addEventListener("click", () => { 
    a = 1;     
    multiple2();
    opacity5();  
});

/**
 * @description if taxi is clicked a function is executed that sets b=1, and executes the functions multiple2() and opacity6()
 */
taxi.addEventListener("click", () => {    
    b = 1;
    multiple2();
    opacity6();   
});

/**
 * @description if strawberry is clicked a function is executed that sets c=1, and executes the functions multiple2() and opacity7()
 */
strawberry.addEventListener("click", () => {    
    c = 1;
    multiple2();
    opacity7();
});

/**
 * @description if tomato is clicked a function is executed that sets d=1, and executes the functions multiple2() and opacity8()
 */
tomato.addEventListener("click", () => {    
    d = 1;
    multiple2();
    opacity8();    
});

/**
 * @function opacity 5changes the opacity every time the duck was clicked
 */
function opacity5(){
    duck.style.opacity = 0.5;
}

/**
 * @function opacity6 changes the opacity every time the taxi was clicked
 */
function opacity6(){
    taxi.style.opacity = 0.5;
}

/**
 * @function opacity7 changes the opacity every time the strawberry was clicked
 */
function opacity7(){
    strawberry.style.opacity = 0.5;
}

/**
 * @function opacity8 changes the opacity every time the tomato was clicked
 */
function opacity8(){
    tomato.style.opacity = 0.5;
}

/**
 * @function multiple2 tests if 2 pictures are clicked, if that's true it tests if the two right answers are clicked. 
 * A, b, c, d are reset to null and one point is added to the counter. The span- element with the id="success4" is filled with the text "k/3", while k is the number of passed levels.
 * You will be forwarded to the page with id="goodl2p3". k is reset to 0.
 * If you click the wrong pictures a, b, c, d are reset to null, the span- element with the id="success3" is filled with the text "k/3" and you will be forwarded to the page "tryl2p3"
 */
function multiple2(){
    if(a + b + c + d == 2){
    if(a + b == 2){
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        addPoint2();
        document.getElementById('success4').innerHTML = k+"/3";
        window.location.href = "#goodl2p3";
        k = 0;
    }
    else{
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        document.getElementById('success3').innerHTML = k+"/3";
        window.location.href = "#tryl2p3";
    }
}
}

/*Mulitiple Choice Level 3 page 1*/
/**
 * @description the element with the id="multipleElephant" is saved in the variable "elephant"
 * the element with the id="multipleRabbit" is saved in the variable "rabbit"
 * the element with the id="mouse" is saved in the variable "mouse"
 * the element with the id="rurtle" is saved in the variable "turtle"
 */
var elephant = document.getElementById("multipleElephant");
var rabbit = document.getElementById("multipleRabbit");
var mouse = document.getElementById("mouse");
var turtle = document.getElementById("turtle");

/**
 * @description variables a, b, c, d with the initial value 0 are initialized
 */
var a = 0;
var b = 0;
var c = 0;
var d = 0;

/**
 * @description if elephant is clicked a function is executed that sets a=1, and executes the functions multiple3() and opacity9()
 */
elephant.addEventListener("click", () => { 
    a = 1;     
    multiple3();
    opacity9();  
});

/**
 * @description if rabbit is clicked a function is executed that sets b=1, and executes the functions multiple3() and opacity10()
 */
rabbit.addEventListener("click", () => {    
    b = 1;
    multiple3();
    opacity10();   
});

/**
 * @description if mouse is clicked a function is executed that sets c=1, and executes the functions multiple3() and opacity11()
 */
mouse.addEventListener("click", () => {    
    c = 1;
    multiple3();
    opacity11();
});

/**
 * @description if turtle is clicked a function is executed that sets d=1, and executes the functions multiple3() and opacity12()
 */
turtle.addEventListener("click", () => {    
    d = 1;
    multiple3();
    opacity12();    
});

/**
 * @function opacity9 changes the opacity every time the elephant was clicked
 */
function opacity9(){
    elephant.style.opacity = 0.5;
}

/**
 * @function opacity10 changes the opacity every time the rabbit was clicked
 */
function opacity10(){
    rabbit.style.opacity = 0.5;
}

/**
 * @function opacity11 changes the opacity every time the mouse was clicked
 */
function opacity11(){
    mouse.style.opacity = 0.5;
}

/**
 * @function opacity12 changes the opacity every time the turtle was clicked
 */
function opacity12(){
    turtle.style.opacity = 0.5;
}

/**
 * @function multiple3 tests if 2 pictures are clicked, if that's true it tests if the two right answers are clicked. 
 * A, b, c, d are reset to null and one point is added to the counter. You will be forwarded to the page with id="goodl3p1".
 * If you click the wrong pictures a, b, c, d are reset to null and you will be forwarded to the page "tryl3p1"
 */
function multiple3(){
    if(a + b + c + d == 2){
    if(a + b == 2){
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        addPoint3();
        window.location.href = "#goodl3p1";
    }
    else{
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        window.location.href = "#tryl3p1";
    }
}
}

/**
 * If element with the id "restart" is clicked you are forwarded to page "p1" and the page is refreshed
 */
        document.getElementById("restart").addEventListener("click", ()=>{
        window.location.href = "#p1";
        location.reload(true);
})
