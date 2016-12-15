jQuery( document ).ready(function($) {
    function ext(url) {
        return (url = url.substr(1 + url.lastIndexOf("/")).split('?')[0]).split('#')[0].substr(url.lastIndexOf("."))
    }
    var filetype = ext(window.location.href);
    if (filetype == '.md') {
        $(".CodeMirror-code").attr("spellcheck", "true");
    } else {
        console.log('The filetype of the current page does is not selected for spellcheck toggle. Current filetype: '+filetype);
    }
});