// script.js

function smoothScroll(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

function downloadResume() {
    // Replace 'path/to/your_resume.pdf' with the actual path to your resume PDF file
    window.location.href = 'Arjun_Resume.pdf';
}


