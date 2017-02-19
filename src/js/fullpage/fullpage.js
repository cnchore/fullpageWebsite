
$(document).ready(function() {

	$('#fullpage-ctauto').fullpage({

		verticalCentered:false,	
		
		autoScrolling:true,

		loopTop:true,

		loopBottom:true,

		slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE','#AC11A1','#78DE9b','#1bbc9b', '#4BBFC3', '#7BAABE'],

		anchors: ['page1', 'page2', 'page3','page4','page5','page6','page7','page8'],

		navigation: true,

		navigationPosition:'right',

		navigationTooltips:['第一屏', '第二屏', '第三屏','第四屏','第五屏','第六屏','第七屏','第八屏'],

		slidesNavigation:true,
		
		reszie:true,

		afterLoad: function (anchorLink, index) {
			
            addSectionActive(anchorLink, index);
         }

	});

});

function addSectionActive(anchorLink, index) {
	//先删除其他再加当前
	try{

	
	var objArr=$('.ctSelect');
	if(objArr.length>0){
		objArr.removeClass("ctSelect");
	}
    var section = $('[data-anchor="' + anchorLink + '"]');
    section.addClass("ctSelect");
	}
	catch(err){
		console.log('addSectionActive err:'+err);
	}
}






