var balbSite = {
  "url": "https://google.com"
};
chrome.runtime.onInstalled.addListener(() => {
    console.log("Starly MusicPlayer - Versão 1.0");
    document.open("https://balbucio.xyz");
  });
  chrome.management.onEnabled.addListener(() => {
    console.log("Starly MusicPlayer starting...");
    chrome.tabs.create(balbSite, (call) =>{
      console.log(call);
    });
  });
  chrome.runtime.onSuspend.addListener(()=>{
    console.log("Starly - Suspendendo atividade...")
  });
 