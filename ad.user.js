// ==UserScript==
// @name         Canvas AntiDetect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @downloadURL  https://github.com/imdonix/canvas-antidetect/raw/master/antidetect.js
// @description  Prevent canvas to detect blur and focus events.
// @author       donix
// @include      https://canvas.elte.hu/*
// @grant        none
// ==/UserScript==


(function() {
    const PREFIX = '[AntiDetect] '

    console.log(PREFIX + 'loading...')
    
    waitAll()
    .then(() =>
    {
        try
        {
            if(jQuery)
            {
                setInterval(() => 
                {
                    if(!checkTrackingEvents())
                    {
                        disableTrackingEvents()
                        console.log(PREFIX + 'events disabled.')
                    }                        
                }, 1000)
            }
        }
        catch(ReferenceError)
        {
            console.log(PREFIX + 'login page.')
        }
    })
    .catch((err) =>
    {
        alert(`AntiDetect cant be loaded - ${err}`)
    })

    function waitAll()
    {
        return new Promise((res, rej) =>
        {
            let check = setInterval(() => 
            {
                if (document.readyState === 'complete') 
                {
                  clearInterval(check);
                  res()
                }
            }, 100)

            setTimeout(() => 
            {
                clearInterval(check)
                rej('timeout')
            }, 5000)
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

})();