// √ 	─
let playerDom = document.getElementById("player");
function getGridPosition (target){
   return (intPropertyValue(target,"left")/50) + (intPropertyValue(target,"top")/50*26)+27;
}
var rawPropertyValue = (target,property) => {
    return window.getComputedStyle(target).getPropertyValue(property);
}
var intPropertyValue = (target,property) => {
    return parseInt(window.getComputedStyle(target).getPropertyValue(property));
}
var stringPropertyValue = (target,property) => {
    return window.getComputedStyle(target).getPropertyValue(property).toString();
}
var floatPropertyValue = (target,property) => {
    return parseFloat(window.getComputedStyle(target).getPropertyValue(property));
}
function instantiateTorches(){
    let aux = [];
    for(i = 1;i<=13;i++){
        let torch = document.createElement("div");
        torch.setAttribute("class","torch");
        torch.setAttribute("id","t"+i);
        document.getElementById("game").appendChild(torch);
        // console.log(torch)
        aux.push(torch);
    }
    for(j = 13; j<=38;j++){
        let torch = document.createElement("div");
        torch.setAttribute("class","torch torchFar");
        torch.setAttribute("id","t"+j);
        document.getElementById("game").appendChild(torch);
        // console.log(torch)
        aux.push(torch);
    }
    return aux;
};

var lightRadius = instantiateTorches() ;

let checkLightPos = function(move){
    let res = player.checkStep(move)?"visible": "hidden";
    // console.log(checkLightPos)
    return res;
};

let moveThisLight = function(i,left,top,check){
    lightRadius[i].style.setProperty("left",left);
    lightRadius[i].style.setProperty("top",top);
    lightRadius[i].style.setProperty("visibility",check);
    // console.log("moveThisLight");
};

