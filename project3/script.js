const firebaseConfig = {
    apiKey: "AIzaSyDPWErEfOWCcxuFVKLvvgY6bquPkYKeRlM",
    authDomain: "prac8firebase-2eaec.firebaseapp.com",
    projectId: "prac8firebase-2eaec",
    storageBucket: "prac8firebase-2eaec.appspot.com",
    databaseURL: "https://fir-program-2e23d-default-rtdb.firebaseio.com/",
    messagingSenderId: "579064204925",
    appId: "1:579064204925:web:cd2e9a3de87bef00bfeb14",
    measurementId: "G-YJ7SJXMY6C",
};
firebase.initializeApp(firebaseConfig);
var messageRef = firebase.database().ref("Employees");
document.getElementById("contactForm").addEventListener("submit", submitForm);
function submitForm() {
    var name1 = document.getElementById("name").value;
    var email1 = document.getElementById("email").value;
    var age1 = document.getElementById("age").value;
    save(name1, email1, age1);
    document.getElementById("contactForm").reset();
}
function save(name1, email1, age1) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name1,
        Email: email1,
        Age: age1,
    });
}
