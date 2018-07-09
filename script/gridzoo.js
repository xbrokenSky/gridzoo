'use strict';
function o(el) {
    return document.getElementById(el);
}
function c(el) {
    return document.getElementsByClassName(el);
}
// -----------------------------------------------------------------------navigation tabs logic starting up here---------------------------------------------------------
var moreTab = o('more-tab');
var moreDrop = o('more-dropdown-block');
var moreState = false;

moreTab.onclick = function(e) {
    articleDrop.style.display='none';
    articleState = false;
    platformDrop.style.display='none';
    platformState = false;
    newsDrop.style.display='none';
    newsState = false;
    e.stopPropagation();
    if (!moreState) {
        moreDrop.style.display='block';
        moreState = true;
    } else {
        moreDrop.style.display='none';
        moreState = false;
    }
    return false;
}

var articleTab = o('articles-tab-mob');
var articleDrop = o('articles-dropdown-block-mob');
var articleState = false;

articleTab.onclick = function(e) {
    moreDrop.style.display='none';
    moreState = false;
    platformDrop.style.display='none';
    platformState = false;
    newsDrop.style.display='none';
    newsState = false;
    e.stopPropagation();
    if (!articleState) {
        articleDrop.style.display='block';
        articleState = true;
    } else {
        articleDrop.style.display='none';
        articleState = false;
    }
    return false;
}

var platformTab = o('platforms-tab-mob');
var platformDrop = o('platforms-dropdown-block-mob');
var platformState = false;

platformTab.onclick = function(e) {
    moreDrop.style.display='none';
    moreState = false;
    articleDrop.style.display='none';
    articleState = false;
    newsDrop.style.display='none';
    newsState = false;
    e.stopPropagation();
    if (!platformState) {
        platformDrop.style.display='block';
        platformState = true;
    } else {
        platformDrop.style.display='none';
        platformState = false;
    }
    return false;
}

var newsTab = o('news-tab-mob');
var newsDrop = o('news-dropdown-block-mob');
var newsState = false;

newsTab.onclick = function(e) {
    moreDrop.style.display='none';
    moreState = false;
    articleDrop.style.display='none';
    articleState = false;
    platformDrop.style.display='none';
    platformState = false;
    e.stopPropagation();
    if (!newsState) {
        newsDrop.style.display='block';
        newsState = true;
    } else {
        newsDrop.style.display='none';
        newsState = false;
    }
    return false;
}

var searchTab = o('search-button');
var searchDrop = o('search-modal-block');
var body = document.getElementsByTagName('body')[0];
var searchState = false;

searchTab.onclick = function(e) {
    var searchInput = o('search-input');
    newsDrop.style.display='none';
    newsState = false;
    moreDrop.style.display = 'none';
    moreState = false;
    articleDrop.style.display = 'none';
    articleState = false;
    platformDrop.style.display = 'none';
    platformState = false;
    e.stopPropagation();
    if (!searchState) {
        searchDrop.style.display = 'block';
        searchState = true;
        body.style.overflow = 'hidden';
        searchInput.focus();
        if(!mobileStyle.display==='none') {
            searchTab.querySelector('.search-icon').style.fill = 'black';
        }
    } else {
        searchDrop.style.display = 'none';
        searchState = false;
        body.style.overflow = 'auto';
        searchTab.querySelector('.search-icon').style.fill = '';
    }
    return false;
}

var loginTab = o('login-button');
var registerTab = o('register-button');
var modalWindow = o('modal-window');
var loginBlock = o('login-block');
var loginInput = o('login-name');
var registerBlock = o('register-block');
var registerInput = o('register-name');

var modalState = false;
var loginState = false;
var registerState = false;

loginTab.onclick = function(e) {
    e.stopPropagation();
    if (!modalState) {
        modalWindow.style.transition = 'background 300ms 100ms, top, opacity 300ms 100ms';
        modalWindow.style.top = '0';
        modalWindow.style.background = 'rgba(0, 0, 0, 0.8)';
        modalWindow.style.opacity = '1';
        modalState = true;
        loginBlock.style.transition = 'top 350ms 100ms, opacity 350ms 100ms';
        loginBlock.style.top = '10vh';
        loginBlock.style.opacity = '1';
        loginInput.focus();
        body.style.overflow = 'hidden';
    }
    return false; 
}

