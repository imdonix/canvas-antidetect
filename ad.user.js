// ==UserScript==
// @name         Canvas AntiDetect
// @namespace    https://github.com/imdonix/canvas-antidetect
// @version      0.2
// @downloadURL  https://github.com/imdonix/canvas-antidetect/raw/master/ad.user.js
// @description  Prevent canvas to detect blur and focus events.
// @author       donix
// @include      https://canvas.elte.hu/*
// @grant        none
// ==/UserScript==

(function() {

    waitAll()
    .then(() =>
    {
        log('page loaded.')
        try
        {
            if(jQuery)
            {
                setInterval(() => 
                {
                    if(!checkTrackingEvents())
                    {
                        disableTrackingEvents()
                        log('events disabled. !')
                    }                        
                }, 1000)
            }
        }
        catch(ReferenceError)
        {
            log('login page. !')
        }
    })

    function waitAll()
    {
        return new Promise(res =>
        {
            let check = setInterval(() => 
            {
                if (document.readyState === 'complete') 
                {
                  clearInterval(check);
                  res()
                }
            }, 100)
        })
    }

    function disableTrackingEvents()
    {
        $(window).off('focus')
        $(window).off('blur')
    }

    function checkTrackingEvents()
    {
        let events = jQuery._data(window, "events")
        return events.blur === undefined && events.focus === undefined
    }

    function log(msg)
    {
        console.log('[AntiDetect] ' + msg)
    }

})();