var player = {
    // ____________________________________________
    // |!|______________________________________|!|
    // |!|______________PROPERTIES______________|!|
    // |_|______________________________________|_|

    domPlayerElement : playerDom,
    plWidth      : intPropertyValue(playerDom,"width"),
    plHeight     : intPropertyValue(playerDom,"height"),
    leftValue    : intPropertyValue(playerDom,"left"),
    topValue     : intPropertyValue(playerDom,"top"),
    // ____________________________________________
    // |!|______________________________________|!|
    // |!|______________FUNCTIONS_______________|!|
    // |_|______________________________________|_|

    getPosPlayer(){ return (this.leftValue/50) + (this.topValue/50*26)+27;},

    resetPlayerValues : function() {
        // console.log("ResetPlayerValues");
        player.leftValue   = intPropertyValue(this.domPlayerElement,"left");
        player.topValue    = intPropertyValue(player.domPlayerElement,"top");
    },
    attachTorchLightToPlayer : function(playerPosX,playerPosY){
        moveThisLight(13,playerPosX-50+ "px"    ,playerPosY-150+    "px"    ,checkLightPos(-79));
        moveThisLight(14,playerPosX+    "px"    ,playerPosY-150+    "px"    ,checkLightPos(-78));
        moveThisLight(15,playerPosX+50+ "px"    ,playerPosY-150+    "px"    ,checkLightPos(-77));
        moveThisLight(16,playerPosX-100+"px"    ,playerPosY-100+    "px"    ,checkLightPos(-54));
        moveThisLight(17,playerPosX-50+ "px"    ,playerPosY-100+    "px"    ,checkLightPos(-53));
        moveThisLight(0 ,playerPosX+    "px"    ,playerPosY-100+    "px"    ,checkLightPos(-52));     
        moveThisLight(18,playerPosX+50+ "px"    ,playerPosY-100+    "px"    ,checkLightPos(-51));
        moveThisLight(19,playerPosX+100+"px"    ,playerPosY-100+    "px"    ,checkLightPos(-50));
        moveThisLight(20,playerPosX-150+"px"    ,playerPosY-50+     "px"    ,checkLightPos(-29));
        moveThisLight(21,playerPosX-100+"px"    ,playerPosY-50+     "px"    ,checkLightPos(-28));
        moveThisLight(2 ,playerPosX-50+ "px"    ,playerPosY-50+     "px"    ,checkLightPos(-27));
        moveThisLight(1 ,playerPosX+    "px"    ,playerPosY-50+     "px"    ,checkLightPos(-26));     
        moveThisLight(3 ,playerPosX+50+ "px"    ,playerPosY-50+     "px"    ,checkLightPos(-25));
        moveThisLight(22,playerPosX+100+"px"    ,playerPosY-50+     "px"    ,checkLightPos(-24));
        moveThisLight(23,playerPosX+150+"px"    ,playerPosY-50+     "px"    ,checkLightPos(-23));
        moveThisLight(24,playerPosX-200+"px"    ,playerPosY+        "px"    ,checkLightPos(-4));
        moveThisLight(25,playerPosX-150+"px"    ,playerPosY+        "px"    ,checkLightPos(-3));
        moveThisLight(4 ,playerPosX-100+"px"    ,playerPosY+        "px"    ,checkLightPos(-2));
        moveThisLight(5 ,playerPosX-50+ "px"    ,playerPosY+        "px"    ,checkLightPos(-1));
        moveThisLight(6 ,playerPosX+    "px"    ,playerPosY+        "px"    ,checkLightPos(0));
        moveThisLight(7 ,playerPosX+50+ "px"    ,playerPosY+        "px"    ,checkLightPos(1));
        moveThisLight(8 ,playerPosX+100+"px"    ,playerPosY+        "px"    ,checkLightPos(2));
        moveThisLight(26,playerPosX+150+"px"    ,playerPosY+        "px"    ,checkLightPos(3));
        moveThisLight(27,playerPosX+200+"px"    ,playerPosY+        "px"    ,checkLightPos(4));
        moveThisLight(28,playerPosX-150+"px"    ,playerPosY+50+     "px"    ,checkLightPos(23));
        moveThisLight(29,playerPosX-100+"px"    ,playerPosY+50+     "px"    ,checkLightPos(24));
        moveThisLight(9 ,playerPosX-50+ "px"    ,playerPosY+50+     "px"    ,checkLightPos(25));
        moveThisLight(10,playerPosX+    "px"    ,playerPosY+50+     "px"    ,checkLightPos(26));
        moveThisLight(11,playerPosX+50+ "px"    ,playerPosY+50+     "px"    ,checkLightPos(27));
        moveThisLight(30,playerPosX+100+"px"    ,playerPosY+50+     "px"    ,checkLightPos(28));
        moveThisLight(31,playerPosX+150+"px"    ,playerPosY+50+     "px"    ,checkLightPos(29));
        moveThisLight(35,playerPosX-100+"px"    ,playerPosY+100+    "px"    ,checkLightPos(50));
        moveThisLight(34,playerPosX-50+ "px"    ,playerPosY+100+    "px"    ,checkLightPos(51));
        moveThisLight(12,playerPosX+    "px"    ,playerPosY+100+    "px"    ,checkLightPos(52));
        moveThisLight(33,playerPosX+50+ "px"    ,playerPosY+100+    "px"    ,checkLightPos(53));
        moveThisLight(32,playerPosX+100+"px"    ,playerPosY+100+    "px"    ,checkLightPos(54));
        moveThisLight(36,playerPosX-50+"px"     ,playerPosY+150+     "px"    ,checkLightPos(77));
        moveThisLight(37,playerPosX+   "px"     ,playerPosY+150+     "px"    ,checkLightPos(78));
        moveThisLight(38,playerPosX+50+"px"     ,playerPosY+150+     "px"    ,checkLightPos(79));
    },
    checkStep : function(moveVal){
        let trueMoveVal = this.getPosPlayer() + moveVal;
        return gridMap[trueMoveVal];
    },
    followPlayer : function (val){
        let playerScreenPosY = player.topValue + player.plHeight;
        if(playerScreenPosY>=300 && playerScreenPosY <= (2800-300)){
            scrollBy(0,val);                                            //if the player body is at the middle of the screen or further, then follow him down
        }
    },
    movementCase : function(keyCode){
        let move = "";
        switch(keyCode){
            case 37:
            case 65:        // LEFT    || 97 o 37
                move = player.leftValue - player.plWidth;//+"px";
                player.domPlayerElement.style.left = this.checkStep(-1) ? move+"px":player.leftValue+"px";
                break;
            case 38:
            case 87:        // UP      || 119 o 38
                move = player.topValue - player.plHeight;//+"px";
                if(this.checkStep(-26)){
                    player.domPlayerElement.style.top = move+"px";
                    this.followPlayer(-this.plHeight);
                }
                break;
            case 39:
            case 68:        // RIGHT   || 100 o ,39
                move = player.leftValue + player.plWidth;//+"px";
                player.domPlayerElement.style.left = this.checkStep(1) ? move+"px":player.leftValue+"px";
                break;
            case 40:
            case 83:        // DOWN    || 115 ,40
                move = player.topValue + player.plHeight;//+"px";
                if(this.checkStep(26)){
                    player.domPlayerElement.style.top = move+"px";
                    this.followPlayer(this.plHeight)
                }
                
            break;           
            default: console.log("D E F A U L T ");  
        }
    },
    
    
    // ____________________________________________
    // |!|______________________________________|!|
    // |!|_______FUNCIONES_PRINCIPALES__________|!|
    // |_|______________________________________|_|
    movePlayer : function(keyCode){
        let movetKCList = [37,38,39,40,58,65,68,83,87];
        if(movetKCList.includes(keyCode)){
            this.movementCase(keyCode);
            player.resetPlayerValues(); //actualiza los valores "top" y "left" dispuestos en el CSS para la seccion de #player
        }
    },
    playerMovement : () => {
        var keyPressed = this.event.which; //Global this para agarrar el evento del llamado en html
        player.movePlayer(keyPressed);
        player.attachTorchLightToPlayer(player.leftValue,player.topValue);
    }
}

