var tmp_02 = {};
var SIZE_02 = 89;
var SPEED_02 = 30;

tmp_02 = loadImageToTmp(SIZE_02, "anim02");

const image_02 = document.getElementById("anim02_img");

if (is_mobile) {image_02.src = "img/anim02_smart/1.webp"}

function loadImageToTmp(SIZE, d){
    var s = "";
    var tmp = {}

	if (is_mobile)
	{
		s = "_smart";
	}

	for(var i=1;i<=SIZE;i++){
		const _i = i;
		const img = new Image();
		tmp[_i] = null;
		img.src = "img/"+d+s+"/"+_i+".webp";
		img.addEventListener("load",()=>{
			tmp[_i] = img;
		})
	}

    return tmp;
}


const offset_02 = $("#anim02_img_box").offset(); // 画像を入れるdiv要素
$("#anim02_img_padding").height(SIZE_02*SPEED_02); // スペースの変更

$(window).scroll(function() {
	const y = $(window).scrollTop();
	const dy = y - offset_02.top;
	if(offset_02.top<y&&y<offset_02.top+SIZE_02*SPEED_02){
		$("#anim02_img_box").css("top",0)
		const i = Math.floor(dy / SPEED_02);
		if(i<=0||i>=SIZE_02) return;
		if(tmp_02[i].src) image_02.src = tmp_02[i].src;
	}else if(y>=offset_02.top+SIZE_02*SPEED_02){
		$("#anim02_img_box").css("top","-"+(dy-SIZE_02*SPEED_02))
	}
}); 
