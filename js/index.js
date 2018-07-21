window.onload=function () {
// 购物车
    let shop=document.getElementsByClassName("shop")[0];
    let cart=document.getElementsByClassName("cart")[0];
    console.log(shop,cart);
    shop.onmouseenter=function () {
        cart.style.height="98px";
	    cart.style.boxShadow="0 2px 4px 1px rgba(3,3,3,0.4)";
    }
    shop.onmouseleave=function () {
        cart.style.height=0;
        cart.style.boxShadow="none";
    }


// 头部选项卡
    let logoBox=document.getElementsByClassName("logoBox")[0];
    let nav=logoBox.getElementsByClassName("nav")[0];
    let a=nav.getElementsByTagName("a");

    for(let i=0;i<a.length-2;i++){
        a[i].onmouseenter=function(){
            let navs=a[i].getElementsByClassName("navs")[0];
            let con=navs.getElementsByClassName("con11")[0];
            for(let j=0;j<a.length-2;j++){
                con.style.display="none";
                navs.style.display="block";
            }
            con.style.display="block";
            navs.style.display="block";
            navs.style.height="229px";
            navs.style.boxShadow="0 2px 4px 1px #ccc";
            navs.style.borderTop="1px solid #a9a9a9";
        }
        a[i].onmouseleave=function(){
            let navs=a[i].getElementsByClassName("navs")[0];
            let con=navs.getElementsByClassName("con11")[0];
            con.style.display="none";
            navs.style.height=0;
            navs.style.borderTop=0;
            navs.style.display="none";
        }
    }

// 侧导航
    let bigBox=document.getElementsByClassName("bigBox")[0];
    let show=bigBox.getElementsByClassName("show")[0];
    let left=show.getElementsByClassName("left")[0];
    let font=left.getElementsByClassName("font");
    for(let i=0;i<font.length;i++){
        let cons=font[i].getElementsByClassName("cons")[0];
        font[i].onmouseenter=function(){
            for(let j=0;j<font.length;j++){
            cons.style.display="none";
            }
            cons.style.display="block";
            cons.style.zIndex=100;
        }
        font[i].onmouseleave=function(){
            cons.style.display="none";
        }
    }

// 商品选项卡
    function xxk(fn){
        let top=fn.getElementsByClassName("top")[0];
        let spans=top.getElementsByClassName("spans");
        let span=top.getElementsByTagName("span");
        let con=fn.getElementsByClassName("con")[0];
        let rightbox=con.getElementsByClassName("rightbox");
        // console.log(span,rightbox);
        for(let i=0;i<spans.length;i++){
            span[i].onmouseenter=function(){
                for(let j=0;j<spans.length;j++){
                    rightbox[j].style.display="none";
                    span[j].className=" ";
                }
                
                span[i].className="hot";

                rightbox[i].style.display="block";
            }
        }
    }

    let jd=document.getElementsByClassName("jd")[0];
    xxk(jd);
    let zn=document.getElementsByClassName("zn")[0];
    xxk(zn);
    let dp=document.getElementsByClassName("dp")[0];
    xxk(dp);
    let pj=document.getElementsByClassName("pj")[0];
    xxk(pj);
    let zb=document.getElementsByClassName("zb")[0];
    xxk(zb);
}