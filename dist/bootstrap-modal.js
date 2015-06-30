/* global window */
(function(window){
    "use strict";
    var document = window.document.currentScript.ownerDocument,
        global = window.document,
        $ = window.jQuery,
        proto = Object.create(window.HTMLElement.prototype)
    ;
    proto.modal = function(arg){
        $("#myModal",this).modal(arg);
    };
    proto.attachedCallback = function() {
        var 
            t = document.querySelector('#bootstrap-modal'),
            n = document.importNode(t, true),
            hi = this.querySelector("bootstrap-modal-title"),
            ho = this.querySelector("bootstrap-modal-header"),
            c = this.querySelector("bootstrap-modal-content"),
            f = this.querySelector("bootstrap-modal-footer")
        ;
        this.innerHTML = "";
        this.appendChild(n.content);
        this.querySelector(".modal-body").innerHTML = c.innerHTML;
        if(hi) {
            this.querySelector(".modal-title").innerHTML = hi.innerHTML;
        } else {
            this.querySelector(".modal-title").outerHTML = "";
        }
        
        if(ho) {
            this.querySelector(".modal-header").innerHTML = ho.innerHTML;
        }
        
        if(f) {
            this.querySelector(".modal-footer").innerHTML = f.innerHTML;
        } else {
            this.querySelector(".modal-footer").outerHTML = "";
        }
    };
    global.registerElement('bootstrap-modal-title');
    global.registerElement('bootstrap-modal-header');
    global.registerElement('bootstrap-modal-content');
    global.registerElement('bootstrap-modal-footer');
    global.registerElement('bootstrap-modal', { prototype: proto });
})(window);
