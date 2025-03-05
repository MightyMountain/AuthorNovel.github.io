function showChapter(chapterId) {
    const chapters = document.querySelectorAll('.chapter');
    chapters.forEach(chapter => {
        chapter.classList.add('hidden');
    });
    const chapter = document.getElementById(chapterId);
    chapter.classList.remove('hidden');
    chapter.scrollIntoView({ behavior: 'smooth' }); // Scroll to the chapter title
}

function loadAnotherSideContent() {
    fetch('Novel/AnotherSide.html')

        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('another-side-content').innerHTML = data;

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function loadVillainContent() {
    fetch('Novel/Villain.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('villainContent').innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function toggleAnotherSideContent() {
    const anotherSideSection = document.getElementById('another-side-section');
    const villainSection = document.getElementById('villain-section');
    villainSection.style.display = "none";
    if (anotherSideSection.style.display === "none") {
        anotherSideSection.style.display = "flex";
        showChapter('prologue'); // Show prologue by default
    } else {
        anotherSideSection.style.display = "none";
    }
}


function toggleVillainContent() {
    const villainSection = document.getElementById('villain-section');
    const anotherSideSection = document.getElementById('another-side-section');
    anotherSideSection.style.display = "none";

    if (villainSection.style.display === "none") {
        villainSection.style.display = "flex";
        loadVillainContent();
        showVillainChapter('villain-prologue');
    } else {
        villainSection.style.display = "none";
    }
}



function showVillainChapter(chapterId) {
    const chapters = document.querySelectorAll('.chapter');
    chapters.forEach(chapter => chapter.classList.add('hidden'));
    document.getElementById(chapterId).classList.remove('hidden');
}

function toggleNovelContent() {
    const novelContent = document.getElementById('novelContent');
    novelContent.classList.toggle('hidden');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Fungsi untuk menutup semua Cerpen
function closeAllCerpenContent() {
    document.getElementById('kisah-section').style.display = "none";
    document.getElementById('bunga-section').style.display = "none";
}

function toggleKisahContent() {
    const kisahSection = document.getElementById('kisah-section');
    const bungaSection = document.getElementById('bunga-section');
    bungaSection.style.display = "none";
    if (kisahSection.style.display === "none") {
        kisahSection.style.display = "flex";
        showChapter('kisah-chapter1'); // Show chapter 1 by default
    } else {
        kisahSection.style.display = "none";
    }
}

function toggleBungaContent() {
    const bungaSection = document.getElementById('bunga-section');
    const kisahSection = document.getElementById('kisah-section');
    kisahSection.style.display = "none";
    if (bungaSection.style.display === "none") {
        closeAllCerpenContent();
        bungaSection.style.display = "flex";
        showChapter('bunga-chapter1'); // Show chapter 1 by default
    } else {
        bungaSection.style.display = "none";
    }
}
