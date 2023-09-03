window.alert("i'm not a robot?");//验证不是机器人

function gift() {
    document.getElementById("gift").innerHTML = "Have a nice day!"
};//定义gift函数

function HideImage() {
    document.getElementById('nyan-cat').style.display = 'none';
    document.getElementById('show').style.display = 'block';
    document.getElementById('hide').style.display = 'none'
}//隐藏函数
function ShowImage() {
    document.getElementById('nyan-cat').style.display = 'block';
    document.getElementById('hide').style.display = 'block';
    document.getElementById('show').style.display = 'none'
}
