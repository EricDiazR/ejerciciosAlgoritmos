let a=parseFloat(prompt("Dame un numero entre 1 y 100"));
let b=parseFloat(prompt("Dame otro numero entre 1 y 100"));
let c=parseFloat(prompt("Dame otro numero entre 1 y 100"));

if ((a<1 || a>100) || (b<1 || b>100) | (c<1 || c>100)){ 
    //validación a medias falta de letras
    if(a<1 || a>100){
        console.log("Tu primer número (",a,") no entra en el rango");
    }
    if(b<1 || b>100){
        console.log("Tu segundo número (",a,") no entra en el rango");
    }
    if(c<1 || c>100){
        console.log("Tu tercer número (",a,") no entra en el rango");
    }
}else{
    //numero mayor
    if(a>=b && a>=c){
    console.log("El número mayor es el primero: ",a);   
    }else if(b>=a && b>=c){
        console.log("El número mayor es el segundo: ",b);
    }else
        console.log("El número mayor es el tercero: ",c);


    //numero menor
    if(a<=b && a<=c){
        console.log("El número menor es el primero: ",a);   
    }else if(b<=a && b<=c){
            console.log("El número menor es el segundo: ",b);
    }else{
            console.log("El número menor es el tercero: ",c);
        }

    //iguales
    if(a==b && a==c){
        console.log("Tus tres números son iguales");
    }else if(a==b){
        console.log("Primero y segundo son iguales");
    }else if(c==b){
        console.log("Segundo y tercero son iguales");
    }else if(a==c){
        console.log("Primero y tercero son iguales");
    }

}
//checar número entre 100 y 200 si es par.
let e=parseInt(prompt("Dame un número entre 100 y 200"));
    //validación a medias falta de letras
    if(e<100 || e>200){
        console.log("Tu número",e," no entra en el rango");
    } else {
        if(e%3==0){
            console.log("Tu número",e,"es múltiplo de 3");
        }else{
            console.log("Tu número",e,"no es múltiplo de 3");
        }   
    }

//Checar si un número es la suma de otros dos dados.
let f=parseFloat(prompt("Dame un número"));
let g=parseFloat(prompt("Dame otro número"));
let h=parseFloat(prompt("Dame tu numero final"));

let j = f+g;
let k = f+h;
let l = g+h;
if(f==l){
    console.log("Tu número",f,"es la suma de:",g,"más",h);
}else if(g==k){
    console.log("Tu número,",g,"es la suma de:",f,"más",h);
}else if(h==j){
    console.log("Tu número",h,"es la suma de:",f,"más",g);
}else{
    console.log("Tus números",f,g,h,"no son suma de los otros");
}


//saber si es par o nel pastel
let i=parseFloat(prompt("Dame tu numero final final"));
if(i%2==0){
    console.log("Tu número final final",i,"es par");
}else{
    console.log("Tu número final final",i," no es par");
}



