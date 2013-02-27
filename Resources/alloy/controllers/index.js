function Controller() {
    function doClick(e) {
        alert($.label.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    $.__views.__alloyId1 = Ti.UI.createScrollView({
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 0,
        layout: "vertical",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "6.382978723404255%",
        left: 0,
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "6.382978723404255%",
        left: "2.117659574468085%",
        id: "__alloyId6"
    });
    $.__views.__alloyId3.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "6.382978723404255%",
        left: "2.117659574468085%",
        id: "__alloyId8"
    });
    $.__views.__alloyId3.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "6.382978723404255%",
        left: "2.117659574468085%",
        id: "__alloyId10"
    });
    $.__views.__alloyId3.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "6.382978723404255%",
        left: "2.117659574468085%",
        id: "__alloyId12"
    });
    $.__views.__alloyId3.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "6.382978723404255%",
        left: "2.117659574468085%",
        id: "__alloyId14"
    });
    $.__views.__alloyId3.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "6.382978723404255%",
        left: "2.117659574468085%",
        id: "__alloyId16"
    });
    $.__views.__alloyId3.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "6.382978723404255%",
        left: "2.117659574468085%",
        id: "__alloyId18"
    });
    $.__views.__alloyId3.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "6.382978723404255%",
        left: "2.117659574468085%",
        id: "__alloyId20"
    });
    $.__views.__alloyId3.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "6.382978723404255%",
        left: "2.117659574468085%",
        id: "__alloyId22"
    });
    $.__views.__alloyId3.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "6.382978723404255%",
        left: "2.117659574468085%",
        id: "__alloyId24"
    });
    $.__views.__alloyId3.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "6.382978723404255%",
        left: "2.117659574468085%",
        id: "__alloyId26"
    });
    $.__views.__alloyId3.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId28"
    });
    $.__views.__alloyId2.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "14.893617021276595%",
        left: 0,
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "14.893617021276595%",
        left: "2.117659574468085%",
        id: "__alloyId31"
    });
    $.__views.__alloyId28.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "14.893617021276595%",
        left: "2.117659574468085%",
        id: "__alloyId33"
    });
    $.__views.__alloyId28.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "14.893617021276595%",
        left: "2.117659574468085%",
        id: "__alloyId35"
    });
    $.__views.__alloyId28.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "14.893617021276595%",
        left: "2.117659574468085%",
        id: "__alloyId37"
    });
    $.__views.__alloyId28.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "14.893617021276595%",
        left: "2.117659574468085%",
        id: "__alloyId39"
    });
    $.__views.__alloyId28.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId41"
    });
    $.__views.__alloyId2.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "23.404255319148934%",
        left: 0,
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "3",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "23.404255319148934%",
        left: "2.117659574468085%",
        id: "__alloyId44"
    });
    $.__views.__alloyId41.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "3",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "23.404255319148934%",
        left: "2.117659574468085%",
        id: "__alloyId46"
    });
    $.__views.__alloyId41.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "3",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "23.404255319148934%",
        left: "2.117659574468085%",
        id: "__alloyId48"
    });
    $.__views.__alloyId41.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "3",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId50"
    });
    $.__views.__alloyId2.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "31.914893617021278%",
        left: 0,
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "4",
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "31.914893617021278%",
        left: "2.117659574468085%",
        id: "__alloyId53"
    });
    $.__views.__alloyId50.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "4",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "31.914893617021278%",
        left: "2.117659574468085%",
        id: "__alloyId55"
    });
    $.__views.__alloyId50.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "4",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId57"
    });
    $.__views.__alloyId2.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "40.42553191489362%",
        left: 0,
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "5",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "40.42553191489362%",
        left: "2.117659574468085%",
        id: "__alloyId60"
    });
    $.__views.__alloyId57.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "5",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "14.893617021276595%",
        left: "2.117659574468085%",
        id: "__alloyId62"
    });
    $.__views.__alloyId57.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId64"
    });
    $.__views.__alloyId2.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "48.83617021276595%",
        left: 0,
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "6",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "48.83617021276595%",
        left: "2.117659574468085%",
        id: "__alloyId67"
    });
    $.__views.__alloyId64.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "6",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId69"
    });
    $.__views.__alloyId2.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "57.44680851063829%",
        left: 0,
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "7",
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "40.42553191489362%",
        left: "2.117659574468085%",
        id: "__alloyId72"
    });
    $.__views.__alloyId69.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "5",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId74"
    });
    $.__views.__alloyId2.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "65.95744680851064%",
        left: 0,
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "8",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "31.914893617021278%",
        left: "2.117659574468085%",
        id: "__alloyId77"
    });
    $.__views.__alloyId74.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "4",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId79"
    });
    $.__views.__alloyId2.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "74.46808510638297%",
        left: 0,
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "9",
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "23.404255319148934%",
        left: "2.117659574468085%",
        id: "__alloyId82"
    });
    $.__views.__alloyId79.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "3",
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId84"
    });
    $.__views.__alloyId2.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "82.97872340425532%",
        left: 0,
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "10",
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "14.893617021276595%",
        left: "2.117659574468085%",
        id: "__alloyId87"
    });
    $.__views.__alloyId84.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId89"
    });
    $.__views.__alloyId2.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "91.48936170212765%",
        left: 0,
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "11",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: "6.382978723404255%",
        left: "2.117659574468085%",
        id: "__alloyId92"
    });
    $.__views.__alloyId89.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId94"
    });
    $.__views.__alloyId2.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createView({
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        height: 40,
        width: Ti.UI.FILL,
        left: 0,
        id: "__alloyId95"
    });
    $.__views.__alloyId94.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "12",
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;