document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');

    todoList.addEventListener('click', function (event) {
        const listItem = event.target.closest('li');
        if (listItem) {
            // Toggle the completed class when clicking anywhere on the list item
            listItem.classList.toggle('completed');

            // Toggle the checkbox state when clicking anywhere on the list item
            const checkbox = listItem.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
            }
        }
    });
     function resetTodoList() {
        const listItems = todoList.querySelectorAll('li');
        listItems.forEach(item => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = false; // Uncheck the checkbox
                item.classList.remove('completed'); // Remove completed class
            }
        });
    }

    // Call the reset function on page load
    resetTodoList();
});