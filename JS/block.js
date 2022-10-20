// ____________________________________________
// |!|--/--/--/--.BLOCK-CLASS.--/--/--/--/--|!|

class block{
    constructor(domEle,width,height,left,top){ //DomFather,Width of the block, height of the block, color or url, string with CSS class or classes 
        this.domBlock               = domEle;
        this.domBlock.style.width   = width;
        this.domBlock.style.height  = height;
        this.domBlock.style.left    = left;
        this.domBlock.style.top     = top;
    }
}

function instantiateBlocksElements( ){
    
}