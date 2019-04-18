 
// Methods OS.js server requires
const bc = require('bcrypt'); 
const shell = require('shelljs');

function createUser(username, password, group){
  var hash = bc.hashSync(password, 10);
  // change based on the folder location
  const home = shell.exec('pwd | cut -d/ -f-6', {silent: true}).stdout.split('\n')[0];
  shell.exec(`sudo useradd -m -d ${home}/vfs/${username} -s /bin/bash -p ${hash} ${username}`);
  shell.exec(`sudo usermod -G ${group} ${username}`);
  console.log("User created: " + username)
}


module.exports = (core, proc) => ({
  
  // When server initializes
  init: async () => {
    // const endpoint = proc.resource('/socket');
    // HTTP Route example (see index.js)
    // core.app.post(proc.resource('/test'), (req, res) => {
    //   res.json({hello: 'World'});
    // });

    // WebSocket Route example (see index.js)
    // core.app.ws(endpoint, (ws, req) => {
    //   ws.on('message', msg => console.log(msg));
    //   ws.on('open', msg => console.log(msg));
    // });
  },

  // When server starts
  start: () => {
  },

  // When server goes down
  destroy: () => {},

  // When using an internally bound websocket, messages comes here
  onmessage: (ws, respond, args) => {
    console.log(args[1]);
    createUser(args[1][0], args[1][1], args[1][2]);
  }
});
