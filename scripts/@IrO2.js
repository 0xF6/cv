window.addEventListener("load", function() {    
    var colorArray = [
        "#3F0B1B",
        "#7A1631",
        "#CF423C",
        "#FC7D49",
        "#FFD462",
    ];     
    window.addEventListener("resize", function() {       
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
        
        init();
    });
    function Circle(x, y, vx, vy, radius) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        this.radius = radius;
        this.minRadius = radius;
        this.maxRadius = 50;
        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
        }

        this.update = function() {
            if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
                this.vx = -this.vx;
            }
            if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
                this.vy = -this.vy;
            }
            this.x += this.vx;
            this.y += this.vy;
            this.draw();
        }
    }
    
    var circleArray = [];
    
    function init() {
        circleArray = [];
        
        for (var i = 0; i < 800; i += 1) {
            var radius = Math.random() * 3 + 1;
            var x = Math.random() * (window.innerWidth - radius * 2) + radius;
            var y = Math.random() * (window.innerHeight - radius * 2) + radius;
            var vx = (Math.random() - 0.5) * 2;
            var vy = (Math.random() - 0.5) * 2;

            circleArray.push(new Circle(x, y, vx, vy, radius));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);

        // Call circle functions
        for (var i = 0; i < circleArray.length; i += 1) {
            circleArray[i].update();
        }
    }
    var canvas = document.getElementById("animation");
    var c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();
    init();
});
