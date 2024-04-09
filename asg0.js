/* Ria Chockalingam
 * 
 */

var ctx;
var canvas;

document.getElementById("draw").addEventListener("click", function () {
    handleDrawEvent();
});

document.getElementById("drawOp").addEventListener("click", function () {

    handleDrawOperationEvent();
});

function drawVector(v, color) {
    // Draw the vector
    var endX = canvas.width / 2 + v.elements[0] * 20;
    var endY = canvas.height / 2 - v.elements[1] * 20;

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2)
    ctx.lineTo(endX, endY);
    ctx.stroke();

}

function main() {
    canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return false;
    }

    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,1.0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // var v1 = new Vector3([2.25,2.25,0]);
    //drawVector(v1,"red");



    //ctx.fillStyle = 'rgba(0,0,255,1.0)';
    // ctx.fillRect(120,10,150,150);


}

function handleDrawEvent() {
    // clears everything
    ctx.reset();
    ctx.fillStyle = 'rgba(0,0,0,1.0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // initialize vectors
    var xCoordInput = document.getElementById('xCoord');
    var yCoordInput = document.getElementById('yCoord');

    var xCoordInput2 = document.getElementById('xCoord2');
    var yCoordInput2 = document.getElementById('yCoord2');

    var v1 = new Vector3([xCoordInput.value, yCoordInput.value, 0]);
    var v2 = new Vector3([xCoordInput2.value, yCoordInput2.value, 0]);


    drawVector(v1, "red");
    drawVector(v2, "blue");

    //var input = document.getElementById("xCoord").value;
    //const inputValue = input.value;
    //alert(inputValue);
    //drawVector(v1, "red");
}
function handleDrawOperationEvent() {
    // clears everything
    ctx.reset();
    ctx.fillStyle = 'rgba(0,0,0,1.0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    var xCoordInput = document.getElementById('xCoord');
    var yCoordInput = document.getElementById('yCoord');

    var xCoordInput2 = document.getElementById('xCoord2');
    var yCoordInput2 = document.getElementById('yCoord2');

    var v1 = new Vector3([xCoordInput.value, yCoordInput.value, 0]);
    var v2 = new Vector3([xCoordInput2.value, yCoordInput2.value, 0]);

   
    var scalar = document.getElementById("scalarVal");

    var selectElement = document.getElementById("drawSelect");


    if (selectElement.value == "add") {
        drawVector((v1.add(scalar.value)), "red");
        drawVector((v2.add(scalar.value)), "blue");

    } else if (selectElement.value == "subtract") {
        drawVector(v1.sub(scalar.value), "red");
        drawVector(v2.sub(scalar.value), "blue");

    } else if (selectElement.value == "multiply") {
        drawVector(v1.mul(scalar.value), "red");
        drawVector(v2.mul(scalar.value), "blue");

    } else if (selectElement.value == "divide") {
        drawVector(v1.div(scalar.value), "red");
        drawVector(v2.div(scalar.value), "blue");
        
    } else if (selectElement.value == "magnitude") {
        drawVector(v1, "red");
        drawVector(v2, "blue");
        console.log("Magnitude v1: " + v1.magnitude());
        console.log("Magnitude v2: " + v2.magnitude());

    } else if (selectElement.value == "normalize") {
        drawVector(v1, "red");
        drawVector(v2, "blue");

        drawVector(v1.normalize(), "green");
        drawVector(v2.normalize(), "green");
    } else if (selectElement.value == "angle") {
        drawVector(v1, "red");
        drawVector(v2, "blue");
        console.log("Angle: " + angleBetween(v1,v2));

    } else if (selectElement.value == "cross") {
        
        drawVector(v1, "red");
        drawVector(v2, "blue");

        console.log("Area of the triangle: " + areaTriangle(v1,v2));
    }
    
}

function angleBetween(v1,v2) {
    magv1 = v1.magnitude();
    magv2 = v2.magnitude();
    var v3 = Vector3.dot(v1,v2);
    var alpha = Math.acos(v3/(magv1*magv2));
    alpha *= 180/Math.PI;
    return alpha;
}


function areaTriangle(v1,v2) {
    var a = Vector3.cross(v1,v2);
    var v1 = new Vector3([a[0], a[1], a[2]]);
    var b = v1.magnitude()/2;
   return b;
}