function turnOnTorchNumber (torchId){
    let target1 = document.getElementById("checkPoint"+torchId);
    target1.style.backgroundImage = "url('../icons/torch-stand-on.png')"
    document.getElementById("screen"+torchId).style.animationName = "fade";
}

function isPlayerNearTorch(idTorch){
    let target = document.getElementById("checkPoint"+idTorch);
    let torch1Pos = getGridPosition (target);
    let isPlayerNearTorchBool = (
        torch1Pos    == parseInt(player.getPosPlayer())  ||  
        torch1Pos+1  == parseInt(player.getPosPlayer())  ||
        torch1Pos-1  == parseInt(player.getPosPlayer())  ||
        torch1Pos+26 == parseInt(player.getPosPlayer())  ||
        torch1Pos-26 == parseInt(player.getPosPlayer())
    );
    return isPlayerNearTorchBool;
}

$(document).keydown(function (){
    if(isPlayerNearTorch(1)){
        turnOnTorchNumber(1);
        document.getElementById("screen1").style.zIndex = -5000;
    }  
    if(isPlayerNearTorch(2)){
        turnOnTorchNumber(2);
        document.getElementById("screen2").style.zIndex = -5000;
    }  
    if(isPlayerNearTorch(3)){
        turnOnTorchNumber(3);
        document.getElementById("screen3").style.zIndex = -5000;
        document.getElementById("screen4").style.animationName = "fade";
        document.getElementById("screen4").style.zIndex = -5000;
    }  
        
});
function toggleGrid(){
    if( stringPropertyValue(document.getElementsByClassName("grid")[1],"display")=="block"){
        for(let i = 0;i<=document.getElementsByClassName("grid").length;i++){
            document.getElementsByClassName("grid")[i].style.display = "none";
            document.getElementById("toggleMsg").textContent = "Grid:OFF";
            document.getElementById("toggle").style.backgroundColor = "green"
            
        }      
    }else{
        for(let i = 0;i<=document.getElementsByClassName("grid").length;i++){
            document.getElementsByClassName("grid")[i].style.display = "block";
            document.getElementById("toggleMsg").textContent = "Grid:ON"
            document.getElementById("toggle").style.backgroundColor = "red"
        }
    }
}

