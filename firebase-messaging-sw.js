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

// التقاط حدث النقر على الإشعار وفتح الرابط فوراً
self.addEventListener('notificationclick', function(event) {
    event.notification.close(); // إغلاق الإشعار بعد الضغط عليه

    // جلب الرابط المرسل مع البيانات أو حقل fcm_options
    var targetUrl = 'https://appdowntele.blogspot.com/p/stores2.html';
    
    if (event.notification.data && event.notification.data.url) {
        targetUrl = event.notification.data.url;
    } else if (event.notification.data && event.notification.data.FCM_MSG && event.notification.data.FCM_MSG.notification && event.notification.data.FCM_MSG.notification.click_action) {
        targetUrl = event.notification.data.FCM_MSG.notification.click_action;
    }

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
            for (var i = 0; i < clientList.length; i++) {
                var client = clientList[i];
                if (client.url === targetUrl && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
