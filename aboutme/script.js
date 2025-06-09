document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.quality-item');
    
    stars.forEach((star, index) => {
    });
});
document.querySelector('.download-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'Резюме_Кристина_Краснова.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
