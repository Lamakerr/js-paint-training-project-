let colors = document.getElementById("colors");
var canvas = document.getElementById("canvas");
let file = document.getElementById('saveFile');
let text = document.getElementById('text');
var context = canvas.getContext("2d");

//let img = new Image();
//img.src = "img/bumaga.jpg";

//img.onload = function () {
//    context.drawImage(img, 0, 0);
//}



console.log(colors);

context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

$(function () {
    $('.selected-1').click(function () {
        $('.option-list-1').slideToggle(200);
        $('.select-1').toggleClass('select-active-1');


    });

    $('.option-1').click(function () {
        select_val = $(this).attr('data-select-val');
        select_div = $(this).parent().parent();
        $(select_div).children('.selected-1').html($(this).html());
        $(select_div).children('input-1').val(select_val);

        $('.option-list-1').slideToggle(200);
        $('.select-1').toggleClass('select-active-1');
        console.log(select_val);
        switch (select_val) {

            case '1': context.lineCap = 'square';
                break;

            case '2': context.lineCap = 'raund';
                break;

            default: context.lineCap = 'butt';
        }
    });
});

$(function () {
    $('.selected-2').click(function () {
        $('.option-list-2').slideToggle(200);
        $('.select-2').toggleClass('select-active-2');


    });

    $('.option-2').click(function () {
        select_val = $(this).attr('data-select-val');
        select_div = $(this).parent().parent();
        $(select_div).children('.selected-2').html($(this).html());
        $(select_div).children('input-2').val(select_val);

        $('.option-list-2').slideToggle(200);
        $('.select-2').toggleClass('select-active-2');

        console.log(select_val);
        switch (select_val) {
            case '1':
                context.lineWidth = 5;
                break;

            case '2': context.lineWidth = 10;
                break;

            case '3': context.lineWidth = 15;
                break;

            case '4': context.lineWidth = 25;
                break;

            default: context.lineWidth = 5;
        }
    });
});






window.addEventListener("load", function onWindowLoad() {

    generatePalette(document.getElementById("colors"));


    context.lineCap = "round";
    context.lineWidth = 8;

    document.getElementById("clear").onclick = function clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);

    }

    document.getElementById("cleaner").onclick = function cleaner() {
        context.strokeStyle = 'white';
    }




    canvas.onmousemove = function drawIfPressed(e) {

        var x = e.offsetX;
        var y = e.offsetY;
        var dx = e.movementX;
        var dy = e.movementY;

        if (e.buttons > 0) {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x - dx, y - dy);
            context.stroke();
            context.closePath();
        }

    };


    function generatePalette(colors) {

        for (var r = 0, max = 4; r <= max; r++) {
            for (var g = 0; g <= max; g++) {
                for (var b = 0; b <= max; b++) {
                    var paletteBlock = document.createElement('button');
                    paletteBlock.className = 'color';
                    paletteBlock.addEventListener('click', function changeColor(e) {
                        context.strokeStyle = e.target.style.backgroundColor;
                    });

                    paletteBlock.style.backgroundColor = (
                        'rgb(' + Math.round(r * 255 / max) + ", "
                        + Math.round(g * 255 / max) + ", "
                        + Math.round(b * 255 / max) + ")"
                    );

                    colors.appendChild(paletteBlock);
                }
            }
        }
    }

});


file.onclick = function () {

    var dataURL = canvas.toDataURL("image/jpeg");

    var link = document.createElement("a");
    document.body.appendChild(link);

    link.href = dataURL;
    link.download = "canvas-img.png";
    link.click();
    document.body.removeChild(link);

};

// text.onclick = function () {
//     console.log('text');
//     let textValue;
//     let textColor;
//     canvas.style.cursor = 'text'

//     canvas.onmousedown = function drawIfPressed(e) {

//         var x = e.offsetX;
//         var y = e.offsetY;
//         document.addEventListener("keydown") = function (e) {
//             e.key
//             console.log(e.key);
//         }

//         if (e.buttons > 0) {
//             textXPos = x;
//             textYPos = y;

//             context.fillStyle = "#F00";
//             context.font = 'bold 15px sans-serif';


//             context.fillText(textt, textXPos, textYPos);

//         }


//     }
// }

