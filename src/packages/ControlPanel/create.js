const bc = require('bcrypt');

function createUser(username, password){
	var hash = bc.hashSync(password, bc.saltRounds);
	console.log(hash);
	shell.exec('sudo useradd -m -d /home/' + username + ' -s /bin/bash ' + '-p ' + `'${hash}'` + ' ' + username);
	shell.exec('sudo usermod -aG admin ' + username);
	console.log("User created: " + username)
}

module.exports = {
	createUser
}