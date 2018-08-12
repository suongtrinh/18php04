var a;
var b = 5;
var	 c, d, e;
var useName; // camel
var user_name; // it dung
var myUserName;
var my_user_name; // it dung
var name;
var	age;
var brithday;
var	country;
// comment
/* comment o day
	tiep tuc comment
*/

/*
	khai bao 2 biến a và b. tính các phép cộng trừ nhân chia từ a va b và in ra kết quả
*/
var a = 5;
var b = 9;
document.write('Ket qua cua a + b   là:  ');
document.write(a + b);
document.write("<br>");
document.write("<br>");
document.write('Ket qua cua a - b   là:  ');
document.write(a - b);
document.write("<br>");
document.write("<br>");
document.write('Ket qua cua a * b   là:  ');
document.write(a * b);
document.write("<br>");
document.write("<br>");
document.write('Ket qua cua a % b   là:  ');
document.write(a % b);
document.write("<br>");
document.write("<br>");
document.write('Ket qua cua a / b   là:  ');
document.write(a / b);
document.write("<br>");
document.write("<br>");
/*
	khai bao 2 biến a và b. tính các phép cộng trừ nhân chia từ a va b và in ra kết quả
*/
console.log(1+'1');
console.log(11-'1');

/*

*/
var h;
var g = 5;
var c, d, e;
var f = "Hello";
document.write("<br>");
document.write(typeof h);
document.write("<br>");
document.write(typeof g);
document.write("<br>");
document.write(typeof f);

/*
	
*/

var nam = 1997;
 if (nam % 2)
 	document.write('Bạn sinh năm lẻ');
 else
 	document.write('Bạn sinh năm chẵn');

/*  cách so sánh
	== so sánh bằng
	>= so sánh lớn hơn hoặc bằng
	<= so sánh bé hơn hoặc bằng
	!= so sánh khác
	=== so sánh bằng cả giá trị và kiểu dữ liệu
	!== so sánh khác giá trị và kiểu dữ liệu
*/

	document.write("<br>");
	for(i = 0; i < 10; i++){
		document.write(i);
		document.write("<br>");
	}
/*
	cho vòng lặp chạy từ 0 đến 100
		- nếu số đó chia hết cho 3 thì in ra"chia hết cho 3"
		- nếu số đó chia hết cho 5 thì in ra"chia hết cho 5"
		- nếu số đó chia hết cho 15 thì in ra"chia hết cho 15"
		(không in ra chia hết cho 3 và chia hết cho 5 ở trên)
*/
	document.write("<br>");
	for(i = 0; i <= 100; i++){
		if (i % 15 == 0){
			document.write(i+'chia  hết cho 15<br>');
		}
		else{
			if (i % 3 == 0){
				document.write(i+'chia hết cho 3<br>');
			}
			if (i % 5 == 0){
				document.write(i+'chia  hết cho 5<br>');
			}
		}
	}
/*  // if
	   // true -code
	// else if(condition)
		// true - code
	// else
		// false - code


	// while (condition){
		// true -code
	//}

	// do
*/

	document.write("<br>");
	var i = 10;
	while (i > 0){
		document.write(i);
		document.write("<br>");
		
		i=i-1;
	}

	document.write("<br>");
	var i = 10;
	do {
		document.write(i);
		document.write("<br>");
		i--;
	} while (i > 0)
//----------------------
	var	today = 2;
	switch (today){
		case 2:
			document.write('Monday');
			break;
		case 3:
			document.write('Tuesday');
			break;
		case 4:
			document.write('Wednesday');
			break;
		case 5:
			document.write('Thursday');
			break;
		case 6:
			document.write('Friday');
			break;
		case 7:
			document.write('Satusday');
			break;
		default:
			document.write('Sunday');
			break;
	}
	document.write('<br>');
/////////////////
var myName = 'Suong';

// định nghĩa hàm
function functionName(){
	document.write('Hello Suong');
}

// gọi hàm
functionName();
document.write('<br>');

////
function sumNumber(a = 5, b = 4){
	document.write(a + b)

}
sumNumber(6, 6);
///
/*
	description: hàm này để tính tổng 2 số
	created 04/08/2018
	created by Suong
*/
function sumNumber2(a = 5, b = 6){
	return a + b;
}
document.write('<br>');
document.write(sumNumber2(6, 7));
document.write('<br>');
console.log(a);
if (sumNumber2(6, 8) >12) {
	document.write('Tong lon hon 12');
}
/////
document.write('<br>');
var b = 5;
if (b > 5){
	document.write('b lon honnn 5');
}
else{
	document.write('b nho hon hoac bang 5');
}
/////////////
document.write('<br>');
var b = 5;
var c;
c = (b > 5)?'b lon hon 5':'b nho hon hoac bang 5';
document.write(c);
	/////(condition)?true:false;
/////////
document.write('<br>');
for (var i = 0; i < 3; i++){
	document.write(i);
	document.write('<br>');
}
/////////////////////////////////////////////////////


