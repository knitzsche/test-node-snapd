'use strict' 

const Snapd = require('node-snapd')

async function putConf(){
  let snapd = new Snapd()

  var set_keys = { 
    systemid: "this-is-the-system-id"
  };

  var data = {
    name: "test-node-snapd",
    keys: set_keys
  };

  const response = await snapd.putConf(data)
  console.log(response)
}

async function start(){
  let snapd = new Snapd()

  var serviceNames = [ "test-node-snapd.s1" ]

  var data = {
    names: serviceNames,
    action: "start"
  };

  const response = await snapd.postApps(data)
  console.log(response)
}

putConf().then().catch(err=>{
  console.log('putConf() error', err)
})

start().then().catch(err=>{
  console.log('start() error', err)
})


