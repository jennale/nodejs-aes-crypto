const fs = require('fs');
const crypto = require('crypto');
var plaintext, iv, key, cipher, ciphertext;

fs.readFile('./plaintext.txt', 'utf8', (err, content) => {
  if (err) {
    console.log('error! check if plaintext.txt exists');
    process.exit(1);
  }

  plaintext = content;

  iv = crypto.randomBytes(16);
  key = crypto.randomBytes(16);
  cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  ciphertext = cipher.update(plaintext, 'utf8', 'hex');

  console.log(`plaintext: \n${plaintext}`);
  console.log('iv:' + printHex(iv));
  console.log('key:' + printHex(key));
  console.log('ciphertext:\n' + printHex(ciphertext));
});

/**
 * Print hex values as a space separated list.
 */
printHex = hexMsg => {
  let text = '';
  let msg = hexMsg.toString('hex');
  for (var i = 0; i < msg.length; i++) {
    text += i % 2 ? msg.charAt(i) + ' ' : msg.charAt(i);
  }
  return text;
};
