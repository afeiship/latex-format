"use strict";
/*!
 * name: @jswork/latex-format
 * description: Latex formater.
 * homepage:
 * version: 1.0.0
 * date: 2021-01-14 15:37:38
 * license: MIT
 */
exports.__esModule = true;
exports["default"] = (function (inLatex) {
    return inLatex.replace(/\\ /g, '').replace(/\s+/g, '');
});