registerTab.onclick = function(e) {
    e.stopPropagation();
    var registerInput = o('register-name');
    if (!modalState) {
        modalWindow.style.transition = 'background 300ms 100ms, top, opacity 300ms 100ms';
        modalWindow.style.top = '0';
        modalWindow.style.background = 'rgba(0, 0, 0, 0.8)';
        modalWindow.style.opacity = '1';
        modalState = true;
        registerBlock.style.transition = 'top 350ms 100ms, opacity 350ms 100ms';
        registerBlock.style.top = '10vh';
        registerBlock.style.opacity = '1';
        registerInput.focus();
        body.style.overflow = 'hidden';
    }
    return false; 
}

var toRegSwitch = o('to-reg');
var toLogSwitch = o('to-login');

toRegSwitch.onclick = function(e) {
    e.stopPropagation();
    registerBlock.style.transition = 'top, opacity';
    registerBlock.style.top = '10vh';
    registerBlock.style.opacity = '1';
    registerBlock.style.zIndex = '1';
    registerInput.focus()
    return false;
}
toLogSwitch.onclick = function(e) {
    e.stopPropagation();
    registerBlock.style.transition = 'top, opacity';
    registerBlock.style.top = '-330px';
    registerBlock.style.opacity = '0';
    registerBlock.style.zIndex = '';
    loginBlock.style.transition = 'top, opacity';
    loginBlock.style.top = '10vh';
    loginBlock.style.opacity = '1';
    loginBlock.style.zIndex = '1';
    loginInput.focus()
    return false;
}

var addNewsTab = o('add-news-tab');
var addNewsBlock = o('add-news-block');
var newsExp = o('news-expander');

addNewsTab.onclick = function(e) {
    e.stopPropagation();
    addNewsBlock.style.visibility = 'visible';
    addNewsBlock.style.height = 'auto';
    addNewsTab.style.display = 'none';
    newsExp.style.justifyContent = 'center';
    return false;
}

var navArrowTab = o('nav-arrow-block');
var navArrow = o('nav-arrow');
var header = o('header');

var pastScroll = window.pageYOffset || document.documentElement.scrollTop;
var mobileStyle = window.getComputedStyle(navArrowTab, null);

window.addEventListener('scroll', scrollWatch, false);
function scrollWatch(e) {
    if (window.scrollY > 200) {
        navArrow.className = 'scrolled';
    } else {
        navArrow.className = 'unscrolled';
    }  
    if (mobileStyle.display === 'none') {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop; 
        if (currentScroll > pastScroll) {
        header.style.top = '-100px';
        } else {
        header.style.top = '0';
        }
        pastScroll = currentScroll;
    }
    return false;
}

navArrowTab.onclick = function(e) {
    e.stopPropagation();
    if(navArrow.className === 'scrolled') {
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        window.scrollTo({top: 4000, behavior: 'smooth'});
    }
    return false;
}

window.addEventListener('click', stateWatch, false);
function stateWatch(e) {
    if (e.target !== moreTab) {
        moreDrop.style.display = 'none';
        moreState = false;
    }
    if (e.target !== articleTab) {
        articleDrop.style.display='none';
        articleState = false;
    }
    if (e.target !== platformTab) {
        platformDrop.style.display='none';
        platformState = false;
    }
    if (e.target !== newsTab) {
        newsDrop.style.display = 'none';
        newsState = false;
    }
    if (e.target === modalWindow) {
        modalWindow.style.top = '-1200px';
        modalWindow.style.background = '';
        modalWindow.style.opacity = '0';
        modalWindow.style.transition = 'background 250ms, opacity 500ms 150ms, top 600ms 130ms';
        modalState = false;
        loginBlock.style.top = '-275px';
        loginBlock.style.opacity = '0';
        loginBlock.style.transition = 'top 600ms, opacity 600ms 120ms';
        registerBlock.style.top = '-330px';
        registerBlock.style.opacity = '0';
        registerBlock.style.transition = 'top 600ms, opacity 600ms 120ms';
        setTimeout(function() {body.style.overflow = 'auto'; return false;}, 330);
    }
    return false;
}


// moreDrop.style.display = moreDrop.style.display !== 'block' ? 'block' : 'none'; 




