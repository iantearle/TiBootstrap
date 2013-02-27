var _ = require('lib/underscore');

var left = '2.117659574468085%';

exports.showgrid = {
		row: {top:10, bottom:20},
		span: function(args) {
			var a = _.extend({
				backgroundColor: '#eee', textAlign: 'center', borderRadius: 3, height: 40
			},args||{});

			return a;
		}
	}


/**
 * Cant add left/right spacing here like I wanted
 * as child views seem to still base their 5 values
 * according to the full width of the screen
 */
exports.container = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
		top: 0,
	},args||{}));

	return view;
};

/**
 * Cant add spacing left/right here.
 */
exports.row = function(args) {
	var view = Titanium.UI.createView(_.extend({
		layout: 'horizontal',
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
		top: 0
	},args||{}));

	return view;
};

/**
 * Span's all have the same left value.
 * TODO: extend all span left value to be the same
 * controlled from one variable...
 *
 * How best to add content to span? Would be nice to
 * write row.add(new B.span1(new B.p('Text content')));
 */

exports.span1 = function(args) {

	var view = Titanium.UI.createView(_.extend({
		backgroundColor: '#EEEEEE',
		height: 50,
		width: '6.382978723404255%',
		left: left
	},args||{}));

	return view;
};

exports.span2 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		backgroundColor: '#EEEEEE',
		height: 50,
		width: '14.893617021276595%',
		left: left
	},args||{}));

	return view;
};

exports.span3 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		 width: '23.404255319148934%',
		 left: left
	},args||{}));

	return view;
};

exports.span4 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: '31.914893617021278%',
		left: left
	},args||{}));

	return view;
};

exports.span5 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: '40.42553191489362%',
		left: left
	},args||{}));

	return view;
};

exports.span6 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: '48.83617021276595%',
		left: left
	},args||{}));

	return view;
};

exports.span7 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: '57.44680851063829%',
		left: left
	},args||{}));

	return view;
};

exports.span8 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: '65.95744680851064%',
		left: left
	},args||{}));

	return view;
};

exports.span9 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: '74.46808510638297%',
		left: left
	},args||{}));

	return view;
};

exports.span10 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: '82.97872340425532%',
		left: left
	},args||{}));

	return view;
};

exports.span11 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: '91.48936170212765%',
		left: left
	},args||{}));

	return view;
};

exports.span12 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.FILL
	},args||{}));

	return view;
};

exports.offset12 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.SIZE,
		height:Ti.UI.SIZE,
	},args||{}));

	return view;
};

exports.offset11 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		left: '91.48936170212765%'
	},args||{}));

	return view;
};

exports.offset10 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		left: '82.97872340425532%'
	},args||{}));

	return view;
};

exports.offset9 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		left: '74.46808510638297%'
	},args||{}));

	return view;
};

exports.offset8 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		left: '65.95744680851064%'
	},args||{}));

	return view;
};

exports.offset7 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		left: '57.44680851063829%'
	},args||{}));

	return view;
};

exports.offset6 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		left: '48.93617021276595%'
	},args||{}));

	return view;
};

exports.offset5 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		left: '40.42553191489362%'
	},args||{}));

	return view;
};

exports.offset4 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		left: '31.914893617021278%'
	},args||{}));

	return view;
};

exports.offset3 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		left: '23.404255319148934%'
	},args||{}));

	return view;
};

exports.offset2 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		left: '14.893617021276595%'
	},args||{}));

	return view;
};

exports.offset1 = function(args) {
	var view = Titanium.UI.createView(_.extend({
		width: Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		left: '6.382978723404255%'
	},args||{}));

	return view;
};

exports.p = function(_Text, args) {
	var view = Ti.UI.createLabel(_.extend({
		text: _Text,
		color:'#333333',
		height: Ti.UI.SIZE,
		width:Ti.UI.SIZE,
		font:{fontSize:14, fontFamily:'Helvetica Neue'},
	}, args||{}));

	return view;
};