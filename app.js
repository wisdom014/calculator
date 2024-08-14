        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

              function deleteDisplay() {
        document.getElementById("display").value = "0";
      }

      function percentage() {
       document.getElementById('display').value /= 100;
      }

        function calculateResult() {
            const display = document.getElementById('display');
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }