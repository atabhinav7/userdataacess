// single elemnt selector

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// multiple element selector
// console.log(document.querySelectorAll('.items'))
// console.log(document.getElementsByTagName('li'));

//  const ul = document.querySelector('.items');

// // ul.lastElementChild.remove();
// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector(' .btn');
// btn.style.background = ' red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('Click' , (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector(' .items').lastElementChild.innerHTML = '<h1> Hello </h1>';
// });

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const userList = document.querySelector('#users');
// // localStorage.setItem('name','name')
//localStorage.setItem('email','email')


 //myForm.addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();
    const name = event.target.name.value;
  const email = event.target.email.value;
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  
   
      //  const li = document.createElement('li');
      //  li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
      // userList.appendChild(li);

      

      // nameInput.value = '';
      // emailInput.value = '';
    }
