function appending(){
    let num = document.getElementById("inp1").value;
    if (isNaN(num)){
        alert("Enter An Appropriate Number");
        clrscr();
    }
    else{
       let result = fact(num);
       let btn1 = document.getElementById("btn1");
       btn1.remove();
       let inp1 = document.getElementById("inp1");
       inp1.remove();
       let text = document.getElementById("text1");
       text.innerText = "Factorial of "+num+" is "+result;
    }
}

function fact(x){
    if(x == 0){
        return 1;
    }
    else{
        return x * fact(x-1);
    }
}

function clrscr(){
    let y = document.getElementById("inp1");
    y.value = "";
}



