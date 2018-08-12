function payroll(){
	var	basicSalary = document.getElementById('basicSalary').value;
	var	coeSalary = document.getElementById('basicSalary').value;
	var	allowance = document.getElementById('basicSalary').value;
	var salary;
	if (coeSalary) {
		salary = parseInt(basicSalary) * parseInt(coeSalary);
	}
	else{
		salary = parseInt(basicSalary) * parseInt(coeSalary) + parseInt(allowance);	
	}
	if (salary < 5000000){
		document.getElementById('salaryWarning').style.color = 'red';
		document.getElementById('salaryWarning').innerHTML = 'Bạn cần cố gắng hơn';

	}
	else if (salary > 30000000){
		document.getElementById('salaryWarning').style.color = 'blue';
		document.getElementById('salaryWarning').innerHTML = 'Bạn quá giàu';
	else{
		document.getElementById('salaryWarning').innerHTML = '';
	}	
	document.getElementById('salaryWarning').innerHTML = salary;

	}

	
}