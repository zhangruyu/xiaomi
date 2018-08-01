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


    // 轮播图
    let Wraper=show.getElementsByClassName("Wraper")[0];
    let imgs=show.getElementsByClassName("imgbox");
    let pre=show.getElementsByClassName("pre")[0];
    let end=show.getElementsByClassName("end")[0];
    let son=show.getElementsByClassName("son");
    let num=0;
    let t=setInterval(move,2000);

    Wraper.onmouseenter=function(){
        clearInterval(t);
    }
    Wraper.onmouseleave=function(){
        t=setInterval(move,2000);
    }

    function move(){
        num++;
        if(num==imgs.length){
            num=0;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].style.zIndex=5;
            son[imgs.length-1-i].className="son";
        }
        imgs[num].style.zIndex=10;
        son[imgs.length-1-num].className="son hot1";
    }
    function move1(){
        num--;
        if(num<0){
            num=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].style.zIndex=5;
            son[imgs.length-1-i].className="son";
        }
        imgs[num].style.zIndex=10;
        son[imgs.length-1-num].className="son hot1";
    }

    end.onclick=function(){
        move();
        clearInterval(t);
    }
    pre.onclick=function(){
        move1();
    }

    for (let k=0;k<son.length;k++){
        son[k].onclick=function(){
            for(let s=0;s<son.length;s++){
                imgs[son.length-1-s].style.zIndex=5;
                son[s].className="son";
            }
            son[k].className="son hot1";
            imgs[son.length-1-k].style.zIndex=10;
            num=son.length-1-k;
        }
    }



    //双向轮播图
    let con=document.querySelector(".nr .con");
    let box=con.querySelectorAll(".box");

    function lbt(obj){
        let width=parseInt(getComputedStyle(obj,null).width);
        let pre1=obj.querySelector(".pre");
        let end1=obj.querySelector(".end");
        let boxs=obj.querySelectorAll(".boxs");
        let sons=obj.querySelectorAll(".son");
        let flag=true;
        
        /*let p=setInterval(move2,2000);

        obj.onmouseenter=function(){
            clearInterval(p);
        }
        obj.onmouseleave=function(){
            p=setInterval(move2,2000);
        }*/

        let now=0;
        let next=0;
        function move2(){
            next++;
            if (next==boxs.length){
                next=0;
            }
            for(let j=0;j<sons.length;j++){
                sons[j].classList.remove("son1");
            }
            sons[next].classList.add("son1");
            boxs[next].style.left=width+"px";
            animate(boxs[now],{left:-width});
            animate(boxs[next],{left:0},function(){
                flag=true;
            });
            now=next;
        }
        function move3(){
            next--;
            if (next<0){
                next=boxs.length-1;
            }
            for(let j=0;j<sons.length;j++){
                sons[j].classList.remove("son1");
            }
            sons[next].classList.add("son1");
            boxs[next].style.left=-width+"px";
            animate(boxs[now],{left:width});
            animate(boxs[next],{left:0},function(){
                flag=true;
            });
            now=next;
        }
        pre1.onclick=function(){
            if(flag==false){
                return;
            }
            
            if(next==0){
                return;
            }
            flag=false;
            move3();
        }
        end1.onclick=function(){
            if(flag==false){
                return;
            }
            if(next==boxs.length-1){
                return;
            }
            flag=false;
            move2();
        }

        for (let k=0;k<sons.length;k++){
            sons[k].onclick=function(){
                if(k>now){
                    for(let j=0;j<sons.length;j++){
                        sons[j].classList.remove("son1");
                    }
                    sons[k].classList.add("son1");
                    boxs[k].style.left=width+"px";
                    animate(boxs[now],{left:-width});
                    animate(boxs[k],{left:0});
                    now=next=k;
                }
                else if(k<now){
                    for(let j=0;j<sons.length;j++){
                        sons[j].classList.remove("son1");
                    }
                    sons[k].classList.add("son1");
                    boxs[k].style.left=-width+"px";
                    animate(boxs[now],{left:width});
                    animate(boxs[k],{left:0});
                    now=next=k;
                }
                else{
                    return;
                }
            }
        }
    }


    box.forEach(function(element){
        lbt(element);
    })


    // 小米闪购
    function f3(obj){
        let left0=obj.querySelector(".title .left");
        let right0=obj.querySelector(".title .right");
        let BOXcon=obj.querySelector(".BOXcon");
        let width=parseInt(getComputedStyle(BOXcon,null).width)/2;
        let flag=true;
        console.log(left0,right0,BOXcon);


        right0.onclick=function(){
            if (!flag){
                return;
            }
            right0.classList.remove("hot4");
            right0.classList.remove("hot3");
            animate(BOXcon,{left:-width},500);
            flag=false;
            left0.classList.add("hot4");
        }
        left0.onclick=function(){
            if (flag){
                return;
            }
            left0.classList.remove("hot4");
            left0.classList.remove("hot3");
            animate(BOXcon,{left:0},1000);
            flag=true;
            right0.classList.add("hot4");
        }

        right0.onmouseenter=function(){
            if(!flag){
                return;
            }
            right0.classList.add("hot3");
            right0.classList.remove("hot4");
        }
        right0.onmouseleave=function(){
            if(!flag){
                return;
            }
            right0.classList.remove("hot3");
            right0.classList.add("hot4");
        }

        left0.onmouseenter=function(){
            if(flag){
                return;
            }
            left0.classList.add("hot3");
            left0.classList.remove("hot4");
        }
        left0.onmouseleave=function(){
            if(flag){
                return;
            }
            left0.classList.remove("hot3");
            left0.classList.add("hot4");
        }
    }

    let sg=document.querySelector(".sg");
    f3(sg);
    let tj=document.querySelector(".tj");
    f3(tj);


    // 倒计时
    

    let Times=sg.querySelectorAll(".box1 .son");
    djs();
    setInterval(djs,1000);

    function djs(){
        let arr=TIME();
        Times.forEach(function (v,i){
            v.innerText=arr[i+2];
        })
    }

    function TIME(){
        let date=new Date(2018,6,27,18);
        let time=new Date();
        let times=Math.floor((date-time)/1000);
        let arr=[];
        let mth=Math.floor(times/(30*24*60*60));
        if (mth<10){
            mth="0"+mth;
        }
        arr.push(mth);

        times%=(30*24*60*60);
        let day=Math.floor(times/(24*60*60));
        if (day<10){
            day="0"+day;
        }
        arr.push(day);

        times%=(24*60*60);
        let hours=Math.floor(times/(60*60));
        if (hours<10){
            hours="0"+hours;
        }
        arr.push(hours);

        times%=(60*60);
        let m=Math.floor(times/60);
        if (m<10){
            m="0"+m;
        }
        arr.push(m);

        let s=times%60;
        if (s<10){
            s="0"+s;
        }
        arr.push(s);

        return arr;
    }
}