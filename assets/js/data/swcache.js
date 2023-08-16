const resource = [
    /* --- CSS --- */
    '/practice1.github.io/assets/css/style.css',

    /* --- PWA --- */
    '/practice1.github.io/app.js',
    '/practice1.github.io/sw.js',

    /* --- HTML --- */
    '/practice1.github.io/index.html',
    '/practice1.github.io/404.html',

    
        '/practice1.github.io/tabs/categories.html',
    
        '/practice1.github.io/tabs/tags.html',
    
        '/practice1.github.io/tabs/about.html',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/practice1.github.io/assets/img/favicons/android-chrome-192x192.png',
        '/practice1.github.io/assets/img/favicons/android-chrome-512x512.png',
        '/practice1.github.io/assets/img/favicons/apple-touch-icon.png',
        '/practice1.github.io/assets/img/favicons/favicon-16x16.png',
        '/practice1.github.io/assets/img/favicons/favicon-32x32.png',
        '/practice1.github.io/assets/img/favicons/favicon.ico',
        '/practice1.github.io/assets/img/favicons/mstile-150x150.png',
        '/practice1.github.io/assets/img/favicons/nataslogo.png',
        '/practice1.github.io/assets/js/dist/categories.min.js',
        '/practice1.github.io/assets/js/dist/commons.min.js',
        '/practice1.github.io/assets/js/dist/home.min.js',
        '/practice1.github.io/assets/js/dist/misc.min.js',
        '/practice1.github.io/assets/js/dist/page.min.js',
        '/practice1.github.io/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

