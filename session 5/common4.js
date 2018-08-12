// hàm đê nối giá trị của giá trị sổ vào kết quả
function cal(number){
var result;
result = document.getElementById('result').value;
result += number;
document.getElementById('result').innerHTML = result;
}
// tính kết quả của toàn bộ phép tính và gán vào kết quả
function resultCal(){
	var result = document.getElementById('result').textContent;
	document.getElementById('result').innerHTML = eval(result);
}
// reset lại toàn bộ phép tính
function resultCal{
	// gán nội dung kết quả bảng ''
	document.getElementById('result').innerHTML = '';
}
/// xóa 1 ký tự cuối cùng trong kêt quả
function backCal(){
	var result = document.getElementById('result').textContent;
	var resultLeng = result.length;
	result = result.substring(0, resultLeng-1);
	/// nội dung củ giá trị vừa chọn vào kết quả
	document.getElementById('result').innerHTML = result;
}

