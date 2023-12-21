////////////...1...//////////

console.log(3+3+3+"3"+3+3);//9333
console.log(1+2+3+4+5+"6");//156
console.log("2"+9+1+"4");//2914
//note-always add value from left to write  

/////////////....2....//////////////////

const a=[1,2,3]
const b="1,2,3"
const c=[1,2,3]
console.log(a==c);//false 
console.log(a==b);//true
//note- []==[] is false but []=== ![] true
console.log(a===c);//false
console.log(a===b);//false
////////.....3......///////////////////

// hosting related small question 

// (i) 
names()
function names(){
    console.log("execute");
}//execute is out put
// value()
let value=()=>{
    console.log(value);
}//reference error becase here js take a variable he donot take a function so out put is 
// referance error

console.log(d);// undefine becase var only allow in hosting
var d=10

// console.log(o);// reference error  beacse of hosting here hosting did allow to let and const
let o=10

// console.log(j);
const j=10


///////////.......4.........////////////////
// let ,var & const used
let name="sagar";
 name="sipu"
console.log(name);//sipu

// let age=23;
// let age=24//output already declar


/////////..............5..............//////////////
console.log("9">"11");//true
console.log("9">11);//false
console.log("">-1);//true
console.log("rowdy">1);//false

////////..............6.............//////////////

// let das=()=>{
//     setTimeout(()=>{//we did not got a output undefine and reference error becase of setTime out
//         console.log(a);// 2
//         console.log(b);//13
//     },2000)
//     var a=2;
//     let b=13
// }
// das()

//////.........7...........///////////////
// let df=()=>{
//     for(var  i=0;i<3;i++){
//         setTimeout(()=>{
//             console.log(i);// 3
//         },2000)
//     }
// }
// df()

////...............8........//////////////
// let x={}, y={name:"ronny"}, z={name:"rohit"}
// // console.log(x[y]);
// x[y]={name:"vivek"}
// x[z]={name:"sagar"}
// console.log(x[y]);