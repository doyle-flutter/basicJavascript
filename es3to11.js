// ES3 ~ 6
//// 변수 : 변수 선언시 타입을 지정하지 않고 사용 가능하며, var 키워드 사용시 호이스팅에 유의해야합니다
var value = 1;
value = "2";
value = false;

// 호이스팅 
v = 5;
var v;

// 처음엔 var를 통해 연습 후 let, const로 연습하시는 것을 추천드립니다
let value2 = 2; 
const value3 = 3; // 상수
value3 = 4; // 불가능

//// 타입 : Dart 와 거의 동일하지만 명칭과 내부 구조에서 일부 차이가 있음
// * 동적언어에서는 선언시 타입을 지정하지 않습니다

// 배열 : 명칭과 동작 방식은 같다고 보지만 시스템 구조상 차이점은 있음
var li = [];
// 배열 생성 
{
  var arr0 = [1,2,3]; // [1,2,3] // length : 3 
  var arr1 = new Array(3); // [ , , ] // length : 3
  var arr2 = Array.of(3); // [3] // length : 1
  var arr3 = Array.of(1,2,3); // [1,2,3] // length : 3
}


// 객체 Object
var ob = { "key" : "value" };
// bool 동일
// int / double 동일

//// function 함수
// 기본 함수 문법
function func(){
	return;
}
// 화살표 함수 ES6
var func = () => {};

// 익명함수
let nonNameFunc = () => {};

// 익명 및 선언 후 실행
((){})();

// 실행
func();

// 재귀함수 : 함수가 자기 자신을 특정 조건에 실행/멈춤하는 함수
var a = 1;
var loopFunc = () => {
	a++;
	if(a < 10){
    console.log("loop"); 
    return loopFunc();
	}
	return console.log('끝');
};
loopFunc();

//// function 함수 - 인자(Dart 와 차이를 확인해주세요)
function func(a){}

function func2([a]){} // arg : arr
// -> func2( [ 1,2,3 ] ); // 이 때 2,3은 사용할 수 없음
function func22([...a]){ console.log(a); } // arg : arr 가변
// -> func22( [ 1, 2, 3 ] ); // ... 키워드를 통해 가변 배열을 사용할 수 있음
function func23(a, b, c) {  console.log(arguments); } // arguments : arr

function func3({a}){}
// -> func3({a:123}); // 중괄호 및 Key 사용에 유의
// -> var value = {a:123}; func3(value);
// -> Class 활용
// class My{ constructor(a){ this.a = a; } }
// var my = new My(123);
// func3(my);

//// class
// 기본 생성자
class MyClassJs1{
	constructor(a, b){
		this.a = a;
		this.b = b;
	}
}
var myClassJs1 = new MyClassJs1(1,2);

// 생성자 : 네이밍
class MyClassJs2{
	constructor({a, b}){
		this.a = a;
		this.b = b;
	}
}
var myClassJs2 = new MyClassJs2({a: 3, b:4});
// Dart 생성자 네이밍 사용시 MyClassDart(a:3, b:4);라면 JS는 중괄호로 묶어야합니다

// 메서드
class Ms{
    constructor(a){ this.a = a; }
    outPutA = () => {return this.a;}
}
new Ms(123).outPutA(); // 123
var ms2 = new Ms(321);
ms2.outPutA(); // 321

// - 조건문
{
  if(true){
    console.log('조건이 true');
  }
  // else if(){
  //  추가 할 조건
  // }
  else{
   console.log('조건이 false');
  }
}

// 반복문
{
  for(let i=0; i < 10; i++){
    console.log(i,"반복"); // i는 횟수
  }

  // * 내용 중 in 연산자를 학습 후 다시 for-in / for-of 를 봐주세요
	
  let arrData = [1,2,3,4];
  for(let i in arrData){
    console.log(i, "반복 IN"); // i는 배열 arr의 인덱스 index 
  }

  for(let i of arrData){
    console.log(i, "반복 OF"); // i는 배열 arr의 값 value
  }

  let objData = {a:1, b:2};
  for(let i in objData){
    console.log(i, "반복 IN"); // i는 객체의 key 
  }

}




//// DOM & BOM
/////////////////////// D.O.M
// 문서 Document 관련 API
// 생성되어있는 Tag 사용

// - HTML
// <div id='i1' class='c1 c2 c3'></div>
// <div id='i2' class='c1 c2 c3'></div>

// - JS(DOM)
// --- 중복될 수 없는 ID 값을 갖고 찾기
// let i1 = document.getElementById('i1');
// let i2 = document.getElementById('i2');
// --- 중복 가능한 Class 값을 갖고 찾기
// let c1 = document.getElementsByClassName('c1')[0];
// let c2 = document.getElementsByClassName('c1')[1];

