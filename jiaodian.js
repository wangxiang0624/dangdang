	var arr=['images/dd_scroll_1.jpg','images/dd_scroll_2.jpg','images/dd_scroll_3.jpg','images/dd_scroll_4.jpg','images/dd_scroll_5.jpg'];
 	var img=document.getElementById('dd_scroll');
 	var jd_ul=document.getElementById('jd_ul');
 	//当前图片的索引
 	var curindex=0;
 	//数据的长度
 	var len=arr.length;

 	//展示焦点
 	var jd_str='';
 	for(var i=0;i<len;i++){
 		jd_str+='<li class="jd_li">'+(i+1)+'</li>'
 	}	
 	jd_ul.innerHTML=jd_str;
 	//获取焦点元素
 	var jd_obj=document.getElementsByClassName('jd_li');
 	//图片轮换函数
 	function huantu(){
 		if(curindex>=len){
 			curindex=0;
 		}
 		//展示当前的图片
 		img.src=arr[curindex];
 		//去除之前所有的背景
 		for(var j=0;j<len;j++){
 			jd_obj[j].style.backgroundColor='';
 		}
 		//给当前的元素加上背景
 		jd_obj[curindex].style.backgroundColor='#f00';
 		curindex++;
 	}	
 	var timer=setInterval('huantu()',1000);
 	//鼠标放上停止 鼠标移开再开始
 	img.onmouseover=function(){
 		clearInterval(timer);
 	}
 	img.onmouseout=function(){
 		timer=setInterval('huantu()',1000);
 	}