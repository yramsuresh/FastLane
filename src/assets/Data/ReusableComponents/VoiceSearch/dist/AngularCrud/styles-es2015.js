(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* .bs-datepicker */\n.bs-datepicker {\n  display: flex;\n  align-items: stretch;\n  flex-flow: row wrap;\n  background: #fff;\n  box-shadow: 0 0 10px 0 #aaa;\n  position: relative;\n  z-index: 1;\n  /* button */\n  /* .bs-datepicker-head */\n  /* .bs-datepicker-body */\n  /* .current-timedate */\n  /* .bs-datepicker-multiple */\n  /* .bs-datepicker-btns */\n  /*.bs-datepicker-custom-range */\n  /* .bs-datepicker-predefined-btns */\n  /* .bs-datepicker-buttons */ }\n.bs-datepicker:after {\n    clear: both;\n    content: '';\n    display: block; }\n.bs-datepicker bs-day-picker {\n    float: left; }\n.bs-datepicker button:hover,\n  .bs-datepicker button:focus,\n  .bs-datepicker button:active,\n  .bs-datepicker input:hover,\n  .bs-datepicker input:focus,\n  .bs-datepicker input:active,\n  .bs-datepicker-btns button:hover,\n  .bs-datepicker-btns button:focus,\n  .bs-datepicker-btns button:active,\n  .bs-datepicker-predefined-btns button:active,\n  .bs-datepicker-predefined-btns button:focus {\n    outline: none; }\n.bs-datepicker-head {\n    min-width: 270px;\n    height: 50px;\n    padding: 10px;\n    border-radius: 3px 3px 0 0;\n    text-align: justify;\n    /* .bs-datepicker-head button */ }\n.bs-datepicker-head:after {\n      content: \"\";\n      display: inline-block;\n      vertical-align: top;\n      width: 100%; }\n.bs-datepicker-head button {\n      display: inline-block;\n      vertical-align: top;\n      padding: 0;\n      height: 30px;\n      line-height: 30px;\n      border: 0;\n      background: transparent;\n      text-align: center;\n      cursor: pointer;\n      color: #fff;\n      transition: 0.3s; }\n.bs-datepicker-head button[disabled], .bs-datepicker-head button[disabled]:hover, .bs-datepicker-head button[disabled]:active {\n        background: rgba(221, 221, 221, 0.3);\n        color: #f5f5f5;\n        cursor: not-allowed; }\n.bs-datepicker-head button.next, .bs-datepicker-head button.previous {\n        border-radius: 50%;\n        width: 30px;\n        height: 30px; }\n.bs-datepicker-head button.next span, .bs-datepicker-head button.previous span {\n          font-size: 28px;\n          line-height: 1;\n          display: inline-block;\n          position: relative;\n          height: 100%;\n          width: 100%;\n          border-radius: 50%; }\n.bs-datepicker-head button.current {\n        border-radius: 15px;\n        max-width: 155px;\n        padding: 0 13px; }\n.bs-datepicker-head button:hover {\n    background-color: rgba(0, 0, 0, 0.1); }\n.bs-datepicker-head button:active {\n    background-color: rgba(0, 0, 0, 0.2); }\n.bs-datepicker-body {\n    padding: 10px;\n    border-radius: 0 0 3px 3px;\n    min-height: 232px;\n    min-width: 278px;\n    border: 1px solid #e9edf0;\n    /* .bs-datepicker-body table */ }\n.bs-datepicker-body .days.weeks {\n      position: relative;\n      z-index: 1; }\n.bs-datepicker-body table {\n      width: 100%;\n      border-collapse: separate;\n      border-spacing: 0;\n      /* .bs-datepicker-body table.days */\n      /* .bs-datepicker-body table.weeks */ }\n.bs-datepicker-body table th {\n        font-size: 13px;\n        color: #9aaec1;\n        font-weight: 400;\n        text-align: center; }\n.bs-datepicker-body table td {\n        color: #54708b;\n        text-align: center;\n        position: relative;\n        padding: 0; }\n.bs-datepicker-body table td span {\n          display: block;\n          margin: 0 auto;\n          font-size: 13px;\n          border-radius: 50%;\n          position: relative;\n          /*z-index: 1;*/\n          -moz-user-select: none;\n          -webkit-user-select: none;\n          -ms-user-select: none; }\n.bs-datepicker-body table td:not(.disabled):not(.week) span:not(.disabled):not(.is-other-month) {\n          cursor: pointer; }\n.bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          transition: 0s; }\n.bs-datepicker-body table td.is-active-other-month:not(.disabled):not(.selected) span,\n        .bs-datepicker-body table td span.is-active-other-month:not(.disabled):not(.selected) {\n          background-color: #e9edf0;\n          transition: 0s;\n          cursor: pointer; }\n.bs-datepicker-body table td span.disabled,\n        .bs-datepicker-body table td.disabled span {\n          color: #9aaec1; }\n.bs-datepicker-body table td span.selected,\n        .bs-datepicker-body table td.selected span {\n          color: #fff; }\n.bs-datepicker-body table td span.is-other-month,\n        .bs-datepicker-body table td.is-other-month span {\n          color: rgba(0, 0, 0, 0.25); }\n.bs-datepicker-body table td.active {\n          position: relative; }\n.bs-datepicker-body table td.active.select-start:before {\n            left: 35%; }\n.bs-datepicker-body table td.active.select-end:before {\n            left: -85%; }\n.bs-datepicker-body table td span.active.select-start:after,\n        .bs-datepicker-body table td span.active.select-end:after,\n        .bs-datepicker-body table td.active.select-start span:after,\n        .bs-datepicker-body table td.active.select-end span:after {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          width: 100%;\n          height: 100%;\n          transition: 0.3s;\n          top: 0;\n          border-radius: 50%; }\n.bs-datepicker-body table td:before,\n        .bs-datepicker-body table td span:before {\n          content: \"\";\n          display: block;\n          position: absolute;\n          z-index: -1;\n          top: 6px;\n          bottom: 6px;\n          left: -2px;\n          right: -2px;\n          box-sizing: content-box;\n          background: transparent; }\n.bs-datepicker-body table td.active.select-start + td.active:before {\n          left: -20%; }\n.bs-datepicker-body table td:last-child.active:before {\n          border-radius: 0 3px 3px 0;\n          width: 125%;\n          left: -25%; }\n.bs-datepicker-body table td span[class*=\"select-\"],\n        .bs-datepicker-body table td[class*=\"select-\"] span {\n          border-radius: 50%;\n          color: #fff; }\n.bs-datepicker-body table.days td.active:not(.select-start):before, .bs-datepicker-body table.days td.in-range:not(.select-start):before,\n      .bs-datepicker-body table.days span.active:not(.select-start):before,\n      .bs-datepicker-body table.days span.in-range:not(.select-start):before {\n        background: #e9edf0; }\n.bs-datepicker-body table.days span {\n        width: 32px;\n        height: 32px;\n        line-height: 32px; }\n.bs-datepicker-body table.days span.select-start {\n          z-index: 2; }\n.bs-datepicker-body table.days span.is-highlighted.in-range:before, .bs-datepicker-body table.days span.in-range.select-end:before {\n          background: none;\n          right: 0;\n          left: 0; }\n.bs-datepicker-body table.days td.select-start + td.select-end:before,\n      .bs-datepicker-body table.days td.select-start + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.active + td.select-end:before,\n      .bs-datepicker-body table.days td.in-range + td.is-highlighted:before,\n      .bs-datepicker-body table.days td.in-range + td.select-end:before {\n        background: #e9edf0;\n        width: 100%; }\n.bs-datepicker-body table.weeks tr td:nth-child(2).active:before {\n        border-radius: 3px 0 0 3px;\n        left: 0;\n        width: 100%; }\n.bs-datepicker-body table:not(.weeks) tr td:first-child:before {\n        border-radius: 3px 0 0 3px; }\n.bs-datepicker-body table.years td span {\n        width: 46px;\n        height: 46px;\n        line-height: 45px;\n        margin: 0 auto; }\n.bs-datepicker-body table.years tr:not(:last-child) td span {\n        margin-bottom: 8px; }\n.bs-datepicker-body table.months td {\n        height: 52px; }\n.bs-datepicker-body table.months td span {\n          padding: 6px;\n          border-radius: 15px; }\n.bs-datepicker .current-timedate {\n    color: #54708b;\n    font-size: 15px;\n    text-align: center;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 20px;\n    border: 1px solid #e9edf0;\n    margin-bottom: 10px;\n    cursor: pointer;\n    text-transform: uppercase;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n.bs-datepicker .current-timedate span:not(:empty):before {\n      content: \"\";\n      width: 15px;\n      height: 16px;\n      display: inline-block;\n      margin-right: 4px;\n      vertical-align: text-bottom;\n      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC); }\n.bs-datepicker-multiple {\n    border-radius: 4px 0 0 4px; }\n.bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-left: 10px; }\n.bs-datepicker-multiple .bs-datepicker {\n      box-shadow: none;\n      position: relative; }\n.bs-datepicker-multiple .bs-datepicker:not(:last-child) {\n        padding-right: 10px; }\n.bs-datepicker-multiple .bs-datepicker + .bs-datepicker:after {\n        content: \"\";\n        display: block;\n        width: 14px;\n        height: 10px;\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);\n        position: absolute;\n        top: 25px;\n        left: -8px; }\n.bs-datepicker-multiple .bs-datepicker .left {\n        float: left; }\n.bs-datepicker-multiple .bs-datepicker .right {\n        float: right; }\n.bs-datepicker-container {\n    padding: 15px; }\n.bs-datepicker .bs-media-container {\n    display: flex; }\n@media (max-width: 768px) {\n      .bs-datepicker .bs-media-container {\n        flex-direction: column; } }\n.bs-datepicker-custom-range {\n    padding: 15px;\n    background: #eee; }\n.bs-datepicker-predefined-btns button {\n    width: 100%;\n    display: block;\n    height: 30px;\n    background-color: #9aaec1;\n    border-radius: 4px;\n    color: #fff;\n    border: 0;\n    margin-bottom: 10px;\n    padding: 0 18px;\n    text-align: left;\n    transition: 0.3s; }\n.bs-datepicker-predefined-btns button:hover {\n      background-color: #54708b; }\n.bs-datepicker-buttons {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-end;\n    padding-top: 10px;\n    border-top: 1px solid #e9edf0; }\n.bs-datepicker-buttons .btn-default {\n      margin-left: 10px; }\n/* .bs-timepicker */\n.bs-timepicker-container {\n  padding: 10px 0; }\n.bs-timepicker-label {\n  color: #54708b;\n  margin-bottom: 10px; }\n.bs-timepicker-controls {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px; }\n.bs-timepicker-controls button {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    border: 0;\n    background-color: #e9edf0;\n    color: #54708b;\n    font-size: 16px;\n    font-weight: 700;\n    vertical-align: middle;\n    line-height: 0;\n    padding: 0;\n    transition: 0.3s; }\n.bs-timepicker-controls button:hover {\n      background-color: #d5dadd; }\n.bs-timepicker-controls input {\n    width: 35px;\n    height: 25px;\n    border-radius: 13px;\n    text-align: center;\n    border: 1px solid #e9edf0; }\n.bs-timepicker .switch-time-format {\n  text-transform: uppercase;\n  min-width: 54px;\n  height: 25px;\n  border-radius: 20px;\n  border: 1px solid #e9edf0;\n  background: #fff;\n  color: #54708b;\n  font-size: 13px; }\n.bs-timepicker .switch-time-format img {\n    vertical-align: initial;\n    margin-left: 4px; }\nbs-datepicker-container,\nbs-daterangepicker-container {\n  z-index: 1080; }\n/* screen size < 1024px */\n@media (max-width: 768px) {\n  .bs-datepicker-multiple {\n    display: flex; }\n    .bs-datepicker-multiple + .bs-datepicker-multiple {\n      margin-top: 10px;\n      margin-left: 0; } }\n/* theming */\n.theme-default .bs-datepicker-head {\n  background-color: #777; }\n.theme-default .bs-datepicker-predefined-btns button.selected {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td span.selected,\n.theme-default .bs-datepicker-body table td.selected span,\n.theme-default .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-default .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #777; }\n.theme-default .bs-datepicker-body table td.week span {\n  color: #777; }\n.theme-default .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #777;\n  color: #fff;\n  opacity: 0.5;\n  transition: 0s; }\n.theme-green .bs-datepicker-head {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-predefined-btns button.selected {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td span.selected,\n.theme-green .bs-datepicker-body table td.selected span,\n.theme-green .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-green .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.week span {\n  color: #5cb85c; }\n.theme-green .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5cb85c;\n  color: #fff;\n  opacity: 0.5;\n  transition: 0s; }\n.theme-blue .bs-datepicker-head {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-predefined-btns button.selected {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td span.selected,\n.theme-blue .bs-datepicker-body table td.selected span,\n.theme-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.week span {\n  color: #5bc0de; }\n.theme-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #5bc0de;\n  color: #fff;\n  opacity: 0.5;\n  transition: 0s; }\n.theme-dark-blue .bs-datepicker-head {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-predefined-btns button.selected {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td span.selected,\n.theme-dark-blue .bs-datepicker-body table td.selected span,\n.theme-dark-blue .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-dark-blue .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.week span {\n  color: #337ab7; }\n.theme-dark-blue .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #337ab7;\n  color: #fff;\n  opacity: 0.5;\n  transition: 0s; }\n.theme-red .bs-datepicker-head {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-predefined-btns button.selected {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td span.selected,\n.theme-red .bs-datepicker-body table td.selected span,\n.theme-red .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-red .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #d9534f; }\n.theme-red .bs-datepicker-body table td.week span {\n  color: #d9534f; }\n.theme-red .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #d9534f;\n  color: #fff;\n  opacity: 0.5;\n  transition: 0s; }\n.theme-orange .bs-datepicker-head {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-predefined-btns button.selected {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td span.selected,\n.theme-orange .bs-datepicker-body table td.selected span,\n.theme-orange .bs-datepicker-body table td span[class*=\"select-\"]:after,\n.theme-orange .bs-datepicker-body table td[class*=\"select-\"] span:after {\n  background-color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.week span {\n  color: #f0ad4e; }\n.theme-orange .bs-datepicker-body table td.active-week span:hover {\n  cursor: pointer;\n  background-color: #f0ad4e;\n  color: #fff;\n  opacity: 0.5;\n  transition: 0s; }\n/*# sourceMappingURL=bs-datepicker.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zcmMvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLnNjc3MiLCJub2RlX21vZHVsZXMvc3JjL2RhdGVwaWNrZXIvdXRpbHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIm5vZGVfbW9kdWxlcy9zcmMvZGF0ZXBpY2tlci91dGlscy9zY3NzL21peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxtQkFBQTtBQUNBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZ0JDUm9CO0VEU3BCLDJCQ05vQjtFRE9wQixrQkFBa0I7RUFDbEIsVUFBVTtFQVlWLFdBQUE7RUFlQSx3QkFBQTtFQXlFQSx3QkFBQTtFQXFPQSxzQkFBQTtFQTJCQSw0QkFBQTtFQXFDQSx3QkFBQTtFQVlBLCtCQUFBO0VBTUEsbUNBQUE7RUFxQkEsMkJBQUEsRUFBNEI7QUF2YjlCO0lBVUksV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjLEVBQUE7QUFabEI7SUFnQkksV0FBVyxFQUFBO0FBaEJmOzs7Ozs7Ozs7OztJQStCSSxhQUFhLEVBQUE7QUFJZjtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFTbkIsK0JBQUEsRUFBZ0M7QUFkakM7TUFRRyxXQUFXO01BQ1gscUJBQXFCO01BQ3JCLG1CQUFtQjtNQUNuQixXQUFXLEVBQUE7QUFYZDtNQWdCRyxxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLFNBQVM7TUFDVCx1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixXQzNEZ0I7TUQ0RGhCLGdCQUFnQixFQUFBO0FBMUJuQjtRQStCSyxvQ0M3Q3VDO1FEOEN2QyxjQzdDc0I7UUQ4Q3RCLG1CQUFtQixF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akJ2QjtFQTZCVSxlQUFlO0VBQ2YseUJEYmE7RUNjYixXRDdCVTtFQzhCVixZQUFZO0VBQ1osY0FBYyxFQUFBO0FBakN4QjtFQUVJLHlCRGdCbUIsRUFBQTtBQ2xCdkI7RUFTVSx5QkRTYSxFQUFBO0FDbEJ2Qjs7OztFQXFCVSx5QkRIYSxFQUFBO0FDbEJ2QjtFQXlCVSxjRFBhLEVBQUE7QUNsQnZCO0VBNkJVLGVBQWU7RUFDZix5QkRaYTtFQ2FiLFdEN0JVO0VDOEJWLFlBQVk7RUFDWixjQUFjLEVBQUE7QUFqQ3hCO0VBRUkseUJEaUJtQixFQUFBO0FDbkJ2QjtFQVNVLHlCRFVhLEVBQUE7QUNuQnZCOzs7O0VBcUJVLHlCREZhLEVBQUE7QUNuQnZCO0VBeUJVLGNETmEsRUFBQTtBQ25CdkI7RUE2QlUsZUFBZTtFQUNmLHlCRFhhO0VDWWIsV0Q3QlU7RUM4QlYsWUFBWTtFQUNaLGNBQWMsRUFBQTtBQWpDeEI7RUFFSSx5QkRrQm1CLEVBQUE7QUNwQnZCO0VBU1UseUJEV2EsRUFBQTtBQ3BCdkI7Ozs7RUFxQlUseUJERGEsRUFBQTtBQ3BCdkI7RUF5QlUsY0RMYSxFQUFBO0FDcEJ2QjtFQTZCVSxlQUFlO0VBQ2YseUJEVmE7RUNXYixXRDdCVTtFQzhCVixZQUFZO0VBQ1osY0FBYyxFQUFBO0FDc2MxQiw0Q0FBNEMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3V0aWxzL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJ3V0aWxzL3Njc3MvbWl4aW5zJztcblxuLyogLmJzLWRhdGVwaWNrZXIgKi9cbi5icy1kYXRlcGlja2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGJhY2tncm91bmQ6ICRtYWluLWJnO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAwICRtYWluLWJveC1zaGFkb3c7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcblxuICAmOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGJzLWRheS1waWNrZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLyogYnV0dG9uICovXG4gIGJ1dHRvbjpob3ZlcixcbiAgYnV0dG9uOmZvY3VzLFxuICBidXR0b246YWN0aXZlLFxuICBpbnB1dDpob3ZlcixcbiAgaW5wdXQ6Zm9jdXMsXG4gIGlucHV0OmFjdGl2ZSxcbiAgJi1idG5zIGJ1dHRvbjpob3ZlcixcbiAgJi1idG5zIGJ1dHRvbjpmb2N1cyxcbiAgJi1idG5zIGJ1dHRvbjphY3RpdmUsXG4gICYtcHJlZGVmaW5lZC1idG5zIGJ1dHRvbjphY3RpdmUsXG4gICYtcHJlZGVmaW5lZC1idG5zIGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC8qIC5icy1kYXRlcGlja2VyLWhlYWQgKi9cbiAgJi1oZWFkIHtcbiAgICBtaW4td2lkdGg6IDI3MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLyogLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b24gKi9cbiAgICBidXR0b24ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAxO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgICAgJltkaXNhYmxlZF0sXG4gICAgICAmW2Rpc2FibGVkXTpob3ZlcixcbiAgICAgICZbZGlzYWJsZWRdOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRkaXNhYmxlZC1iYWNrZ3JvdW5kO1xuICAgICAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuXG4gICAgICAmLm5leHQsXG4gICAgICAmLnByZXZpb3VzIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5jdXJyZW50IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNTVweDtcbiAgICAgICAgcGFkZGluZzogMCAxM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtaGVhZCB7XG4gICAgYnV0dG9uIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB9XG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAuYnMtZGF0ZXBpY2tlci1ib2R5ICovXG4gICYtYm9keSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcbiAgICBtaW4taGVpZ2h0OiAyMzJweDtcbiAgICBtaW4td2lkdGg6IDI3OHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG5cbiAgICAuZGF5cy53ZWVrcyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC8qIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgKi9cbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgICBib3JkZXItc3BhY2luZzogMDtcblxuICAgICAgdGgge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICB0ZCB7XG4gICAgICAgIGNvbG9yOiAkZm9udC1jb2xvci0wMztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgLyp6LWluZGV4OiAxOyovXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvZG86IGNoZWNrIGZpcnN0IDpub3QoLmRpc2FibGVkKSB1c2FnZVxuICAgICAgICAmOm5vdCguZGlzYWJsZWQpOm5vdCgud2Vlaykgc3Bhbjpub3QoLmRpc2FibGVkKTpub3QoLmlzLW90aGVyLW1vbnRoKSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pcy1oaWdobGlnaHRlZDpub3QoLmRpc2FibGVkKTpub3QoLnNlbGVjdGVkKSBzcGFuLFxuICAgICAgICBzcGFuLmlzLWhpZ2hsaWdodGVkOm5vdCguZGlzYWJsZWQpOm5vdCguc2VsZWN0ZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaGxpZ2h0ZWQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMHM7XG4gICAgICAgIH1cblxuICAgICAgICAmLmlzLWFjdGl2ZS1vdGhlci1tb250aDpub3QoLmRpc2FibGVkKTpub3QoLnNlbGVjdGVkKSBzcGFuLFxuICAgICAgICBzcGFuLmlzLWFjdGl2ZS1vdGhlci1tb250aDpub3QoLmRpc2FibGVkKTpub3QoLnNlbGVjdGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hsaWdodGVkO1xuICAgICAgICAgIHRyYW5zaXRpb246IDBzO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4uZGlzYWJsZWQsXG4gICAgICAgICYuZGlzYWJsZWQgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAyO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Bhbi5zZWxlY3RlZCxcbiAgICAgICAgJi5zZWxlY3RlZCBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDE7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuLmlzLW90aGVyLW1vbnRoLFxuICAgICAgICAmLmlzLW90aGVyLW1vbnRoIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICYuc2VsZWN0LXN0YXJ0OmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiAzNSU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5zZWxlY3QtZW5kOmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiAtODUlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4uYWN0aXZlLnNlbGVjdC1zdGFydDphZnRlcixcbiAgICAgICAgc3Bhbi5hY3RpdmUuc2VsZWN0LWVuZDphZnRlcixcbiAgICAgICAgJi5hY3RpdmUuc2VsZWN0LXN0YXJ0IHNwYW46YWZ0ZXIsXG4gICAgICAgICYuYWN0aXZlLnNlbGVjdC1lbmQgc3BhbjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YmVmb3JlLFxuICAgICAgICBzcGFuOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgYm90dG9tOiA2cHg7XG4gICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICByaWdodDogLTJweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlLnNlbGVjdC1zdGFydCArIHRkLmFjdGl2ZTpiZWZvcmUge1xuICAgICAgICAgIGxlZnQ6IC0yMCU7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQuYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gICAgICAgICAgd2lkdGg6IDEyNSU7XG4gICAgICAgICAgbGVmdDogLTI1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXSxcbiAgICAgICAgJltjbGFzcyo9XCJzZWxlY3QtXCJdIHNwYW4ge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzICovXG4gICAgICAmLmRheXMge1xuICAgICAgICB0ZCxcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgJi5hY3RpdmU6bm90KC5zZWxlY3Qtc3RhcnQpOmJlZm9yZSxcbiAgICAgICAgICAmLmluLXJhbmdlOm5vdCguc2VsZWN0LXN0YXJ0KTpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGhpZ2hsaWdodGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcblxuICAgICAgICAgICYuc2VsZWN0LXN0YXJ0IHtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgICYuaXMtaGlnaGxpZ2h0ZWQuaW4tcmFuZ2U6YmVmb3JlLFxuICAgICAgICAgICYuaW4tcmFuZ2Uuc2VsZWN0LWVuZDpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgJi5zZWxlY3Qtc3RhcnQgKyB0ZC5zZWxlY3QtZW5kOmJlZm9yZSxcbiAgICAgICAgICAmLnNlbGVjdC1zdGFydCArIHRkLmlzLWhpZ2hsaWdodGVkOmJlZm9yZSxcbiAgICAgICAgICAmLmFjdGl2ZSArIHRkLmlzLWhpZ2hsaWdodGVkOmJlZm9yZSxcbiAgICAgICAgICAmLmFjdGl2ZSArIHRkLnNlbGVjdC1lbmQ6YmVmb3JlLFxuICAgICAgICAgICYuaW4tcmFuZ2UgKyB0ZC5pcy1oaWdobGlnaHRlZDpiZWZvcmUsXG4gICAgICAgICAgJi5pbi1yYW5nZSArIHRkLnNlbGVjdC1lbmQ6YmVmb3JlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRoaWdobGlnaHRlZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLndlZWtzICovXG4gICAgICAmLndlZWtzIHtcbiAgICAgICAgdHIge1xuICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpLmFjdGl2ZTpiZWZvcmUge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6bm90KC53ZWVrcykge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgdGR7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnllYXJzIHtcbiAgICAgICAgdGQge1xuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYubW9udGhzIHtcbiAgICAgICAgdGQge1xuICAgICAgICAgIGhlaWdodDogNTJweDtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAuY3VycmVudC10aW1lZGF0ZSAqL1xuICAuY3VycmVudC10aW1lZGF0ZSB7XG4gICAgY29sb3I6ICRmb250LWNvbG9yLTAzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICBzcGFuOm5vdCg6ZW1wdHkpOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE4QUFBQVFDQVlBQUFESlZpVUVBQUFCTWtsRVFWUW9VOVZUd1czQ1FCQ2NPVWdCdEVCS1NBdWtBbkJLTUUrd0ZDQWxZSWhrOHNRbHhGQUJ0SkFTY0FzdUFQQkVld1ljeENQOG91eHJQRHN6YTYxdWlWTjFvNlJOSEQ0aHRTQ21xNDlSZk83MUJ2TUpxQkJrSVRSZjFrbVVXNDluUVJDOWgxSTVBWmxCQ2xhTDhhUDFmS2dPT3hDeDhhU0xzK1ExOWVadU5POFFtUHFKUnRERmd1eTdPQWNEYkpQcysvQktWUERJUHJ2RDJaSmdXQW1WZTdPMHJJMFZxczFzZXlXVVhwdUpvcHBZQ2E1TCtVKytOcE5Qa3I1T0Uyb01kQVJzYjNneWtKVDV5ZFpjTDhaOVd3NjBueGcyTGhqT045bGk5T3dYWnpvK3hMYnAzbkMyczlDTDJScnVlR3lWcmd3Tm04SHBzQ3paOUVFVzZrcVhsbzFHUWUwM0Z6UC83VzhIbDBkQnR1N0JmN3p0Nm1Jd3ZYMVJ2ekRDbTcrcTNtQVcwRGwvR1BkVUNlWHJaTFQ5QnJEckdrbTRxbFB2QUFBQUFFbEZUa1N1UW1DQyk7XG4gICAgfVxuICB9XG5cbiAgLyogLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUgKi9cbiAgJi1tdWx0aXBsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG5cbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAuYnMtZGF0ZXBpY2tlciB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmICsgLmJzLWRhdGVwaWNrZXI6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQThBQUFBS0NBWUFBQUJyR3dUNUFBQUExRWxFUVZRb1U0MlJzUXJDVUF4Rjc3VnVEdTdPNG9NV1cvL0JVUkJCcFp2Z0trNHVJcmpvcUtPVGYrRG9wSU80dVlnZ3RGVGZ3Mytwa1FxQ1cxL0c1SjdrSmlGeTRtNU14VWx4QXpnSVBIWCtsek1QenVwUllsWWd4aVI3dnFzT1A4WUt6c1R4MHl4Rk1DVVorcTdhWnpscitPdmdvV2NBRnlBSGdhdDJqTFd1NDgyNTJEZHFBaWhESkdTU0pOVVV4WW1RanMzK2hQUUJsQWgyckcyTENPUG5hdzNJaUdEWDk5VFJDczdBU0pzTmhVT0E3ZC9MY3VIdlJHMjJGSVp2c05YdzFNWDZWWkV4Q2lsT1FLRWZlTFhyLzEwK2FDOUhvN2FyaDdvQUFBQUFTVVZPUks1Q1lJST0pO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgbGVmdDogLThweDtcbiAgICAgIH1cblxuICAgICAgLmxlZnQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cblxuICAgICAgLnJpZ2h0IHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIC5icy1kYXRlcGlja2VyLWJ0bnMgKi9cbiAgJi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAuYnMtbWVkaWEtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxuXG4gIC8qLmJzLWRhdGVwaWNrZXItY3VzdG9tLXJhbmdlICovXG4gICYtY3VzdG9tLXJhbmdlIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICRjdXN0b20tcmFuZ2UtYmc7XG4gIH1cblxuICAvKiAuYnMtZGF0ZXBpY2tlci1wcmVkZWZpbmVkLWJ0bnMgKi9cbiAgJi1wcmVkZWZpbmVkLWJ0bnMge1xuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1iZzI7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDE7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgcGFkZGluZzogMCAxOHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWJnMi1ob3ZlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiAuYnMtZGF0ZXBpY2tlci1idXR0b25zICovXG4gICYtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG5cbiAgICAuYnRuLWRlZmF1bHQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi8qIC5icy10aW1lcGlja2VyICovXG4uYnMtdGltZXBpY2tlciB7XG4gICYtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cblxuICAmLWxhYmVsIHtcbiAgICBjb2xvcjogJGZvbnQtY29sb3ItMDM7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gICYtY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidG4tYmc7XG4gICAgICBjb2xvcjogJGZvbnQtY29sb3ItMDM7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWJnLWhvdmVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLnN3aXRjaC10aW1lLWZvcm1hdCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtaW4td2lkdGg6IDU0cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAkbWFpbi1iZztcbiAgICBjb2xvcjogJGZvbnQtY29sb3ItMDM7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuXG4gICAgaW1nIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG4gIH1cbn1cblxuYnMtZGF0ZXBpY2tlci1jb250YWluZXIsXG5icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyIHtcbiAgei1pbmRleDogMTA4MDtcbn1cblxuLyogc2NyZWVuIHNpemUgPCAxMDI0cHggKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnMtZGF0ZXBpY2tlciB7XG4gICAgJi1tdWx0aXBsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAmICsgJiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiB0aGVtaW5nICovXG5AZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1saXN0IHtcbiAgQGluY2x1ZGUgdGhlbWluZygkbmFtZSwgJGNvbG9yKTtcbn1cbiIsIiRtYWluLWJnOiAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLWJnOiAjZWVlICFkZWZhdWx0O1xuXG4kbWFpbi1ib3gtc2hhZG93OiAjYWFhICFkZWZhdWx0O1xuXG4kZm9udC1jb2xvci0wMTogICAjZmZmICFkZWZhdWx0O1xuJGZvbnQtY29sb3ItMDI6ICAgIzlhYWVjMSAhZGVmYXVsdDtcbiRmb250LWNvbG9yLTAzOiAgICM1NDcwOGIgIWRlZmF1bHQ7XG5cbiRib3JkZXItY29sb3I6ICAgICNlOWVkZjAgIWRlZmF1bHQ7XG4kaGlnaGxpZ2h0ZWQ6ICAgICAjZTllZGYwICFkZWZhdWx0O1xuXG4kYnRuLWJnOiAgICAgICAgICAjZTllZGYwICFkZWZhdWx0O1xuJGJ0bi1iZy1ob3ZlcjogICAgI2Q1ZGFkZCAhZGVmYXVsdDtcblxuJGJ0bi1iZzI6ICAgICAgICAgIzlhYWVjMSAhZGVmYXVsdDtcbiRidG4tYmcyLWhvdmVyOiAgICM1NDcwOGIgIWRlZmF1bHQ7XG5cbiR0aGVtZS1ncmF5OiAgICAgICM3NzcgIWRlZmF1bHQ7XG4kdGhlbWUtZ3JlZW46ICAgICAjNWNiODVjICFkZWZhdWx0O1xuJHRoZW1lLWJsdWU6ICAgICAgIzViYzBkZSAhZGVmYXVsdDtcbiR0aGVtZS1kYXJrLWJsdWU6ICMzMzdhYjcgIWRlZmF1bHQ7XG4kdGhlbWUtcmVkOiAgICAgICAjZDk1MzRmICFkZWZhdWx0O1xuJHRoZW1lLW9yYW5nZTogICAgI2YwYWQ0ZSAhZGVmYXVsdDtcblxuJGRpc2FibGVkLWJhY2tncm91bmQ6ICByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuMykgIWRlZmF1bHQ7XG4kZGlzYWJsZWQtY29sb3I6ICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG5cbiR0aGVtZS1saXN0OiAoXG4gICdkZWZhdWx0JzogJHRoZW1lLWdyYXksXG4gICdncmVlbic6ICR0aGVtZS1ncmVlbixcbiAgJ2JsdWUnOiAkdGhlbWUtYmx1ZSxcbiAgJ2RhcmstYmx1ZSc6ICR0aGVtZS1kYXJrLWJsdWUsXG4gICdyZWQnOiAkdGhlbWUtcmVkLFxuICAnb3JhbmdlJzogJHRoZW1lLW9yYW5nZSxcbikgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gdGhlbWluZygkbmFtZSwgJGNvbG9yKSB7XG4gIC50aGVtZS0jeyRuYW1lfSB7XG4gICAgLmJzLWRhdGVwaWNrZXItaGVhZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgfVxuXG5cbiAgICAgIC5icy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRucyB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IgO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHtcbiAgICAgIHRhYmxlIHtcbiAgICAgICAgdGQge1xuICAgICAgICAgIHNwYW4uc2VsZWN0ZWQsXG4gICAgICAgICAgJi5zZWxlY3RlZCBzcGFuLFxuICAgICAgICAgIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcbiAgICAgICAgICAmW2NsYXNzKj1cInNlbGVjdC1cIl0gc3BhbjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi53ZWVrIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmFjdGl2ZS13ZWVrIHNwYW46aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgICAgICAgICAgY29sb3I6ICRmb250LWNvbG9yLTAxO1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKiAuYnMtZGF0ZXBpY2tlciAqL1xuLmJzLWRhdGVwaWNrZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAjYWFhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIC8qIGJ1dHRvbiAqL1xuICAvKiAuYnMtZGF0ZXBpY2tlci1oZWFkICovXG4gIC8qIC5icy1kYXRlcGlja2VyLWJvZHkgKi9cbiAgLyogLmN1cnJlbnQtdGltZWRhdGUgKi9cbiAgLyogLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUgKi9cbiAgLyogLmJzLWRhdGVwaWNrZXItYnRucyAqL1xuICAvKi5icy1kYXRlcGlja2VyLWN1c3RvbS1yYW5nZSAqL1xuICAvKiAuYnMtZGF0ZXBpY2tlci1wcmVkZWZpbmVkLWJ0bnMgKi9cbiAgLyogLmJzLWRhdGVwaWNrZXItYnV0dG9ucyAqLyB9XG4gIC5icy1kYXRlcGlja2VyOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAuYnMtZGF0ZXBpY2tlciBicy1kYXktcGlja2VyIHtcbiAgICBmbG9hdDogbGVmdDsgfVxuICAuYnMtZGF0ZXBpY2tlciBidXR0b246aG92ZXIsXG4gIC5icy1kYXRlcGlja2VyIGJ1dHRvbjpmb2N1cyxcbiAgLmJzLWRhdGVwaWNrZXIgYnV0dG9uOmFjdGl2ZSxcbiAgLmJzLWRhdGVwaWNrZXIgaW5wdXQ6aG92ZXIsXG4gIC5icy1kYXRlcGlja2VyIGlucHV0OmZvY3VzLFxuICAuYnMtZGF0ZXBpY2tlciBpbnB1dDphY3RpdmUsXG4gIC5icy1kYXRlcGlja2VyLWJ0bnMgYnV0dG9uOmhvdmVyLFxuICAuYnMtZGF0ZXBpY2tlci1idG5zIGJ1dHRvbjpmb2N1cyxcbiAgLmJzLWRhdGVwaWNrZXItYnRucyBidXR0b246YWN0aXZlLFxuICAuYnMtZGF0ZXBpY2tlci1wcmVkZWZpbmVkLWJ0bnMgYnV0dG9uOmFjdGl2ZSxcbiAgLmJzLWRhdGVwaWNrZXItcHJlZGVmaW5lZC1idG5zIGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuICAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgICBtaW4td2lkdGg6IDI3MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgLyogLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b24gKi8gfVxuICAgIC5icy1kYXRlcGlja2VyLWhlYWQ6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdHJhbnNpdGlvbjogMC4zczsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b25bZGlzYWJsZWRdLCAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uW2Rpc2FibGVkXTphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuMyk7XG4gICAgICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbi5uZXh0LCAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbi5wcmV2aW91cyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbi5uZXh0IHNwYW4sIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uLnByZXZpb3VzIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLWhlYWQgYnV0dG9uLmN1cnJlbnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDE1NXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDEzcHg7IH1cbiAgLmJzLWRhdGVwaWNrZXItaGVhZCBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAuYnMtZGF0ZXBpY2tlci1oZWFkIGJ1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxuICAuYnMtZGF0ZXBpY2tlci1ib2R5IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xuICAgIG1pbi1oZWlnaHQ6IDIzMnB4O1xuICAgIG1pbi13aWR0aDogMjc4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWRmMDtcbiAgICAvKiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlICovIH1cbiAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IC5kYXlzLndlZWtzIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7IH1cbiAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgLyogLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzICovXG4gICAgICAvKiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLndlZWtzICovIH1cbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGgge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjOWFhZWMxO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQge1xuICAgICAgICBjb2xvcjogIzU0NzA4YjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAvKnotaW5kZXg6IDE7Ki9cbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQ6bm90KC5kaXNhYmxlZCk6bm90KC53ZWVrKSBzcGFuOm5vdCguZGlzYWJsZWQpOm5vdCguaXMtb3RoZXItbW9udGgpIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5pcy1oaWdobGlnaHRlZDpub3QoLmRpc2FibGVkKTpub3QoLnNlbGVjdGVkKSBzcGFuLFxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uaXMtaGlnaGxpZ2h0ZWQ6bm90KC5kaXNhYmxlZCk6bm90KC5zZWxlY3RlZCkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVkZjA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMHM7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5pcy1hY3RpdmUtb3RoZXItbW9udGg6bm90KC5kaXNhYmxlZCk6bm90KC5zZWxlY3RlZCkgc3BhbixcbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLmlzLWFjdGl2ZS1vdGhlci1tb250aDpub3QoLmRpc2FibGVkKTpub3QoLnNlbGVjdGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWRmMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwcztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLmRpc2FibGVkLFxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLmRpc2FibGVkIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjOWFhZWMxOyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5zZWxlY3RlZCxcbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5zZWxlY3RlZCBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uaXMtb3RoZXItbW9udGgsXG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuaXMtb3RoZXItbW9udGggc3BhbiB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5hY3RpdmUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuYWN0aXZlLnNlbGVjdC1zdGFydDpiZWZvcmUge1xuICAgICAgICAgICAgbGVmdDogMzUlOyB9XG4gICAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5hY3RpdmUuc2VsZWN0LWVuZDpiZWZvcmUge1xuICAgICAgICAgICAgbGVmdDogLTg1JTsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uYWN0aXZlLnNlbGVjdC1zdGFydDphZnRlcixcbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLmFjdGl2ZS5zZWxlY3QtZW5kOmFmdGVyLFxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLmFjdGl2ZS5zZWxlY3Qtc3RhcnQgc3BhbjphZnRlcixcbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5hY3RpdmUuc2VsZWN0LWVuZCBzcGFuOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQ6YmVmb3JlLFxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW46YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICBib3R0b206IDZweDtcbiAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgIHJpZ2h0OiAtMnB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuYWN0aXZlLnNlbGVjdC1zdGFydCArIHRkLmFjdGl2ZTpiZWZvcmUge1xuICAgICAgICAgIGxlZnQ6IC0yMCU7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZDpsYXN0LWNoaWxkLmFjdGl2ZTpiZWZvcmUge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICAgICAgICAgIHdpZHRoOiAxMjUlO1xuICAgICAgICAgIGxlZnQ6IC0yNSU7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuW2NsYXNzKj1cInNlbGVjdC1cIl0sXG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGRbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyB0ZC5hY3RpdmU6bm90KC5zZWxlY3Qtc3RhcnQpOmJlZm9yZSwgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHRkLmluLXJhbmdlOm5vdCguc2VsZWN0LXN0YXJ0KTpiZWZvcmUsXG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgc3Bhbi5hY3RpdmU6bm90KC5zZWxlY3Qtc3RhcnQpOmJlZm9yZSxcbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyBzcGFuLmluLXJhbmdlOm5vdCguc2VsZWN0LXN0YXJ0KTpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllZGYwOyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgc3BhbiB7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4OyB9XG4gICAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyBzcGFuLnNlbGVjdC1zdGFydCB7XG4gICAgICAgICAgei1pbmRleDogMjsgfVxuICAgICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgc3Bhbi5pcy1oaWdobGlnaHRlZC5pbi1yYW5nZTpiZWZvcmUsIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyBzcGFuLmluLXJhbmdlLnNlbGVjdC1lbmQ6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyB0ZC5zZWxlY3Qtc3RhcnQgKyB0ZC5zZWxlY3QtZW5kOmJlZm9yZSxcbiAgICAgIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUuZGF5cyB0ZC5zZWxlY3Qtc3RhcnQgKyB0ZC5pcy1oaWdobGlnaHRlZDpiZWZvcmUsXG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLmRheXMgdGQuYWN0aXZlICsgdGQuaXMtaGlnaGxpZ2h0ZWQ6YmVmb3JlLFxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHRkLmFjdGl2ZSArIHRkLnNlbGVjdC1lbmQ6YmVmb3JlLFxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHRkLmluLXJhbmdlICsgdGQuaXMtaGlnaGxpZ2h0ZWQ6YmVmb3JlLFxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5kYXlzIHRkLmluLXJhbmdlICsgdGQuc2VsZWN0LWVuZDpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllZGYwO1xuICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS53ZWVrcyB0ciB0ZDpudGgtY2hpbGQoMikuYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZTpub3QoLndlZWtzKSB0ciB0ZDpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS55ZWFycyB0ZCBzcGFuIHtcbiAgICAgICAgd2lkdGg6IDQ2cHg7XG4gICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlLnllYXJzIHRyOm5vdCg6bGFzdC1jaGlsZCkgdGQgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxuICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5tb250aHMgdGQge1xuICAgICAgICBoZWlnaHQ6IDUycHg7IH1cbiAgICAgICAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZS5tb250aHMgdGQgc3BhbiB7XG4gICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IH1cbiAgLmJzLWRhdGVwaWNrZXIgLmN1cnJlbnQtdGltZWRhdGUge1xuICAgIGNvbG9yOiAjNTQ3MDhiO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWRmMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgICAuYnMtZGF0ZXBpY2tlciAuY3VycmVudC10aW1lZGF0ZSBzcGFuOm5vdCg6ZW1wdHkpOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE4QUFBQVFDQVlBQUFESlZpVUVBQUFCTWtsRVFWUW9VOVZUd1czQ1FCQ2NPVWdCdEVCS1NBdWtBbkJLTUUrd0ZDQWxZSWhrOHNRbHhGQUJ0SkFTY0FzdUFQQkVld1ljeENQOG91eHJQRHN6YTYxdWlWTjFvNlJOSEQ0aHRTQ21xNDlSZk83MUJ2TUpxQkJrSVRSZjFrbVVXNDluUVJDOWgxSTVBWmxCQ2xhTDhhUDFmS2dPT3hDeDhhU0xzK1ExOWVadU5POFFtUHFKUnRERmd1eTdPQWNEYkpQcysvQktWUERJUHJ2RDJaSmdXQW1WZTdPMHJJMFZxczFzZXlXVVhwdUpvcHBZQ2E1TCtVKytOcE5Qa3I1T0Uyb01kQVJzYjNneWtKVDV5ZFpjTDhaOVd3NjBueGcyTGhqT045bGk5T3dYWnpvK3hMYnAzbkMyczlDTDJScnVlR3lWcmd3Tm04SHBzQ3paOUVFVzZrcVhsbzFHUWUwM0Z6UC83VzhIbDBkQnR1N0JmN3p0Nm1Jd3ZYMVJ2ekRDbTcrcTNtQVcwRGwvR1BkVUNlWHJaTFQ5QnJEckdrbTRxbFB2QUFBQUFFbEZUa1N1UW1DQyk7IH1cbiAgLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4OyB9XG4gICAgLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUgKyAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDsgfVxuICAgIC5icy1kYXRlcGlja2VyLW11bHRpcGxlIC5icy1kYXRlcGlja2VyIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLW11bHRpcGxlIC5icy1kYXRlcGlja2VyOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyB9XG4gICAgICAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSAuYnMtZGF0ZXBpY2tlciArIC5icy1kYXRlcGlja2VyOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE4QUFBQUtDQVlBQUFCckd3VDVBQUFBMUVsRVFWUW9VNDJSc1FyQ1VBeEY3N1Z1RHU3TzRvTVdXLy9CVVJCQnBadmdLazR1SXJqb3FLT1RmK0RvcElPNHVZZ2d0RlRmdzMrcGtRcUNXMS9HNUo3a0ppRnk0bTVNeFVseEF6Z0lQSFgrbHpNUHp1cFJZbFlneGlSN3Zxc09QOFlLenNUeDB5eEZNQ1VaK3E3YVp6bHIrT3Znb1djQUZ5QUhnYXQyakxXdTQ4MjUyRGRxQWloREpHU1NKTlVVeFltUWpzMytoUFFCbEFoMnJHMkxDT1BuYXczSWlHRFg5OVRSQ3M3QVNKc05oVU9BN2QvTGN1SHZSRzIyRkladnNOWHcxTVg2VlpFeENpbE9RS0VmZUxYci8xMCthQzlIbzdhcmg3b0FBQUFBU1VWT1JLNUNZSUk9KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgIGxlZnQ6IC04cHg7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLW11bHRpcGxlIC5icy1kYXRlcGlja2VyIC5sZWZ0IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7IH1cbiAgICAgIC5icy1kYXRlcGlja2VyLW11bHRpcGxlIC5icy1kYXRlcGlja2VyIC5yaWdodCB7XG4gICAgICAgIGZsb2F0OiByaWdodDsgfVxuICAuYnMtZGF0ZXBpY2tlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7IH1cbiAgLmJzLWRhdGVwaWNrZXIgLmJzLW1lZGlhLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLmJzLWRhdGVwaWNrZXIgLmJzLW1lZGlhLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH0gfVxuICAuYnMtZGF0ZXBpY2tlci1jdXN0b20tcmFuZ2Uge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2VlZTsgfVxuICAuYnMtZGF0ZXBpY2tlci1wcmVkZWZpbmVkLWJ0bnMgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlhYWVjMTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMCAxOHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdHJhbnNpdGlvbjogMC4zczsgfVxuICAgIC5icy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRucyBidXR0b246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NzA4YjsgfVxuICAuYnMtZGF0ZXBpY2tlci1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWRmMDsgfVxuICAgIC5icy1kYXRlcGlja2VyLWJ1dHRvbnMgLmJ0bi1kZWZhdWx0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XG5cbi8qIC5icy10aW1lcGlja2VyICovXG4uYnMtdGltZXBpY2tlci1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4IDA7IH1cblxuLmJzLXRpbWVwaWNrZXItbGFiZWwge1xuICBjb2xvcjogIzU0NzA4YjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4uYnMtdGltZXBpY2tlci1jb250cm9scyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4gIC5icy10aW1lcGlja2VyLWNvbnRyb2xzIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWRmMDtcbiAgICBjb2xvcjogIzU0NzA4YjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdHJhbnNpdGlvbjogMC4zczsgfVxuICAgIC5icy10aW1lcGlja2VyLWNvbnRyb2xzIGJ1dHRvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkYWRkOyB9XG4gIC5icy10aW1lcGlja2VyLWNvbnRyb2xzIGlucHV0IHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWRmMDsgfVxuXG4uYnMtdGltZXBpY2tlciAuc3dpdGNoLXRpbWUtZm9ybWF0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWluLXdpZHRoOiA1NHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVkZjA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNTQ3MDhiO1xuICBmb250LXNpemU6IDEzcHg7IH1cbiAgLmJzLXRpbWVwaWNrZXIgLnN3aXRjaC10aW1lLWZvcm1hdCBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7IH1cblxuYnMtZGF0ZXBpY2tlci1jb250YWluZXIsXG5icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyIHtcbiAgei1pbmRleDogMTA4MDsgfVxuXG4vKiBzY3JlZW4gc2l6ZSA8IDEwMjRweCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5icy1kYXRlcGlja2VyLW11bHRpcGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgLmJzLWRhdGVwaWNrZXItbXVsdGlwbGUgKyAuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7IH0gfVxuXG4vKiB0aGVtaW5nICovXG4udGhlbWUtZGVmYXVsdCAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NzsgfVxuXG4udGhlbWUtZGVmYXVsdCAuYnMtZGF0ZXBpY2tlci1wcmVkZWZpbmVkLWJ0bnMgYnV0dG9uLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NzsgfVxuXG4udGhlbWUtZGVmYXVsdCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uc2VsZWN0ZWQsXG4udGhlbWUtZGVmYXVsdCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLnNlbGVjdGVkIHNwYW4sXG4udGhlbWUtZGVmYXVsdCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcbi50aGVtZS1kZWZhdWx0IC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGRbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NzsgfVxuXG4udGhlbWUtZGVmYXVsdCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLndlZWsgc3BhbiB7XG4gIGNvbG9yOiAjNzc3OyB9XG5cbi50aGVtZS1kZWZhdWx0IC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuYWN0aXZlLXdlZWsgc3Bhbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogMHM7IH1cblxuLnRoZW1lLWdyZWVuIC5icy1kYXRlcGlja2VyLWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjOyB9XG5cbi50aGVtZS1ncmVlbiAuYnMtZGF0ZXBpY2tlci1wcmVkZWZpbmVkLWJ0bnMgYnV0dG9uLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YzsgfVxuXG4udGhlbWUtZ3JlZW4gLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLnNlbGVjdGVkLFxuLnRoZW1lLWdyZWVuIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuc2VsZWN0ZWQgc3Bhbixcbi50aGVtZS1ncmVlbiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcbi50aGVtZS1ncmVlbiAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkW2NsYXNzKj1cInNlbGVjdC1cIl0gc3BhbjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7IH1cblxuLnRoZW1lLWdyZWVuIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQud2VlayBzcGFuIHtcbiAgY29sb3I6ICM1Y2I4NWM7IH1cblxuLnRoZW1lLWdyZWVuIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuYWN0aXZlLXdlZWsgc3Bhbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YztcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogMHM7IH1cblxuLnRoZW1lLWJsdWUgLmJzLWRhdGVwaWNrZXItaGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGU7IH1cblxuLnRoZW1lLWJsdWUgLmJzLWRhdGVwaWNrZXItcHJlZGVmaW5lZC1idG5zIGJ1dHRvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGU7IH1cblxuLnRoZW1lLWJsdWUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLnNlbGVjdGVkLFxuLnRoZW1lLWJsdWUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5zZWxlY3RlZCBzcGFuLFxuLnRoZW1lLWJsdWUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuW2NsYXNzKj1cInNlbGVjdC1cIl06YWZ0ZXIsXG4udGhlbWUtYmx1ZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkW2NsYXNzKj1cInNlbGVjdC1cIl0gc3BhbjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGU7IH1cblxuLnRoZW1lLWJsdWUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC53ZWVrIHNwYW4ge1xuICBjb2xvcjogIzViYzBkZTsgfVxuXG4udGhlbWUtYmx1ZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLmFjdGl2ZS13ZWVrIHNwYW46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGU7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRyYW5zaXRpb246IDBzOyB9XG5cbi50aGVtZS1kYXJrLWJsdWUgLmJzLWRhdGVwaWNrZXItaGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7IH1cblxuLnRoZW1lLWRhcmstYmx1ZSAuYnMtZGF0ZXBpY2tlci1wcmVkZWZpbmVkLWJ0bnMgYnV0dG9uLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNzsgfVxuXG4udGhlbWUtZGFyay1ibHVlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3Bhbi5zZWxlY3RlZCxcbi50aGVtZS1kYXJrLWJsdWUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5zZWxlY3RlZCBzcGFuLFxuLnRoZW1lLWRhcmstYmx1ZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW5bY2xhc3MqPVwic2VsZWN0LVwiXTphZnRlcixcbi50aGVtZS1kYXJrLWJsdWUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZFtjbGFzcyo9XCJzZWxlY3QtXCJdIHNwYW46YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3OyB9XG5cbi50aGVtZS1kYXJrLWJsdWUgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC53ZWVrIHNwYW4ge1xuICBjb2xvcjogIzMzN2FiNzsgfVxuXG4udGhlbWUtZGFyay1ibHVlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuYWN0aXZlLXdlZWsgc3Bhbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogMHM7IH1cblxuLnRoZW1lLXJlZCAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjsgfVxuXG4udGhlbWUtcmVkIC5icy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRucyBidXR0b24uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmOyB9XG5cbi50aGVtZS1yZWQgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLnNlbGVjdGVkLFxuLnRoZW1lLXJlZCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLnNlbGVjdGVkIHNwYW4sXG4udGhlbWUtcmVkIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQgc3BhbltjbGFzcyo9XCJzZWxlY3QtXCJdOmFmdGVyLFxuLnRoZW1lLXJlZCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkW2NsYXNzKj1cInNlbGVjdC1cIl0gc3BhbjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7IH1cblxuLnRoZW1lLXJlZCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLndlZWsgc3BhbiB7XG4gIGNvbG9yOiAjZDk1MzRmOyB9XG5cbi50aGVtZS1yZWQgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC5hY3RpdmUtd2VlayBzcGFuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xuICBjb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2l0aW9uOiAwczsgfVxuXG4udGhlbWUtb3JhbmdlIC5icy1kYXRlcGlja2VyLWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlOyB9XG5cbi50aGVtZS1vcmFuZ2UgLmJzLWRhdGVwaWNrZXItcHJlZGVmaW5lZC1idG5zIGJ1dHRvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7IH1cblxuLnRoZW1lLW9yYW5nZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkIHNwYW4uc2VsZWN0ZWQsXG4udGhlbWUtb3JhbmdlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQuc2VsZWN0ZWQgc3Bhbixcbi50aGVtZS1vcmFuZ2UgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuW2NsYXNzKj1cInNlbGVjdC1cIl06YWZ0ZXIsXG4udGhlbWUtb3JhbmdlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGRbY2xhc3MqPVwic2VsZWN0LVwiXSBzcGFuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTsgfVxuXG4udGhlbWUtb3JhbmdlIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGQud2VlayBzcGFuIHtcbiAgY29sb3I6ICNmMGFkNGU7IH1cblxuLnRoZW1lLW9yYW5nZSAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRkLmFjdGl2ZS13ZWVrIHNwYW46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRyYW5zaXRpb246IDBzOyB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWJzLWRhdGVwaWNrZXIuY3NzLm1hcCAqLyJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RSIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./bootstrap.min.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap/dist/css/bootstrap.min.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./bs-datepicker.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!********************************************************************************************************************************************!*\
  !*** multi ./node_modules/bootstrap/dist/css/bootstrap.min.css ./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css ./src/styles.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\10668058\Desktop\Voice Search application\node_modules\bootstrap\dist\css\bootstrap.min.css */"./node_modules/bootstrap/dist/css/bootstrap.min.css");
__webpack_require__(/*! C:\Users\10668058\Desktop\Voice Search application\node_modules\ngx-bootstrap\datepicker\bs-datepicker.css */"./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css");
module.exports = __webpack_require__(/*! C:\Users\10668058\Desktop\Voice Search application\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map