document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const desc = document.getElementById('fruitDescription');
    const galleryImages = document.querySelectorAll('.gallery img');
    const closeButton = document.getElementById('closeButton');
    const zoomInButton = document.getElementById('zoomInButton');
    const zoomOutButton = document.getElementById('zoomOutButton');
    let zoomLevel = 1;

    function showModal(event) {
        const image = event.target;
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        desc.textContent = image.dataset.description;
        modal.style.display = 'flex';
        zoomLevel = 1;
        modalImage.style.transform = `scale(${zoomLevel})`;
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function zoomIn() {
        zoomLevel += 0.2;
        modalImage.style.transform = `scale(${zoomLevel})`;
    }

    function zoomOut() {
        zoomLevel = Math.max(0.5, zoomLevel - 0.2);
        modalImage.style.transform = `scale(${zoomLevel})`;
    }

    galleryImages.forEach(image => {
        image.addEventListener('click', showModal);
    });

    closeButton.addEventListener('click', closeModal);
    zoomInButton.addEventListener('click', zoomIn);
    zoomOutButton.addEventListener('click', zoomOut);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});