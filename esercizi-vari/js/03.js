// Chiedere nome utente
var user, listUsers, checkUser;
user = prompt("What's Username ?");
console.log('User name: ' + user);

// Creare un array con associati ad ogni utente il suo privilegio

adminUsers = ['Marta', 'Francesco', 'Elena'];

// Verifica se l'utente è un amministratore

var result = adminUsers.includes(user); // Controlla se un determinato elemento è incluso nell'array.

if(result) {
	document.querySelector('.message').textContent = user + ' you\'re an administrator';
} else {
	document.querySelector('.message').textContent = user + ' you don\'t have the permissions';
}