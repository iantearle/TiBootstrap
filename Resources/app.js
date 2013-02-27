// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#ffffff');

var B = require('bootstrap');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var window = Titanium.UI.createWindow({
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:window
});


var body = Titanium.UI.createScrollView({
	layout: 'vertical'
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top: 0
});

var row = new B.row(B.showgrid.row);
var container = new B.container();

var row2 = new B.row(B.showgrid.row);
var container2 = new B.container();

var row3 = new B.row(B.showgrid.row);
var container3 = new B.container();

var row4 = new B.row(B.showgrid.row);
var container4 = new B.container();

var row5 = new B.row(B.showgrid.row);
var container5 = new B.container();

var row6 = new B.row(B.showgrid.row);
var container6 = new B.container();

var row7 = new B.row(B.showgrid.row);
var container7 = new B.container();

var row8 = new B.row(B.showgrid.row);
var container8 = new B.container();

var row9 = new B.row(B.showgrid.row);
var container9 = new B.container();

var row10 = new B.row(B.showgrid.row);
var container10 = new B.container();

var row11 = new B.row(B.showgrid.row);
var container11 = new B.container();

var row12 = new B.row(B.showgrid.row);
var container12 = new B.container();

row.add(new B.span1(B.showgrid.span({left:0})));
row.add(new B.span1(B.showgrid.span()));
row.add(new B.span1(B.showgrid.span()));
row.add(new B.span1(B.showgrid.span()));
row.add(new B.span1(B.showgrid.span()));
row.add(new B.span1(B.showgrid.span()));
row.add(new B.span1(B.showgrid.span()));
row.add(new B.span1(B.showgrid.span()));
row.add(new B.span1(B.showgrid.span()));
row.add(new B.span1(B.showgrid.span()));
row.add(new B.span1(B.showgrid.span()));
row.add(new B.span1(B.showgrid.span()));

row2.add(new B.span2(B.showgrid.span({left:0})));
row2.add(new B.span2(B.showgrid.span()));
row2.add(new B.span2(B.showgrid.span()));
row2.add(new B.span2(B.showgrid.span()));
row2.add(new B.span2(B.showgrid.span()));
row2.add(new B.span2(B.showgrid.span()));

row3.add(new B.span3(B.showgrid.span({left:0})));
row3.add(new B.span3(B.showgrid.span()));
row3.add(new B.span3(B.showgrid.span()));
row3.add(new B.span3(B.showgrid.span()));

row4.add(new B.span4(B.showgrid.span({left:0})));
row4.add(new B.span4(B.showgrid.span()));
row4.add(new B.span4(B.showgrid.span()));

row5.add(new B.offset2());
row5.add(new B.span5(B.showgrid.span()));
row5.add(new B.span5(B.showgrid.span()));

row6.add(new B.span6(B.showgrid.span({left:0})));
row6.add(new B.span6(B.showgrid.span()));

row7.add(new B.span7(B.showgrid.span({left:0})));
row7.add(new B.offset5());

row8.add(new B.offset4(true));
row8.add(new B.span8(B.showgrid.span()));

row9.add(new B.offset3(true));
row9.add(new B.span9(B.showgrid.span()));

row10.add(new B.offset2(true));
row10.add(new B.span10(B.showgrid.span()));

row11.add(new B.offset1(true));
row11.add(new B.span11(B.showgrid.span()));

row12.add(new B.span12(B.showgrid.span({left:0})));

body.add(label1);
container.add(row);
container2.add(row2);
container3.add(row3);
container4.add(row4);
container5.add(row5);
container6.add(row6);
container7.add(row7);
container8.add(row8);
container9.add(row9);
container10.add(row10);
container11.add(row11);
container12.add(row12);



body.add(container);
body.add(container2);
body.add(container3);
body.add(container4);
body.add(container5);
body.add(container7);
body.add(container6);
body.add(container8);
body.add(container9);
body.add(container10);
body.add(container11);
body.add(container12);


window.add(body);







//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);


// open tab group
tabGroup.open();
