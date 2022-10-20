// ____________________________________________
// |!|--/--/--/--.BLOCK-CLASS.--/--/--/--/--|!|

class block{
    constructor(father,width,height,colorOrUrl,CSSClass){ //DomFather,Width of the block, height of the block, color or url, string with CSS class or classes 
        this.domBlock = document.createElement("block");
        this.domBlock.style.width = width;
        this.domBlock.style.height = height;
        this.domBlock.style.backgroundColor = colorOrUrl;
        this.domBlock.classList.add(CSSClass);
        father.appendChild(this.domBlock);
    }
}