
window.onload = init;

function init()
{
	//弹出广告窗口： 
	window.open("ad.html","win1","width=500,height=327, left=300,top=100");
}

function closeFloatAd()
{
	var obj = document.getElementById("floatAd");
	obj.style.display = "none";
}

		var i = 1;
		var t1 = window.setInterval("f1();", 1000);	//每1000毫秒
		function f1()
		{
			i++;
			if( i >= 7 )
			{
				i = 1;
			}
			//alert(i);
			var jiaodiantu = document.getElementById("dd_scroll");
			jiaodiantu.src = "images/dd_scroll_" + i + ".jpg"
			huanbeijing();
		}

		//停止切换
		function ting()
		{
			window.clearInterval( t1 );
		}

		//继续切换
		function zou()
		{
			t1 = window.setInterval("f1();", 1000);
		}

		//既换对应的图，又停止切换，换按钮背景
		function huanting( n )
		{
			//手动换图
			var jiaodiantu = document.getElementById("dd_scroll");
			jiaodiantu.src = "images/dd_scroll_" + n + ".jpg";

			//记录当前图的顺序号
			i = n;	//设定全局变量的i的值为当前图的顺序号（ｎ），目的是为了当图片重新自动切换的时候，会从这个ｎ的顺序号可以计算。

			//停止定时器
			ting();

			huanbeijing();

		}

		//根据当前图的顺序号（ｉ）更好按钮的背景
		function huanbeijing()
		{
			var obj = document.getElementById("scroll_number");
			var lis = obj.getElementsByTagName("li");
			//这种“若干个平等并列但总有一个特例情况的对象操作”，通常采取以下方法：
			for(var k = 0; k < lis.length; k++)	//先将所有对象处理成“普通状态”（一般状态）
			{
				lis[k].style.backgroundColor = "";
			}
			lis[i-1].style.backgroundColor = "orange";	//然后将特例对象处理成希望的样子
		}


	function showTab( n )
	{
		var names = ['history','family','culture','novel'];
		//统一处理：4个tab标签对象（div），和4个内容对象（ｄｌ）
		var len = names.length;
		for(var i = 0; i < len; i++)
		{
			document.getElementById("book_" + names[i] ).style.display = "none";	//隐藏了4个dl内容对象
			document.getElementById(names[i] ).className = "book_type";				//4个tab的class都设置为"book_type"
		}

		//特例处理：
		document.getElementById("book_" + names[n] ).style.display = "block";//当前dl显示出来
		document.getElementById(names[n] ).className = "book_type_out";		//当前tab的class都设置为"book_type_out"
	}


