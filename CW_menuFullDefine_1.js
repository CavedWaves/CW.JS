function CW_menuFullDefine_1 (execute, heading, scroll,link, linkType, textAlign, borderColor, BorderStyle,borderWidth,borderRadius, BgColor, fontColor, fontSize, fontFamily,padding) {
            
    var body = document.createElement("div");
    var mainHeading = document.createElement("div");
    var menuBody = document.createElement("div");

    

    body.style.zIndex = 1;
    body.style.backgroundColor = "black";
    body.style.width = 100 + "%";
    body.style.height = 100 + "%";
    body.style.color = "white";
    body.style.position = "fixed";
    body.style.top = 0 + "px";
    body.style.left = 0 + "px";
    

    body.prepend(mainHeading);
    
    if (link == "" || link == undefined) {
        mainHeading.textContent = heading;
    } else {
        if (linkType == "" || linkType == undefined || linkType == 'inner') {
            link = "//" + link
        } else if (linkType == 'outer') {
            link = "https://" + link
        }
        mainHeading.innerHTML = "<a href='" + link + "'>" + text + "</a>";
    }

    if(borderColor==undefined||borderColor==""){
        borderColor=undefined;
    }
    
    if(BorderStyle==undefined||BorderStyle==""){
        BorderStyle=undefined;
    }
    
    if(BgColor==undefined||BgColor==""){
        BgColor=undefined;
    }

    if(fontColor==undefined||fontColor==""){
        fontColor=undefined;
    }

    if(fontSize==undefined||fontSize==""){
        fontSize=40;
    }

    if(borderWidth==undefined||borderWidth==""){
        borderWidth=undefined;
    }

    if(borderRadius==undefined||borderRadius==""){
        borderRadius=undefined;
    }
    if(fontFamily==undefined||fontFamily==""){
        fontFamily=undefined;
    }

    if(textAlign==undefined||textAlign==""){
        textAlign="center";
    }

    if(padding==undefined||padding==""){
        padding=undefined;
    }else{
        padding="["-padding-"]";
    }

    mainHeading.style.fontSize = fontSize + "px";
    mainHeading.style.textAlign = textAlign;
    mainHeading.style.borderColor = borderColor;
    mainHeading.style.borderStyle = BorderStyle;
    mainHeading.style.borderWidth = borderWidth;
    mainHeading.style.borderRadius = borderRadius; 
    mainHeading.style.backgroundColor = BgColor;
    mainHeading.style.color = fontColor;
    mainHeading.style.fontSize = fontSize;
    mainHeading.style.fontFamily = fontFamily;
    mainHeading.style.padding = padding;

    mainHeading.style.width = 100 + "%";
    mainHeading.style.position = "fixed";

    menuBody.className = scroll;

    menuBody.id = "CW_"+execute+"10000_menu_00001"+execute+"_Body";
    body.appendChild(menuBody);

    menuBody.style.position = "fixed";
    menuBody.style.top = 50 + "px";
    menuBody.style.left = 50 + "px";
    menuBody.style.right = 50 + "px";
    menuBody.style.bottom = 50 + "px";
    menuBody.style.overflowY = "auto";
    menuBody.style.overflowX = "hidden";
    
    
    document.getElementById(execute).addEventListener("click", function () {
        open();
    });
    function open() {
        document.body.prepend(body);
        document.getElementById(execute).style.zIndex = 1;

        document.getElementById(execute).addEventListener("click", function () {
            close();
        });
    }
    function close() {
        body.remove();
        document.getElementById(execute).style.zIndex = 0;
        
        document.getElementById(execute).addEventListener("click", function () {
            open();
        });
    }
}

