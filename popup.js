chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var activeTab = tabs[0];
  var url = activeTab.url || '';
  var errMsg = null;
  //console.log(">>>>>>>>>>>>>>> ", activeTab)
  if (url.indexOf('https://chrome.google.com/webstore') === 0) {
    errMsg =
      'Sorry!  Even though Grabbly is running properly, looks like the Chrome Web Store does not allow you to use extensions.  Please try another website. ';
  } else if (url.indexOf('chrome-extension') === 0 || url.indexOf('chrome://') === 0) {
    errMsg =
      'Sorry!  Even though Grabbly is running properly, looks like the current Chrome page does not allow you to use extensions.  Please try another website. ';
  }

  if (errMsg) {
    var headerDiv = document.createElement('div');
    headerDiv.style.background = '#37265b';
    headerDiv.style.color = '#fff';
    headerDiv.style.textAlign = 'center';
    headerDiv.style.fontWeight = '700';
    headerDiv.style.fontSize = '15px';
    headerDiv.style.paddingRight = '.45em';
    headerDiv.style.paddingLeft = '.10em';
    headerDiv.style.paddingBottom = '.55em';
    headerDiv.style.paddingTop = '.25em';
    headerDiv.style.marginBottom = '1em';
    headerDiv.style.textAlign = 'center';

    // headerDiv.innerText = 'Miner';
    document.body.appendChild(headerDiv);

    var smTitleLink = document.createElement('a');
    smTitleLink.style.color = '#fff';
    smTitleLink.style.textDecoration = 'none';
    smTitleLink.innerText = 'Grabbly';
    smTitleLink.target = '_blank';
    smTitleLink.href = 'https://www.grabbly.io';
    headerDiv.appendChild(smTitleLink);

    var parentDiv = document.createElement('div');
    parentDiv.id = 'grabbly-popup';
    parentDiv.style.fontWeight = 500;
    parentDiv.style.fontSize = '18px';
    parentDiv.style.color = '#333';
    parentDiv.style.padding = '20px';
    parentDiv.style.textAlign = 'center';
    document.body.appendChild(parentDiv);

    var logoImg = document.createElement('img');
    logoImg.src = 'img/g-reverse.png';
    logoImg.style.width = '200px';

    var smLogoLink = document.createElement('a');
    smLogoLink.href = 'https://www.grabbly.io';
    smLogoLink.target = '_blank';
    smLogoLink.appendChild(logoImg);
    parentDiv.appendChild(smLogoLink);

    var msgDiv = document.createElement('div');
    msgDiv.innerText = errMsg;
    parentDiv.appendChild(msgDiv);
  } else {
    chrome.tabs.query({active:true, currentWindow: true},
        function(tab) {chrome.tabs.sendMessage(tab[0].id, { method: "toggleOnOff" }, function(response){});
        window.close();
    });
  }
});
