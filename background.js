// // I'm not doing anything in the background. Is that how its supposed to be?? IDK?
// // This was an attempt at listening for a message on the port I created, but I couldn't really do anything since background doesn't have a "document"

// chrome.runtime.onConnect.addListener(function(port) {
//   console.assert(port.name === "msn");
//   port.onMessage.addListener(function(msg) {
//     if (msg.urls){
//       // const create = browser.windows.get()
//       // const el = document.createElement('div');
//       // el.setAttribute('id', `array`);
//       // el.setAttribute('url', `${msg.urls}`)
//       // create.getElementById('storedTabs').appendChild(el);
//     } 
//   });
// });