const array = new Uint8Array(1);
for (let i=0; i<5; ++i) {
 console.log(crypto.getRandomValues(array));
}
const text = 'Hash using sha256';

async function digestMessage(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return hash;
}

digestMessage(text)
  .then((digestBuffer) => console.log(digestBuffer.byteLength));
  const hashArray = Array.from(new Uint8Array(hash));                     
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); 
    return hashHex;
    (async function() {
        const params = {
        name: 'AES-CTR',
        length: 128
        };
        const keyUsages = ['encrypt', 'decrypt'];
        const key = await crypto.subtle.generateKey(params, false, keyUsages);
        console.log(key);
       })();


       (async function() {
        const params = {
        name: 'AES-CTR',
        length: 128
        };
        const keyUsages = ['encrypt', 'decrypt'];
        const key = await crypto.subtle.generateKey(params, false, keyUsages);
        console.log(key);
       })();
       const originalPlaintext =(new TextEncoder()).encode('Lykova');
       const encryptDecrytParams={name:"AES-GCM",iv:crypto.getRandomValues(new Uint8Array(16))};
       const ciphertext =await crypto.subtle.encrypt(encryptDecrytParams,key,originalPlaintext);
       console.log(criphertext);
       //ArrayBuffer(32){}
       const descryptedPlaintext=await crypto.subtle.decrypt(encryptDecrytParams,key,ciphertext);
       console.log((new TextDecoder()).decode(descryptedPlaintext));
              
       const text ='Lykova';
       async function digestMessage(message) {
        const keyParams = {
        name: 'ECDSA',
        namedCurve: 'P-256'
        };
        const keyUsages = ['sign', 'verify'];
        const {publicKey, privateKey} = await crypto.subtle.generateKey(keyParams, 
        true, keyUsages);
        const message = (new TextEncoder()).encode('Mes to sign');
        const signParams = {
        name: 'ECDSA',
        hash: 'SHA-256'
        };
        const signature = await crypto.subtle.sign(signParams, privateKey, message);
        const verified = await crypto.subtle.verify(signParams, publicKey, signature,
            message);
            console.log(verified); // true
           })();
           (async function() {
            const keyFormat = 'raw';
            const extractable = true;
            const wrappingKeyAlgoIdentifier = 'AES-KW';
            const wrappingKeyUsages = ['wrapKey', 'unwrapKey'];
            const wrappingKeyParams = {
            name: wrappingKeyAlgoIdentifier,
            length: 256};
            const keyAlgoIdentifier = 'AES-GCM';
            const keyUsages = ['encrypt'];
            const keyParams = {
            name: keyAlgoIdentifier,
            length: 256};
            const wrappingKey = await crypto.subtle.generateKey(wrappingKeyParams, 
            extractable, wrappingKeyUsages);
            console.log(wrappingKey);
           const key = await crypto.subtle.generateKey(keyParams, extractable, keyUsages);
            console.log(key);
           const wrappedKey = await crypto.subtle.wrapKey(keyFormat, key, wrappingKey,
            wrappingKeyAlgoIdentifier);
            console.log(wrappedKey);
           const unwrappedKey = await crypto.subtle.unwrapKey(keyFormat, wrappedKey,
            wrappingKey, wrappingKeyParams, keyParams, extractable, keyUsages);
            console.log(unwrappedKey);
           })()
                      