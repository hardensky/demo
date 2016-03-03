window.onload=function(){
	var oul=document.getElementById("body1-ul");
	var oli=oul.getElementsByTagName("li");
	var onewidth=oli[0].offsetWidth;
	var m=0;
	function ulwidth(){
		oul.style.width=onewidth*oli.length+"px";
	};
	ulwidth();
	setInterval(a,2000)
	function a(){
		var i=0;
		var ali=oli[i].cloneNode(true);
		oul.appendChild(ali);
		ulwidth();
		i+=1;
		if(i>3){
			i=0;
		}
		m+=1;
		n=980*m;
		oul.style.left="-"+n+"px";
		oul.removeChild(oli[0]);
		oul.style.left=0;
	};
}