function ageInDays(){
    var brithYear = prompt("Enter your birth year.")
    var inDays = (2021-brithYear)*365;
    var h1 = document.createElement('h1');
    var resultText = document.createTextNode('You are ' + inDays +' days old')
    h1.setAttribute('id','ageInDays');
    h1.appendChild(resultText);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset()
{
    document.getElementById('ageInDays').remove();
}