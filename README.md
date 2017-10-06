This is a simple test implementation of AES in 128-bit CBC mode, using the Crypto library included in Node.js.

No external packages are required. The IV, key, and ciphertext will all be output in HEX. 

Sample usage:
`node aes.js`

Sample output:
```
plaintext:
All my secrets are written in invisible ink
iv:fb ae fa 39 df d3 23 1b 3b 81 7d 74 49 72 b7 80
key:64 fb eb ea 7f 23 f6 de 90 1f fe 98 ea 92 19 ec
ciphertext:
fd 6e a5 f0 02 11 0e 82 9b 7d 62 d8 d5 61 e1 67 a4 63 90 82 1b 01 d5 69 99 48 73 8e 51 a6 44 6a
```

Iv and Key are randomized each attempt.
Feel free to replace the plaintext.txt with any information (min 16-bytes). 
