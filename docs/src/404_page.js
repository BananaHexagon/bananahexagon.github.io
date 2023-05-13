const canvas = document.getElementById("canvas");
const ctx = this.canvas.getContext("2d");

const stamp = function (c, dx, dy, dd = 0, size = 100, wh = 1,) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save();
    ctx.translate(dx, dy);
    ctx.rotate(dd * Math.PI / 180);
    ctx.drawImage(c, -costume.width * size * wh / 200, -costume.height * size / 200, costume.width * size * wh / 100, costume.height * size / 100);
    ctx.restore();
}

window.onload = async () => {
    const costume = (() => {
        let image = new Image();
        image.src = "/assets/hugging_yuma.png";
        return image;
    })();

    costume.onload = () => {
        let timer = 0;
        const rad = Math.PI / 180

        const update = () => {
            timer++;

            stamp(costume, Math.sin(timer * rad) * 45, 0, Math.sin(timer * rad) * 45, 400, Math.sin(timer * rad) * 1 + 1.25)
            window.requestAnimationFrame(update);
        }

        window.requestAnimationFrame(update);
    }

}