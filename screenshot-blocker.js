document.addEventListener('keydown', function (e) {
    // Block Print Screen
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('📸 Screenshot blocked!');
    }

    // Alt key - visual cue
    if (e.altKey) {
        let message = document.getElementById('altMessage');
        if (!message) {
            message = document.createElement('div');
            message.id = 'altMessage';
            message.textContent = '⚠️ Screenshot attempt detected!';
            Object.assign(message.style, {
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '5px',
                fontSize: '16px',
                zIndex: '9999'
            });
            document.body.appendChild(message);
        } else {
            message.style.display = 'block';
        }

        setTimeout(() => {
            message.style.display = 'none';
        }, 2000);
    }
});
