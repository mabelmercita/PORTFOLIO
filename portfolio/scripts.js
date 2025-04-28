document.addEventListener('keydown', function (e) {
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('📸 Screenshot blocked!');
    }

    if (e.altKey) {
        let message = document.getElementById('altMessage');
        if (!message) {
            message = document.createElement('div');
            message.id = 'altMessage';
            message.innerText = 'Screenshot attempt detected!';
            document.body.appendChild(message);
        }
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 2000);
    }
});
