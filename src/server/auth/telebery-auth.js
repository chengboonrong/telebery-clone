/*
For more information about authentication adapters, visit:
- https://manual.os-js.org/v3/tutorial/auth/
- https://manual.os-js.org/v3/guide/auth/
- https://manual.os-js.org/v3/development/
*/

// create unique id for each users
const uuid = require('uuidv4');
const shell = require('shelljs');

// hash function
const bc = require('bcrypt');

module.exports = (core, config) => ({
  login: (req, res) => {
    // get all users in Ubuntu System (excluding root)
    const users = shell.exec('cat /etc/passwd | grep /bin/bash | cut -d: -f 1', {silent: true}).stdout.split('\n');
    users.splice(-1);
    
    var {username, password} = req.body;
    
    
    const _password = shell.exec('sudo cat /etc/shadow | grep demo | cut -d: -f 2', {silent: true}).stdout.replace(/\s/g, '');
    const group = shell.exec("sudo cat /etc/group | grep admin | awk 'NR==2' | cut -d: -f1", {silent: true}).stdout.split('\n')[0];
    if(users.includes(username)){
      // get user's group
      let groups = shell.exec(`groups ${username}`, {silent: true}).stdout.split(" ");
      groups = groups.slice(3)
      const group = groups[0].split("\n").join('');
      console.log('yes');
      if(bc.compareSync(password, _password)){
        console.log('Passed');
        return Promise.resolve({
          id: uuid(),
          username,
          groups: [group] // need to grep from  'groups $username'
        });
      }
    }
    return Promise.resolve(false);
  },

  logout: (req, res) => {
    return Promise.resolve(true);
  }
});
