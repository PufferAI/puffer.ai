(function () {
    var script = document.currentScript;
    var base = script && script.src ? script.src.replace(/header\.js(?:\?.*)?$/, '') : '';
    function addIcon(rel, href, type, sizes) {
        var l = document.createElement('link');
        l.rel = rel;
        l.href = href;
        if (type) l.type = type;
        if (sizes) l.setAttribute('sizes', sizes);
        document.head.appendChild(l);
    }
    addIcon('icon', base + 'favicon.ico');
    addIcon('icon', base + 'favicon.png', 'image/png', '32x32');
    addIcon('apple-touch-icon', base + 'apple-touch-icon.png');
    fetch(base + 'header.html')
        .then(function (response) { return response.text(); })
        .then(function (html) {
            html = html.replace(/(href|src)="(?!https?:|\/\/|#|mailto:|\/)([^"]+)"/g,
                function (_, attr, v) { return attr + '="' + base + v + '"'; });
            document.body.insertAdjacentHTML('afterbegin', html);
        });
})();
