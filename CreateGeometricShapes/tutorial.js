function tutorialDesenho(){
	var canvas = document.getElementById("game");
	var contexto = canvas.getContext("2d");
	 contexto.fillStyle = "#00FF00";
	contexto.fillRect(100,100,150,75);
	 contexto.strokeStyle = "#FF0000";
	contexto.strokeRect(490,400,150,75);
	contexto.moveTo(570,25);
	contexto.lineTo(190,305);
	contexto.lineTo(570,305);
	contexto.lineTo(570,25);
	contexto.stroke();
	contexto.fillStyle = "#FF00FF";
	contexto.beginPath();
	contexto.arc(190,250,40,0,2*Math.PI);
	contexto.fill();
}