// DOM 주요 3가지
// 1. TAG를 생성하여 원하는 위치에 주입 가능
// 2. TAG의 특정 값, 속성, 스타일 등 제어 가능
// 3. TAG의 이벤트를 제어
// ... 등

/////////////////////// B.O.M
// 브라우져 Browser 관련 API
// BOM 주요 5가지
// 1. 브라우져 창 및 주소 제어
// -- 새로운창 열기 
// : window.open("http://localhost:3000");
// -- 현재 주소
// : window.location.href
// -- 이전 주소로 이동
// : window.history.back()
// 2. 브라우져 스크롤 제어
// -- 스크롤 이동 
// : window.scrollBy(0, 1000);
// 3. 팝업
// : alert("PoP UP");
// 4. 클라이언트 환경
// 
// 5. URL 제어
// ... 등


//// Promise (1)

async function afunc() {
    setTimeout(function(){
        return 2222222;
    },3000);
}

async function logic(){
    console.log("11111");
    let value2 = await new Promise((res,rej) => {
        try {
            setTimeout(() => res('@2@2@2@2'), 4000);
        } catch (e) {
            return rej("@@@@@");
        }
    })
        .then((_) => {
            console.log('2@2@2@2@2@ - Then (1)');
            return _;
        })
        .then((_) => {
            console.log('2@2@2@2@2@ - Then (2)');
            return _;
        })
        .then((_) => _)
        .catch((e) => console.log('ERR!!!'));
    console.log(value2)
    console.log("33333");
    setTimeout(() => console.log(44444), 3000);
    return;
}

logic();

//// Promise (2)

var futureLogic1 = () => new Promise((res,rej) => {
    try {
        res('logic1');
    } catch (e) {
        rej("logic1Err");
    }
});

var futureLogic2 = () => new Promise((res,rej) => {
    try {
        res('logic2');
    } catch (e) {
        rej("logic2Err");
    }
});

let futureContext = async () => {
    let value1 = await futureLogic1();
    console.log(value1);
    let value2 = await futureLogic2();
    console.log(value2);
    return;
};

futureContext();

// - Class
{
    class Person {
        constructor (id, name) {
            this.id = id
            this.name = name
        }
        toString() {
            return `(${this.id}, ${this.name})`
        }
    }

    class Student extends Person {
        constructor (id, name, age) {
            super(id, name)
            this.age = age
        }
        toString() {
            return super.toString() + ' and ' + this.age
        }
    }
    new Person();
    new Student();
}
// - let, const
{
    let data = '';
    data = 123;
    const dataC = 123;
    // * dataC = "123"; // Error
}

// - Arrow Function * this 주의
{
    const arrFunc = [1, 2, 3].map(x => x * x) // 1, 4, 9
}
// - import & export
// * type="module" 사용 할 것 <script type="module"></script> 
// a.js
export const dataEx = 123;

// b.js (a.js의 dataEx를 불러옴)
import { dataEx } from "a.js";
import * as Name from "a.js";
// Name.dataEx 처럼 묶어서 사용하기 가능(Dart 유사)

// - Promise(async & await -> es8)
{
    const promiseTest = (num) => new Promise((resolve, reject) => {
            if (num > 3) resolve(num);
            else reject("err");
        });
    promiseTest(5)
        .then(val => console.log(val)) // 5
        .catch(err => console.log(err))
}

