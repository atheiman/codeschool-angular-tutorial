(function() {

    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Many sides, many possibilities.',
            canPurchase: true,
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'Beautiful, five-sided gem.',
            canPurchase: false,
        },
        {
            name: 'Azurite',
            price: 2.95,
            canPurchase: true,
            soldOut: true,
        },
        {
            name: 'Bloodstone',
            price: 4.95,
            canPurchase: false,
        },
        {
            name: 'Zircon',
            price: 3.95,
            canPurchase: true,
        },
    ];

})();
