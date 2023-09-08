// ____________________________________________
// |!|______________________________________|!|
// |!|______________.PROPERTIES.____________|!|
// |_|______________________________________|_|

var body        = document.getElementsByTagName("body")[0];
var JSFolderDir = "./JS/";

// ____________________________________________
// |!|--/--/--/--/--/--/--/--/--/--/--/--/--|!|
// |!|--/--/--/--/--/.OBJECTS.--/--/--/--/--|!|
// |_|--/--/--/--/--/--/--/--/--/--/--/--/--|_|

var blockScr    = {
    dom: document.createElement("script"),
    id : "block",
}
var playerScr      = {
    dom: document.createElement("script"),
    id : "player",
}
var main      = {
    dom: document.createElement("script"),
    id : "main",
}
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
// ____________________________________________
// |!|--/--/--/--.OBJECT_LIST.--/--/--/--/--|!|
var JSList      = [main];  // main = siempre ultimo

// ____________________________________________
// |!|--/--/--/--/--/--/--/--/--/--/--/--/--|!|
// |!|--/--/--/--/-.FUNCTIONS.--/--/--/--/--|!|
// |_|--/--/--/--/--/--/--/--/--/--/--/--/--|_|
var injectScripts = () => {
    JSList.forEach(e => {
        e.dom.setAttribute("src",JSFolderDir+e.id+".js");
        body.appendChild(e.dom);        
    });
}
// ____________________________________________
// |!|--/--/--/--.INITIALIZER.--/--/--/--/--|!|
    document.onready = injectScripts();
    let image = "" ;
    let condition = 0;
    let rand = 0;

    document.onready = window.setInterval(() => {
        // condition = document.getElementById("t1").style.backgroundImage == 'url("../images/tileN5.jpg")' ? 3 : 2;
        // // console.log(condition)
        // rand = Math.floor(Math.random()+condition);
        // image = document.getElementById("t1").style.backgroundImage == 'url("../images/tileN5.jpg")' ? 'url("../images/tileN1.jpg")':'url("../images/tileN5.jpg")'  ;    
        // // console.log("banderita1")
        // for(i = 0;i<=12;i++){
        //     document.getElementsByClassName("torch")[i].style.backgroundImage =  image;
        // }

        
    }, Math.floor(Math.random()+condition));