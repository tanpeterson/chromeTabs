
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', afterDOMLoaded);
} else {
  afterDOMLoaded();
}

function afterDOMLoaded(){
  // // How to get access to all keys in storage
  // chrome.storage.local.get(null, function(items){
  //   const allKeys = Object.keys(items)
  //   console.log(allKeys);
  // })

  chrome.storage.local.get(['key'], function(result){
    for(let i = 0; i < result.key.length; i++){
      const el = document.createElement('a');
      el.setAttribute('id', `${i}`);
      el.setAttribute('href', `${result.key[i]}`)
      el.innerHTML = `<p>${result.key[i]}</p>`;
      document.getElementById('storedTabs').appendChild(el);
    }
  })
}


// // Code for event listener over a port. Didn't need this anymore because I use local storage now
// chrome.runtime.onConnect.addListener(function(port) {
//   console.assert(port.name === "msn");
//   port.onMessage.addListener(function(msg) {
//     if (msg.urls){
//       for(let i = 0; i < msg.urls.length; i++){
//         const el = document.createElement('a');
//         el.setAttribute('id', `${i}`);
//         el.setAttribute('href', `${msg.urls[i]}`)
//         el.innerText = `Tab ${i}`;
//         document.getElementById('storedTabs').appendChild(el);
//       }
//     } 
//   });
// });