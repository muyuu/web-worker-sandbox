function onLoad() {
    const worker = new Worker('./worker.js');

    const btn1 = document.getElementById('post_string');
    const btn2 = document.getElementById('post_object');
    const btn3 = document.getElementById('post_func');

    btn1.addEventListener('click', ()=>{
        worker.postMessage({
            type: 'string',
            body: 'send message string',
        });
    });

    btn2.addEventListener('click', ()=>{
        const obj = {
            a: 1,
            b: 'string',
        };

        worker.postMessage({
            type: 'ojb',
            body: obj,
        });
    });

    btn3.addEventListener('click', ()=>{
        const func = () => {
            console.log('run func ');
        };

        worker.postMessage({
            type: 'func',
            body: func,
        });
    });
}

window.addEventListener('load', onLoad);
