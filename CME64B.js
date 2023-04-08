document.body.appendChild(document.createElement('script')).src='https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js';

var key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');
var iv = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');

function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(function() {
     alert("CME64B text copied to clipboard")
    }, function() {
      alert("Encode Failed")
    });
  }

function encodeCME64B(text) {
var encrypted = CryptoJS.AES.encrypt(text, key, { iv: iv });
var encryptedBase64 = encrypted.toString(); 
var encodeCME64Bfpri = btoa(encryptedBase64)
var encodeCME64Bfin = btoa(encodeCME64Bfpri)
updateClipboard(encodeCME64Bfin)
}

function decodeCME64B(text) {
var decodeCME64Bpri = atob(text).toString()
var decodeCME64Bfin = atob(decodeCME64Bpri.toString())
var decrypted = CryptoJS.AES.decrypt(decodeCME64Bfin, key, { iv: iv });
var decryptedPlainText = decrypted.toString(CryptoJS.enc.Utf8);
alert(decryptedPlainText)
}

let choiceCME64B = prompt("Would you like to encode or decode?")

if (choiceCME64B.toLowerCase() == "encode") {
    let encodeTextCME64B = prompt("What message would you like to encode?")
    encodeCME64B(encodeTextCME64B.toString())
} else if (choiceCME64B.toLowerCase() == "decode") {
    let decodeTextCME64B = prompt("What message would you like to decode?")
    decodeCME64B(decodeTextCME64B.toString())
}