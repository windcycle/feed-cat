var j=0,text;
text = "We are HACKTIVSM We are legion We are not forgive we are not forget Exepect us";
function myAnimation(){
    if(j<text.length){
        document.getElementById("myAnimation1").innerHTML += text.charAt(j);
        j++;
        setTimeout(myAnimation,65);
    }
}
myAnimation();