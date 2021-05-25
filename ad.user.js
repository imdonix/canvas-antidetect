// ==UserScript==
// @name         Canvas AntiDetect
// @namespace    https://github.com/imdonix/canvas-antidetect
// @version      0.3
// @downloadURL  https://github.com/imdonix/canvas-antidetect/raw/master/ad.user.js
// @description  Prevent canvas to detect blur and focus events.
// @author       donix
// @include      https://canvas.elte.hu/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

Window.prototype.realEventListener = Window.prototype.addEventListener
Window.prototype.addEventListener = (a,b,c) =>
{
    if(a == 'focus' || a == 'blur')
        console.log(`[AD] '${a}' event subscription prevented.`)
    else
        realEventListener(a,b,c);
}