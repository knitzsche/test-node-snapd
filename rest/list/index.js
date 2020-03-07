'use strict' 

const Snapd = require('node-snapd')

async function list(){

  let snapd = new Snapd()

  const snapList = await snapd.listSnaps()

  console.log(snapList)
}

list().then().catch(err=>{
  console.log('list() error', err)
})

