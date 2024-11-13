// Get references to the input box and the list container
const inputBox = document.getElementById('inputBx');
const list = document.getElementById('list');

// Add an event listener for the "Enter" key
inputBox.addEventListener('keypress', function(event) {
    // Check if "Enter" key was pressed and input is not empty
    if (event.key === 'Enter' && inputBox.value.trim() !== '') {
        // Create a new list item (li) element
        const listItem = document.createElement('li');
        
        // Set the text content of the list item to the input value
        listItem.textContent = inputBox.value;
        
        // Append the new list item to the list
        list.appendChild(listItem);
        
        // Clear the input box
        inputBox.value = '';

        // Optional: Add a delete feature by clicking on the list item
        listItem.addEventListener('click', function() {
            list.removeChild(listItem); // Remove the item from the list
        });
    }
});
