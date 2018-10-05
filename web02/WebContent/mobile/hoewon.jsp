<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>매료 팩토리</title>
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.css"/>
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.js"></script>

<script type="text/javascript">
$(function(){
	$("#song").click(function(){
		alert("준비중입니다.");
	});
});
function get(){
	alert("가입");
}

</script>
<style type="text/css">
#logo{
 text-decoration: none;
}
#logo:VISITED{
 color: white;
}
#logo:LINK{
 color: white;
}
#logo:HOVER{
 color: white;
}
</style>
</head>
<body>
 <div data-role="page" id="page" style="margin: auto; vertical-align: middle;">
  <div data-role="header" id="header" style="width: 100%"  data-position="fixed">
  <div>
  <ul style="list-style-type: none; margin-right: 40px;">
  <li style="float: left; width: 25%; height: 15%;"><a href="login.html" data-role="button" data-transition="slide">로그인</a></li>
  <li style="float: left; width: 25%; height: 15%;"><a href="hoewon.jsp" data-role="button" data-transition="slide">회원가입</a></li>
  <li style="float: left; width: 25%; height: 15%;"><a href="#" data-role="button">장바구니</a></li>
  <li style="float: left; width: 25%; height: 15%;"><a href="#" data-role="button" id="song">배송조회</a></li>
  </ul>
  </div>
  <br><br>
  <div>
   
   
   <h1 style="font-size: 2em; text-align: center;"><a href="index.html" id="logo">매료팩토리</a></h1>
   </div>
   
   </div>
   
   <div data-role="panel" id="ch1" data-display="overlay" data-position-fixed="true">
     
    <div style="text-align: center;">
     <h2>로그아웃 상태입니다.</h2>
     <p>
        매료팩토리에 가입하여<br>
        더 많은 혜택을 누리세요.
     </p>
     <span style="border: 1px solid black;">
        <a href="#">로그인</a>
     </span>
     
    </div>
    <h2 style="text-align: center;">카테고리</h2>
    <a href="#" data-role="button" data-theme="a">치약</a><br>
    <a href="#" data-role="button" data-theme="b">바디워시</a><br>
    <a href="#" data-role="button" data-theme="c">바디로션</a><br>
    <a href="#" data-role="button" data-theme="e">선케어</a><br>
   
   </div>
   
   <div data-role="content" id="content">
   
   <div data-role="navbar" style="text-align:center;">
   <a href="#ch1"  style="width: 100%;">카테고리</a>
   </div>
   
   <div style="text-align: center;">
   <h1>회원가입</h1>
        아이디<input type="text" id="userid">
        비밀번호<input type="password" id="pwd">
        비밀번호 확인<input type="password" id="pwdin">
        이름<input type="text" id="name">
        주민번호<input type="text" id="jumin">
        이메일<input type="email" id="mail">   
        주소<input type="text" id="juso">
        연락처<input type="tel" id="tel">
    <input type="submit" value="가입하기" onclick="get()">
  </div>
  
  </div>
   
   <div data-role="footer" style="width: 100%; margin: auto;">
    
    <div style="display: inline;">
    <ul class="ba1" style="list-style-type: none; font-size: 10px; display: inline-block; vertical-align: top;">
			<li>BANK</li>
			<li>계좌</li>
			<br>
			<li>농협 317-6677-6677-11</li>
			<li>국민 96677-667751</li>
			<li>우체국 400010-02-890732</li>
			<li>우리 1005-593-667788</li>
			<li>예금주 : (주)매료팩토리</li>
		</ul>
		<ul class="ba2" style="list-style-type: none; font-size: 10px; display: inline-block;">
			<li>Q/A</li>
			<li>고객센터</li>
			<br>
			<li>1688-1360</li>
			<li>WEEK 10:00 ~ 17:00</li>
			<li>LUNCH 12:00 ~ 13:00</li>
			<li>- 주말,공휴일은 휴무입니다.</li>
			<li>- 통화량 폭주로 전화연결이 안 될 경우,</li>
			<li>게시판에 문의를 남겨주시면</li>
			<li>빠른처리 해드리겠습니다.</li>
		</ul>
		</div>
		<div style="text-align: center;">
		<p data-role="button">교환 / 반품 정책 확인</p>
		</div>
		
   </div>

 </div>
</body>
</html>