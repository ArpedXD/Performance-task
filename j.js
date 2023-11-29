let maxx = document.getElementById('run');
let ua = 0;
let body = document.getElementById('body');
let code = document.getElementById('Code');
let welcome = document.getElementById('welcome');
let start = document.getElementById('start');
let restart = document.getElementById('restart');

function wait() {
    return new Promise((resolve) => {
    setTimeout(resolve,1000)})
    };
    function wait2() {
        return new Promise((resolve) => {
        setTimeout(resolve,500)})
        };


async function run(){
    maxx.innerHTML = 'Wait.';
    await wait();
    maxx.innerHTML = 'Wait..';
    await wait();
    maxx.innerHTML = 'Wait...';
    await wait();
    maxx.innerHTML = 'Complete!';
    await wait();
    maxx.style.top = '-200px';
    await wait();
    maxx.innerHTML = 'Max';
    await wait2();
    code.innerHTML = 'Ru';
    await wait2();
    code.innerHTML += 'nni';
    await wait2();
    code.innerHTML += 'ng';
    await wait2();
    code.innerHTML += '.';
    await wait2();
    code.innerHTML += '.';
    await wait2();
    code.innerHTML += '.';
    await wait2();
    await wait2();
    await wait2();
    code.innerHTML = '';
    await wait();
    welcome.style.opacity = '1';
    await wait2()
    welcome.style.top = '200px';
    await wait();
    start.style.opacity = '1';
    restart.style.opacity = '1';
    await wait2();
    start.style.top = '220px';
    start.style.cursor = 'pointer';
    restart.style.top = '230px';
    restart.style.cursor = 'pointer';
}

async function start2(){
    start.style.transition = '3s';
    start.style.fontSize = '50px';
    await wait2();
    start.style.fontSize = '40px';
    await wait();
    await wait();
    welcome.style.opacity = '0';
    start.style.transition = '2s';
    start.style.opacity = '0';
    restart.style.opacity = '0';
    await wait();
    await wait();
    location.href = 'h.html';
}
