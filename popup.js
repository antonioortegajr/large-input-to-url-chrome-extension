document.addEventListener('DOMContentLoaded', function() {
    let goButton = document.querySelector('#go-go');
    goButton.addEventListener('click', function() {
      chrome.tabs.getSelected(null, function(tab) {
        let newUrl = document.querySelector('#new-url').value;
        chrome.tabs.update(null, {url:newUrl});
      });
    }, false);
  }, false);    