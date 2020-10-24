// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1
var messageSpan = document.getElementById('q1-text')
 console.log(messageSpan.textContent)
// Q 2
var messageSpan = document.getElementById('q2-text');
messageSpan.textContent = 'HEllo';


// Q 3

var messageSpan = document.getElementById('q3-text');
messageSpan.style.color = 'blue';

// Q 4 (難)
// 「for of」を使います。
var messageSpan = document.getElementsByClassName('q4-text');
console.log(messageSpan);

for(let i =0; i <messageSpan.length;i++){
	messageSpan[i].style.color = 'red'
}
// Q 5

var messageSpan = document.getElementsByClassName('q5-text');
console.log(messageSpan);

for(let i =0; i <messageSpan.length;i++){
	messageSpan[i].style.backgroundColor = 'red'
}
