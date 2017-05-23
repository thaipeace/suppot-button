(function ( $ ) {
 
    $.fn.supportSession = function( options ) {
        var settings = $.extend({
        }, options );
        
        var paths = [
          './template/button.html',
          './template/instruction-block.html',
          './template/support-block.html'
        ];
        
        loadTemplates(paths);
        
        function loadTemplates(paths) {
          $.each(paths, function(index, path){
            $.ajax({
              url: path,
              success: function (data) {
                $('body').append(data);
                if (index === paths.length - 1) {
                  buttonEvent();
                }
              },
              dataType: 'html'
            });
          });
        }

        function buttonEvent() {
          $('.support-button').on('click', function(){
            $(this).removeClass('active');
            $('.instruction-block').addClass('active');
          });
          
          $('.x-button').on('click', function() {
            $('.instruction-block').removeClass('active');
            $('.support-button').addClass('active');
          });
          
          $('.instruction-block .collapse').on('show.bs.collapse', function(event) {
            $('.instruction-block .collapse').not(event.target).collapse('hide');
            $('.instruction-block .item').removeClass('active');
            console.log(this);
            $(this).parent().parent().addClass('active');
            $('.instruction-block .content-wrapper').css('padding-bottom', '0');
            $(this).parent().css('padding-bottom', '15px');
          });
        }
    };
 
}( jQuery ));