// - 구조 분해 할당
// - (1) Array
// * default value 가능
{
    let a, b, c;
    [a=1, b=2, ...c] = [1,2,3,4,5,6];
}
// - (2) Object
{
    ({ a, b } = { a: 10, b: 20 });
    console.log(a); // 10
    console.log(b); // 20
}
// - (*) 응용
{
    let metadata = {
        title: "Scratchpad",
        translations: [
        {
            locale: "de",
            localization_tags: [ ],
            last_edit: "2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-Umgebung"
        }
        ],
        url: "/en-US/docs/Tools/Scratchpad"
    };

    let { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;
}
// - (3) 함수
{
    function aa({a,b}){console.log(a);};
    aa({a:1,b:2});
    let aaData = {a:2,b:3};
    aa(aaData);
    let [a,b] = [1,2];
    aa({a,b});
}

// - 삼항 연산자(Dart 동일)
{
    let a3 = a === 1 ? 10 : 20;
    console.log(a3);
}

// - in 연산자 : 객체 또는 배열의 인덱스 또는 속성(필드 및 메서드)을 찾음
// * 해당 연산자 학습 후 상단의 반복문 for-in / for-of 을 보시면 더욱 이해가 편합니다
{
  "length" in "123"; // ERR !
  "length" in new String("123"); // true
  
  var data = "321";
  "length" in new String(data); // true
  2 in new String(data); // true

  var arrData = [1,2,3];
  3 in arrData; // false
  "map" in arrData; // true
  "length" in arrData; // true
	
  let objData = {a:1, b:"123"};
  "a" in objData; // true
  "b" in objData; // true
	
  class Ob{constructor(a){this.a=a} aa(){}}
  let ob = new Ob();
  "a" in ob; // true
  "aa" in ob; // true
	
}

// ES 7 ~ 11 총 정리
// * 지원 브라우져 확인 : https://caniuse.com/
////////////////////////////// 
// ES7 ES2016

// - 제곱 연산자
{
    2**2;
    let powData = 3;
    powData **= 3; // 3*3*3
}

// - Array Includes
// indexOf 와 비슷하지만 boolean을 반환
{
    let dataIn = [12,3,4,NaN];
    dataIn.includes(12); // true
    dataIn.includes(NaN); // true
}


////////////////////////////// 
// ES8 ES2017

// - 문자열 공백 생성(패딩)
{
    console.log("test".padStart(10)); // "          test"
    console.log("test".padEnd(10)); // "test          "
}

// - Object
{
    const obj = {a:1,b:2,c:3};
    // objKey2Arr
    const objKey = Object.keys(obj); // [a,b,c]
    
    // objValue2Arr
    const objValue = Object.values(obj); // [1,2,3]

    // obj2Arr
    const obj2arr = Object.entries(obj); // [[a,1],[b,2],[c,3]]
}

// - async & await
// 
{
    let value;
    const promiseT = (x) => new Promise((res,rej) => {
        if(x < 10) res(123);
        rej('x > 10');
    });
    const promiseV = async () => {
        value = await promiseT(20).catch(_=> 20)
        console.log(value); // 20
    };
    promiseV();
    console.log(value); // undefined
}

// - Promise.all
// 비동기 모두 실행
// 3초 3초 3초 3개의 비동기 함수 실행시 9초를
// 3초만에 3개를 동시 실행 가능

{
    const promiseT1 = () => new Promise((res,rej) => setTimeout(() => res(1), 3000));
    const promiseT2 = () => new Promise((res,rej) => setTimeout(() => res(2), 3000));
    const promiseT3 = () => new Promise((res,rej) => setTimeout(() => res(3), 3000));
    
    const promisePlay = () => Promise.all([promiseT1(), promiseT2(), promiseT3()]);
    const promiseArea = async () => {
        const [a,b,c] = await promisePlay().catch(_ => ['a','b','c']);
        console.log(a,b,c); // 3초 뒤 1, 2, 3
    }
    const promiseArea2 = async () => {
        const a = await promiseT1().catch(_ => 'a');
        const b = await promiseT2().catch(_ => 'b');
        const c = await promiseT3().catch(_ => 'c');
        console.log(a,b,c); // 9초 뒤 1, 2, 3
    }
    promiseArea();
    promiseArea2();
}

////////////////////////////// 
// ES9 ES2018

// - Object rest, spread (배열 해체와 비슷)
{
    const { a, ...b } = { a: 1, b: 2, c: 3 };
    console.log(b); // { b:2, c:3 }
    const { c, d, ...e } = { d: 4, e: { f: 6 }, g: 7, h: 8 }
    console.log(e); // { e:{f:6}, g:7, h:8 }
}

// - Promise.finally : promise의 성공여부와 상관없이 마지막에 실행시킬 내용
{
    const defaultFunc = () => console.log("default Func!");
    const promiseT = () => new Promise((res,rej) => setTimeout(() => res(console.log('promiseFunc!')), 3000));
    const promisePlay = async () => await promiseT().catch(_ => console.log("ERR!")).finally(() => defaultFunc());
    promisePlay();
}

// - generator
{
    function* a(){
        yield 1;
        yield 2;
        yield 3;
    }
    var aa = a();
    var d1 = aa.next();
    console.log(d1);
    var d2 = aa.next();
    console.log(d2);
}

// - for of & Promise
{
    const forPromise = async () => {
        const arr = [1,2,3];
        const dataArr = await new Promise((res,rej) => res(arr.map(v => v**v))).catch( _ => arr).finally(() => console.log(arr));
        for await (data of dataArr) console.log(`forAwait - data : ${data}`);
    }
    forPromise();
}

////////////////////////////// 
// ES10 ES2019

// - Object.fromEntries(<-> Object.entries) 배열을 객체로
{
    const obj = {a:1, b:2, c:3};
    const enObjArr = new Object.entries(obj);
    console.log(enObjArr); // [a,1,b,2,c,3]
    const fromObj = Object.fromEntries(enObjArr);
    console.log(fromObj) // {a:1, b:2, c:3};
}

// - flat 다중 배열을 단일 배열로
{
    const arr = [[1,2], [3,[4,5],[6,[7,[8,[9]]]]]];
    const arrFlat1 = arr.flat();
    const arrFlat2 = arr.flat(2);
    const arrFlatAll = arr.flat(Infinity);
    console.log(arrFlat1);
    console.log(arrFlat2);
    console.log(arrFlatAll);
}

// - .flatMap() : 순서에 따라 중 된 배열을 모두 펼칠때까지 반복하고 새로운 배열을 반환
{
    
    const arr = [[1,2], [3,[4,5],[6,[7,[8,[9]]]]]];
    const arrFlatMap = arr.flatMap((value,index,flatArr) => {
        console.log(`value : ${value}`);
        console.log(`index : ${index}`);
        console.log(`flatArr : ${flatArr}`);
        return value;
    });
    console.log(`arrFlatMap : ${arrFlatMap}`);
}

// - trim 지우는 공백 방향
{
    '    abc    '.trim(); // 'abc'
    '    abc    '.trimStart(); // 'abc    '
    '    abc    '.trimEnd(); // '    abc'
    '    abc    '.trimRight(); // '    abc'
    '    abc    '.trimLeft(); // 'abc    '
}

// - catch(error) : error 생략
{
    try{
        throw 'ERR!';
    }
    catch{
        console.log('error 생략가능');
    }
}

// - Find Symbol Value
{
    const symbolKey = Symbol('jamessss');
    console.log(symbolKey);
    console.log(symbolKey.description);
}

////////////////////////////// 
// ES11 ES2020

// - Optional Chaining ?.(Dart와 유사)
{
    class MyClass{}
    let my;
    try{
        console.log(my.getData()); // err
    }
    catch{
        console.log('err');
    }
    console.log(my?.getData()); // undefined
}

// - Nullish coalescing Operator ?? (Dart와 유사)
{
    let my;
    console.log( my?.data ?? "my에 아무것도 없음");
}

// - globalThis (웹) 언제나 window
// * 이전까지는 실행 환경에 따라 window 사용이 달랐음

{
    console.log(globalThis === window); // true
}
// - Dynamic import : import는 Promise를 사용하며 비동기 객체를 반환하므로 비동기 처리 가능해짐
{
    import("./myModule.js")
        .then( m => console.log(m) )
        .catch( _ => console.log('err') );

    // async & await
    (
        async () => { 
            try { 
                const module = await import("./myModule.js"); 
            } 
            catch{ 
                } 
            }
        )()
}

// - BigInt : 2^53-1 보다 큰 Int 값 사용할 경우
// * BigInt 사이만 연산 가능 / n 을 사용하여 표현
{
    const bigInt1 = 9007199254740999n
    const bigInt2 = BigInt(9007199254740998)
    console.log(bigInt1 + bigInt2);
    console.log(bigInt1+123); // Type ERR !
}

// - String.prototype.matchAll
// * indexOf, exec와 유사하지만 값을 찾고 이터레이터를 반환
{
    const value = 'abcdefg';
    const [findValue1] = [...value.matchAll('cde')];
    console.log(findValue1); // ["cde", index: 2, input: "abcdefg", groups: undefined]

    const [findValue2] = [...value.matchAll('ayk')];
    console.log(findValue2); // undefined
}

// - Promise.allSettled
// * 기존 Promise.all 은 하나만 실패해도 reject 되었지만 allSettled 사용하면 멈추지 않음
{
    // 기존 Promise.all
    const promiseT1 = () => new Promise((res,rej) => res(123));
    const promiseT2 = () => new Promise((res,rej) => {throw 'err';});
    const promiseT3 = () => new Promise((res,rej) => res(321));

    const promisePlay = () => Promise.all([promiseT1(), promiseT2(), promiseT3()]).then(v => v).catch(_ => "PromiseAllERR!");
    const promiseArea = async () => {
        const data = await promisePlay();
        console.log( data ); // PromiseAllERR!
    }
    promiseArea();

    // Promise.allSettled
    const promisePlay2 = () => Promise.allSettled([promiseT1(),promiseT2(),promiseT3(),]).catch(_ => "ERR 2 !!");
    promiseArea2 = async () => {
        const data = await promisePlay2();
        console.log(`data : ${data}`);
        console.log(`data0 : status - ${data[0].status} value - ${data[0].value} reason : ${data[0].reason}`);
        console.log(`data1 : status - ${data[1].status} value - ${data[1].value} reason : ${data[1].reason}`);
        console.log(`data2 : status - ${data[2].status} value - ${data[2].value} reason : ${data[2].reason}`);

        const [ a = {status, value, reason}, b = {status, value, reason}, c = {status, value, reason} ] = await promisePlay2();
        console.log(a);
        console.log(b);
        console.log(c);
    }
    promiseArea2();
}
