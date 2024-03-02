function createTable() {
    //Write your code here
	let rn=prompt("Input number of rows");
	let cn=prompt("Input number of columns");
	let table=document.getElementById("myTable");
	  table.innerHTML = "";
    for(let i=0;i<rn;i++){
			let row=table.insertRow();
		for(let j=0;j<cn;j++){
			let data=row.insertCell();
		data.innerHTML=`Row-${i} Column-${j}`;
		}
	}
}
