var enter = prompt("입학년도를 입력해주세요");
if(enter == 2021){
alert("반갑습니다");
}
else{
while (enter != 2021)
{
alert("다시 접속해주세요");
enter = prompt("입학년도를 입력해주세요");
}
}
