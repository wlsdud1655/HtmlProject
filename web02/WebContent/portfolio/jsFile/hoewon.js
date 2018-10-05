 function ok(){
	 //아이디
	 var userid = document.getElementById("userid");
	 if(userid.value == ""){
		 alert("아이디를 입력해주세요.");
		 userid.focus();
		 return;
	 }
	 var exp1 = /^[a-zA-Z0-9]{6,16}$/;
	 if(!exp1.test(userid.value)){
		 alert("아이디는 영문자,숫자 6~16자리로 입력하세요.");
		 userid.focus();
		 return;
	 }
	 //비밀번호
	 var pwd = document.getElementById("pwd");
	 if(pwd.value == ""){
		 alert("비밀번호를 입력해주세요.");
		 pwd.focus();
		 return;
	 }
	 var exp2 = /^[a-zA-z0-9]{8,}$/
	 if(!exp2.test(pwd.value)){
		 alert("비밀번호는 영문자,숫자 8자리이상으로 입력하세요.");
		 pwd.focus();
		 return;
	 }
	 //비밀번호 확인
	 var pwdin=document.getElementById("pwdin");

	  if(pwd.value != pwdin.value){
		 alert("비밀번호를 다시 확인해주세요");
		 pwdin.focus();
		 return;
	 }
	  //이메일
	  var email = document.getElementById("email");
	  if(email.value == ""){
		  alert("이메일을 입력해주세요.");
		  email.focus();
			 return;
	  }
	  var exp4=/^[a-z0-9]{2,}@[a-z0-9]{2,}\.[a-z]{2,}$/;
	  if (!exp4.test(email.value)){
			alert("이메일 형식이 잘못 되었습니다.");
			email.focus();
			return;
		}
	  var name= document.getElementById("name");
	  if(name.value == ""){
		  alert("이름을 입력해주세요.");
		  name.focus();
			 return;
	  }
	  var exp5=/^[가-힣\x20]{2,10}$/;
	  if(!exp5.test(name.value)){
		  alert("이름은 한글 2~10자 이내로 입력하세요.");
			name.focus();
			return;
	  }
	  var date=document.getElementById("date");
	  if(date.value == ""){
		  alert("생년월일을 입력하세요.");
		  date.focus();
			return;
	  }
	  var jumin=document.getElementById("jumin");
	  if(jumin.value == ""){
		  alert("주민번호를 입력하세요.");
		  jumin.focus();
			return;
	  }
	  var exp6=/^[0-9]{6}-[1-4]{1}[0-9]{6}$/;
	  if(!exp6.test(jumin.value)){
		  alert("주민번호를 정확히 입력하세요.");
		  jumin.focus();
			return;
	  }
	  var phone=document.getElementById("phone");
	  if(phone.value == ""){
		  alert("전화번호를 입력하세요.");
		  phone.focus();
			return;
	  }
	  var exp7=/^[0]{1}[1]{1}[0]{1}-[0-9]{4}-[0-9]{4}$/;
	  if(!exp7.test(phone.value)){
		  alert("전화번호를 정확히 입력하세요.");
		  phone.focus();
			return;
	  }
	  var juso=document.getElementById("juso");
	  if(juso.value == ""){
		  alert("주소를 입력하세요.");
		  juso.focus();
			return;
	  }
	  alert("회원가입이 완료되었습니다.");
	  location.href="portfolio.html";
 }
 function no(){
	 alert("메인 화면으로 돌아갑니다.");
	 location.href="portfolio.html";
 }