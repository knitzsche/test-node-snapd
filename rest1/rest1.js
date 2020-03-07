'use strict' 

const Snapd = require('node-snapd')

let snapd = new Snapd()

async function main(){

  const snapList = await snapd.listSnaps()

  console.log(snapList)

}

main().then().catch(err=>{
  console.log('main error', err)
})

