const tictacBox=document.getElementById('tictac');
tictacBox.addEventListener('click',function(){
    window.location.href="tictactoe/index.html";
});
const amazonBox=document.getElementById('amazon');
amazonBox.addEventListener('click',function(){
    window.location.href="css main amazon/index.html";
});
const currBox=document.getElementById('curr');
currBox.addEventListener('click',function(){
    window.location.href="currency_convertor/index.html";
});
const pyqsBox=document.getElementById('pyqs');
pyqsBox.addEventListener('click',function(){
    window.location.href="pyqs_project/index.html";
});
const rpsBox=document.getElementById('rps');
rpsBox.addEventListener('click',function(){
    window.location.href="rockpaperscissor/index.html";
});

const git=document.getElementById('git');
git.addEventListener('click',function(){
    window.open("https://github.com/anuska-yadav","_blank");
});

const leet=document.getElementById('leet');
leet.addEventListener('click',function(){
    window.open("https://leetcode.com/u/_anuska/","_blank");
});

const mail=document.getElementById('mail');
mail.addEventListener('click',function(){
    window.location.href="mailto:yanuska0002@gmail.com";
});

function showText(element,text){
    element.setAttribute("data-text",text);
}
showText(git,"GitHub Profile");
showText(leet,"Leetcode Profile");
showText(mail,"mail Id");
