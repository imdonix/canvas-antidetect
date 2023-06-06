// ==UserScript==
// @name         Canvas AntiDetect
// @namespace    https://github.com/imdonix/canvas-antidetect
// @version      0.4
// @downloadURL  https://github.com/imdonix/canvas-antidetect/raw/master/ad.user.js
// @description  Prevent canvas to detect blur and focus events.
// @author       donix
// @include      https://canvas.elte.hu/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

Object.defineProperty(document, 'visibilityState', {value: 'visible', writable: true});
Object.defineProperty(document, 'hidden', {value: false, writable: true});
Object.defineProperty(document, 'webkitVisibilityState', {value: 'visible', writable: true});
Object.defineProperty(document, 'webkitHidden', {value: false, writable: true});

Window.prototype.realEventListener = Window.prototype.addEventListener
Window.prototype.addEventListener = (a,b,c) =>
{
    if(a == 'focus' || a == 'blur' || a == 'visibilitychange')
        console.log(`[AD] '${a}' event subscription prevented.`)
    else
        realEventListener(a,b,c);
}