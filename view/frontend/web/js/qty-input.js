define(['jquery', 'domReady!'], function($){
    'use strict';

    /* HTML structure should follow:
    *    <div data-updown="control">
    *      <div data-updown="down" class="updown-button"></div>
    *      <input data-updown="input" />
    *      <div data-updown="up" class="updown-button"></div>
    *    </div>
    *
    *   See _qty-input.less in web/css.
    */

    return function(config, element){
        if(config.active === false) return;

        var $element = $(element);
        //  var defQty = config.defQty;
        var $up = $element.find('[data-updown="up"]');
        var $down = $element.find('[data-updown="down"]');
        var $input = $element.find('[data-updown="input"]');

        $up.click({up: true, button: $down}, alterQty);
        $down.click({up: false, button: $down}, alterQty);

        //initial disable of down
        //  if(defQty === 1) $down.addClass('disabled');

        function alterQty(event){
            console.log('event ', event);
            let up = event.data.up;
            let down = event.data.button;

            let curVal = $input.val();
            console.log('curVal ', curVal);
            if(up){
                $input.val(++curVal);
                if(curVal > 1){
                    down.removeClass('disabled');
                }
            }
            else{
                if(curVal > 1) $input.val(--curVal);
                if(curVal === 1){
                    down.addClass('disabled');
                }
            }
        }
    };
});



