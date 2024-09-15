document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = tab.getAttribute('data-tab');

            // Ocultar todos los contenidos
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Mostrar el contenido del tab seleccionado
            document.getElementById(targetId).classList.add('active');

            // Opcional: Resaltar la pestaña activa
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Activar la primera pestaña por defecto
    if (tabs.length > 0) {
        tabs[0].click();
    }
});
