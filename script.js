document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('crosshairCanvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorPicker');
    const sizeSlider = document.getElementById('sizeSlider');

    let crosshairColor = colorPicker.value;
    let crosshairSize = sizeSlider.value;

    function drawCrosshair() {
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        ctx.strokeStyle = crosshairColor;
        ctx.lineWidth = 2;

        // Draw the horizontal line
        ctx.beginPath();
        ctx.moveTo(width / 2 - crosshairSize / 2, height / 2);
        ctx.lineTo(width / 2 + crosshairSize / 2, height / 2);
        ctx.stroke();

        // Draw the vertical line
        ctx.beginPath();
        ctx.moveTo(width / 2, height / 2 - crosshairSize / 2);
        ctx.lineTo(width / 2, height / 2 + crosshairSize / 2);
        ctx.stroke();
    }

    colorPicker.addEventListener('input', function() {
        crosshairColor = colorPicker.value;
        drawCrosshair();
    });

    sizeSlider.addEventListener('input', function() {
        crosshairSize = sizeSlider.value;
        drawCrosshair();
    });

    canvas.width = 300;
    canvas.height = 300;
    drawCrosshair();
});
