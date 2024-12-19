document.getElementById('sobre').addEventListener('click', function() {
    const carta = document.getElementById('carta');
    const sobre = document.getElementById('sobre');
    
    // Animar la carta para que se "abra"
    carta.style.transform = 'scaleY(1)';
    
    // Hacer desaparecer el sobre
    sobre.style.transform = 'rotateX(-90deg)';
});
