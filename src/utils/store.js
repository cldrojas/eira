import { writable } from 'svelte/store';


export var isLoged = writable(localStorage.getItem('isLoged') || false);
export var remember = writable(localStorage.getItem('remember') || false);
export var accessToken = writable(localStorage.getItem('token'));

export function saveToken(token, remember) {   
  
  accessToken.set(token);
  isLoged.set(true);  

  if(remember === true){
    localStorage.setItem('isLoged', true);
    localStorage.setItem('token', token);
    track();
  }

  console.log('loged in successfuly');
}

function track(){
  setTimeout(() => {
    !remember.subscribe()?signOut():refresh();
  }, 1000 * 60 * 14);
}

export function signOut() { 
  localStorage.removeItem('isLoged');
  localStorage.removeItem('token');
  accessToken.set('');
  isLoged.set(false);
  console.log('loged out');
}