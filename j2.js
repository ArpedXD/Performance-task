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
        await wait();
        body.style.backgroundColor = 'transparent';
        body.style.backgroundImage = "url('data:image/jpeg;base64,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')";
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
