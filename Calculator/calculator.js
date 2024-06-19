let calculation="";
        function updateCalculation(value){
            calculation+=value;
            displayCalculation();
        }
        function displayCalculation(){
            document.querySelector('p').innerHTML=calculation
        }
        function clearCalculation(){
            calculation="";
            displayCalculation();
        }
