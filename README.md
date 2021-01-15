# Canvas AntiDetect

This script is prevent the client to send `page_focused` and `page_blurred` events to canvas.

# Install

1. First you need a userscript manager such as: **Tampermonkey** 
    - [Chrome](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo) 
    - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
2.  Install the script [Here](https://github.com/imdonix/canvas-antidetect/raw/master/ad.user.js)!

## How it works

Canvas have a `event_manager` which track user interactions.

The `page_focused` and `page_blurred` events are registred with jquery in the `event_tracker.js`:

So we can `$(selector).off` the needed events from the `window` which remove the event handlers added by the tracker.

These won't prevent any other quizze events to be reported so it won't be suspicious.

### The `event_tracker` payload:

![Exist](https://raw.githubusercontent.com/imdonix/canvas-antidetect/master/doc/logger.png)
