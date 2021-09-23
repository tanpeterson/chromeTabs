// const port = chrome.runtime.connect({name: 'msn'})

function toOptions(tabs){
  let urlToArr = [];
  let currentId;
  for (var i=0; i < tabs.length; i++) {
    currentId = tabs[i].id;
    urlToArr.push(tabs[i].url)
    chrome.tabs.remove(currentId);
  }
  return urlToArr;
}

function copy(){
  chrome.tabs.query({windowId: null}, function(tabs){
    tabsText = toOptions(tabs)
    chrome.runtime.openOptionsPage()
    chrome.storage.local.set({"key": tabsText})

    // // Code to send messages over the port. Don't need anymore because I'm using local storage.
    // chrome.extension.sendMessage(tabsText)
    // port.postMessage({urls: tabsText})
  })
}

// Event listener for when "Copy" button is clicked
document.addEventListener("DOMContentLoaded", function(event){
  document.getElementById('Copy').addEventListener('click', function(){
    chrome.windows.getCurrent(function(){
      copy()
    })
  })
})


// Event listener for when "O2" button is clicked. Haven't decided what functionality to give it.
document.addEventListener("DOMContentLoaded", function(event){
  document.getElementById('O2').addEventListener('click', function(){
    chrome.windows.getCurrent(function(){
      chrome.storage.local.get(['key'], function(result){
        console.log("length is " + storage.local.length)
        console.log(result.key);
      })
    })
  })
})


// Button to open and remove
// Somehow cycle through tabs