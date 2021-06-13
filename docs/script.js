function Aleatorizar (){
    let quant = parseInt(document.getElementById("quantInput").value);
    let min = parseInt(document.getElementById("minInput").value);
    let max = parseInt(document.getElementById("maxInput").value);

    let nums = new Array(quant);

    for(let i = 0; i < quant; i++){

        if(i == 0){
            nums[i] = Math.floor(Math.random() * (max)) + min;
            document.getElementById("resultado").innerText = "Os números sorteados foram: " + nums[i] + "-";
        }else if(i < (quant - 1)){
            nums[i] = Math.floor(Math.random() * (max)) + min;
            document.getElementById("resultado").innerText += nums[i] + "-";
        }else{
            nums[i] = Math.floor(Math.random() * (max)) + min;
            document.getElementById("resultado").innerText += nums[i];
        }

    }
    
    
}