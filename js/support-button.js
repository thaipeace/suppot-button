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
          
          $('.collapse').on('show.bs.collapse', function(event) {
            $('.collapse').not(event.target).collapse('hide');
            $('.instruction-block .item').removeClass('active');
            $($(this).parent()).addClass('active');
          });
        }
    };
 
}( jQuery ));