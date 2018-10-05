function ok(){
	var total=0;
	var total1=0;
	for(var i=1;i<=20;i++){
		var ex=parseInt(document.getElementById("num"+i).value);
		total+=parseInt(ex);
	}
	if(total == 0){
		alert("수량을 입력해주세요.");
		return;
	}
	total=0;
	
	for(var i=1;i<=20;i++){
        switch(i){
        case 1:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(25000*parseInt(ex));
        	break;
        case 2:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(14500*parseInt(ex));
        	break;
        case 3:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(13500*parseInt(ex));
        	break;
        case 4:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(26000*parseInt(ex));
        	break;
        case 5:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(4500*parseInt(ex));
        	break;
        case 6:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(3500*parseInt(ex));
        	break;
        case 7:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(4000*parseInt(ex));
        	break;
        case 8:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(8500*parseInt(ex));
        	break;
        case 9:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(18000*parseInt(ex));
        	break;
        case 10:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(26000*parseInt(ex));
        	break;
        case 11:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(18500*parseInt(ex));
        	break;
        case 12:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(17500*parseInt(ex));
        	break;
        case 13:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(10000*parseInt(ex));
        	break;
        case 14:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(12000*parseInt(ex));
        	break;
        case 15:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(15500*parseInt(ex));
        	break;
        case 16:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(6500*parseInt(ex));
        	break;
        case 17:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(13500*parseInt(ex));
        	break;
        case 18:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(12500*parseInt(ex));
        	break;
        case 19:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(4000*parseInt(ex));
        	break;
        case 20:
        	var ex=parseInt(document.getElementById("num"+i).value);
        	total1+=(16000*parseInt(ex));
        	break;
        }
	}
	total=total1;
	
	var user = confirm("결제 하시겠습니까?");
	if(user == true){
		alert("총 결제금액 : "+total+"원");
		alert("결제가 완료되었습니다.");
	}
	
}
function no(){
	var user = confirm("메인화면으로 이동하시겠습니까?");
	if(user == true){
	location.href="portfolio.html";
	}
}