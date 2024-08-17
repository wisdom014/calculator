        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function deleteDisplay() {
            const display = document.getElementById("display");
            display.value = display.value.slice(0, -1);
        }

        function percentage() {
            const display = document.getElementById('display');
            const numbers = display.value.split('%'); // Split input by '%'
            if (numbers.length === 2) {
                const result = Number(numbers[0]) % Number(numbers[1]); // Calculate remainder
                display.value = result;
            } else {
                display.value = 'Error';
            }
        }

        function calculateResult() {
            const display = document.getElementById('display');
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
    