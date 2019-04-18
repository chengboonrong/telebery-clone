#Manual
1. npm install
2. npm update
3. change the directory according to the server
``` 
shell.exec('sudo useradd -m -d /home/chris/beaco/proc/telebery/vfs/' + username + ' -s /bin/bash ' + '-p ' + `'${hash}'` + ' ' + username);
```
4. change xterm server setting
```
args = [...args, '-c', `sudo su - ${username}`];
```
5. create a admin user on telebery called 'demo'
```
$ cd ./src/server/auth; node test.js
```
6. download deepo image (docker run -it --ipc=host --network=host --name=dlenv1 ufoym/deepo bash)
7. download code-server image (docker run -it -p 127.0.0.1:8443:8443 -v "${PWD}:/home/coder/project" --name=vscode codercom/code-server --allow-http --no-auth)

#Features
1. xterm terminal
2. VS code cloud version
3. Deepo: Deep Learning Environment
4. Control Panel: to create new user