document.addEventListener('DOMContentLoaded', () => {
    // Año automático
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Destellos dorados
    const sparkleAreas = [
        document.querySelector('header'),
        document.querySelector('#productos')
    ];

    const createSparkle = () => {
        const area = sparkleAreas[Math.floor(Math.random() * sparkleAreas.length)];
        if (!area) return;

        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        const rect = area.getBoundingClientRect();
        sparkle.style.left = rect.left + Math.random() * rect.width + 'px';
        sparkle.style.top = rect.top + Math.random() * rect.height + 'px';

        const size = Math.random() * 6 + 4; // tamaño aleatorio entre 4px y 10px
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';

        document.body.appendChild(sparkle);

        // Eliminar después de la animación
        setTimeout(() => sparkle.remove(), 3000);
    };

    setInterval(createSparkle, 400);
});
