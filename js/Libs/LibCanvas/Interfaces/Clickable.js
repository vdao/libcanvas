(function () {

var setValFn = function (name, val) {
	return function () {
		this[name] = val;
	}.bind(this);
};

// Should extends drawable, implements mouseListener
LibCanvas.Interfaces.Clickable = new Class({
	clickable : function () {
		var fn = setValFn.bind(this);

		this.hover  = false;
		this.active = false;

		this.bind('mouseover', fn('hover', true));
		this.bind('mouseout' , fn('hover', false));
		this.bind('mousedown', fn('active', true));
		this.bind(['mouseup', 'away:mouseout', 'away:mouseup'],
			fn('active', false));
		return this;
	}
});
})();