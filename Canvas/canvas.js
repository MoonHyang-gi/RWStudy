var canvas = document.getElementById("game");
var context = canvas.getContext('2d');

class player
{
    constructor(position_x, position_y, radius, color)
    {
        this.position_x = position_x;
        this.position_y = position_y;
        this.radius = radius;
        this.color = color;
    }
    draw()
    {
        context.beginPath();
        context.arc(this.position_x, this.position_y, this.radius, this.color, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

canvas.addEventListener('click', function (e) {
    var x1 = e.clientX - canvas.offsetLeft;
    var y1 = e.clientY - canvas.offsetTop;        
    console.log(x1, y1);

/*canvas("click", function (e)
{
    if(canvas.getContext)
    {
        var left = this.offset.left;
        var top = this.offset.top;
        var x = e.pageX - left;
        var y = e.pageY - top;
        var w = 15;
        var h = 15;

        context.fillStyle = this.color;
        context.fillRect(x,y,w,h);
    }
})*/

/*var char_player = new player(100,100,20,'skyblue');
char_player.draw();

var bullets;

canvas.onclick(ev)
{
    let clickpos_x = ev.clientX-context.canvas.offsetLeft;
    let clickpos_y = ev.clientY-context.canvas.offsetLeft;
}*/
