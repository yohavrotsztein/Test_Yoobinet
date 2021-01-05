function history() {
  chrome.history.search({text: '', maxResults: 5}, function(data) {

    for (var i = 0; i < 5; i++) {
    var li = document.createElement("li");
    var iconurl = `https://s2.googleusercontent.com/s2/favicons?domain=${data[i].url}`
    var link = document.createElement('a')
    link.setAttribute('href',data[i].url);
    link.setAttribute('target', '_blank');
    link.innerHTML = "\xa0 \xa0" + data[i].url;
    var img = document.createElement("img");
    img.src=iconurl;
    li.appendChild(img);
    li.appendChild(link);
    document.getElementById("historyList").appendChild(li);
    }
  });
}

history();
