self.addEventListener('message', function(e) {
    var data = e.data;
    var type = data.type
    var body = data.body;

    if (type === undefined) {
        return;
    }

    if (type === 'func') {
        body();
    } else {
        console.log(body);
    }

    var array = new Uint32Array(10);
    console.log(array);
    crypto.getRandomValues(array);
    console.log(array);
}, false);

