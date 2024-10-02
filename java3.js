document.addEventListener('DOMContentLoaded', function() {
    let card = document.querySelector('.card');

    if (card) {
        card.addEventListener('click', function(event) {
            // Csak akkor forduljon meg, ha nem a gombokat kattintjuk
            if (!event.target.closest('.buttons') && 
               !event.target.closest('.QRcode') &&
               !event.target.closest('.QRcode2') &&
                !event.target.classList.contains('close') && 
                !event.target.classList.contains('close2')) {
                card.classList.toggle('flipped');
            }
        });
    }

    const imageModal = document.getElementById('imageModal');
    const imageModal2 = document.getElementById('imageModal2');

    // Általános modal nyitó funkció, hogy ne ismételjük a kódot
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // Gombokra kattintás események
    document.getElementById('arlistaBtn1').addEventListener('click', function(event) {
        event.stopPropagation(); // Megakadályozza a kártya forgását
        openModal(imageModal);   // Árlista modal megnyitása
    });

    document.getElementById('nyitvatartasBtn1').addEventListener('click', function(event) {
        event.stopPropagation(); // Megakadályozza a kártya forgását
        openModal(imageModal2);  // Nyitvatartás modal megnyitása
    });

    // Modal zárás funkció
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // Bezárás gombok eseményei
    document.getElementById('closeBtn').addEventListener('click', function(event) {
        event.stopPropagation(); // Megakadályozza a kártya forgását
        closeModal(imageModal);  // Árlista modal bezárása
    });

    document.getElementById('closeBtn2').addEventListener('click', function(event) {
        event.stopPropagation(); // Megakadályozza a kártya forgását
        closeModal(imageModal2); // Nyitvatartás modal bezárása
    });

    // Bezárás kattintásra a modális ablakon kívül
    window.addEventListener('click', function(event) {
        if (event.target == imageModal) {
            closeModal(imageModal);
        }
        if (event.target == imageModal2) {
            closeModal(imageModal2);
        }
    });
});
