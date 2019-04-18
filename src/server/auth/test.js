const shell = require('shelljs');
const c = require('bcrypt');

var username = "demo";
var password = "123";

function createUser(username, password){
	var hash = c.hashSync(password, 10);
	console.log(hash);
	// check group if it is already existed
	const a = shell.exec("sudo cat /etc/group | grep admin | awk 'NR==2' | cut -d: -f1", {silent: true}).stdout.split('\n')[0]
	if (a != "admin") {
		shell.exec('sudo groupadd admin')
	}
	// change this
	shell.exec('sudo useradd -m -d /home/chris/beaco/proc/telebery/vfs/' + username + ' -s /bin/bash ' + '-p ' + `'${hash}'` + ' ' + username);
	shell.exec('sudo usermod -G admin ' + username);
	console.log("User created: " + username)
}

// createUser(username, password)
var _password = '$2b$10$.8Oho3N/DMd9jxW9jdzUu.RM3.ePcPx2xmZVvljVz8CVCjMOMMEgC'
if (c.compareSync(password, _password)) {
	console.log('passed');
}else{
	console.log('false');
}
// shell.exec('pwd | cut -d/ -f2-6').stdout
//let groups = shell.exec(`groups ${username}`, {silent: true}).stdout.split(" ");
//groups = groups.slice(3)
//onst group = groups[0].split("\n").join('');
// console.log(group);

// sudo useradd -m -d /home/' + username + ' -s /bin/bash ' + '-p ' + `'${hash}'` + ' ' + username
