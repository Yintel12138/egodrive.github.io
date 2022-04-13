<!doctype html>
<html class="no-js " lang="en">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=IE9" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
    <meta charset="utf-8">
    <title>markdalgleish/stellar.js - Gitter</title>
    <style>

      @-webkit-keyframes pulsey {
        0% { opacity: 0.6; }
        50% { opacity: 1; }
        100% { opacity: 0.6; }
      }

      html.loading .trpContentPanel { background: url("static/image/logo-mark-grey-64.png") center no-repeat; height: 90%; -webkit-animation: pulsey 2s ease-out; -webkit-animation-iteration-count: infinite;  }
      html.loading .trpContentPanel > * { visibility: hidden; }
    </style>
    <base target="_parent">



      <style>
    @font-face {
      font-family: 'SourceSansLocal';
      font-style: normal;
      font-weight: bold;
      src: local("SourceSansPro-Bold");
    }
    @font-face {
      font-family: 'SourceSansLocal';
      font-style: italic;
      font-weight: bold;
      src: local("SourceSansPro-BoldIt");
    }
    @font-face {
      font-family: 'SourceSansLocal';
      font-style: normal;
      font-weight: 200;
      src: local("SourceSansPro-ExtraLight");
    }
    @font-face {
      font-family: 'SourceSansLocal';
      font-style: italic;
      font-weight: normal;
      src: local("SourceSansPro-It");
    }
    @font-face {
      font-family: 'SourceSansLocal';
      font-style: normal;
      font-weight: 300;
      src: local("SourceSansPro-Light");
    }
    @font-face {
      font-family: 'SourceSansLocal';
      font-style: normal;
      font-weight: normal;
      src: local("SourceSansPro-Regular");
    }
    @font-face {
      font-family: 'SourceSansLocal';
      font-style: normal;
      font-weight: 600;
      src: local("SourceSansPro-Semibold");
    }
    @font-face {
      font-family: "source-sans-pro";
        src: url("//cdn02.gitter.im/_s/07c505b13/fonts/sourcesans/SourceSansPro-Regular.otf.woff") format('woff');
      font-weight: normal;
      font-style: normal
    }
    @font-face {
      font-family: "source-sans-pro";
        src: url("//cdn01.gitter.im/_s/07c505b13/fonts/sourcesans/SourceSansPro-It.otf.woff") format('woff');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "source-sans-pro";
        src: url("//cdn03.gitter.im/_s/07c505b13/fonts/sourcesans/SourceSansPro-Bold.otf.woff") format('woff');
      font-weight: bold;
      font-style: normal
    }
    @font-face {
      font-family: "source-sans-pro";
        src: url("//cdn02.gitter.im/_s/07c505b13/fonts/sourcesans/SourceSansPro-Semibold.otf.woff") format('woff');
      font-weight: 600;
      font-style: normal
    }
    @font-face {
      font-family: "source-sans-pro";
        src: url("//cdn01.gitter.im/_s/07c505b13/fonts/sourcesans/SourceSansPro-BoldIt.otf.woff") format('woff');
      font-weight: bold;
      font-style: italic
    }
    @font-face {
      font-family: "source-sans-pro";
        src: url("//cdn02.gitter.im/_s/07c505b13/fonts/sourcesans/SourceSansPro-Light.otf.woff") format('woff');
      font-weight: 300;
      font-style: normal
    }
    @font-face {
      font-family: "source-sans-pro";
        src: url("//cdn02.gitter.im/_s/07c505b13/fonts/sourcesans/SourceSansPro-ExtraLight.otf.woff") format('woff');
      font-weight: 200;
      font-style: normal
    }
    @font-face {
      font-family: "KaTeX_AMS";
        src: url("//cdn02.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_AMS-Regular.woff") format('woff');
        src: url("//cdn02.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_AMS-Regular.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Caligraphic";
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Caligraphic-Bold.woff") format('woff');
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Caligraphic-Bold.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Caligraphic";
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Caligraphic-Regular.woff") format('woff');
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Caligraphic-Regular.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Fraktur";
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Fraktur-Bold.woff") format('woff');
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Fraktur-Bold.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Fraktur";
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Fraktur-Regular.woff") format('woff');
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Fraktur-Regular.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Main";
        src: url("//cdn02.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Main-Bold.woff") format('woff');
        src: url("//cdn02.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Main-Bold.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Main";
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Main-BoldItalic.woff") format('woff');
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Main-BoldItalic.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Main";
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Main-Italic.woff") format('woff');
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Main-Italic.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Main";
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Main-Regular.woff") format('woff');
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Main-Regular.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Math";
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Math-BoldItalic.woff") format('woff');
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Math-BoldItalic.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Math";
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Math-Italic.woff") format('woff');
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Math-Italic.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_SansSerif";
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_SansSerif-Bold.woff") format('woff');
        src: url("//cdn01.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_SansSerif-Bold.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_SansSerif";
        src: url("//cdn02.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_SansSerif-Italic.woff") format('woff');
        src: url("//cdn02.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_SansSerif-Italic.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_SansSerif";
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_SansSerif-Regular.woff") format('woff');
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_SansSerif-Regular.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Script";
        src: url("//cdn02.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Script-Regular.woff") format('woff');
        src: url("//cdn02.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Script-Regular.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Size1";
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Size1-Regular.woff") format('woff');
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Size1-Regular.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Size2";
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Size2-Regular.woff") format('woff');
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Size2-Regular.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Size3";
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Size3-Regular.woff") format('woff');
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Size3-Regular.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Size4";
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Size4-Regular.woff") format('woff');
        src: url("//cdn03.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Size4-Regular.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
    @font-face {
      font-family: "KaTeX_Typewriter";
        src: url("//cdn02.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Typewriter-Regular.woff") format('woff');
        src: url("//cdn02.gitter.im/_s/07c505b13/repo/katex/fonts-0.10.0/KaTeX_Typewriter-Regular.woff2") format('woff2');
      font-weight: normal;
      font-style: italic
    }
  </style>

    <link rel="stylesheet" href='static/css/services.css'>
      <link rel="stylesheet" href='static/css/router-nli-chat.css'>


    <link id="favicon" rel="shortcut icon" href='//cdn03.gitter.im/_s/07c505b13/images/favicon-normal.ico'><!-- Le fav and touch icons -->

    <link rel="manifest" href="/manifest.webmanifest">

    <meta property="og:title" content="markdalgleish/stellar.js"/>
    <meta property="og:description" content="@markdalgleish: "/>
    <meta property="og:type" content="website"/>
    <meta property="og:image" content="https://avatars-05.gitter.im/group/iv/4/57542caec43b8c6019775841"/>
    <meta property="fb:app_id" content=""/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@gitchat"/>
    <meta property="twitter:title" content="markdalgleish/stellar.js"/>
    <meta property="twitter:description" content="@markdalgleish: "/>
    <meta property="twitter:image" content="https://avatars-05.gitter.im/group/iv/4/57542caec43b8c6019775841"/>
  </head>
  <body class=" iframe logged-out">
    <div class="layout-app">
        <script>window.__INITIAL_STATE__={"search":{"repo":{"loading":false,"error":null,"results":[]},"room":{"loading":false,"error":null,"results":[]},"people":{"loading":false,"error":null,"results":[]},"message":{"loading":false,"error":null,"results":[]},"searchInputValue":"","current":{"results":[]}},"joinRoomRequest":{"loading":false,"error":null,"results":[]},"isMobile":false,"isLoggedIn":false,"darkTheme":false,"groupMap":{},"roomMap":{"5463b6d7db8155e6700d403d":{"id":"5463b6d7db8155e6700d403d","name":"markdalgleish\u002Fstellar.js","topic":"Stellar.js - Parallax scrolling made easy","avatarUrl":"https:\u002F\u002Favatars-05.gitter.im\u002Fgroup\u002Fiv\u002F4\u002F57542caec43b8c6019775841","uri":"markdalgleish\u002Fstellar.js","userCount":41,"url":"\u002Fmarkdalgleish\u002Fstellar.js","githubType":"REPO","security":"PUBLIC","groupId":"57542caec43b8c6019775841","public":true,"v":34}},"messageMap":{},"displayedRoomId":"5463b6d7db8155e6700d403d","hightLightedMessageId":null,"leftMenuState":"all","leftMenuPinnedState":true,"leftMenuExpandedState":false,"favouriteDraggingInProgress":false,"threadMessageFeed":{"isVisible":false,"draftMessage":"","messageEditState":{"id":null,"text":null},"atTop":false,"atBottom":false,"parentId":null,"childMessagesRequest":{"loading":false,"error":null,"results":[]}},"createCommunity":{"currentStep":"step-main","communityName":"","communityNameError":null,"communitySlug":"","slugAvailabilityStatus":null,"communitySlugError":null,"selectedBackingEntity":null,"allowBadger":true,"orgs":[],"repos":[],"entityTypeTabState":"tab-orgs","orgsRequest":{"loading":false,"error":null,"results":[]},"reposRequest":{"loading":false,"error":null,"results":[]},"communitySubmitRequest":{"loading":false,"error":null,"results":[]}},"createRoom":{"adminGroupMap":{},"groupFilterText":"","selectedGroupId":null,"groupError":null,"roomName":"","roomNameError":null,"roomNameAvailabilityStatus":null,"adminRepoMap":{},"repoFilterText":"","selectedRepoId":null,"roomSecurity":"PUBLIC","onlyGithubUsers":false,"allowGroupAdmins":false,"allowBadger":true,"repos":[],"groupsRequest":{"loading":false,"error":null,"results":[]},"reposRequest":{"loading":false,"error":null,"results":[]},"roomSubmitRequest":{"loading":false,"error":null,"results":[]}}}</script><style data-vue-ssr-id="2795a402:0">.root[data-v-44ebcb1a] {
  box-sizing: border-box;
  z-index: 201;
  display: flex;
  flex-direction: column;
  height: 100%;
  will-change: transform;
  transition: transform 0.05s ease;
}
.root[data-v-44ebcb1a] *,
.root[data-v-44ebcb1a] *:before,
.root[data-v-44ebcb1a] *:after {
  box-sizing: inherit;
}
@media (max-width: 900px) {
.root[data-v-44ebcb1a] {
    position: absolute;
    transform: translateX(-100%);
}
.root.expanded[data-v-44ebcb1a] {
    transform: translateX(0%);
}
}
.layout-minibar[data-v-44ebcb1a] {
  z-index: 1;
  width: 7.5rem;
}
.layout-main-menu[data-v-44ebcb1a] {
  width: 26.5rem;
  transition: transform 0.1s ease;
}
@media not all and (max-width: 900px) {
.root:not(.pinned).logged-in .layout-main-menu[data-v-44ebcb1a] {
    position: absolute;
    left: 7.5rem;
    transform: translateX(-100%);
}
.root.expanded:not(.pinned).logged-in .layout-main-menu[data-v-44ebcb1a] {
    transform: translateX(0%);
}
}
.header[data-v-44ebcb1a] {
  position: relative;
  display: flex;
  flex-shrink: 0;
  height: 65px;
  color: #ffffff;
}
.header-minibar[data-v-44ebcb1a] {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #753a88;
}
.dark-theme .header-minibar[data-v-44ebcb1a] {
  background-color: #2d2c2c;
}
.header-main-menu[data-v-44ebcb1a] {
  display: flex;
  align-items: center;
  height: 100%;
  background-color: #753a88;
}
.dark-theme .header-main-menu[data-v-44ebcb1a] {
  background-color: #2d2c2c;
}
.left-menu-toggle[data-v-44ebcb1a] {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: transparent;
  border: 0;
  transition: background-color 0.2s ease;
}
.left-menu-toggle:hover .hamburger-icon[data-v-44ebcb1a] {
  left: -9px;
}
.left-menu-toggle[data-v-44ebcb1a]:focus {
  background-color: #f68d42;
  outline: none;
}
.hamburger-icon[data-v-44ebcb1a] {
  position: absolute;
  left: -13px;
  width: 26px;
  stroke-width: 2px;
  vector-effect: non-scaling-stroke;
  color: rgba(255, 255, 255, 0.7);
  stroke: rgba(255, 255, 255, 0.7);
  transition: left 0.2s ease;
}
.logo-gitter-sign[data-v-44ebcb1a] {
  display: block;
  width: 18px;
  fill: #ffffff;
}
.logo-text[data-v-44ebcb1a] {
  display: block;
  width: 7rem;
}
.logo-text[data-v-44ebcb1a] > svg {
  fill: #ffffff;
}
.body[data-v-44ebcb1a] {
  position: relative;
  flex: 1;
  display: flex;
  min-height: 0;
}
.body-main-menu[data-v-44ebcb1a] {
  overflow-x: hidden;
  overflow-y: auto;
  touch-action: pan-y;
  height: 100%;
  background-color: #fdfdfd;
  border-right: 1px solid #f1f1f1;
}
.dark-theme .body-main-menu[data-v-44ebcb1a] {
  background-color: #383736;
  border-right-color: #2d2c2c;
}
.room-list-title[data-v-44ebcb1a] {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  max-width: 90%;
  margin: 0;
  overflow: hidden;
  font-weight: 400;
  font-size: 1.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: uppercase;
  padding: 0 0 0 2.6rem;
  line-height: 65px;
  color: #a2a3a3;
}
.mobile .room-list-title[data-v-44ebcb1a] {
  padding: 0 0 0 0.5rem;
  line-height: 50px;
}
.room-list[data-v-44ebcb1a] {
  margin-left: 0;
  list-style: none;
}
.nli-body[data-v-44ebcb1a] {
  flex: 1;
  display: block;
  width: 34rem;
  height: 100%;
  padding: 20px;
  background-color: #753a88;
  color: #ffffff;
}
.nli-body a[data-v-44ebcb1a] {
  color: #ffffff;
}
.nli-primary-heading[data-v-44ebcb1a] {
  font-family: 'source-sans-pro';
  font-weight: 200;
  font-size: 47px;
  line-height: 43px;
}
.nli-info-block[data-v-44ebcb1a] {
  padding: 1vh 15px;
  margin: 10px 0px;
  list-style: none;
  background-color: rgba(255, 255, 255, 0.1);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.nli-info-block-item[data-v-44ebcb1a] {
  margin-top: 4px;
  margin-bottom: 4px;
}
</style><div data-server-rendered="true" class="root js-left-menu-root pinned" style="transform:;transition:;" data-v-44ebcb1a><header class="header" data-v-44ebcb1a><section class="header-minibar layout-minibar" data-v-44ebcb1a><button label="Unpin and collapse the left-menu" class="left-menu-toggle" data-v-44ebcb1a><svg viewBox="0 0 26 22" class="hamburger-icon" data-v-44ebcb1a><path d="M0,2 l26,0" data-v-44ebcb1a></path> <path d="M0,11 l26,0" data-v-44ebcb1a></path> <path d="M0,20 l26,0" data-v-44ebcb1a></path></svg> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 25" class="logo-gitter-sign" data-v-44ebcb1a><rect x="15" y="5" width="2" height="10"></rect> <rect x="10" y="5" width="2" height="20"></rect> <rect x="5" y="5" width="2" height="20"></rect> <rect width="2" height="15"></rect></svg></button></section> <section class="header-main-menu layout-main-menu" data-v-44ebcb1a><a href="https://gitter.im/?utm_source=left-menu-logo" class="logo-text" data-v-44ebcb1a><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 98.7 16.3" data-v-44ebcb1a><g><path d="M20.9,0.3h2.6v15.8h-2.6V0.3z"></path> <path d="M34.8,2.9h-4V0.3h11.8v2.6h-5.2v13.2h-2.6V2.9z"></path> <path d="M51.9,2.9h-4V0.3h11.8v2.6h-5.2v13.2h-2.6V2.9z"></path> <path d="M66.4,0.3h11.8v2.6H69v3.9h7.9v2.6H69v4h9.2v2.6H66.4V0.3z"></path> <path d="M98.7,16.1l-4.2-5.9c1.7-0.9,2.8-2.5,2.8-4.6c0-3.1-2.5-5.3-5.7-5.3l-6.2,0v15.8h2.6l0-5.3
    c0,0,3.6,0,3.6,0l3.8,5.3H98.7z M88.1,8.2l0-5.3l3.5,0c1.7,0,3,1,3,2.6c0,1.7-1.4,2.6-3,2.6L88.1,8.2z"></path> <path d="M7.9,7.1v2.6l3.9,0c0,0,0,1.4,0,2.3c-0.1,0.2-0.4,1.8-3.8,1.8c-0.2,0-0.3,0-0.5,0
    c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1,0c-2.1-0.7-3.5-2.8-3.5-5.3
    l0,0v0v0c0-0.3,0-0.5,0.1-0.8C3.3,4.7,5.4,2.5,8,2.5c0.9,0,2.5,0.3,3.6,1.5l1.5-2.2c0,0-1.3-1.9-5-1.9C3.7,0,0.4,3.3,0,7.3
    c0,0.3,0,0.6,0,0.8l0,0l0,0c0,4.3,3.2,7.9,7.7,8.1c0.2,0,0.3,0,0.5,0c0,0,0.1,0,0.1,0c0.3,0,0.5,0,0.7,0c0.1,0,0.2,0,0.3,0
    c0.2,0,0.3,0,0.5-0.1c2.7-0.1,4.7-2.3,4.7-3.4c0-5,0-5.7,0-5.7H7.9z"></path></g></svg></a></section></header> <section class="body nli-body" data-v-44ebcb1a><h2 class="nli-primary-heading" data-v-44ebcb1a>Where communities thrive</h2> <br data-v-44ebcb1a> <ul class="nli-info-block" data-v-44ebcb1a><li class="nli-info-block-item" data-v-44ebcb1a>
        Join over
        <strong data-v-44ebcb1a>1.5M+ people</strong></li> <li class="nli-info-block-item" data-v-44ebcb1a>
        Join over
        <strong data-v-44ebcb1a>100K+ communities</strong></li> <li class="nli-info-block-item" data-v-44ebcb1a>
        Free
        <strong data-v-44ebcb1a>without limits</strong></li> <li class="nli-info-block-item" data-v-44ebcb1a>
        Create
        <strong data-v-44ebcb1a>your own community</strong></li></ul> <ul class="nli-info-block" data-v-44ebcb1a><li class="nli-info-block-item" data-v-44ebcb1a><a href="/explore" data-v-44ebcb1a>Explore more communities</a></li></ul></section></div>

      <div class="layout-app-body">
        <div class="trpAlertWrapper" id="alert-panel">
  <div class="trpAlertContainer">
    <div class="trpAlertContent" id="alert-content">
    </div>
  </div>
</div>
<div class="chat-header-wrapper">
  <header class="chat-header" id="header-wrapper">
  <div id="header" class="chat-header-inner">
    <div class="chat-header__main-grouping chat-header__left-menu-toggle-grouping">
  <button class="chat-header__left-menu-toggle js-header-view-left-menu-toggle">
    <svg class="chat-header__action-icon" viewBox="0 0 26 22">
      <path d="M0,2 l26,0" />
      <path d="M0,11 l26,0" />
      <path d="M0,20 l26,0" />
    </svg>
  </button>
</div>

<div class="chat-header__main-grouping chat-header__avatar-grouping">
  <form
    class="chat-header__avatar  js-chat-header-group-avatar-upload-form"
    action=""
    enctype="multipart/form-data"
    method="POST">
    <input type="hidden" class="js-chat-header-group-avatar-upload-signature" name="signature" value="">
    <input type="hidden" class="js-chat-header-group-avatar-upload-params" name="params" value="">
    <input
      id="chat-header-group-avatar-upload-input"
      class="chat-header__group-avatar-upload-input js-chat-header-group-avatar-upload-input"
      name="file"
      type="file"
      accept="image/*"
      disabled />
    <label
      class="chat-header__group-avatar-upload-label js-chat-header-group-avatar-upload-label"
      for="chat-header-group-avatar-upload-input"
      >
      <img class="js-chat-header-avatar-image"  height='48' width='48' src='https://avatars-05.gitter.im/group/iv/4/57542caec43b8c6019775841?s=48' srcset='https://avatars-05.gitter.im/group/iv/4/57542caec43b8c6019775841?s=96 2x' >
      <div class="chat-header__group-avatar-upload-progress hidden js-chat-header-group-avatar-upload-progress"></div>
    </label>
  </form>
</div>

<div class="chat-header__main-grouping chat-header__info-grouping">
  <div class="chat-header__heading-sub-group">
    <h1 class="js-chat-name chat-header__heading">
      <a href="static/js/stellar1.js" class="chat-header__title" target="_blank">markdalgleish/stellar.js</a>
    </h1>
  </div>
  <div class="chat-header__topic-sub-group js-room-topic-edit-activator" tabindex="0">
    <div class="chat-header__topic-wrapper js-room-topic-wrapper  "><p class="js-room-topic chat-header__topic  ">Stellar.js - Parallax scrolling made easy</p></div>
  </div>
</div>


<div class="chat-header__main-grouping chat-header__action-grouping">

    <a href="/orgs/markdalgleish/rooms" class="chat-header__org-page org-page-link js-chat-header-org-page-action" title="More markdalgleish rooms">
      <i class="chat-header__action-icon icon-globe"></i>
    </a>

</div>

  </div>
</header>
  <div class="chat-and-toolbar-wrapper">
    <div class="right-toolbar-region" id="right-toolbar-layout">
  <div class="right-toolbar right-toolbar--collapsible ">

    <div id="toolbar-top-content" class="right-toolbar__body">
      <div id="people-list">
        <div class="trpToolbarHeader" id="top-header">
          <h5 class="trpToolbarHeaderItem selected" id="people-header">
            People
          </h5>
          <h5 class="trpToolbarHeaderItem " id="info-header">
              Repo info
          </h5>
        </div>
        <div class="trpToolbarList">
          <div class="trpToolbarListContent" id="people-roster">
            <div>
              <span class="frame-people">
  <span id="roster-region">
    <ul id="roster-view" class="roster">
      <li class="js-model-id-545aff36db8155e6700d1b96">
        <div
  class="trpDisplayPicture avatar-545aff36db8155e6700d1b96 avatar-s offline admin ">
  <img src="https://avatars2.githubusercontent.com/markdalgleish?v=3&amp;s=30" srcset="https://avatars2.githubusercontent.com/markdalgleish?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-558cb97815522ed4b3e2d078">
        <div
  class="trpDisplayPicture avatar-558cb97815522ed4b3e2d078 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/AdsonCicilioti?v=4&amp;s=30" srcset="https://avatars2.githubusercontent.com/AdsonCicilioti?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-55f8376d0fc9f982beb0c293">
        <div
  class="trpDisplayPicture avatar-55f8376d0fc9f982beb0c293 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/ahmed7amdy?v=3&amp;s=30" srcset="https://avatars2.githubusercontent.com/ahmed7amdy?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-54943065db8155e6700e11a7">
        <div
  class="trpDisplayPicture avatar-54943065db8155e6700e11a7 avatar-s offline  ">
  <img src="https://avatars0.githubusercontent.com/allthesignals?v=4&amp;s=30" srcset="https://avatars0.githubusercontent.com/allthesignals?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-54837cf6db8155e6700dc843">
        <div
  class="trpDisplayPicture avatar-54837cf6db8155e6700dc843 avatar-s offline  ">
  <img src="https://avatars1.githubusercontent.com/camspilly?v=4&amp;s=30" srcset="https://avatars1.githubusercontent.com/camspilly?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-54ebb07915522ed4b3dc62e2">
        <div
  class="trpDisplayPicture avatar-54ebb07915522ed4b3dc62e2 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/chriswood1001?v=3&amp;s=30" srcset="https://avatars2.githubusercontent.com/chriswood1001?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-5463c2eedb8155e6700d4060">
        <div
  class="trpDisplayPicture avatar-5463c2eedb8155e6700d4060 avatar-s offline  ">
  <img src="https://avatars0.githubusercontent.com/u/39121?v=3&amp;s=30" srcset="https://avatars0.githubusercontent.com/u/39121?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-55979fd115522ed4b3e359da">
        <div
  class="trpDisplayPicture avatar-55979fd115522ed4b3e359da avatar-s offline  ">
  <img src="https://avatars1.githubusercontent.com/davidwtg?v=3&amp;s=30" srcset="https://avatars1.githubusercontent.com/davidwtg?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-55101a4215522ed4b3ddadad">
        <div
  class="trpDisplayPicture avatar-55101a4215522ed4b3ddadad avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/dmytro-krekota?v=4&amp;s=30" srcset="https://avatars2.githubusercontent.com/dmytro-krekota?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-5510312915522ed4b3ddaf03">
        <div
  class="trpDisplayPicture avatar-5510312915522ed4b3ddaf03 avatar-s offline  ">
  <img src="https://avatars0.githubusercontent.com/interglobalmedia?v=4&amp;s=30" srcset="https://avatars0.githubusercontent.com/interglobalmedia?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-54b6ea46db8155e6700eac41">
        <div
  class="trpDisplayPicture avatar-54b6ea46db8155e6700eac41 avatar-s offline  ">
  <img src="https://avatars1.githubusercontent.com/u/10538507?v=3&amp;s=30" srcset="https://avatars1.githubusercontent.com/u/10538507?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-550e084815522ed4b3dd9d64">
        <div
  class="trpDisplayPicture avatar-550e084815522ed4b3dd9d64 avatar-s offline  ">
  <img src="https://avatars1.githubusercontent.com/nesbtesh?v=4&amp;s=30" srcset="https://avatars1.githubusercontent.com/nesbtesh?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-55e3aa0a0fc9f982beaf1c2a">
        <div
  class="trpDisplayPicture avatar-55e3aa0a0fc9f982beaf1c2a avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/night-spark?v=3&amp;s=30" srcset="https://avatars2.githubusercontent.com/night-spark?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-54b523a2db8155e6700e9b46">
        <div
  class="trpDisplayPicture avatar-54b523a2db8155e6700e9b46 avatar-s offline  ">
  <img src="https://avatars0.githubusercontent.com/u/10516139?v=3&amp;s=30" srcset="https://avatars0.githubusercontent.com/u/10516139?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-562e503716b6c7089cb84e78">
        <div
  class="trpDisplayPicture avatar-562e503716b6c7089cb84e78 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/nk2014?v=3&amp;s=30" srcset="https://avatars2.githubusercontent.com/nk2014?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-5568690d15522ed4b3e11ed9">
        <div
  class="trpDisplayPicture avatar-5568690d15522ed4b3e11ed9 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/sadikyalcin?v=4&amp;s=30" srcset="https://avatars2.githubusercontent.com/sadikyalcin?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-54934a8edb8155e6700e0d22">
        <div
  class="trpDisplayPicture avatar-54934a8edb8155e6700e0d22 avatar-s offline  ">
  <img src="https://avatars0.githubusercontent.com/u/526602?v=3&amp;s=30" srcset="https://avatars0.githubusercontent.com/u/526602?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-5584653d15522ed4b3e22d07">
        <div
  class="trpDisplayPicture avatar-5584653d15522ed4b3e22d07 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/Shekharrajak?v=4&amp;s=30" srcset="https://avatars2.githubusercontent.com/Shekharrajak?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-54d3ae04db8155e6700f7dc5">
        <div
  class="trpDisplayPicture avatar-54d3ae04db8155e6700f7dc5 avatar-s offline  ">
  <img src="https://avatars1.githubusercontent.com/smartlaksh?v=4&amp;s=30" srcset="https://avatars1.githubusercontent.com/smartlaksh?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-54e502ad15522ed4b3dc2c38">
        <div
  class="trpDisplayPicture avatar-54e502ad15522ed4b3dc2c38 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/u/10836911?v=3&amp;s=30" srcset="https://avatars2.githubusercontent.com/u/10836911?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-5568a26015522ed4b3e122bd">
        <div
  class="trpDisplayPicture avatar-5568a26015522ed4b3e122bd avatar-s offline  ">
  <img src="https://avatars0.githubusercontent.com/veremey?v=4&amp;s=30" srcset="https://avatars0.githubusercontent.com/veremey?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-54b422bbdb8155e6700e946e">
        <div
  class="trpDisplayPicture avatar-54b422bbdb8155e6700e946e avatar-s offline  ">
  <img src="https://avatars1.githubusercontent.com/u/4753889?v=3&amp;s=30" srcset="https://avatars1.githubusercontent.com/u/4753889?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-55c05f2f0fc9f982beac1afc">
        <div
  class="trpDisplayPicture avatar-55c05f2f0fc9f982beac1afc avatar-s offline  ">
  <img src="https://avatars1.githubusercontent.com/vivekmittal?v=3&amp;s=30" srcset="https://avatars1.githubusercontent.com/vivekmittal?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-54a1cf9fdb8155e6700e3c83">
        <div
  class="trpDisplayPicture avatar-54a1cf9fdb8155e6700e3c83 avatar-s offline  ">
  <img src="https://avatars0.githubusercontent.com/u/10343512?v=3&amp;s=30" srcset="https://avatars0.githubusercontent.com/u/10343512?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
      <li class="js-model-id-54761307db8155e6700d8688">
        <div
  class="trpDisplayPicture avatar-54761307db8155e6700d8688 avatar-s offline  ">
  <img src="https://avatars0.githubusercontent.com/u/2780647?v=3&amp;s=30" srcset="https://avatars0.githubusercontent.com/u/2780647?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  <div class="trpStatus" id="status"> </div>
</div>

      </li>
    </ul>
  </span>
<div id="remaining-region" class="remaining-region"></div>
</span>

            </div>
          </div>
          <div class="trpToolbarListContent" id="repo-info" style="display: none"></div>
        </div>
      </div>

      <div id="activity-region" class="right-toolbar-activity-area">
        <div  class="right-toolbar-activity-area-inner" >
<div class="trpToolbarHeader">
  <h5 class="trpToolbarHeaderItem selected" id="activity-header">Activity</h5>
</div>

<ul class="right-toolbar-activity-list u-font-smaller" id="activity-list"></ul>
</div>
      </div>
    </div>

    <div id="right-toolbar-footer-region" class="right-toolbar-region__footer">
      <svg
           class="menu-toggle-icon js-menu-toggle-icon"
           width="30px"
           height="34px"
           viewBox="0 0 30 34"
       >
        <path d="M0,6 l15,0 l15,0" />
        <path d="M0,17 l15,0 l15,0" />
        <path d="M0,28 l15,0 l15,0" />
      </svg>
    </div>

  </div>
</div>
    <script>window.__INITIAL_STATE__={"search":{"repo":{"loading":false,"error":null,"results":[]},"room":{"loading":false,"error":null,"results":[]},"people":{"loading":false,"error":null,"results":[]},"message":{"loading":false,"error":null,"results":[]},"searchInputValue":"","current":{"results":[]}},"joinRoomRequest":{"loading":false,"error":null,"results":[]},"isMobile":false,"isLoggedIn":false,"darkTheme":false,"groupMap":{},"roomMap":{"5463b6d7db8155e6700d403d":{"id":"5463b6d7db8155e6700d403d","name":"markdalgleish\u002Fstellar.js","topic":"Stellar.js - Parallax scrolling made easy","avatarUrl":"https:\u002F\u002Favatars-05.gitter.im\u002Fgroup\u002Fiv\u002F4\u002F57542caec43b8c6019775841","uri":"markdalgleish\u002Fstellar.js","userCount":41,"url":"\u002Fmarkdalgleish\u002Fstellar.js","githubType":"REPO","security":"PUBLIC","groupId":"57542caec43b8c6019775841","public":true,"v":34}},"messageMap":{},"displayedRoomId":"5463b6d7db8155e6700d403d","hightLightedMessageId":null,"leftMenuState":"all","leftMenuPinnedState":true,"leftMenuExpandedState":false,"favouriteDraggingInProgress":false,"threadMessageFeed":{"isVisible":false,"draftMessage":"","messageEditState":{"id":null,"text":null},"atTop":false,"atBottom":false,"parentId":null,"childMessagesRequest":{"loading":false,"error":null,"results":[]}},"createCommunity":{"currentStep":"step-main","communityName":"","communityNameError":null,"communitySlug":"","slugAvailabilityStatus":null,"communitySlugError":null,"selectedBackingEntity":null,"allowBadger":true,"orgs":[],"repos":[],"entityTypeTabState":"tab-orgs","orgsRequest":{"loading":false,"error":null,"results":[]},"reposRequest":{"loading":false,"error":null,"results":[]},"communitySubmitRequest":{"loading":false,"error":null,"results":[]}},"createRoom":{"adminGroupMap":{},"groupFilterText":"","selectedGroupId":null,"groupError":null,"roomName":"","roomNameError":null,"roomNameAvailabilityStatus":null,"adminRepoMap":{},"repoFilterText":"","selectedRepoId":null,"roomSecurity":"PUBLIC","onlyGithubUsers":false,"allowGroupAdmins":false,"allowBadger":true,"repos":[],"groupsRequest":{"loading":false,"error":null,"results":[]},"reposRequest":{"loading":false,"error":null,"results":[]},"roomSubmitRequest":{"loading":false,"error":null,"results":[]}}}</script><style data-vue-ssr-id="7c73d085:0">.root[data-v-3b2f1a78] {
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  order: 2;
  display: none;
  /*
  The TMF width changes between 300px and 600px boundaries.
  Within this boundary it tries to be 40% of the space taken by
  both panels (MMF - 60%, TMF - 40%)
  */
  min-width: 300px;
  max-width: 600px;
  width: 40%;
  color: #333;
  text-align: left;
  box-sizing: border-box;
}
.root.opened[data-v-3b2f1a78] {
  display: flex;
}
.mobile .root.opened[data-v-3b2f1a78] {
  position: absolute;
  z-index: 1001;
  width: 100%;
}
.root[data-v-3b2f1a78] *,
.root[data-v-3b2f1a78] *:before,
.root[data-v-3b2f1a78] *:after {
  box-sizing: inherit;
}
.body[data-v-3b2f1a78] {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  border-left: 1px solid #f1f1f1;
}
.dark-theme .body[data-v-3b2f1a78] {
  background-color: #383736;
  border-left-color: #2d2c2c;
}
.content[data-v-3b2f1a78] {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.error-box[data-v-3b2f1a78] {
  margin: 10px;
}
.chat-messages .error-box[data-v-3b2f1a78] {
  margin-left: 50px;
}
.loading-message[data-v-3b2f1a78] {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 30px;
  width: 100%;
  text-align: center;
}
.chat-messages[data-v-3b2f1a78] {
  width: 100%;
  display: inline-block;
  overflow: auto;
  flex-grow: 1;
}
</style><div data-server-rendered="true" class="js-thread-message-feed-root root" data-v-3b2f1a78><!----></div>
    <div class="chat-app">
      <div class="collaborators-container" id="collaborators-container"></div>
      <div class="trpContentPanel" id="content-wrapper">
  <div>
    <div class="trpChatPanel">

      <div id="unread-banner" style="display:none"></div>
      <div id="bottom-unread-banner" style="display:none"></div>

      <div id="content-frame" class="trpChatContainer primary-scroll chat-container" role="log" aria-live="polite" aria-atomic="false" aria-relevant="additions text">
        <div id="chat-container" role="list">
            <div>
                <div class="chat-item model-id-54837cfc6bb3149254916bc6 burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-54837cf6db8155e6700dc843 avatar-s offline  ">
  <img src="https://avatars1.githubusercontent.com/u/6192661?v=4&amp;s=30" srcset="https://avatars1.githubusercontent.com/u/6192661?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>camspilly</div>
      <div class='chat-item__username js-chat-item-from'>@camspilly</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar5.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      HARROH
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-54a660669597baaa7dcee014 burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-54a6605ddb8155e6700e4df8 avatar-s offline  ">
  <img src="https://avatars0.githubusercontent.com/u/9009392?v=3&amp;s=30" srcset="https://avatars0.githubusercontent.com/u/9009392?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>seminice</div>
      <div class='chat-item__username js-chat-item-from'>@seminice</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar6.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      Hello
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-54a660729597baaa7dcee015 burstContinued read  " role="listitem"><div class='chat-item__container'>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__text js-chat-item-text'>
      where can I find the source code for the official stellar website
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-54a6788529aec36b6af1d012 burstStart read deleted " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-545aff36db8155e6700d1b96 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/u/696693?v=3&amp;s=30" srcset="https://avatars2.githubusercontent.com/u/696693?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
      <div id='initial' style="position:relative;top:-120px; left: 0; height:0;width:0;overflow:hidden"><a name="initial"/>_</a></div>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>Mark Dalgleish</div>
      <div class='chat-item__username js-chat-item-from'>@markdalgleish</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar7.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      <i>This message was deleted</i>
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-54a6789d9597baaa7dcee0d5 burstContinued read  " role="listitem"><div class='chat-item__container'>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__text js-chat-item-text'>
      <span data-link-type="mention" data-screen-name="seminice" class="mention">@seminice</span> <a href="static/js/stellar1.js-site" rel="nofollow" target="_blank" class="link">static/js/stellar1.js-site</a>
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-5585036f6f7465873a3610bb burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-5584653d15522ed4b3e22d07 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/u/5774448?v=4&amp;s=30" srcset="https://avatars2.githubusercontent.com/u/5774448?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>Shekhar Prasad Rajak</div>
      <div class='chat-item__username js-chat-item-from'>@Shekharrajak</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar8.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      hi
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-55f8378218e0111d7e4ef6d4 burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-55f8376d0fc9f982beb0c293 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/u/14173394?v=3&amp;s=30" srcset="https://avatars2.githubusercontent.com/u/14173394?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>ahmed hamdy</div>
      <div class='chat-item__username js-chat-item-from'>@ahmed7amdy</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar9.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      hi
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-55fd95ee0ed44a00046f07ee burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-55fd95b60fc9f982beb1305b avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/u/4382091?v=4&amp;s=30" srcset="https://avatars2.githubusercontent.com/u/4382091?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>Taisuke Mino</div>
      <div class='chat-item__username js-chat-item-from'>@taisukemino</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar10.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      does anyone know about the browser compatibility of stellar.js?
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-562e524346d541e7122752ff burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-562e503716b6c7089cb84e78 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/u/15327644?v=3&amp;s=30" srcset="https://avatars2.githubusercontent.com/u/15327644?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>nk2014</div>
      <div class='chat-item__username js-chat-item-from'>@nk2014</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar11.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      hi! Can anybody help me to solve my problem when using stellar.js for my website? Thanks all. My problem is: i want to design a parallax web has both horizaltal and vertical parallax but only use vertical scrollbar, the same <a href="http://ao.com/life/kitchen/kitchen-tips/wasteless/" rel="nofollow" target="_blank" class="link">http://ao.com/life/kitchen/kitchen-tips/wasteless/</a>. Thanks a lot!
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-569d20f25de13b3f15e3c1dd burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-569d1feae610378809bceb6c avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/u/10549584?v=3&amp;s=30" srcset="https://avatars2.githubusercontent.com/u/10549584?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>Pablinus</div>
      <div class='chat-item__username js-chat-item-from'>@Pablinus</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar12.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      Hi <span data-link-type="mention" data-screen-name="markdalgleish" class="mention">@markdalgleish</span>. I&#39;m using stellar to upload a premium theme on themeforest. The plug in works great!!! But I have an issue. After apply $.stellar(&#39;refresh&#39;); I have to scroll to get the final position of my parallax elements and background images. How can I fix this, if I can? Thanks in advance.
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-56afa1cd8fbaf4220afaa29f burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-5568a26015522ed4b3e122bd avatar-s offline  ">
  <img src="https://avatars0.githubusercontent.com/u/6988442?v=4&amp;s=30" srcset="https://avatars0.githubusercontent.com/u/6988442?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>Sergey Veremiychuk</div>
      <div class='chat-item__username js-chat-item-from'>@veremey</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar13.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      it not working in IE10! Why?
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-56ec721dbb4a1731739b210e burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-56ec71b285d51f252ab99377 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/u/8103091?v=3&amp;s=30" srcset="https://avatars2.githubusercontent.com/u/8103091?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>nagliy</div>
      <div class='chat-item__username js-chat-item-from'>@nagliy</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar14.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      hey there i put for div with background-image (no-repeat top center fixed) &#39;data-stellar-background-ratio=&quot;0.5&quot;&#39;  and have got empty space from left
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-56ec724cce5b0c6e7a1bea8c burstContinued read  " role="listitem"><div class='chat-item__container'>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__text js-chat-item-text'>
      if i put data-stellar-background-ratio=&quot;1&quot; i&#39;ve got bigger empty space from left
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-56ec72a1dec81665365db3af burstContinued read  " role="listitem"><div class='chat-item__container'>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__text js-chat-item-text'>
      <span data-link-type="mention" data-screen-name="markdalgleish" class="mention">@markdalgleish</span> please, help me )
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-56ec733bdec81665365db3db burstContinued read  " role="listitem"><div class='chat-item__container'>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__text js-chat-item-text'>
      oh i see, just need to delete no-repeat top center fixed
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-578e07179f35137e67d675de burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-55c649130fc9f982beacb313 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/u/366217?v=4&amp;s=30" srcset="https://avatars2.githubusercontent.com/u/366217?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>Bishisht Bhatta</div>
      <div class='chat-item__username js-chat-item-from'>@bishisht</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar15.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      hello all. need some help 
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-578e071f16487c5e51510640 burstContinued read  " role="listitem"><div class='chat-item__container'>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__text js-chat-item-text'>
      i still cant understand stellar properly 
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-578e072cac85f2507ac99d13 burstContinued read  " role="listitem"><div class='chat-item__container'>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__text js-chat-item-text'>
      can someone show me some videos so that i can learn quickly?
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-578e072f9f35137e67d67884 burstContinued read  " role="listitem"><div class='chat-item__container'>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__text js-chat-item-text'>
      tansk
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-578e0731ac85f2507ac99d17 burstContinued read  " role="listitem"><div class='chat-item__container'>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__text js-chat-item-text'>
      thanks
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-579f2b8907d2d2396e31e262 burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-579f2af040f3a6eec05d678a avatar-s offline  ">
  <img src="https://pbs.twimg.com/profile_images/475921415393128448/ta1sxm_G_bigger.jpeg" srcset="https://pbs.twimg.com/profile_images/475921415393128448/ta1sxm_G_bigger.jpeg 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>Sam Begdouri</div>
      <div class='chat-item__username js-chat-item-from'>@sambegdouri_twitter</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar16.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      this might help some, but it&#39;s not working great for me...
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-579f2b8be56d2538041f2e19 burstContinued read  " role="listitem"><div class='chat-item__container'>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__text js-chat-item-text'>
      <a href="https://www.youtube.com/watch?v=NUsEGbSbMZ4" rel="nofollow" target="_blank" class="link">https://www.youtube.com/watch?v=NUsEGbSbMZ4</a>
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-57e967a0ab9ba81255e64c71 burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-57bef84640f3a6eec0614860 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/u/10743398?v=3&amp;s=30" srcset="https://avatars2.githubusercontent.com/u/10743398?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>Gurubaran</div>
      <div class='chat-item__username js-chat-item-from'>@bguru</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar17.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      <p>I really need help in replicating this site. Any tips suggestion and study materials or tutorial sites where should i start with? Point me in some direction. I need to build a multi-directional JQuery parallax page for a client - they basically want it to work in a similar way to this <a href="https://www.g-star.com/en_nl/raw/index.htm" rel="nofollow" target="_blank" class="link">https://www.g-star.com/en_nl/raw/index.htm</a></p><p>I have the artwork ready and have found many jquery libraries that will allow me to scroll horiz/vertical - but i&#39;m not sure how to combine both together at a specific co-ordinate. Could anyone please point me in a the right direction?</p>
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-5833ea0cb07a1fd348273d18 burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-5833ea05d73408ce4f37bfab avatar-s offline  ">
  <img src="https://avatars0.githubusercontent.com/u/9862745?v=3&amp;s=30" srcset="https://avatars0.githubusercontent.com/u/9862745?v=3&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>Nilesh Rathod</div>
      <div class='chat-item__username js-chat-item-from'>@nileshprolix</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar18.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      hi
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-5833ea37cc0ea2cf777e04e0 burstContinued read  " role="listitem"><div class='chat-item__container'>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__text js-chat-item-text'>
      please help me , i used jquery 3, not steller worked  
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-5833ea3abc17b2e756fdc0b7 burstContinued read  " role="listitem"><div class='chat-item__container'>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__text js-chat-item-text'>
      why ?
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-58b9aaeb7ceae5376a68b7e7 burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-56e40e2a85d51f252ab86fd2 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/u/13897936?v=4&amp;s=30" srcset="https://avatars2.githubusercontent.com/u/13897936?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>Pavinthan</div>
      <div class='chat-item__username js-chat-item-from'>@pavinthan</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar19.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      Uncaught Error: Cannot find module &quot;jquery.stellar&quot;
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-5975fac845fc670746c06d80 burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-5973ad0dd73408ce4f6e5563 avatar-s offline  ">
  <img src="https://avatars2.githubusercontent.com/u/29534101?v=4&amp;s=30" srcset="https://avatars2.githubusercontent.com/u/29534101?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>Martin Teysera</div>
      <div class='chat-item__username js-chat-item-from'>@Uyer</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar20.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      Hello?
    </div>
  </div>
</div>
</div>
                <div class="chat-item model-id-5a7e1c1e7084124a345a4083 burstStart read  " role="listitem"><div class='chat-item__container'>
  <div class='chat-item__aside'>
    <div class="chat-item__avatar">
      <div
  class="trpDisplayPicture avatar-5a7e1bc3d73408ce4f8c7b64 avatar-s offline  ">
  <img src="https://avatars1.githubusercontent.com/u/1253515?v=4&amp;s=30" srcset="https://avatars1.githubusercontent.com/u/1253515?v=4&amp;s=60 2x" height="30" width="30" class="avatar__image" alt="">
  
</div>

    </div>
  </div>
    <div class="chat-item__actions js-chat-item-actions">
      <i class="chat-item__icon icon-check chat-item__icon--read js-chat-item-readby"></i>
      <i class="chat-item__icon icon-ellipsis"></i>
    </div>
  <div class='chat-item__content'>
    <div class='chat-item__details'>
      <div class='chat-item__from js-chat-item-from'>Max</div>
      <div class='chat-item__username js-chat-item-from'>@cowpig</div>
      <a class='chat-item__time js-chat-time'  href='static/js/stellar21.js' title=""></a>
    </div>
    <div class='chat-item__text js-chat-item-text'>
      hey I don&#39;t know if this is the right place to ask about this, but I signed up for an account with free stellar in 2015. I went now to recover it and the links all seem to be dead
    </div>
  </div>
</div>
</div>
            </div>
        </div>
      </div>
    </div>
    <div class="chat-connectivity-indicator-wrapper"></div>
  </div>
</div>
      <footer class="chat-input chat-input-nli" id="chat-input-wrapper">
  <a href="/login?action=login" target="_top" class="chat-input__btn">
  Sign in to start talking
  </a>
</footer>
    </div>
  </div>
</div>
<div class="trpBlankPage"></div>
<script type="text/javascript">
    var s = document.querySelector('#initial');
    if(s) setTimeout(function() {
      s.scrollIntoView();
    }, 16) ;
</script>

      </div>
    </div>

    
    <div class="js-drag-overlay drag-frame hide">
      <span class="octicon octicon-arrow-down"></span>
    </div>


    <script type="text/javascript">window.gitterClientEnv = {"lang":"zh","domain":"gitter.im","baseServer":"gitter.im","basePath":"https://gitter.im","apiBasePath":"https://gitter.im/api","homeUrl":"/","badgeBaseUrl":"https://badges.gitter.im","googleTrackingId":"UA-45918290-1","googleTrackingDomain":"gitter.im","env":"prod","cdns":["cdn01.gitter.im","cdn02.gitter.im","cdn03.gitter.im"],"version":"07c505","assetTag":"07c505b13","exportEnabled":true,"logging":false,"ravenUrl":"https://be4e47abe6ae4ed58bd8a5326124638e@sentry.matrix.org/25","websockets":{"fayeUrl":"https://ws.gitter.im/bayeux","options":{"timeout":120,"retry":2}},"avatarsUrl":"https://avatars.gitter.im","avatarCdns":["https://avatars-01.gitter.im","https://avatars-02.gitter.im","https://avatars-03.gitter.im","https://avatars-04.gitter.im","https://avatars-05.gitter.im"],"vapidAppServerKey":"BMhrlZd_I5OFJSJQTbg2mZ5PTHarzenwsKfsRd8C0-HRBygpDj9O3M4VTJIQfB9VPDjAoO_w2eg7Sj_cMXzuLwI","headlineNumbers":{"gitterUsers":"800K+","gitterRooms":"300K+","gitterGroups":"90K+","gitterCountries":"100+"},"inviteEmailAbuseThresholdPerDay":10};window.troupeContext = {"accessToken":"$RsMtD7OWYWREtDuKm+tIjYW8BOseWgE7IDPAHw6TH7g=","isNativeDesktopApp":false,"locale":{"%d unread message":{"one":"%d条未读信息","other":"%d条未读信息"},"Unread messages in %%s, %%s and one other":{"one":"在%%s, %%s和另一组中有未读消息","other":"在 %%s, %%s 和其他 %d 个组中有未读消息"},"Unread messages in %s":"在 %s 中有未读消息","Unread messages in %s and %s":"在 %s 和 %s 中有未读消息","Unread messages from %s":"来自 %s 的未读消息","Unread messages from %s and %s":"来自 %s 和 %s 的未读消息","Unread messages from %%s, %%s and one other":{"one":"来自 %%s, %%s 和另一组的未读消息","other":"来自 %%s, %%s 和其他 %d 个组的未读消息"},"Gitter is available in all modern browsers as well as apps for desktops.":"Gitter is available in all modern browsers as well as apps for desktops.","Mac":"Mac","Windows":"Windows","Linux 32":"Linux 32","Linux 64":"Linux 64","The above Mac installer is a signed version of 1.177 (backed by Safari). For an unsigned 5.0.1 installer (backed by <a %s>NW.js<\/a>), <a %s>click here to download<\/a>. Mac users on 10.9 or lower, <a %s>download here<\/a>.":"The above Mac installer is a signed version of 1.177 (backed by Safari). For an unsigned 5.0.1 installer (backed by <a %s>NW.js<\/a>), <a %s>click here to download<\/a>. Mac users on 10.9 or lower, <a %s>download here<\/a>.","We also have a sweet little <a %s>IRC bridge<\/a>.":"We also have a sweet little <a %s>IRC bridge<\/a>.","The dedicated Gitter Android/iOS apps are no longer recommended and are officially <a href='%s' target='_blank'>deprecated<\/a>. For Android/iOS, we bridge all public rooms over to Matrix, so you can use any <a href='%s' target='_blank'>Matrix client<\/a> like <a href='%s' target='_blank'>Element (Android)<\/a> or <a href='%s' target='_blank'>Element (iOS)<\/a> to access those rooms.":"The dedicated Gitter Android/iOS apps are no longer recommended and are officially <a href='%s' target='_blank'>deprecated<\/a>. For Android/iOS, we bridge all public rooms over to Matrix, so you can use any <a href='%s' target='_blank'>Matrix client<\/a> like <a href='%s' target='_blank'>Element (Android)<\/a> or <a href='%s' target='_blank'>Element (iOS)<\/a> to access those rooms.","Our efforts are focused on the <a %s>webapp<\/a> which is the backbone of the mobile/desktop apps but mainly focused on the web experience. There are a number of bugs in these desktop/mobile clients and they spread the Gitter team too thin for us to give them proper attention. The apps are open-source if you want to tackle something particularly annoying to you.":"Our efforts are focused on the <a %s>webapp<\/a> which is the backbone of the mobile/desktop apps but mainly focused on the web experience. There are a number of bugs in these desktop/mobile clients and they spread the Gitter team too thin for us to give them proper attention. The apps are open-source if you want to tackle something particularly annoying to you.","desktop":"desktop","iOS":"iOS","Android":"Android","Documentation":"Documentation","API":"API","Blog":"Blog","Twitter":"Twitter"},"features":[],"roomMember":false,"user":null,"troupe":{"id":"5463b6d7db8155e6700d403d","name":"markdalgleish/stellar.js","topic":"Stellar.js - Parallax scrolling made easy","avatarUrl":"https://avatars-05.gitter.im/group/iv/4/57542caec43b8c6019775841","uri":"markdalgleish/stellar.js","userCount":41,"url":"/markdalgleish/stellar.js","githubType":"REPO","associatedRepo":"markdalgleish/stellar.js","security":"PUBLIC","groupId":"57542caec43b8c6019775841","group":{"id":"57542caec43b8c6019775841","name":"markdalgleish","uri":"markdalgleish","homeUri":"markdalgleish/home","backedBy":{"type":"GH_USER","linkPath":"markdalgleish"},"avatarUrl":"https://avatars-05.gitter.im/group/iv/4/57542caec43b8c6019775841"},"backend":{"type":"GH_REPO","linkPath":"markdalgleish/stellar.js"},"public":true,"v":34},"roomHasWelcomeMessage":false,"snapshots":{"rightToolbar":{},"allRooms":[],"groups":[]},"permalinkChatId":"54a6788529aec36b6af1d012"};</script>
    
    <script type="text/javascript">window.webpackPublicPath = '//cdn02.gitter.im/_s/07c505b13/js/';</script>
    <script type="text/javascript" src="static/js/runtime.bundle.js"></script>
<script type="text/javascript" src="static/js/vendor.chunk.js"></script>
<script type="text/javascript" src="static/js/default.chunk.js"></script>
<script type="text/javascript" src="static/js/router-nli-chat.chunk.js"></script>
<script type="text/javascript" src="static/js/router-app.chunk.js"></script>
  
  </body>
</html>
