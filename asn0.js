/* Ria Chockalingam
 * 
 */

var ctx;
var canvas;

document.getElementById("draw").addEventListener("click", function(){
    handleDrawEvent();
});

function drawVector(v, color){
    // Draw the vector
    var endX = canvas.width / 2 + v.elements[0]*20;
    var endY = canvas.height / 2 - v.elements[1]*20;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width/2,canvas.height/2)
    ctx.lineTo(endX,endY);
    ctx.stroke();
    
}

function main(){
    canvas = document.getElementById('example');
    if(!canvas){
        console.log('Failed to retrieve the <canvas> element');
        return false;
    }

    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,1.0)';
    ctx.fillRect(0,0, canvas.width, canvas.height)

    var v1 = new Vector3([2.25,2.25,0]);
    drawVector(v1,"red");
    
    

    //ctx.fillStyle = 'rgba(0,0,255,1.0)';
   // ctx.fillRect(120,10,150,150);


}

function handleDrawEvent(v1, color){
    console.log("clearing")
    alert("hi");
    //var input = document.getElementById("xCoord").value;
    //const inputValue = input.value;
    //alert(inputValue);
    //drawVector(v1, "red");
}