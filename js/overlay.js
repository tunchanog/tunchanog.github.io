/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );


function Overlay(overlay, onLoad) {
	this.overlay = overlay;
  this.onLoad = onLoad;
	var closeBttn = overlay.querySelector( 'button.overlay-close' );
	var transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    };
	var transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
	var support = { transitions : Modernizr.csstransitions };
    var self = this;

    function closeOverlay() {
        if( classie.has( overlay, 'open' ) ) {
            classie.remove( overlay, 'open' );
            classie.add( overlay, 'close' );
            var onEndTransitionFn = function( ev ) {
                if( support.transitions ) {
                    if( ev.propertyName !== 'visibility' ) return;
                    this.removeEventListener( transEndEventName, onEndTransitionFn );
                }
                classie.remove( self.overlay, 'close' );
                 $(overlay).css('display', 'none');
            };
            if( support.transitions ) {
                overlay.addEventListener( transEndEventName, onEndTransitionFn );
            }
            else {
                onEndTransitionFn();
            }
            $('body').css('overflow', 'auto')
           
        }
    }

	closeBttn.addEventListener( 'click', closeOverlay);
}

$.fn.redraw = function(){
  $(this).each(function(){
    var redraw = this.offsetHeight;
  });
};



function forceCSSRecalc (node) {
		var t = document.createElement('span');
		t.style.cssText && 
		(t.style.cssText = 'font-size: 0; width: 1px; height: 1px; position: absolute; left: -9999px;');
		node.appendChild(t);
		setTimeout(function() { node.removeChild(t); }, 50);
	}


Overlay.prototype.open = function() {
    if( !classie.has( this.overlay, 'close' ) ) {
        $('body').css('overflow', 'hidden');
        $(this.overlay).css('display', 'block');
        
        $($(this.overlay).find(".overlay-content")[0]).scrollTop(0);
        var self = this;
        setTimeout(function() {
          classie.add( self.overlay, 'open' );
          self.onLoad && self.onLoad();
        }, 1);
        
    }
}