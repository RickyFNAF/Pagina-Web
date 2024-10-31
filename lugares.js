function showInfo(infoId) {
    document.querySelectorAll('.info').forEach(info => {
        info.style.display = 'none';
    });
    document.getElementById(infoId).style.display = 'flex';
    document.getElementById('circle').style.transform = 'rotate(360deg)';
}

function goBack() {
    document.querySelectorAll('.info').forEach(info => {
        info.style.display = 'none';
    });
    document.getElementById('circle').style.transform = 'rotate(0deg)';
}
