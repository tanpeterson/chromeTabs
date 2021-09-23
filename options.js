
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', afterDOMLoaded);
} else {
  afterDOMLoaded();
}

function afterDOMLoaded(){
  chrome.storage.local.get(['key'], function(result){
    console.log(result.key);
    for(let url of Object.keys(result.key)){
      const el = document.createElement('a');
      el.setAttribute('href', `${url}`);
      el.setAttribute('target', '_blank');
      el.innerHTML = `<p>${result.key[url]}</p>`;

      document.getElementById('storedTabs').appendChild(el);
    }
  })
  const audio = document.getElementById("audio");
  audio.volume = 0.10;
  audio.play();
}


