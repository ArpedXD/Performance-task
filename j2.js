let body = document.getElementById('body');
let account = document.getElementById('account');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let st = document.getElementById('st');
let age = document.getElementById('ag');
let checker = document.getElementById('checker');

function wait() {
    return new Promise((resolve) => {
    setTimeout(resolve,1000)})
    };

    async function onstart(){
        await wait();
        await wait();
        await wait();
        await wait();
        body.style.backgroundColor = 'transparent';
        body.style.backgroundImage = "url('Bg.jpg')";
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

    if(st.value === 'Student' || st.value === 'student'){
        verif1 = 'true'
    }else if(st.value === 'Teacher' || st.value === 'teacher'){
        verif1 = 'true'
    }else{
        verif1 = 'false';
    }

    if(fname.value === '' || lname.value === '' || st.value === '' || age.value === ''){
        verif2 = 'false';
    } else{
        verif2 = 'true';
    }

    if(verif2 === 'false'){
        checker.innerHTML = 'One of them is blank.';
    } else if(verif1 === 'false'){
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
    }
}

