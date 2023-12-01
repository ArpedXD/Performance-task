let body = document.getElementById('body');
let account = document.getElementById('account');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let st = document.getElementById('st');
let age = document.getElementById('ag');
let checker = document.getElementById('checker');
let main = document.getElementById('main');
let name1 = document.getElementById('name1');
let age1 = document.getElementById('age1');
let SorT = document.getElementById('SorT');
let before1 = document.getElementById('before1');
let during1 = document.getElementById('during1');
let after1 = document.getElementById('after1');
let back = document.getElementById('backk');

function wait() {
    return new Promise((resolve) => {
    setTimeout(resolve,1000)})
    };
function wait2() {
    return new Promise((resolve) => {
    setTimeout(resolve,500)})
    };

    async function onstart(){
        await wait();
        await wait();
        await wait();
        body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTq8K4DNL_53oOdFc31INbeasMsX_lyD8h3j-eyaUoRw&s')";
        await wait();
        body.style.backgroundColor = 'transparent';
        await wait();
        await wait();
        account.style.top = '50px';
        await wait();
        await wait();
        account.style.right = '600px';
    }


    onstart();

async function check(){
  let verif1 = '';
  let verif2 = '';
  let fname1 = '';
  let lname1 = '';
  let srt = '';
  let agee = '';

    if(st.value === 'Student' || st.value === 'student'){
        verif1 = 'true';
        srt = st.value;
    }else if(st.value === 'Teacher' || st.value === 'teacher'){
        verif1 = 'true';
        srt = st.value;
    }else{
        verif1 = 'false';
        srt = '';
    }

    agee = age.value;
    fname1 = fname.value;
    lname1 = lname.value;

    if(fname.value === '' || lname.value === '' || st.value === '' || age.value === ''){
        verif2 = 'false';
    } else{
        verif2 = 'true';
    }

    if(verif2 === 'false'){
        checker.innerHTML = 'One or more of them is blank.';
    }else if(verif1 === 'false'){
        checker.innerHTML = 'Student Or Teacher Only.';
    } else{
        checker.innerHTML = 'Great!';
    }

    if(verif1 === 'true' && verif2 === 'true'){
        await wait();
        checker.innerHTML = 'wait.';
        await wait();
        checker.innerHTML += '.';
        await wait();
        checker.innerHTML += '.';
        await wait();
        checker.innerHTML = '';
        await wait();
        account.style.top = '-600px';
        name1.innerHTML = "Name:" + fname1 + ' ' + lname1; 
        age1.innerHTML = "Age:" + agee;
        SorT.innerHTML = srt;
        await wait();
        main.style.right = '230px';
    }

    if(st.value === 'teacher' || st.value === 'Teacher'){
        SorT.style.webkitTextStroke = '1px red';
    }
}

async function beforee(){
    before1.style.top = '80px';
    back.style.top = '10px';
}

function duringg(){
    during1.style.top = '80px';
    back.style.top = '10px';
}

function afterr(){
    after1.style.top = '80px';
    back.style.top = '10px';
}

function back1(){
    before1.style.top = '-1000px';
    during1.style.top = '-1000px';
    after1.style.top = '-1000px';
    back.style.top = '-1000px';
        }
