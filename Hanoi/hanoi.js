var resetBtn = document.getElementById("resetBtn");
var first = document.getElementById("first");
var boxColor = document.getElementById("boxColor");

var count = 0;

resetBtn.addEventListener('click', function(){
    if(this.onclick)
    {
        count =+ 1;

        if(count == 0)
    {
        first.textContent = "block";
        boxColor.textContent = "none";
    }
    else if(count == 1)
    {
        first.textContent = "none";
        boxColor.textContent = "block";
    }
    }
    
})