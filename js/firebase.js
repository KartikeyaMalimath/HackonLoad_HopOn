var app_firebase = {};
(function() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDThI6ysePo3oBGygOZ9pXJdbTjBEA4yLc",
        authDomain: "hopon-dcefb.firebaseapp.com",
        databaseURL: "https://hopon-dcefb.firebaseio.com",
        projectId: "hopon-dcefb",
        storageBucket: "hopon-dcefb.appspot.com",
        messagingSenderId: "664701102692",
        appId: "1:664701102692:web:8635402fa98c0242da4d71",
        measurementId: "G-WKF3R9W0GE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    app_firebase = firebase;
})()