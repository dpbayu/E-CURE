document.addEventListener('alpine:init', () => {
    Alpine.data('custom_select', () => ({
        products: ['A', 'AB', 'B', 'O'],
        show: false,
        value: null
    }));
})