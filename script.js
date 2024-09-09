
function gotopage() {
    window.location.href = 'more.html';
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}


function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function showSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

window.onclick = function(event) {
    var modal = document.getElementById('USSIModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
    var modal = document.getElementById('volunteerModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
    var modal = document.getElementById('part-timeModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
    var modal = document.getElementById('codeModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
    var modal = document.getElementById('TranscriptModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
    var modal = document.getElementById('IeltsModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
    var modal = document.getElementById('HardwareModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
    var modal = document.getElementById('IntroModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
    var modal = document.getElementById('DataModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
    var modal = document.getElementById('BrightModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
    var modal = document.getElementById('ChoirModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
    const emailPopup = document.getElementById('emailPopup');
    if (event.target !== emailPopup && !emailPopup.contains(event.target) && event.target.getAttribute('alt') !== 'Email') {
        emailPopup.style.display = 'none';
    }
    const callPopup = document.getElementById('callPopup');
    if (event.target !== callPopup && !callPopup.contains(event.target) && event.target.getAttribute('alt') !== 'Call +44 7387612745') {
        callPopup.style.display = 'none';
    }
}

function downloadPortfolio() {
    window.location.href = 'files/portfolio.pdf';
}

function toggleEmailPopup(event) {
    event.preventDefault();
    const emailPopup = document.getElementById('emailPopup');
    if (emailPopup.style.display === 'block') {
        emailPopup.style.display = 'none';
    } else {
        emailPopup.style.display = 'block';
    }
}


function togglePhonePopup(event) {
    event.preventDefault();
    const phonePopup = document.getElementById('callPopup');
    if (phonePopup.style.display === 'block') {
        phonePopup.style.display = 'none';
    } else {
        phonePopup.style.display = 'block';
    }
}
