// Copyright (c) 2016 Kevin Hylant. All rights reserved.

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: "\
      var bugDescription = '\
*Summary*\\n\
*====================*\\n\
  As a user I see ___ on ___ when I ____.\\n\
\\n\
*Impact*\\n\
*====================*\\n\
Users who ___.\\n\
\\n\
*Steps To Reproduce*\\n\
*====================*\\n\
  1. \\n\
  2. \\n\
  3. \\n\
\\n\
*Expected Results*\\n\
*====================*\\n\
  - \\n\
  - \\n\
\\n\
*Actual Results*\\n\
*====================*\\n\
  - \\n\
  - \\n\
\\n\
*Technical Notes*\\n\
*====================*\\n\
  - \\n\
  - \\n\
';\
      var bugSummary = 'OS - My descriptive bug name';\
      var bugEnvironment = '\
App Store 2.0.1 (8932)\\n\
iOS 10\\n\
iPhone 6S, 7\\n\
      ';\
      \
      var summaryField = document.querySelector('form .content #summary');\
      var environmentField = document.querySelector('form .content #environment');\
      var descriptionField = document.querySelector('form .content #description');\
      \
      summaryField.value = bugSummary;\
      environmentField.value = bugEnvironment;\
      descriptionField.value = bugDescription;\
    "
  });
});
