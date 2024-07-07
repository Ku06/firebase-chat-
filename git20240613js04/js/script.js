// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

};
// Initialize Firebase
initializeApp(firebaseConfig);

///関数作成
function signUpUser(email,password){
  const auth = getAuth();
  console.log(email,password,2);//処理の流れ確認用

  createUserWithEmailAndPassword(auth, email, password)
   .then(function (userInfo){
    //登録成功後にやりたいことをここに書く
    console.log(userInfo);
    location.href ="index.html";
  })
   .catch(function(error){
    //登録失敗後にやりたいことをここに書く
      console.log(error);
      $("#message").html(error);
  });
}


//新規登録
$("#signup-button").on("click",function(){
  const email = $("#signup-email").val();
  const password = $("#signup-password").val();
  console.log(email,password,1);//処理の流れ確認用

  signUpUser(email,password);

});




function loginUser(email,password){

  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
  .then(function (userInfo){
    //ログイン成功後にやりたいことをここに書く
    console.log(userInfo);
    location.href ="index.html";
  })
   .catch(function(error){
    //ログイン失敗後にやりたいことをここに書く
      console.log(error);
      $("#message").html(error);


});
}



//ログインボタンを押したときの処理
$("#login-button").on("click",function(){
  const email = $("#login-email").val();
  const password = $("#login-password").val();


  loginUser(email,password);
    });




function logOutUser(){

  const auth = getAuth();
  signOut(auth).then(function(){
    //ログアウトが成功したときにやりたいことをかく
    location.href ="login.html";
  })
  .catch(function(error){
    //ログイン失敗後にやりたいことをここに書く
      console.log(error);
      $("#message").html(error);
  });

};
    



$("#logout-button").on("click",function(){
  logOutUser();
    });





//チャット開始を押したときの処理
$("#chat-button").on("click",function(){
  location.href ="index1.html";
    });

//ログイン後の画面へ戻る
$("#re").on("click",function(){
  location.href ="index.html";
    });



