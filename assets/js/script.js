
var submitForm = document.getElementById('login_form');
submitForm.addEventListener('submit', checkLogin);


const initialUsers = [
  { email: '', password: '' },
  { email: 'joeblocks@skippers.net.au', password: 'skippers123' },
  { email: 'jimbob@skippers.net.au', password: '123skippers' },
  
];
if (!localStorage.getItem('users')) {
  storeUsersToLocalStorage(initialUsers);
}


function storeUsersToLocalStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  function getUsersFromLocalStorage() {
    const usersString = localStorage.getItem('users');
    return JSON.parse(usersString) || [];
  }
  
  function checkLogin(event) {
    event.preventDefault();
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var messageElement = document.getElementById('message');
    var enteredEmail = emailInput.value;
    var enteredPassword = passwordInput.value;
    
    var usersFromLocalStorage = getUsersFromLocalStorage();
    
    const user = usersFromLocalStorage.find(u => u.email === enteredEmail && u.password === enteredPassword);
    console.log(user);
    if (user) {
      window.location.replace('homepage.html');
    } else {
     messageElement.textContent = 'Invalid email or password. Please try again.';
    }
    
    emailInput.value = '';
    passwordInput.value = '';
  }

