document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const details = document.createElement('div');
            details.className = 'details';
            details.textContent = 'Additional details about the photo';
            item.appendChild(details);
        });

        item.addEventListener('mouseout', () => {
            const details = item.querySelector('.details');
            if (details) {
                details.remove();
            }
        });
    });
});