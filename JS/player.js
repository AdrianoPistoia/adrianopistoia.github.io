// √ 	─
let playerDom = document.getElementById("player");

var intPropertyValue = (target,property) => {
    return parseInt(window.getComputedStyle(target).getPropertyValue(property));
}

function instantiateTorches(){
    var aux = []
    for(i = 1;i<=13;i++){
        aux.push(document.getElementById("t"+i));
    }
    // console.log(aux)
    return aux;
};

var lightRadius = instantiateTorches();

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
        moveThisLight(0 ,playerPosX+"px"    ,playerPosY-100+"px",checkLightPos(-52));     
        
        moveThisLight(3 ,playerPosX+50+"px" ,playerPosY-50+"px" ,checkLightPos(-25));
        moveThisLight(1 ,playerPosX+"px"    ,playerPosY-50+"px" ,checkLightPos(-26));     
        moveThisLight(2 ,playerPosX-50+"px" ,playerPosY-50+"px" ,checkLightPos(-27));
    
        moveThisLight(4 ,playerPosX-100+"px",playerPosY+"px"    ,checkLightPos(-2));
        moveThisLight(5 ,playerPosX-50+"px" ,playerPosY+"px"    ,checkLightPos(-1));
        moveThisLight(6 ,playerPosX+"px"    ,playerPosY+"px"    ,checkLightPos(0));
        moveThisLight(7 ,playerPosX+50+"px" ,playerPosY+"px"    ,checkLightPos(1));
        moveThisLight(8 ,playerPosX+100+"px",playerPosY+"px"    ,checkLightPos(2));
    
        moveThisLight(9 ,playerPosX-50+"px" ,playerPosY+50+"px" ,checkLightPos(25));
        moveThisLight(10,playerPosX+"px"    ,playerPosY+50+"px" ,checkLightPos(26));
        moveThisLight(11,playerPosX+50+"px" ,playerPosY+50+"px" ,checkLightPos(27));
    
        moveThisLight(12,playerPosX+"px"    ,playerPosY+100+"px",checkLightPos(52));

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
            
            case 100:        // RIGHT   || 100
                move = player.leftValue + player.plWidth;//+"px";
                player.domPlayerElement.style.left = this.checkStep(1) ? move+"px":player.leftValue+"px";
                break;
            case 97:        // LEFT    || 97
                move = player.leftValue - player.plWidth;//+"px";
                player.domPlayerElement.style.left = this.checkStep(-1) ? move+"px":player.leftValue+"px";
                break;
            case 119:        // UP      || 119
                move = player.topValue - player.plHeight;//+"px";
                player.domPlayerElement.style.top = this.checkStep(-26) ? move+"px":player.topValue+"px";
                this.followPlayer(-this.plHeight);
                break;
            case 115:        // DOWN    || 115
                move = player.topValue + player.plHeight;//+"px";
                player.domPlayerElement.style.top = this.checkStep(26) ? move+"px":player.topValue+"px";
                this.followPlayer(this.plHeight);
            break;                           //     _       _
            default: console.log("default"); //      \(-_-)/   SE ROMPIO TODO LPM
        }
        console.log("MovementCase:\nMove: "+move+"\nKeyCode: "+keyCode);
    },
    
    
    // ____________________________________________
    // |!|______________________________________|!|
    // |!|_______FUNCIONES_PRINCIPALES__________|!|
    // |_|______________________________________|_|
    movePlayer : function(keyCode){
        // console.log("movePlayer:\nkeyCode: "+keyCode);
        this.movementCase(keyCode);
        player.resetPlayerValues(); //actualiza los valores "top" y "left" dispuestos en el CSS para la seccion de #player
    },

    playerMovement : () => {
        // console.log("playerMovement:\nKeyPressedCode: "+keyPressed);
        var keyPressed = this.event.which; //Global this para agarrar el evento del llamado en html
        player.movePlayer(keyPressed);
        player.attachTorchLightToPlayer(player.leftValue,player.topValue);
        // console.log("PlayerLeftVal: "+player.leftValue+"\nPlayerTopVal: "+player.topValue);
    }
}