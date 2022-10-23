function CW_menuItem_1(excute, text, link, linkType,textAlign, borderColor, BorderStyle,borderWidth,borderRadius, BgColor,fontStyle, fontColor, fontSize, fontFamily, padding) {

    var item = document.createElement('p');

    if (link == "" || link == undefined) {
        item.textContent=text;
    } else {
        if (linkType == "" || linkType == undefined || linkType == 'inner') {
            link = "./" + link
        } else if (linkType == 'outer') {
            link = "https://" + link
        }

        item.innerHTML = "<a href='" + link + "'>" + text + "</a>";
    }

    if(borderColor==undefined||borderColor==""){
        borderColor=undefined;
    }
    
    if(BorderStyle==undefined||BorderStyle==""){
        BorderStyle=undefined;
    }

    if(borderWidth==undefined||borderWidth==""){
        borderWidth=undefined;
    }

    if(borderRadius==undefined||borderRadius==""){
        borderRadius=undefined;
    }

    if(BgColor==undefined||BgColor==""){
        BgColor=undefined;
    }

    if(fontStyle==undefined||fontStyle==""){
        fontStyle=undefined;
    }

    if(fontColor==undefined||fontColor==""){
        fontColor=undefined;
    }

    if(fontSize==undefined||fontSize==""){
        fontSize=20;
    }

    if(fontFamily==undefined||fontFamily==""){
        fontFamily=undefined;
    }

    if(textAlign==undefined||textAlign==""){
        textAlign=undefined;
    }
    
    if(padding==undefined||padding==""){
        padding=undefined;
    }else{
        padding="["-padding-"]";
    }

    item.style.borderStyle = BorderStyle;
    item.style.borderColor = borderColor;
    item.style.borderWidth = borderWidth;
    item.style.borderRadius = borderRadius;
    item.style.backgroundColor = BgColor;
    item.style.fontStyle = fontStyle;
    item.style.color = fontColor;
    item.style.fontSize = fontSize;
    item.style.fontFamily = fontFamily;
    item.style.textAlign = textAlign;
    item.style.padding = padding;

    document.getElementById(excute).addEventListener("click",
        function () {
            var x = document.getElementById('CW_'+excute+'10000_menu_00001'+excute+'_Body');
            if(x==null){
                console.log("error : Please define a menu");
            }else{
                x.appendChild(item);
            }
        });
}
