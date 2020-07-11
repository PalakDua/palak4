var box1=document.querySelector(".box1");
const news =document.getElementById('news');
var easy=document.getElementById('Easy');
const medium=document.getElementById('Medium');
const hard=document.getElementById('Hard');
const med=document.querySelector(".medium");
const ea=document.querySelector(".easy");
const ha=document.querySelector(".hard");
const p1=document.getElementById('p1');
const p2=document.getElementById('p2');
var one=document.querySelector(".one");
var two=document.querySelector(".two");
var three=document.querySelector(".three");
var four=document.querySelector(".four");
var five=document.querySelector(".five");
var six=document.querySelector(".six");
var seven=document.querySelector(".seven");
var eight=document.querySelector(".eight");
var nine=document.querySelector(".nine");
const colors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
news.addEventListener('click',function(){
	let hexcol="#";
   for(i=0;i<6;i++){
   	let random=Math.floor(Math.random()*colors.length);
     hexcol+=colors[random];
     console.log(hexcol);
     colorsfun();
     news.textContent="NEW COLORS";
     box1.style.backgroundColor="#fb7813";
      p2.textContent=" ";
   }
});
easy.addEventListener('click',function(){
       ea.style.display="flex";				
       ha.style.display="none";
       med.style.display="none";
       box1.style.backgroundColor="#fb7813";
       news.textContent="NEW COLORS";
       p2.textContent=" ";
      colorsfun();

});

medium.addEventListener('click',function(){
		   ea.style.display="flex";
       med.style.display="flex";
       ha.style.display="none";
       box1.style.backgroundColor="#fb7813";
       news.textContent="NEW COLORS";
       p2.textContent=" ";
       
       colorsfun();
});

hard.addEventListener('click',function(){
	 	 ea.style.display="flex";
      med.style.display="flex";
      ha.style.display="flex";
      colorsfun();
});

	function colorsfun(){
	  let hexcol1="#";
		let hexcol2="#";
		let hexcol3="#";
    let hexcol4="#";
    let hexcol5="#";
    let hexcol6="#";
		let hexcol7="#";
		let hexcol8="#";
		let hexcol9="#";

	   for(i=0;i<6;i++){
	     let random1=Math.floor(Math.random()*colors.length);
	     hexcol1+=colors[random1];
	     console.log(hexcol1);
	     one.style.backgroundColor=hexcol1;
	    
	   }
	   for(i=0;i<6;i++){
      let random2=Math.floor(Math.random()*colors.length);
     hexcol2+=colors[random2];
     console.log(hexcol2);
     two.style.backgroundColor=hexcol2;
     
     
   }
   for(i=0;i<6;i++){
      let random3=Math.floor(Math.random()*colors.length);
     hexcol3+=colors[random3];
     console.log(hexcol3);
     three.style.backgroundColor=hexcol3;
   
     }
 
  
 for(i=0;i<6;i++){
   	
    	let random4=Math.floor(Math.random()*colors.length);
     hexcol4+=colors[random4];
     console.log(hexcol4);
     four.style.backgroundColor=hexcol4;
   }
   for(i=0;i<6;i++){
   	
   	let random5=Math.floor(Math.random()*colors.length);
     hexcol5+=colors[random5];
     console.log(hexcol5);
     five.style.backgroundColor=hexcol5;
   }
   for(i=0;i<6;i++){
   	
   	let random6=Math.floor(Math.random()*colors.length);
     hexcol6+=colors[random6];
     console.log(hexcol6);
     six.style.backgroundColor=hexcol4;
   }
   for(i=0;i<6;i++){
   	
   	let random7=Math.floor(Math.random()*colors.length);
     hexcol7+=colors[random7];
     console.log(hexcol7);
     seven.style.backgroundColor=hexcol7;
   }
   for(i=0;i<6;i++){
   	
   	let random8=Math.floor(Math.random()*colors.length);
     hexcol8+=colors[random8];
     console.log(hexcol8);
     eight.style.backgroundColor=hexcol8;
   }
   for(i=0;i<6;i++){
   	
   	let random9=Math.floor(Math.random()*colors.length);
     hexcol9+=colors[random9];
     console.log(hexcol9);
     nine.style.backgroundColor=hexcol9;
   }
 }
   
   










