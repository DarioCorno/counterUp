function counterUp(_props) {
	"use strict";

	this.defaults = {
		duration: 3000,				// duration in seconds
		prepend: '',				// string to prepend to the value
		append: '%', 				// string to apend to the value
		selector: '.countup',		// selector used to find elements on wich applycountUp
		start: 0,					// default start
		end: 100,					//default end
		intvalues: false,			//should we display integer values only
		interval: 100				//default counting interval
	}

	var self = this;

	this.upating = false;
	this.intervalID = null;
	this.props = {};
	for(var pna in this.defaults) {
		if( typeof(pna) !== 'undefined') {
			self.props[pna] = self.defaults[pna];
			if( _props.hasOwnProperty( pna ) && self.props.hasOwnProperty( pna ))
				self.props[pna] = _props[pna];
		}
	}

	this.domelems = document.querySelectorAll(this.props.selector);
	this.elems = [];

	var cur = {};

	this.domelems.forEach( function(el) {
		cur.obj = el;


		var start = parseInt( el.getAttribute('cup-start') );
		isNaN( start ) ? cur.start = self.props.start :	cur.start = start;

		var end = parseInt( el.getAttribute('cup-end') );
		isNaN( end ) ? cur.end = self.props.end : cur.end = end;

		var dur = parseInt( el.getAttribute('cup-duration') );
		isNaN( dur ) ? cur.duration = self.props.duration : cur.duration = dur;

		var prep = el.getAttribute('cup-prepend');
		( prep == null) ? cur.prepend = self.props.prepend : cur.prepend = prep;

		var app = el.getAttribute('cup-append');
		( app == null) ? cur.append = self.props.append : cur.append = app;

		var intval = el.getAttribute('cup-intval');
		( intval == null) ? cur.intvalues = self.props.intvalues : cur.intvalues = intval;

		//step to increments at every tic
		cur.step = ( cur.end  - cur.start ) / ( cur.duration / self.props.interval );
		cur.val = cur.start;

		self.elems.push( cur );
		cur = {};
	});
};

counterUp.prototype.start = function() {
	"use strict";
	var self = this;
	this.intervalID = setInterval( function() {
		if(!self.updating)
			self.update();
	}, self.props.interval);
};

counterUp.prototype.update = function() {
	"use strict";
	this.updating = true;
	var alldone = true;
	var self = this;
	this.elems.forEach( function(el) {
		el.val += el.step;		
		if(el.val < el.end) {

			if(el.intvalues == true)
				el.obj.innerHTML = el.prepend + Math.floor( el.val ).toString() + el.append;
			else
				el.obj.innerHTML = el.prepend + (Math.round( el.val * 100 ) / 100).toString() + el.append;

			alldone = false;
		} else {
			el.obj.innerHTML = el.prepend + el.end.toString() + el.append;
		}
	});

	if (alldone == true)
		clearInterval ( this.intervalID );
	this.updating = false;
};
