# telebery
The source code of the telebery platform

# Requirements
- node version => 11

# Manual (delete the dist/ folder if it exists)
1. npm run package:discover (to discover all the installed apps which located at node_modules and src/packages)
2. npm run build (built files are located at dist folder)
3. npm run serve (go to localhost:8000)


# Features
- [x] xterm 
- [x] Control Panel
- [x] VS code [https://github.com/codercom/code-server]

# TODO/FIX
- [x] Link Ubuntu user's group with osjs user's group
- [x] Read users and groups from Ubuntu everytime when the page is reloaded
- [ ] Change permissions of apps and files and directories for each user using the modified file manager
- [x] Make sure client users are able to execute sudo commands without password (needed to run docker CLI commands)
- [ ] not to edit the files inside node modules (eg. @osjs)
- [x] create user home folder in vfs/<_username_>