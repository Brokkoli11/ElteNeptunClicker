// ==UserScript==
// @name         Neptun Clicker
// @namespace    https://github.com/Brokkoli11/ElteNeptunClicker
// @version      1.0
// @downloadURL  https://raw.githubusercontent.com/Brokkoli11/ElteNeptunClicker/main/NeptunClicker.js
// @description  Click "Hallgatói web" on elte neptun site.
// @author       Brokkoli11
// @include      https://neptun.elte.hu/*
// @exclude      https://neptun.elte.hu/ToNeptunWeb/ToNeptunHWeb
// @grant        none
// ==/UserScript==



(function() {

        var button = document.querySelector('body > header > nav > div > a.nav-link.pl-3.pr-0');
        button.click();
}

)();
