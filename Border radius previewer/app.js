const previewBtn = document.getElementById('preview-btn');
const copyBtn = document.getElementById('copy-btn');
const box = document.getElementById('box');

previewBtn.addEventListener('click', () => {
    let topLeft = document.getElementById('top-left').value;
    let topRight = document.getElementById('top-right').value;
    let bottomLeft = document.getElementById('bottom-left').value;
    let bottomRight = document.getElementById('bottom-right').value;
    
    box.style.borderTopLeftRadius = `${topLeft}px`;
    box.style.borderTopRightRadius = `${topRight}px`;
    box.style.borderBottomLeftRadius = `${bottomLeft}px`;
    box.style.borderBottomRightRadius = `${bottomRight}px`;
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText("border-radius: " + box.style.borderRadius + ";");
    copyBtn.textContent = "COPIED CSS";
});