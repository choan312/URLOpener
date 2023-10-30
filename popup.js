document.getElementById("open-urls-button").addEventListener("click", function() {
    var urlList = document.getElementById("url-list").value.split("\n");
    for (var i = 0; i < urlList.length; i++) {
        var url = urlList[i].trim();
        if (url) {
            chrome.tabs.create({url: url});
        }
    }
});
