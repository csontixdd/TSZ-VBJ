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
        // Itt lehetne az ellenőrzés logikája
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
