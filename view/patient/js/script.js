document.addEventListener('alpine:init', () => {
    Alpine.data('custom_select', () => ({
        products: ['A', 'AB', 'B', 'O'],
        show: false,
        value: null
    }));
})

document.addEventListener('alpine:init', () => {
    Alpine.data('custom_jnskelamin', () => ({
        products: ['LAKI-LAKI', 'PEREMPUAN'],
        show: false,
        value: null
    }));
})