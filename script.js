document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('crosshairCanvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorPicker');
    const sizeSlider = document.getElementById('sizeSlider');
    const typeSelector = document.getElementById('typeSelector');
    const exportButton = document.getElementById('exportButton');

    let crosshairColor = colorPicker.value;
    let crosshairSize = sizeSlider.value;
    let crosshairType = typeSelector.value;

    function drawCrosshair() {
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        ctx.strokeStyle = crosshairColor;
        ctx.lineWidth = 2;

        switch (crosshairType) {
            case 'cross':
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
                break;
            case 'circle':
                ctx.beginPath();
                ctx.arc(width / 2, height / 2, crosshairSize / 2, 0, 2 * Math.PI);
                ctx.stroke();
                break;
            case 'dot':
                ctx.beginPath();
                ctx.arc(width / 2, height / 2, crosshairSize / 4, 0, 2 * Math.PI);
                ctx.fillStyle = crosshairColor;
                ctx.fill();
                break;
        }
    }

    colorPicker.addEventListener('input', function() {
        crosshairColor = colorPicker.value;
        drawCrosshair();
    });

    sizeSlider.addEventListener('input', function() {
        crosshairSize = sizeSlider.value;
        drawCrosshair();
    });

    typeSelector.addEventListener('change', function() {
        crosshairType = typeSelector.value;
        drawCrosshair();
    });

    exportButton.addEventListener('click', function() {
        const dataURL = canvas.toDataURL();
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'crosshair.png';
        link.click();
    });

    canvas.width = 300;
    canvas.height = 300;
    drawCrosshair();
});
