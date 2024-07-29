import { cleanHTML } from "./clean.js";
import { gzipCompressHTML } from "./compress.js";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "cleanAndCompress") {
        let html = document.documentElement.outerHTML;

        //clean html
        html = cleanHTML(html);

        //compress html
        html = gzipCompressHTML(html);

        sendResponse({html});
    }
});