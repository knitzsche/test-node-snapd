'use strict' 

const Snapd = require('node-snapd')

async function start(){
  let snapd = new Snapd()

  var serviceNames = [ "test-controlled-daemons.controlled-1" ]

  var data = {
    names: serviceNames,
    action: "start",
  };

  const response = await snapd.postApps(data)
  console.log(response)
}

start().then().catch(err=>{
  console.log('start() error', err)
})


