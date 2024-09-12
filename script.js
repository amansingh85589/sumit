
// var arr = [1,"aman",true];
//   arr.forEach(function(val)
// {
//   //  console.log (val+" hello");
// });

// // console.log(arr);
// var aman =[1,6,9,5];

// aman.map(function(val){
//   return val+3;
// });
// // console.log(newarr);

// aman.filter(function(val){

//   if (val>5) {return val} ;
// });

// var ans = aman.find(function (val) {
//   return val === 9; // Directly return the condition
// });

// // Corrected the check for existence of ans
// if (ans !== -1) {
//   console.log("Value exists at index " + aman.indexOf(ans));
// } else {
//   console.log("Not exist");
// }

// obj

// var keyoe = 12;

// var obj = {

// //    a:Key,
//    value : keyoe,
//    name : "amanm",

// }
// // var noew =obj['value']
// // console.log(noew);
// function a(){
//     return 11;
// } 
async function abcd (){
   var blob = await fetch(`https://randomuser.me/api/`);
   var ans = await blob.json();
   console.log(ans);
}
abcd();

