(function () {
    var script = document.currentScript;
    var base = script && script.src ? script.src.replace(/header\.js(?:\?.*)?$/, '') : '';
    fetch(base + 'header.html')
        .then(function (response) { return response.text(); })
        .then(function (html) {
            html = html.replace(/(href|src)="(?!https?:|\/\/|#|mailto:|\/)([^"]+)"/g,
                function (_, attr, v) { return attr + '="' + base + v + '"'; });
            document.body.insertAdjacentHTML('afterbegin', html);
        });
})();
