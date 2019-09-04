window.addEventListener('load', function() {

    var server = 'http://192.168.115.15:1337';
    var promise = fetch(server + '/products');

    promise
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            
            var productsList = document.querySelector('.products-list');
            
            var template = document.querySelector('#product-item');

            response.forEach(function(elem){
                var product = document.importNode(template.content, true);
                product.querySelector('img').setAttribute('src', server + elem.images[0].url);
                product.querySelector('.card-title').innerText = elem.name;
                productsList.append(product);
            });

        });

});