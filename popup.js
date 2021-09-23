function toOptions(tabs){
  let urlToObj = {};
  let currentId;
  for (var i=0; i < tabs.length; i++) {
    currentId = tabs[i].id;
    urlToObj[tabs[i].url] = tabs[i].title;
    chrome.tabs.remove(currentId);
  }
  return urlToObj;
}

function copy(){
  chrome.tabs.query({windowId: null}, function(tabs){
    tabsText = toOptions(tabs)
    chrome.runtime.openOptionsPage()
    chrome.storage.local.set({"key": tabsText})
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


// Opens the options tab.
document.addEventListener("DOMContentLoaded", function(event){
  document.getElementById('Options').addEventListener('click', function(){
    chrome.runtime.openOptionsPage();
  })
})