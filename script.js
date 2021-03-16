window.addEventListener("load", (e) => {
    
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let painting = false;

    function paintOn(){
        painting = true;
        draw(e);
    }

    function paintOff(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.strokeStyle = "white"
        

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener('mousedown', paintOn);
    canvas.addEventListener('mouseup', paintOff);
    canvas.addEventListener('mousemove', draw);
            
});