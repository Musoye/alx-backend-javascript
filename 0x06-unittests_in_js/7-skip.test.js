{"payload":{"allShortcutsEnabled":false,"fileTree":{"0x06-unittests_in_js":{"items":[{"name":"10-api","path":"0x06-unittests_in_js/10-api","contentType":"directory"},{"name":"8-api","path":"0x06-unittests_in_js/8-api","contentType":"directory"},{"name":"9-api","path":"0x06-unittests_in_js/9-api","contentType":"directory"},{"name":".babelrc","path":"0x06-unittests_in_js/.babelrc","contentType":"file"},{"name":".eslintrc.js","path":"0x06-unittests_in_js/.eslintrc.js","contentType":"file"},{"name":"0-calcul.js","path":"0x06-unittests_in_js/0-calcul.js","contentType":"file"},{"name":"0-calcul.test.js","path":"0x06-unittests_in_js/0-calcul.test.js","contentType":"file"},{"name":"1-calcul.js","path":"0x06-unittests_in_js/1-calcul.js","contentType":"file"},{"name":"1-calcul.test.js","path":"0x06-unittests_in_js/1-calcul.test.js","contentType":"file"},{"name":"2-calcul_chai.js","path":"0x06-unittests_in_js/2-calcul_chai.js","contentType":"file"},{"name":"2-calcul_chai.test.js","path":"0x06-unittests_in_js/2-calcul_chai.test.js","contentType":"file"},{"name":"3-payment.js","path":"0x06-unittests_in_js/3-payment.js","contentType":"file"},{"name":"3-payment.test.js","path":"0x06-unittests_in_js/3-payment.test.js","contentType":"file"},{"name":"4-payment.js","path":"0x06-unittests_in_js/4-payment.js","contentType":"file"},{"name":"4-payment.test.js","path":"0x06-unittests_in_js/4-payment.test.js","contentType":"file"},{"name":"5-payment.js","path":"0x06-unittests_in_js/5-payment.js","contentType":"file"},{"name":"5-payment.test.js","path":"0x06-unittests_in_js/5-payment.test.js","contentType":"file"},{"name":"6-payment_token.js","path":"0x06-unittests_in_js/6-payment_token.js","contentType":"file"},{"name":"6-payment_token.test.js","path":"0x06-unittests_in_js/6-payment_token.test.js","contentType":"file"},{"name":"7-skip.test.js","path":"0x06-unittests_in_js/7-skip.test.js","contentType":"file"},{"name":"README.md","path":"0x06-unittests_in_js/README.md","contentType":"file"},{"name":"babel.config.js","path":"0x06-unittests_in_js/babel.config.js","contentType":"file"},{"name":"package-lock.json","path":"0x06-unittests_in_js/package-lock.json","contentType":"file"},{"name":"package.json","path":"0x06-unittests_in_js/package.json","contentType":"file"},{"name":"utils.js","path":"0x06-unittests_in_js/utils.js","contentType":"file"}],"totalCount":25},"":{"items":[{"name":"0x00-ES6_basic","path":"0x00-ES6_basic","contentType":"directory"},{"name":"0x01-ES6_promise","path":"0x01-ES6_promise","contentType":"directory"},{"name":"0x02-ES6_classes","path":"0x02-ES6_classes","contentType":"directory"},{"name":"0x03-ES6_data_manipulation","path":"0x03-ES6_data_manipulation","contentType":"directory"},{"name":"0x04-TypeScript","path":"0x04-TypeScript","contentType":"directory"},{"name":"0x05-Node_JS_basic","path":"0x05-Node_JS_basic","contentType":"directory"},{"name":"0x06-unittests_in_js","path":"0x06-unittests_in_js","contentType":"directory"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"}],"totalCount":9}},"fileTreeProcessingTime":13.577037,"foldersToFetch":[],"reducedMotionEnabled":null,"repo":{"id":628880213,"defaultBranch":"main","name":"alx-backend-javascript","ownerLogin":"Popsicool","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2023-04-17T07:10:06.000Z","ownerAvatar":"https://avatars.githubusercontent.com/u/96715524?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":false,"treeExpanded":true,"refInfo":{"name":"main","listCacheKey":"v0:1681723028.0","canEdit":false,"refType":"branch","currentOid":"9a56113ebe29cb13c6ad79bc4e342f0df234d037"},"path":"0x06-unittests_in_js/7-skip.test.js","currentUser":null,"blob":{"rawLines":["const { expect } = require('chai');","","describe('testing numbers', () => {","  it('1 is equal to 1', () => {","    expect(1 === 1).to.be.true;","  });","","  it('2 is equal to 2', () => {","    expect(2 === 2).to.be.true;","  });","","  it.skip('1 is equal to 3', () => {","    expect(1 === 3).to.be.true;","  });","","  it('3 is equal to 3', () => {","    expect(3 === 3).to.be.true;","  });","","  it('4 is equal to 4', () => {","    expect(4 === 4).to.be.true;","  });","","  it('5 is equal to 5', () => {","    expect(5 === 5).to.be.true;","  });","","  it('6 is equal to 6', () => {","    expect(6 === 6).to.be.true;","  });","","  it('7 is equal to 7', () => {","    expect(7 === 7).to.be.true;","  });","});"],"stylingDirectives":[[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":33,"cssClass":"pl-s"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-en"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":26,"cssClass":"pl-s"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":22,"cssClass":"pl-s"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[],[{"start":2,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":22,"cssClass":"pl-s"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[],[{"start":2,"end":4,"cssClass":"pl-s1"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":9,"cssClass":"pl-en"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":27,"cssClass":"pl-s"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[],[{"start":2,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":22,"cssClass":"pl-s"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[],[{"start":2,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":22,"cssClass":"pl-s"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[],[{"start":2,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":22,"cssClass":"pl-s"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[],[{"start":2,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":22,"cssClass":"pl-s"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[],[{"start":2,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":22,"cssClass":"pl-s"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/Popsicool/alx-backend-javascript/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":null,"repoAlertsPath":"/Popsicool/alx-backend-javascript/security/dependabot","repoSecurityAndAnalysisPath":"/Popsicool/alx-backend-javascript/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"7-skip.test.js","displayUrl":"https://github.com/Popsicool/alx-backend-javascript/blob/main/0x06-unittests_in_js/7-skip.test.js?raw=true","headerInfo":{"blobSize":"649 Bytes","deleteInfo":{"deleteTooltip":"You must be signed in to make or propose changes"},"editInfo":{"editTooltip":"You must be signed in to make or propose changes"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"77d3538","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2FPopsicool%2Falx-backend-javascript%2Fblob%2Fmain%2F0x06-unittests_in_js%2F7-skip.test.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"35","truncatedSloc":"27"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","languageID":183,"large":false,"loggedIn":false,"newDiscussionPath":"/Popsicool/alx-backend-javascript/discussions/new","newIssuePath":"/Popsicool/alx-backend-javascript/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/Popsicool/alx-backend-javascript/blob/main/0x06-unittests_in_js/7-skip.test.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/Popsicool/alx-backend-javascript/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"Popsicool","repoName":"alx-backend-javascript","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[]}},"copilotInfo":null,"csrf_tokens":{"/Popsicool/alx-backend-javascript/branches":{"post":"qKKFSj1UuzuG9_6q9CGxtkxzxMlRx74lPr9O74hGMtypedc1IsCWFBkElX22kWvfDG-ivqXDzsrx3rRXvcHc9g"},"/repos/preferences":{"post":"YR2k5SFi3LTZkQCrw6fq7xnOuuZgtSvoO2bOuwnmc9cjwno3LXfgWOs6Gq-Mz0dMaN3nwYAOhcKap7vgXmBx5Q"}}},"title":"alx-backend-javascript/0x06-unittests_in_js/7-skip.test.js at main · Popsicool/alx-backend-javascript"}