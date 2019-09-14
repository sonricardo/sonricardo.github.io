
focus();
var listener = window.addEventListener('blur', function() {
    if (document.activeElement === document.getElementById('wiicoon')) {
        link = "wiicoon/wiicoonContent/wiicoonContent.html";
        window.location.href=link;
        console.log("si entramaos");
    }
    window.removeEventListener('blur', listener);
});