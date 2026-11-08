
const ADMIN_WA_NUMBER = "6288231341895";


// --- Lanjutkan dengan kode JavaScript kamu yang lain di bawah ini ---


// ==========================================
//  MICHI STORE V2 — JavaScript Umum
// ==========================================

console.log('✅ TanzShop Berhasil Dimuat');

// Animasi masuk elemen saat halaman terbuka
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(10px)';
        mainContent.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Efek klik pada tombol/link menu
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.href && !link.href.startsWith('http')) {
        // Tambah efek visual saat diklik
        link.style.opacity = '0.7';
        setTimeout(() => {
            link.style.opacity = '1';
        }, 150);
    }
});

// ==========================================
//  NAVIGASI SAMPING
// ==========================================

function bukaNav() {
    document.getElementById('navOverlay').classList.remove('hidden');
    document.getElementById('navPanel').classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden'; // Kunci scroll halaman
}

function tutupNav() {
    document.getElementById('navOverlay').classList.add('hidden');
    document.getElementById('navPanel').classList.add('translate-x-full');
    document.body.style.overflow = ''; // Buka kembali scroll
}

// Tutup navigasi saat klik link di dalamnya
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#navPanel a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            tutupNav();
        });
    });
});
