document.addEventListener('DOMContentLoaded', function () {

    const btn = document.querySelector('.main-btn');

    let status = 0;

    btn.addEventListener('click', function() {
        status++;
        if(status > 2) {
            status = 0;
        }
        updateStatus();
    });

    function updateStatus () {
        switch (status) {
            case 0 :
                setStatus('Update', 'green');
                break;
            case 1 :
                setStatus('Delete', 'red');
                break;
            case 2:
                setStatus('Pending', 'orange');
                break;
        }
    }

    function setStatus(text, color) {
        btn.textContent = text;
        btn.style.backgroundColor = color;
    }

});