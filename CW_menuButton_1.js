/* menu close & open button No::1 */
function CW_menuButton_1 (id,top, left ) {

    

    /* top Defining */
    if (top == "top"||top == "up") {
        top = 22.5;
    } else if (top == "down" || top == "bottom") {
        top = window.innerHeight -30;
    }  else if (top == "center") {
        top = window.innerHeight /2 -20;
    }

    /* left Defining */
    if (left == "left") {
        left = 10;
    } else if (left == "right") {
        left = window.innerWidth -40;
    }  else if (left == "center") {
        left = window.innerWidth /2 - 15;
    }

    
    var container = document.createElement("div");
    container.id = id;
    document.body.prepend(container);
    container.style.position = "fixed";
    container.style.top = top - 17 + "px";
    container.style.left = left -5 + "px";
    container.style.width = 40+"px";
    container.style.height = 40+"px";

    container.style.background="white";
    
    var bar1 = document.createElement("div");
    var bar2 = document.createElement("div");
    var bar3 = document.createElement("div");

    left = left + "px";

    container.appendChild(bar1);
    bar1.style.backgroundColor = "black";
    bar1.style.width = "30px";
    bar1.style.height = "7.5px";
    bar1.style.position = "fixed";
    bar1.style.top = top + "px";
    bar1.style.left = left;

    bar1.style.border = "2.5px";
    bar1.style.borderRadius = "25px";
    bar1.style.borderColor = "white";


    container.appendChild(bar2);
    bar2.style.backgroundColor = "black";
    bar2.style.width = "30px";
    bar2.style.height = "7.5px";
    bar2.style.position = "fixed";
    bar2.style.top = top + 12.5 + "px";
    bar2.style.left = left;

    bar2.style.border = "2.5px";
    bar2.style.borderRadius = "25px";
    bar2.style.borderColor = "white";


    container.appendChild(bar3);
    bar3.style.backgroundColor = "black";
    bar3.style.width = "30px";
    bar3.style.height = "7.5px";
    bar3.style.position = "fixed";
    bar3.style.top = top - 12.5 + "px";
    bar3.style.left = left;

    bar3.style.border = "2.5px";
    bar3.style.borderRadius = "25px";
    bar3.style.borderColor = "white";

    

    container.onclick = function () {
        close();
    }

    function close() {

        bar1.style.visibility = "hidden";
        bar2.style.transform = "rotate(45deg)";
        bar3.style.transform = "rotate(135deg)";

        bar2.style.top = top + "px";
        bar3.style.top = top + "px";


        container.onclick = function () {
            open();
        }

    }

    function open() {
        bar1.style.visibility = "visible";
        bar2.style.transform = "rotate(0deg)";
        bar3.style.transform = "rotate(0deg)";

        bar2.style.top = top + 12.5 + "px";
        bar3.style.top = top - 12.5 + "px";

        
        container.onclick = function () {
            close();
        }
    }
}