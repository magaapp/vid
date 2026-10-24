// استيراد مكتبات Firebase للإصدار العاشر للعمل في الخلفية
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// إعدادات مشروعك في Firebase (نفس الإعدادات السابقة)
firebase.initializeApp({
    apiKey: "AIzaSyCH83QJQLQgxFidFwRRJmPepVh3DhmHfg8",
    authDomain: "megafrp-41498.firebaseapp.com",
    projectId: "megafrp-41498",
    storageBucket: "megafrp-41498.firebasestorage.app",
    messagingSenderId: "894020727561",
    appId: "1:894020727561:web:b81dd580e872a64e7019d8"
});

const messaging = firebase.messaging();

// التعامل مع الإشعار في الخلفية (عندما يكون الموقع مغلقاً)
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon.ico' // يمكنك وضع أيقونة إشعار هنا
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
