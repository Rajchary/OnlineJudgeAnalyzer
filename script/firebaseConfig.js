// Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    function init() {
        var firebaseConfig = {
            apiKey: "AIzaSyC0-0VEr_p7XxTE9u5nJtdUJ75fkWA5L6Q",
            authDomain: "onlinejudgeanalyzer.firebaseapp.com",
            projectId: "onlinejudgeanalyzer",
            storageBucket: "onlinejudgeanalyzer.appspot.com",
            messagingSenderId: "202774544058",
            appId: "1:202774544058:web:a43e02287ac1986be08c83",
            measurementId: "G-KMG62JHYHR"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        //alert("done");
    }