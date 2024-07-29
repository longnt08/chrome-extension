import { cleanHTML } from "./clean.js";

function gzipCompressHTML(html) {
    const cleaned_html = cleanHTML(html);
    const compressed_html = pako.gzip(cleaned_html, {to: 'string'});
    return compressed_html;
}

export {gzipCompressHTML}