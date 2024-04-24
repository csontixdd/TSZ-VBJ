document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box input');
    boxes.forEach(function(box, index) {
        box.addEventListener('keydown', function(event) {
            if (event.key === 'Backspace' && index > 0) {
                if (box.value === '') {
                    boxes[index - 1].focus();
                }
            }
        });
        box.addEventListener('keyup', function() {
            moveToNext(box, boxes[index + 1]);
        });
    });

    document.getElementById('Ellenorzes').addEventListener('click', function() {
        const firstRowFilled = Array.from(document.querySelectorAll('.grid:first-child .box input')).every(input => input.value);
        if (firstRowFilled) {
            // Itt lehet az eljárás ami végigmegy a betűkön az első sorban
            // Például: checkFirstRow();
            // Ezután engedélyezzük a második sorba való lépést
            enableSecondRow();
        } else {
            alert('Töltsd ki az összes mezőt az első sorban!');
        }
    });

    document.getElementById('Kovetkezo').addEventListener('click', function() {
        // Itt lehetne a következő lépés logikája
    });
});

function moveToNext(input, nextInput) {
    if (input.value.length === input.maxLength && nextInput) {
        nextInput.focus();
    }
}

function enableSecondRow() {
    const secondRowInputs = document.querySelectorAll('.grid:nth-child(2) .box input');
    secondRowInputs.forEach(input => {
        input.removeAttribute('disabled');
    });
}
