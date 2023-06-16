
$('.gallery-item').click(function()
{
  var src=$(this).find('img').data('full');
  $('.img-view-item img').attr('src',src);
  $('.img-view').css('display','flex');
//  console.log($('.img-view-item img').attr('src'));
  });
  $('.img-view').click(
    function(){
        $('.img-view').css('display','none');
    });
