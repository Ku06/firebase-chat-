


// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";




/**
 * Config = 機密情報です！！！
 * この部分はGitHubに上げないこと！！！！！！！
 */
//
const firebaseConfig = {

};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database, "chat");

///オブジェクトの練習
// const kosuge ={
//    name:"コスゲ",
//    age:41,
//    from:"神奈川",
// };

// console.log(kosuge.name);
// console.log(kosuge["from"]);




//送信ボタンを押したときの処理

$("#send").on("click",function(){
//入力データを取得


const userName = $("#userName").val();
const text = $("#text").val();

console.log("12", userName, text);


///送信時間取得
const now = new Date();

    const nowhour = now.getHours();
    const nowminutes = now.getMinutes();
    const nowseconds = now.getSeconds();
    const day = now.getDate();

    const time = (day)+"日"+ nowhour + ":" + nowminutes + ":" + nowseconds; 

//写真判定





//if (userName === "クマ") {
//  $('#picture').html('<img src="images/kuma.png" alt="">');
//} else if(userName === "ウサギ") {
//  $('#picture').html('<img src="images/usagi.png" alt="">');
//}else{
//  $('#picture').html('<img src="" alt="">');
//}

//const picture = $("#picture").val();


//ブランク防止
if (userName !== "") {


//送信データをオブジェクトにまとめる
const message = {
userName:userName,
text:text,
time:time,
//picture:picture,
};
//Firebase Realtime Databaseにオブジェクト送信
  const newPostRef = push(dbRef);
  set(newPostRef,message);


  }
});



//指定した場所にデータが追加されたことを検知
onChildAdded(dbRef, function(data){
//追加されたデータをFirebaseから受け取り分解
  const message =data.val();
  const key =data.key;
  console.log(data,message,key);

  let chatMsg = ` 
  
  <div class=massage1>
  <div>${message.picture}</div> 
   <div>名前：${message.userName}</div> 
   <div>${message.text}</div> 
   <div>日付：${message.time}</div> 
  </div> `;

    $("#output").append(chatMsg);

  

  });
