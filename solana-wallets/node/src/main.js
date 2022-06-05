const web3 = require("@solana/web3.js");

function readKeypairFromJSON() {
  const fs = require('fs');
  const os = require('os');
  const jsonKey = fs.readFileSync(os.homedir() + '/.config/solana/id.json', 'utf8');
  const secretKeyBytes = JSON.parse(jsonKey);
  const secretKey = Uint8Array.from(secretKeyBytes);
  return web3.Keypair.fromSecretKey(secretKey);
}

let keypair = readKeypairFromJSON();
console.log("account:", keypair.publicKey.toBase58());
