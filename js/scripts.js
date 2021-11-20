$(document).ready(() => {
    /**
     * FANCYBOX
     */
    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
    });

    $('.form-input--tel').mask('+7 (999) 999-99-99');
});
