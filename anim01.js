var tmp_01 = {};
var SIZE_01 = 60;
var SPEED_01 = 30;

tmp_01 = loadImageToTmp(SIZE_01, "anim01");

const image_01 = document.getElementById("anim01_img");

if (is_mobile) {image_01.src = "img/anim01_smart/1.webp"}

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

const offset_01 = $("#anim01_img_box").offset(); // 画像を入れるdiv要素
$("#anim01_img_padding").height(SIZE_01*SPEED_01); // スペースの変更

$(window).scroll(function() {
	const y = $(window).scrollTop();
	const dy = y - offset_01.top;
	if(offset_01.top<y&&y<offset_01.top+SIZE_01*SPEED_01){
		$("#anim01_img_box").css("top",0)
		const i = Math.floor(dy / SPEED_01);
		if(i<=0||i>=SIZE_01) return;
		if(tmp_01[i].src) image_01.src = tmp_01[i].src;
	}else if(y>=offset_01.top+SIZE_01*SPEED_01){
		$("#anim01_img_box").css("top","-"+(dy-SIZE_01*SPEED_01))
	}
}); 