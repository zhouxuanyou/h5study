let events = require('events').EventEmitter;

let e = new events();
e.on('jiant',()=>{
    console.log('hh')
});

e.emit('jiant');