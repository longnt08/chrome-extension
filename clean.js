function cleanHTML(html) {

    html = html.replace(/<!--[\s\S]*?-->/g, '');
  
    html = html.replace(/\s+/g, ' ').trim();
    html = html.replace(/>\s+</g, '><');
  
    html = html.replace(/<(\w+)([^>]*)>\s*<\/\1>/g, '');
  
    return html;
}

export {cleanHTML}  