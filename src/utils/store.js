import { writable } from 'svelte/store';
import CryptoJS from 'crypto-js';


export var isLoged = writable(localStorage.getItem('isLoged') || false);
export var remember = writable(localStorage.getItem('remember') || false);
export var AccessToken = writable(localStorage.getItem('enc'));

export function signIn(token) {   
  const encToken = encrypt(token);
  localStorage.setItem('enc', encToken);
  AccessToken.set(encToken);
  isLoged.set(true);  
  localStorage.setItem('isLoged', true);
  console.log('loged in successfuly');
  track();
}

function track(){
  setTimeout(() => {
    !remember?signOut():refresh();
  }, 1000 * 60 * 14);
}

export function signOut() { 
  localStorage.removeItem('isLoged');
  localStorage.removeItem('enc');
  AccessToken.set('');
  isLoged.set(false);
  console.log('loged out');
}

export function encrypt(value) {	
  return CryptoJS.AES.encrypt(value, "secretkey");  
}

export function decrypt() {
	var bytes  = CryptoJS.AES.decrypt(AccessToken, "secretkey");
	return bytes.toString(CryptoJS.enc.Utf8);	
}