document.querySelectorAll('.chairs ul li, .tools ul li, .documents ul li').forEach(item => {
    item.addEventListener('click', () => {
        alert('Showing description for ' + item.textContent);
    });
});
