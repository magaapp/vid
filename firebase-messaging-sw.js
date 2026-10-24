importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCH83QJQLQgxFidFwRRJmPepVh3DhmHfg8",
    authDomain: "megafrp-41498.firebaseapp.com",
    projectId: "megafrp-41498",
    storageBucket: "megafrp-41498.firebasestorage.app",
    messagingSenderId: "894020727561",
    appId: "1:894020727561:web:b81dd580e872a64e7019d8"
});

const messaging = firebase.messaging();

// ترك الاستماع للرسائل في الخلفية ليعمل أوتوماتيكياً دون تكرار الـ showNotification اليدوي
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // إذا كان هناك دالة showNotification هنا، قم بحذفها لأن فايربيس تعرض الإشعار تلقائياً لوجود حقل notification في البايثون.
});
