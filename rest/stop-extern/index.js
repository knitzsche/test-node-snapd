'use strict' 

const Snapd = require('node-snapd')

async function stop(){
  let snapd = new Snapd()

  var serviceNames = [ "test-controlled-daemons.controlled-1" ]

  var data = {
    names: serviceNames,
    action: "stop",
  };

  const response = await snapd.postApps(data)
  console.log(response)
}

stop().then().catch(err=>{
  console.log('stop() error', err)
})


