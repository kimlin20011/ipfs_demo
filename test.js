import ipfsAPI from 'ipfs-api'
const ipfs = ipfsAPI('localhost', '5001', { protocol: 'http' })
const buffer = Buffer.from('this is a demo')
ipfs.add(buffer)
    .then(rsp => console.log(rsp[0].hash))
    .catch(err => console.error(err))