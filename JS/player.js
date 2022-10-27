// √ 	─
let playerDom = document.getElementById("player");

var intPropertyValue = (target,property) => {
    return parseInt(window.getComputedStyle(target).getPropertyValue(property));
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

    getPosPlayer(){ return (this.leftValue/50) + (this.topValue/50*26)+27; },

    resetPlayerValues : function() {
        // console.log("ResetPlayerValues");
        player.leftValue   = intPropertyValue(this.domPlayerElement,"left");
        player.topValue    = intPropertyValue(player.domPlayerElement,"top");
    },
    attachTorchLightToPlayer : function(playerPosX,playerPosY){
        // console.log("AttachTorchLightToPlayer");
        moveThisLight(0 ,playerPosX+    "px"    ,playerPosY-100+    "px"    ,checkLightPos(-52));     
        
        moveThisLight(1 ,playerPosX+    "px"    ,playerPosY-50+     "px"    ,checkLightPos(-26));     
        moveThisLight(2 ,playerPosX-50+ "px"    ,playerPosY-50+     "px"    ,checkLightPos(-27));
        moveThisLight(3 ,playerPosX+50+ "px"    ,playerPosY-50+     "px"    ,checkLightPos(-25));
    
        moveThisLight(4 ,playerPosX-100+"px"    ,playerPosY+        "px"    ,checkLightPos(-2));
        moveThisLight(5 ,playerPosX-50+ "px"    ,playerPosY+        "px"    ,checkLightPos(-1));
        moveThisLight(6 ,playerPosX+    "px"    ,playerPosY+        "px"    ,checkLightPos(0));
        moveThisLight(7 ,playerPosX+50+ "px"    ,playerPosY+        "px"    ,checkLightPos(1));
        moveThisLight(8 ,playerPosX+100+"px"    ,playerPosY+        "px"    ,checkLightPos(2));
    
        moveThisLight(9 ,playerPosX-50+ "px"    ,playerPosY+50+     "px"    ,checkLightPos(25));
        moveThisLight(10,playerPosX+    "px"    ,playerPosY+50+     "px"    ,checkLightPos(26));
        moveThisLight(11,playerPosX+50+ "px"    ,playerPosY+50+     "px"    ,checkLightPos(27));
    
        moveThisLight(12,playerPosX+    "px"    ,playerPosY+100+    "px"    ,checkLightPos(52));

        moveThisLight(13,playerPosX-50+ "px"    ,playerPosY-150+    "px"    ,checkLightPos(-77));
        moveThisLight(14,playerPosX+    "px"    ,playerPosY-150+    "px"    ,checkLightPos(-78));
        moveThisLight(15,playerPosX+50+ "px"    ,playerPosY-150+    "px"    ,checkLightPos(-79));

        moveThisLight(16,playerPosX-100+"px"    ,playerPosY-100+    "px"    ,checkLightPos(-54));
        moveThisLight(17,playerPosX-50+ "px"    ,playerPosY-100+    "px"    ,checkLightPos(-53));
        moveThisLight(18,playerPosX+50+ "px"    ,playerPosY-100+    "px"    ,checkLightPos(-51));
        moveThisLight(19,playerPosX+100+"px"    ,playerPosY-100+    "px"    ,checkLightPos(-50));

        moveThisLight(20,playerPosX-150+"px"    ,playerPosY-50+     "px"    ,checkLightPos(-29));
        moveThisLight(21,playerPosX-100+"px"    ,playerPosY-50+     "px"    ,checkLightPos(-28));
        moveThisLight(22,playerPosX+100+"px"    ,playerPosY-50+     "px"    ,checkLightPos(-24));
        moveThisLight(23,playerPosX+150+"px"    ,playerPosY-50+     "px"    ,checkLightPos(-23));

        moveThisLight(24,playerPosX-200+"px"    ,playerPosY+        "px"    ,checkLightPos(-4));
        moveThisLight(25,playerPosX-150+"px"    ,playerPosY+        "px"    ,checkLightPos(-3));
        moveThisLight(26,playerPosX+150+"px"    ,playerPosY+        "px"    ,checkLightPos(3));
        moveThisLight(27,playerPosX+200+"px"    ,playerPosY+        "px"    ,checkLightPos(4));

        moveThisLight(28,playerPosX-150+"px"    ,playerPosY+50+     "px"    ,checkLightPos(23));
        moveThisLight(29,playerPosX-100+"px"    ,playerPosY+50+     "px"    ,checkLightPos(24));
        moveThisLight(30,playerPosX+100+"px"    ,playerPosY+50+     "px"    ,checkLightPos(28));
        moveThisLight(31,playerPosX+150+"px"    ,playerPosY+50+     "px"    ,checkLightPos(29));

        moveThisLight(32,playerPosX+100+"px"    ,playerPosY+100+    "px"    ,checkLightPos(54));
        moveThisLight(33,playerPosX+50+ "px"    ,playerPosY+100+    "px"    ,checkLightPos(53));
        moveThisLight(34,playerPosX-50+ "px"    ,playerPosY+100+    "px"    ,checkLightPos(51));
        moveThisLight(35,playerPosX-100+"px"    ,playerPosY+100+    "px"    ,checkLightPos(50));

        moveThisLight(36,playerPosX-50+"px"    ,playerPosY+150+     "px"    ,checkLightPos(77));
        moveThisLight(37,playerPosX+   "px"    ,playerPosY+150+     "px"    ,checkLightPos(78));
        moveThisLight(38,playerPosX+50+"px"    ,playerPosY+150+     "px"    ,checkLightPos(79));
        // moveThisLight(39,playerPosX+50+"px"    ,playerPosY+150+     "px"    ,checkLightPos(79));





















    },
    checkStep : function(moveVal){
        let trueMoveVal = this.getPosPlayer() + moveVal;
        // console.log("checkStep:\nmoveVal: "+moveVal+"\ngridMapBoolVal: "+gridMap[trueMoveVal])
        return gridMap[trueMoveVal];
    },

    followPlayer : function (val){
        let playerScreenPosY = player.topValue + player.plHeight;
        if(playerScreenPosY>=300 && playerScreenPosY <= (2800-300)){
            scrollBy(0,val);                                            //if the player body is at the middle of the screen or further, then follow him down
        }
        // console.log("followPlayer")
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
        // console.log("MovementCase:\nMove: "+move+"\nKeyCode: "+keyCode);
    },
    
    
    // ____________________________________________
    // |!|______________________________________|!|
    // |!|_______FUNCIONES_PRINCIPALES__________|!|
    // |_|______________________________________|_|
    movePlayer : function(keyCode){
        // console.log("movePlayer:\nkeyCode: "+keyCode);
        let movetKCList = [37,38,39,40,58,65,68,83,87];
        if(movetKCList.includes(keyCode)){
            this.movementCase(keyCode);
            player.resetPlayerValues(); //actualiza los valores "top" y "left" dispuestos en el CSS para la seccion de #player
        }
        // console.log(keyCode);
    },

    playerMovement : () => {
        // console.log("playerMovement:\nKeyPressedCode: "+keyPressed); 
        var keyPressed = this.event.which; //Global this para agarrar el evento del llamado en html
        player.movePlayer(keyPressed);
        player.attachTorchLightToPlayer(player.leftValue,player.topValue);
        // console.log("PlayerLeftVal: "+player.leftValue+"\nPlayerTopVal: "+player.topValue);
    }
}


$(document).ready(function (){
    // setInterval(function(){
    //     var length = document.getElementsByClassName("torch").length;
    //     let opValue = document.getElementById("t1").style.opacity ==0.5 ? 1: 0.5;
    //     for(i = 1;i<=length;i++){ 
    //         document.getElementById("t"+i).style.setProperty("opacity",opValue)
    //     }
    //     console.log(document.getElementById("t1").style.opacity);
    // },500);
    // setInterval(function(){
    //     for(i = 1;i<=length;i++){ 
    //         document.getElementById("t"+i).style.setProperty("opacity",0.3)
    //     }
    //     console.log(document.getElementById("t1").style.opacity);
    // },500);
    // clearInterval();

})