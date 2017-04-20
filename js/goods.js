$(function(){
	//商品列表动态添加
	$.getJSON("goods.json",goodsData);
	function goodsData(data){
		console.log(data[0].goodsImg);
		for(var i = 0;i<data.length;i++){
				var goodsObj = $("<div>");
				$(goodsObj).attr({"class":"box"});
				$(goodsObj).html('<div class="box-left"><img src="'+data[i].goodsImg+'"/></div><div class="box-cen"><span class="pp">品牌</span><h3 class="shopName"><a href="#">'
									+data[i].goodsName+'</a></h3> <p><span class="star">'+data[i].goodsStar+'</span><span class="num">'
									+data[i].goodsCount+'</span><span class="sale">月售'
									+data[i].goodsSale+'单</span></p><p><span class="size">¥'
									+data[i].goodsSong+'起送/</span><span class="size"> 配送费¥'
									+data[i].songPrice+'</span></p></div><div class="box-right"><p class="box-right-top"><span>保</span><span>票</span><span>准</span></p><p>'+
									'<span class="time">准时达</span><span class="song">蜂鸟专送</span></p><p><span class="size">'
									+data[i].goodsMeter
									+'/</span><span class="size m">'
									+data[i].goodsMin+' </span></p></div>');
    				
			$("#bg").append(goodsObj);
		}
	}
})	

