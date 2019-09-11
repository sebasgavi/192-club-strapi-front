window.addEventListener('load', function() {

    var server = 'http://192.168.115.13:1337';
    var promise = fetch(server + '/products');

    document.body.classList.add('loading');
    promise
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            
            var productsList = document.querySelector('.products-list');
            document.body.classList.remove('loading');
            
            var template = document.querySelector('#product-item');

            response.forEach(function(elem){
                var product = document.importNode(template.content, true);
                product.querySelector('img').setAttribute('src', server + elem.images[0].url);
                product.querySelector('.card-title').innerText = elem.name;

                product.querySelector('.card-text').innerText = elem.price;
                productsList.append(product);
            });

        });

    var searchBtn = document.querySelector('.btn');
    var searchInput = document.querySelector('input');
    function showSkeleton (){
        document.body.classList.add('loading');

        setTimeout(function(){
            document.body.classList.remove('loading');
        }, 1000);
    }
    searchBtn.addEventListener('click', showSkeleton);
    searchInput.addEventListener('input', showSkeleton);
});