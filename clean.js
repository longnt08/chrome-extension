function cleanHTML(html) {

    html = html.replace(/<!--[\s\S]*?-->/g, '');
  
    html = html.replace(/\s+/g, ' ').trim();
    html = html.replace(/>\s+</g, '><');
  
    html = html.replace(/<(\w+)([^>]*)>\s*<\/\1>/g, '');
  
    html = html.replace(/<(\w+)([^>]*)\s(class|style|data-[^=]+)="[^"]*"\s?([^>]*)>/g, '<$1$2 $4>');
  
    html = html.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g, '');
  
    return html;
}

export {cleanHTML}  