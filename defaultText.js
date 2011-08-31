/**
 * jQuery defaultText v1.0
 * 2011-08-20
 * http://code.google.com/p/jquery-default-text/
 * Copyright Beckerle Matias
 * Licensed under The MIT License (http://www.opensource.org/licenses/mit-license.php)
 */

(function($){
    
    $.fn.defaultText = function(defaultText) {

        return this.each(function() {
            
            var $this = $(this);

            var text = $this.val();
            
            if(defaultText){
                text = defaultText;
                $this.val(text);
            }
            
            $this.focus(function(){  
                if($(this).val() == text) {
                    $(this).val('');  
                }
            });
            
            $this.blur(function(){  
                if($(this).val() == '') {
                    $(this).val(text);
                }
            });

        });
        
    };
    
})(jQuery);