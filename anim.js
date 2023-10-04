var tmp = {};
loadImageToTmp();
function loadImageToTmp(){
	for(var i=1;i<=60;i++){
		const _i = i;
		const img = new Image();
		tmp[_i] = null;
		img.src = "img/anim01/"+_i+".webp";
		img.addEventListener("load",()=>{
			tmp[_i] = img;
		})
	}
}

const image = document.getElementById("anim01_img");

var SIZE = 60;
var SPEED = 30;

const offset = $("#anim01_img_box").offset(); // 画像を入れるdiv要素
$("#anim01_img_padding").height(SIZE*SPEED); // スペースの変更

$(window).scroll(function() {
	const y = $(window).scrollTop();
	const dy = y - offset.top;
	if(offset.top<y&&y<offset.top+SIZE*SPEED){
		$("#anim01_img_box").css("top",0)
		const i = Math.floor(dy / SPEED);
		if(i<=0||i>=SIZE) return;
		if(tmp[i].src) image.src = tmp[i].src;
	}else if(y>=offset.top+SIZE*SPEED){
		$("#anim01_img_box").css("top","-"+(dy-SIZE*SPEED))
	}
}); 
