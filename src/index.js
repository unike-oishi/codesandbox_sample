/*
 * const,let変数について
 */

// var val1 = "中身";
// console.log(val1);

// //var 上書き可
// val1 = "上書き";
// console.log(val1);

// //再宣言
// var val1 ="再宣言(コード解析のアラートは出る)";
// console.log(val1);
// let val2 = "let変数";

// console.log(val2);

//再宣言不可
//let val2 = "let再宣言エラー";
//console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// //val3 = "const上書き不可";

// //オブジェクトだと上書きできる
// const val4 = {
//   name: "aki",
//   age: 32
// };
// val4.age = 33;
// //追加も可能
// val4.addres = "浅草";
// console.log(val4);

//配列も上書き・追加可能
// const val5 = ["dog", "cat"];
// val5[0] = "panda";
// val5.push("bird");
// console.log(val5);

/*
 * テンプレート文字について
 */
// const name ="aki";
// const age =32;

// //const msg1 = "私は"+ name;
// //↓
// const msg1 = `私は${name}.年は${age}`;
// console.log(msg1);

/**
 * アロー関数について
 **/
// function func1(str) {
//     return str;
//  }
//  const func2 = function(str){
//    return str;
//  }
// console.log(func2("文字列渡す2"));
//↓
// const func2 = (str) => {
//   return str;
// };
//略
//const func2 = (str) => str;
// const func3 = (num1,num2) => {
//      return num1+num2;
//    };
//略
//const func3 = (num1, num2) => num2 + num1;
//console.log(func3(1, 3));

/**
 * 分割入力
 */
// const myprf = {
//   name: "aki",
//   age: 32,
//   addres: "浅草"
// };
// const msg = `名前${myprf.name}`;
// console.log(msg);
// //↓
// const { name, addres } = myprf;  //変数名で指定
// const msg2 = `名前${name}/${addres}(分割代入)`;
// console.log(msg2);
// const myprf = ["aki", 32, "浅草"];
// const msg3 = `名前は${myprf[0]}/${myprf[2]}`;
// console.log(msg3);
// const [nm, ag] = myprf; //配列の場合は順番になる
// const msg4 = `名前は${nm}/${ag}`;
// console.log(msg4);

/**
 * デフォルト値、引数
 */
// const sayhello = (name = "ゲスト") => console.log(`私の名前は${name}です`);
// sayhello();

/**
 * スプレッド構文 ...
 */
// //配列の展開
// const arr1 = [1, 2];
// //console.log(...arr1);
// //使用例
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //sumFunc(arr1[0],arr1[1]);
// //↓
// sumFunc(...arr1);
//
//まとめる
// const arr2 = [1, 2,3,4,5];
// const [n1,n2,...arr3] = arr2;
// console.log(...arr2,...arr3);
// //配列のコピー、結合にて
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// const arr6_2 = arr4; //参照もコピーされてしまう
// const arr7 = [...arr4, ...arr5];
// // console.log(arr6);
// // arr6_2[0] = 100;
// // console.log(arr6_2);
// // console.log(arr4); //参照もコピーされてしまう
// arr6[0] = 100;
// console.log(arr4); //スプレッド構文では元の配列は影響を受けない

/**
 * map,filterの配列処理
 */
// const nameArr = ["あき", "凛", "Ria"];
// // for (let i = 0; i < nameArr.length; i++) {
// //   console.log(nameArr[i]);
// // }
// //↓
// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nameArr2);

// // nameArr.map((name) => console.log(name)); //{ブラケット}１行なら省略

// const numArr = [1, 2, 3, 4, 5, 6];

// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 1; //条件に一致するものだけ
// // });
// // console.log(newNumArr);
//mapでは、二つ目の引数に順番が入る
// //nameArr.map((name,i) => console.log(`${i+1}番目は${name}です`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "凛") {
//     return `${name}ちゃん`;
//   } else {
//     return name;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const num = 1300;
// //金額表示toLocaleString()
// //console.log(num.toLocaleString());

// const formatYen =
//   typeof num === "number" ? num.toLocaleString() : "数値ではありません";
// console.log(formatYen);

// const checkSum = (num1, num2) => {
//   return num1 + num2 >= 100 ? "2桁を超えています" : "許容範囲桁数";
// };
// console.log(checkSum(30, 70));

/**
 * 論理演算子
 */
// ||の左側がFalse判定（NULL）なら右を返す。なので結果的に「または」になる
// &&の左側がTrue判定なら右を返す。なので結果的に「かつ」になる

const num = 100;
// const fee = num || "金額未設定";
const fee = num && 200;
console.log(fee);
