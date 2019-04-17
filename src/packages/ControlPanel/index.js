import osjs from 'osjs';
import {name as applicationName} from './metadata.json';
import {h, app} from 'hyperapp';
import {Box, BoxContainer, Button, TextField} from '@osjs/gui';

const createView = (state, actions) => h(Box, {}, [
  h(BoxContainer, {} , String(state.username)),
  h(TextField, {onchange: (ev, value) => actions.submitName(value)}, String(state.user_name)),
  h(BoxContainer, {} , String(state.password)),
  h(TextField, {onchange: (ev, value) => actions.submitPass(value)}, String(state.user_pass)),
  h(BoxContainer, {} , String(state.group)),
  h(TextField, {onchange: (ev, value) => actions.submitGroup(value)}, String(state.user_group)),
  h(Button, {onclick: () => actions.submitAll(), label: 'Apply'}),
  h(Button, {onclick: () => actions.show(), label: 'Show'})
]);

let settings;
let submit = false;
const applySubmit = async(proc, settings) => {
  if (settings[0] == undefined || settings[0] == []) { console.log("Please type in your username")}
  if (settings[1] == undefined || settings[0] == []) { console.log("Please type in your password")}
  if (settings[2] == undefined || settings[0] == []) { console.log("Please type in your group")}
  else{
    submit = true;
    await proc.send(submit, settings);
  }
  console.log(submit);
}

const createApp = (proc, win, $content) => {
  app({
    username: "Input your username",
    password: "Input your password",
    group: "Input your group"
  },
  {
    submitName: input => () => ({user_name: input}),
    submitPass: input => () => ({user_pass: input}),
    submitGroup: input => () => ({user_group: input}),
    submitAll: () => state => { settings = [state.user_name,state.user_pass,state.user_group], applySubmit(proc, settings)},
    show: () => () => console.log(settings)
  },  createView, $content);
};

// Our launcher
const register = (core, args, options, metadata) => {
  // Create a new Application instance
  const proc = core.make('osjs/application', {args, options, metadata});

  // Create  a new Window instance
  proc.createWindow({
    id: 'ControlPanelWindow',
    title: metadata.title.en_EN,
    dimension: {width: 400, height: 400},
    position: {left: 700, top: 200}
  })
    .on('destroy', () => proc.destroy())
    .render(($content,win) => createApp(proc, win, $content));

  // Creates a new WebSocket connection (see server.js)
  // const sock = proc.socket('/socket');
  // sock.on('message', ev => console.log('got data',ev.data));
  // sock.send(submit);
  // sock.on('open', () => sock.send('Ping'));

  // Use the internally core bound websocket
  // proc.on('ws:message', args => console.log(args));
  // if(submit){
  //   proc.send('submit');
  // }else{
  //   proc.send('not submit');
  // }

  // Creates a HTTP call (see server.js)
  //proc.request('/test', {method: 'post'})
  //.then(response => console.log(response));

  return proc;
};

// Creates the internal callback function when OS.js launches an application
osjs.register(applicationName, register);
