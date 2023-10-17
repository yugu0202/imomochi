$(".buy").modaal({
	overlay_close:true,//モーダル背景クリック時に閉じるか
	before_open: async function(){// モーダルが開く前に行う動作
		const data = await fetch("/get-text", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		});
		const parse = await data.json();
		$('.buy_text').text(parse.value);
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
});