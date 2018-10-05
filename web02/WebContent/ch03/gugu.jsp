
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script>
function winclose(){
	//opener : 팝업창을 오픈한 메인창
	//메인창의 dan 값을 팝업창의 dan값으로 변경시킴
	//opener.opener.do...
	opener.document.getElementById("dan").value=document.form1.dan.value;
	window.close();
}
</script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>저는 팝업창입니다.</title>
</head>
<body>
<%
int dan = Integer.parseInt(request.getParameter("dan"));
%>
<h2><%=dan%></h2>
<%
for(int i=1;i<=9;i++){
	out.println(dan+" x "+i+" = "+(dan*i)+"<br>");
}
%>
<!-- window.close() 창닫기 -->
<form name="form1">메인창에 전달할 값을 입력하세요<input type="text" name="dan">
<input type="button" value="닫기" onclick="winclose()"></form>
</body>
</html>