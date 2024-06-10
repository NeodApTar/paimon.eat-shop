/*================ MODAL =======================*/
let previewContainer = document.querySelector('.stock__modal');
let previewBox = previewContainer.querySelectorAll('.stock__preview');

document.querySelectorAll('.swiper-wrapper .stock__item').forEach(stock__item => {
    stock__item.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = stock__item.getAttribute('data-name');
        previewBox.forEach(stock__preview => {
            let target = stock__preview.getAttribute('data-target');
            if (name == target) {
                stock__preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});