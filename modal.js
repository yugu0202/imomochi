$(".buy").modaal({
	overlay_close:true,//モーダル背景クリック時に閉じるか
	before_open: async function(){// モーダルが開く前に行う動作
		(await fetch("/api")).json()
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
});