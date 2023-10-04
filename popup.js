chrome.topSites.get((topSites) => {
  const topSitesList = document.getElementById('top-sites');
  topSites.forEach((site) => {
    const listItem = document.createElement('li');
    listItem.textContent = site.title;
    topSitesList.appendChild(listItem);
  });
});
