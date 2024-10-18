"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var slugify_1 = require("slugify");
var get_news_and_events_data_1 = require("@/utils/get_news_and_events_data");
function processNewsItems(newsItems) {
    return newsItems.map(function (item, index) {
        return __assign(__assign({}, item), { id: "news-".concat(Date.now(), "-").concat(index + 1), slug: (0, slugify_1.default)(item.title, { lower: true }) });
    });
}
processNewsItems(get_news_and_events_data_1.newsItems);
