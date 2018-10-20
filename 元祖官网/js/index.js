var head=document.getElementsByClassName("ewm")[0];
var ewm=document.getElementsByClassName("ewm1")[0];
head.onmouseover=function(){
	ewm.style.opacity=1;
}
head.onmouseout=function(){
	ewm.style.opacity=0;
}
//图片轮播
var div=document.getElementsByClassName("scrol_1")[0];
var img=div.getElementsByTagName("img");
var lis=div.getElementsByTagName("li");
var srol=document.getElementsByClassName("scrol_2")[0]
var m=0;
//圆点的样式
for (var i=0;i<lis.length;i++) {
	lis[i].onmouseover=function(){
		for (var j=0;j<lis.length;j++) {
			lis[j].style.background="";
			lis[j].setAttribute("dy",j);
		}
		this.style.backgroundColor="#c40237";
		m=this.getAttribute("dy");
		srol.style.marginLeft=-1000*m+"px";
	}
}

function fun(){
	for (var i=0;i<lis.length;i++) {
		lis[i].style.background="";
	}
	if(m<8){
		m++;
		srol.style.marginLeft=-1000*m+"px";
		lis[m].style.background="#c40237";
	}else{
		m=0;
		srol.style.marginLeft=-1000*m+"px";
		lis[m].style.background="#c40237";
	}
}
var timer=setInterval(fun,2000);
div.onmouseover=function(){
	clearInterval(timer);
	timer=null;
}
div.onmouseout=function(){
	timer=setInterval(fun,2000);
}

//推荐
var con1=document.getElementsByClassName("contaimer1")[0];
var li1=con1.getElementsByTagName("li");
var box1=con1.getElementsByClassName("box");
var sjx=document.getElementsByClassName("sjx")[0];
for (var i=0;i<li1.length;i++) {
	li1[i].setAttribute("zy",i);
	li1[i].onmouseover=function(){
		var b=this.getAttribute("zy");
		for (var j=0;j<box1.length;j++) {
			box1[j].className="box hide";
		}
		box1[b].className="box show";
		
		sjx.className="sjx show";
		sjx.style.left=(104+228*b)+"px";
	}
	li1[i].onmouseout=function(){
		sjx.className="sjx hide";
	}
}




