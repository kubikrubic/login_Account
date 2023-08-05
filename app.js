var passwordInput = document.getElementById('passwordInput');

passwordInput.addEventListener('click', () => {
	if (passwordInput.type === 'password') {
   passwordInput.type = 'text';
   } else {
   passwordInput.type = 'password';
   }
});
