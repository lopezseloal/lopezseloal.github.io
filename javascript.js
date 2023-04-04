window.addEventListener('load', function () //Espera a que cargue toda la página
{
    setTimeout(cargaLenta, 100); //Delay de 0.1s

});

function cargaLenta() {
    var card_images = document.querySelectorAll('.card-image');

    card_images.forEach(function (card_image) // Bucle para recorrer todas las imágenes
    {
        var image_url = card_image.getAttribute('data-image-full');
        var content_image = card_image.querySelector('img');
        content_image.src = image_url; // Cambia el src para cargar la imagen con buena resolución


        content_image.addEventListener('load', function () // Evento de carga de imagen cuando la imagen carga por completo
        {

            card_image.style.backgroundImage = 'url(' + image_url + ')'; // Cambia el fondo de la imagen por la nueva

            card_image.className = card_image.className + ' is-loaded'; // Añade clase para quitar el filtro de la imagen de forma transitoria
        });

    });

}
