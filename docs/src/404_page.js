const canvas = document.getElementById("canvas");
const ctx = this.canvas.getContext("2d");
canvas.width = 640;
canvas.height = 480
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

const stamp = function (c, dx, dy, dd = 0, size = 100, wh = 1,) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save();
    ctx.translate(dx + canvas.width / 2, dy + canvas.height / 2);
    ctx.rotate(dd * Math.PI / 180);
    ctx.drawImage(c, -c.width * size * wh / 200, -c.height * size / 200, c.width * size * wh / 100, c.height * size / 100);
    ctx.restore();
}

window.onload = async () => {
    let costume = new Image();
    costume.src = "/assets/hugging_yuma.png";
    costume.onload = () => {
        console.log("AAA")
        let timer = 0;
        const rad = Math.PI / 180

        const update = () => {
            timer++;

            stamp(costume, Math.sin(timer * rad) * 180, 0, Math.sin(timer * 2 * rad) * 45, 400, Math.sin(timer * 8 * rad) * 0.5 + 0.75)
            window.requestAnimationFrame(update);
        }

        window.requestAnimationFrame(update);
    }

}