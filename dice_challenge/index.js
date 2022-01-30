var random1=Math.floor(Math.random()*6)+1;
random1.toString;
var random2=Math.floor(Math.random()*6)+1;
random2.toString;
document.querySelector(".img1").src="C:/Users/harsh/HtmlCss_Angela/dice_challenge/images/dice"+random1+".png";
document.querySelector(".img2").src="C:/Users/harsh/HtmlCss_Angela/dice_challenge/images/dice"+random2+".png";
if(random1>random2){
    document.querySelector("h1").innerHTML="1 is winner";
}else
if(random1<random2){
    document.querySelector("h1").innerHTML="2 is winner";
}else{
    document.querySelector("h1").innerHTML="Draw try again";
}