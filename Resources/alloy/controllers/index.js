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
        layout: "vertical",
        width: "48.83617021276595%",
        height: Ti.UI.SIZE,
        left: "2.117659574468085%",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: 40,
        color: "#333333",
        textAlign: "left",
        top: 10,
        bottom: 10,
        left: 5,
        font: {
            fontSize: 38.5,
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        text: "Grid",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId6"
    });
    $.__views.__alloyId2.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        width: "6.382978723404255%",
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        width: "6.382978723404255%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId9"
    });
    $.__views.__alloyId6.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        width: "6.382978723404255%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId11"
    });
    $.__views.__alloyId6.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        width: "6.382978723404255%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId13"
    });
    $.__views.__alloyId6.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        width: "6.382978723404255%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId15"
    });
    $.__views.__alloyId6.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
        width: "6.382978723404255%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId17"
    });
    $.__views.__alloyId6.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        width: "6.382978723404255%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId19"
    });
    $.__views.__alloyId6.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        width: "6.382978723404255%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId21"
    });
    $.__views.__alloyId6.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        width: "6.382978723404255%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId23"
    });
    $.__views.__alloyId6.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        width: "6.382978723404255%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId25"
    });
    $.__views.__alloyId6.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        width: "6.382978723404255%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId27"
    });
    $.__views.__alloyId6.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        width: "6.382978723404255%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId29"
    });
    $.__views.__alloyId6.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId31"
    });
    $.__views.__alloyId2.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        width: "14.893617021276595%",
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        width: "14.893617021276595%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId34"
    });
    $.__views.__alloyId31.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        width: "14.893617021276595%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId36"
    });
    $.__views.__alloyId31.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        width: "14.893617021276595%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId38"
    });
    $.__views.__alloyId31.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        width: "14.893617021276595%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId40"
    });
    $.__views.__alloyId31.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        width: "14.893617021276595%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId42"
    });
    $.__views.__alloyId31.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId44"
    });
    $.__views.__alloyId2.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        width: "23.404255319148934%",
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "3",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        width: "23.404255319148934%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId47"
    });
    $.__views.__alloyId44.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "3",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        width: "23.404255319148934%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId49"
    });
    $.__views.__alloyId44.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "3",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        width: "23.404255319148934%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId51"
    });
    $.__views.__alloyId44.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "3",
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId53"
    });
    $.__views.__alloyId2.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        width: "31.914893617021278%",
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "4",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createView({
        width: "31.914893617021278%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId56"
    });
    $.__views.__alloyId53.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "4",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        width: "31.914893617021278%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId58"
    });
    $.__views.__alloyId53.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "4",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId60"
    });
    $.__views.__alloyId2.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        width: "40.42553191489362%",
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "5",
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createView({
        width: "40.42553191489362%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId63"
    });
    $.__views.__alloyId60.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "5",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        width: "14.893617021276595%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId65"
    });
    $.__views.__alloyId60.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId67"
    });
    $.__views.__alloyId2.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        width: "48.83617021276595%",
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "6",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        width: "48.83617021276595%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId70"
    });
    $.__views.__alloyId67.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "6",
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId72"
    });
    $.__views.__alloyId2.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createView({
        width: "57.44680851063829%",
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "7",
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        width: "40.42553191489362%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId75"
    });
    $.__views.__alloyId72.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "5",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId77"
    });
    $.__views.__alloyId2.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createView({
        width: "65.95744680851064%",
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "8",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createView({
        width: "31.914893617021278%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId80"
    });
    $.__views.__alloyId77.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "4",
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId82"
    });
    $.__views.__alloyId2.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        width: "74.46808510638297%",
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "9",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        width: "23.404255319148934%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId85"
    });
    $.__views.__alloyId82.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "3",
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId87"
    });
    $.__views.__alloyId2.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createView({
        width: "82.97872340425532%",
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "10",
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        width: "14.893617021276595%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId90"
    });
    $.__views.__alloyId87.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "2",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId92"
    });
    $.__views.__alloyId2.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createView({
        width: "91.48936170212765%",
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "11",
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createView({
        width: "6.382978723404255%",
        height: 40,
        left: "2.117659574468085%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId95"
    });
    $.__views.__alloyId92.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "1",
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId97"
    });
    $.__views.__alloyId2.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "12",
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId100"
    });
    $.__views.__alloyId2.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: 40,
        color: "#333333",
        textAlign: "left",
        top: 10,
        bottom: 10,
        left: 5,
        font: {
            fontSize: 38.5,
            fontFamily: "Helvetica Neue",
            fontWeight: "bold"
        },
        text: "Grid Offset",
        id: "__alloyId102"
    });
    $.__views.__alloyId101.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId103"
    });
    $.__views.__alloyId2.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createView({
        width: "31.914893617021278%",
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "4",
        id: "__alloyId105"
    });
    $.__views.__alloyId104.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        width: "31.914893617021278%",
        height: 40,
        left: "34.14776066768544%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId106"
    });
    $.__views.__alloyId103.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "4 offset 4",
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId108"
    });
    $.__views.__alloyId2.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createView({
        width: "23.404255319148934%",
        height: 40,
        left: 0,
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId109"
    });
    $.__views.__alloyId108.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "3 offset 3",
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createView({
        width: "23.404255319148934%",
        height: 40,
        left: "28.346655695309746%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId111"
    });
    $.__views.__alloyId108.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "3 offset 3",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 20,
        layout: "horizontal",
        id: "__alloyId113"
    });
    $.__views.__alloyId2.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createView({
        width: "48.83617021276595%",
        height: 40,
        left: "54.14364640883978%",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: 3,
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "6 offset 6",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;