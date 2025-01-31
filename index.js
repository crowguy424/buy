const todoItems = document.querySelectorAll('.todo-item');
document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');

    // Add event listeners to all checkboxes
    const checkboxes = document.querySelectorAll('#todo-list .todo-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        
        checkbox.addEventListener('change', function() {
            const li = checkbox.closest('.todo-item');
            if (checkbox.checked) {
                li.classList.add('completed');
                item.classList.add('completed');
                label.textContent = 'JOB COMPLETE!!!';
            } else {
                li.classList.remove('completed');
                item.classList.remove('completed');
                label.textContent = label.textContent.replace('JOB COMPLETE!!!', '').trim();
            }
        });
    });
});



