
document.addEventListener('DOMContentLoaded', () => {
    const aboutContainer = document.querySelector('.about-container');
    const aboutImages = document.querySelector('.aboutImages');
    const biodata = document.getElementById('biodata');

    // Add a click event to the image
    aboutImages.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the event from bubbling up
        aboutImages.classList.add('active');
        biodata.classList.add('show');
        aboutContainer.classList.add('clicked');
    });

    // Add a click event to the document to reset everything
    document.addEventListener('click', () => {
        aboutImages.classList.remove('active');
        biodata.classList.remove('show');
        aboutContainer.classList.remove('clicked');
    });

    // Prevent click inside biodata from closing the view
    biodata.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
