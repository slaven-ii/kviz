/**
 * Created by st00ne1 on 22/02/15.
 */
height = 1;
width = 0;
maxHeight = 0;
document.addEventListener('DOMContentLoaded', function(){
    var v = document.getElementById('v');
    var canvas = document.getElementById('c');
    var context = canvas.getContext('2d');
    var back = document.createElement('canvas')
    var backcontext = back.getContext('2d');

    var cw,ch;

    v.addEventListener('play', function(){
        cw = v.clientWidth;
        ch = v.clientHeight;
        canvas.width = cw;
        canvas.height = ch;
        maxHeight = ch;
        back.width = cw;
        back.height = ch;
        draw(v,context,backcontext,cw,ch);
    },false);

},false);

function draw(v,c,bc,cw,ch) {
    if(v.paused || v.ended) return false;
    // First, draw it into the backing canvas
    bc.drawImage(v,0,0,cw,ch);
    // Grab the pixel data from the backing canvas
    var idata = bc.getImageData(0,0,cw,ch);
    var data = idata.data;
    var w = idata.width;
    var limit = data.length
    // Loop through the subpixels, convoluting each using an edge-detection matrix.
    var posh = cw  * 0.5;
    var posc = ch  * 0.5;
    var pos = posh * posc;

    var r = data[pos];
    var g = data[pos+1];
    var b = data[pos+1];

    /*
    console.log(r);
    console.log(g);
    console.log(b);
*/
    /*
     for(var i = 0; i < limit; i++) {

     console.log(data[i]);
     console.log(data[i+1]);
     console.log(data[i+2]);


     //data[i] = 100 + 2*data[i] - data[i + 4] - data[i + w*4];
     }*/
    // Draw the pixels onto the visible canvas
    c.putImageData(idata,0,0);
    stackBlurCanvasRGB( "c", 0, 0, cw, height, 10 );
    // Start over!
    setTimeout(draw,20,v,c,bc,cw,ch);
}


