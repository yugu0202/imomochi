$(".buy").modaal({
	overlay_close:true,//モーダル背景クリック時に閉じるか
	before_open: async function(){// モーダルが開く前に行う動作
		const data = await fetch("/api", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		});
		const parse = await data.json();
		console.log($(".buy_text").textContent);
		$('.buy_text').innerText = parse.value;
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
});