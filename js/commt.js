$(function(){
	//商品列表动态添加
	$.getJSON("commt.json",goodsData);
	function goodsData(data){
		console.log(data);
		for(var i = 0;i<data.length;i++){
				var goodsObj = $("<div>");
				$(goodsObj).attr({"class":"user"});
				$(goodsObj).html("<div class='user-lt'><img src='img/small.jpg'/></div><div class='user-gt'><p><span class='name'>"
									+data[i].userName+"</span><span class='date'>"+data[i].userData
									+"</span></p><p class='star'>"+data[i].userStar+"</p><div class='user-img'>"+
									data[i].userImg+"</div><p class='btm'>"+data[i].userFoods+"</p></div>");
			$("#block").append(goodsObj);
		}
	}
})
