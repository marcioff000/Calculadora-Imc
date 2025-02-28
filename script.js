function calc() {
        const weight = document.getElementById("Peso").value;
        
       const height = document.getElementById("Altura").value
       
       let result = weight / (height * height);
       
       const text = document.getElementById("parag").innerHTML = result;
       
       let info = "";
       
       if (result < 18.5) {
    info = "Abaixo do peso, arrombado";
       }
    else if (result >= 18.5 && result <= 24.9) {
    info = "Peso normal, arrombado"
    }
    else if (result >= 25 && result <= 29.9) {
    info = "Dai pra frente é só pra trás, arrombado"
    }
    
       const textshow = document.getElementById("parag-text").innerHTML = info;
    }