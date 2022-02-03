var entryCount = 0;
var displayCount = 0;
var Switch = 0;
var myCharts = [];

$(document).ready(function () {

    //capture key presses
    $(document).on("keypress", function (e) {
        e.preventDefault();
        entryCount++;
        displayCount++;

        //translate unicode to characters 
        //https://unicodelookup.com/       
        var char = String.fromCharCode(e.which);
        console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
        createElement(char);
    });

    //capture function keys
    $(document).on("keydown", function (e) {
        //if pressed key is a backspace
        if (e.which == 8) {
            e.preventDefault();
            entryCount++;
            displayCount--;
            console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
            deleteElement();
        }
    });

    var colors = ["black", "blue", "blue", 'black',];
    var index = 0;

    $("body").keydown(function () {
        $("body").css("background-color", colors[index]);
        if (Switch<26) {
            index = 0;
        } else {
            index = index >= colors.length ? 0 : index + 1;
        }
    });

});


function createElement(k) {
    k = k.toLowerCase();
    if (Switch < 26) {
        changeImage(k);
        return;
    }

    document.getElementById("start").style.display = "none";

    var top = Math.random() * 800;
    var left = Math.random() * 800;
    var str = 'style="top:' + top + 'px;left:' + left + 'px;"';
    var wid = Math.random() * 600;
    var imgW = 'style="width:' + wid + 'px;"';

    var elem = $('#cursor');
    if (k == "a") { elem.before('<span class="inner" ' + str + '><img ' + imgW + ' src="a.gif"></span>'); }
    if (k == "b") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="b.gif"></span>'); }
    if (k == "c") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="c.gif"></span>'); }
    if (k == "d") { elem.before('<span class="inner" ' + str + '><img  ' + imgW + ' src="d.gif"></span>'); }
    if (k == "e") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="e.gif"></span>'); }
    if (k == "f") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="f.gif"></span>'); }
    if (k == "g") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="g.gif"></span>'); }
    if (k == "h") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="h.gif"></span>'); }
    if (k == "i") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="i.gif"></span>'); }
    if (k == "j") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="j.gif"></span>'); }
    if (k == "k") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="k.gif"></span>'); }
    if (k == "l") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="l.gif"></span>'); }
    if (k == "m") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="m.gif"></span>'); }
    if (k == "n") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="n.gif"></span>'); }
    if (k == "o") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="o.gif"></span>'); }
    if (k == "p") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="p.gif"></span>'); }
    if (k == "q") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="q.gif"></span>'); }
    if (k == "r") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="r.gif"></span>'); }
    if (k == "s") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="s.gif"></span>'); }
    if (k == "t") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="t.gif"></span>'); }
    if (k == "u") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="u.gif"></span>'); }
    if (k == "v") { elem.before('<span class="inner" ' + str + '><img  ' + imgW + ' src="v.gif"></span>'); }
    if (k == "w") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="w.gif"></span>'); }
    if (k == "x") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="x.gif"></span>'); }
    if (k == "y") { elem.before('<span class="inner" ' + str + '><img ' + imgW + '  src="y.gif"></span>'); }
    if (k == "z") { elem.before('<span class="inner" ' + str + '><img  ' + imgW + ' src="z.gif"></span>'); }
    if (k == " ") { $('#container').html("<span id='cursor'></span>"); };
    if (k == "1") { $('#container').html("<span id='cursor'></span>"); };
    if (k == "2") { $('#container').html("<span id='cursor'></span>"); };
    if (k == "3") { $('#container').html("<span id='cursor'></span>"); };
    if (k == "4") { $('#container').html("<span id='cursor'></span>"); };
    if (k == "5") { $('#container').html("<span id='cursor'></span>"); };
    if (k == "6") { $('#container').html("<span id='cursor'></span>"); };
    if (k == "7") { $('#container').html("<span id='cursor'></span>"); };
    if (k == "8") { $('#container').html("<span id='cursor'></span>"); };
    if (k == "9") { $('#container').html("<span id='cursor'></span>"); };
    if (k == "0") { $('#container').html("<span id='cursor'></span>"); };




}

function changeImage(k) {
    if ("qwertyuiopasdfghjklzxcvbnm".indexOf(k) == -1) {
        return;
    }
    if (myCharts.indexOf(k) == -1) {
        Switch++;
        myCharts.push(k);

        if (Switch == 2) {
            document.getElementById("start").style.display = "block";
            document.getElementById("start").src = "pinata2.png";
        } else if (Switch == 8) {
            document.getElementById("start").src = "pinata3.png";
        }
        else if (Switch == 14) {
            document.getElementById("start").src = "pinata4.png";
        }
        else if (Switch == 20) {
            document.getElementById("start").src = "pinata5.png";
        }
        else if (Switch == 26) {
            document.getElementById("start").src = "pinata6.png";
        }
    }
}

function deleteElement() {
    $(".inner").last().remove();
}