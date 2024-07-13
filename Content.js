document.documentElement.style. // HTML
    setProperty('color-scheme', 'dark');
const str = window.location.toString();
function comp(n) { return (parseInt(
    "ffffff", 16) - parseInt(n, 16)).
        toString(16).padStart(6, '0'); }
function blac() { document.body.style.
    backgroundColor = 'black'; }
if(str.match("://*.medium.com/*") !=null) 
    { let el = document.
        getElementsByClassName
        ( // el = collection
        // div[class='l c'],
        "l c"); // el.insertBefore(el,
        // "l c\".j{color:#(
            // [0-9a-f]+)}")[1]; str, '\n',
        function darkm(el) {
          Array.from(el).forEach(function
            (element) { element.style.
            backgroundColor = 'black'; });}
        ;darkm(el); 
        // darkm( document.
        // getElementsByClassName
        // ("pb pc pd pe pf pg ph pi pj "+
        // "ax pk bj"));
            // +"[data-fela-rehydration^=
            // val"+"'504'"]"; els.match(
        // ".bj{color:#([0-9a-f]+)}")[1];
        function replaces(n) {
            let i = "style[type="+
            "'text/css'][data-fela-type="+
            "'RULE']";
        let els = document.
            querySelector(i).innerHTML;
        for (const key of n.keys()) {
            els = els.replaceAll(
                RegExp(n[key], "ig"),
                // Global flag required
                comp(n[key]))
            document.querySelector(i)
                .innerHTML = els; }; };
        replaces(["f2f2f2", "242424"]);
    // x[0].style.backgroundColor ='black';
} else if ( str.match(
    "://.*.summarize.tech/*") !=null){
    var roo = document.querySelector(
        ':root'); blac();
    var lin = 'link';
    var col = ['body', lin, lin + '-hover']
        .map(i => '--bs-' + i + '-color');
    for (const i of col.keys()) {
        var sco = getComputedStyle(roo).
            getPropertyValue(col[i]);
        roo.style.setProperty(col[i], '#'+
            comp(sco.substring(1, sco.
                length - 1))); } }
else if ( str.match(
    "://.*.reddit.com/*") !=null){
    document.getElementById(
        "reddit-logo").remove();
    ele = document.getElementsByTagName(
        "shreddit-ad-post");
    ele[0].parentNode.removeChild(ele[0
    ]); }
else if ( str.match(
    "://.*.youtube.com/*") !=null){
        document.getElementById(
        "reddit-logo").remove();}
else{ blac() }