
 $('#addwish-btn').click(function(){
            $("#addwish-panel").slideToggle();
          });


 $('#invite-btn').click(function(){
            $("#invite-panel").slideToggle();
          });

$('#notification').click(function(){
	$('#notification').css({
		'-webkit-filter': 'none'
	});
})

$('.img-gift:even').popover({
          container: 'body',
          html: true,
          trigger: 'hover',
          placement: 'auto left',
          title:'Hey! It works',
          content: 'better feel awesome TEDGlobal is heading to Brazil! In October 2014, in Rio de Janeiro, we will celebrate the outpouring of innovation, energy and creativity taking place all over South America and the global south. The world is changing fast. Fresh thinking can be found in every direction, in emerging geographies as well as in the western hemisphere. Join us in Rio to explore the realities of tomorrow.',
                      });


$('.img-gift:odd').popover({
          container: 'body',
          html: true,
          trigger: 'hover',
          placement: 'auto right',
          title:'Hey! It works',
          content: 'better feel awesome TEDGlobal is heading to Brazil! In October 2014, in Rio de Janeiro, we will celebrate the outpouring of innovation, energy and creativity taking place all over South America and the global south. The world is changing fast. Fresh thinking can be found in every direction, in emerging geographies as well as in the western hemisphere. Join us in Rio to explore the realities of tomorrow.',
                      });