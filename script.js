// Function to add the search input to the history list
function addSearchHistory() {
    var searchInput = document.getElementById("search-input").value;
    if (searchInput) {
        var listItem = document.createElement("li");
        listItem.textContent = searchInput;
        document.getElementById("search-history-list").appendChild(listItem);
        document.getElementById("search-input").value = ""; // Clear the search input field
    }
}

// Function to clear the search history
function clearSearchHistory() {
    var searchHistoryList = document.getElementById("search-history-list");
    searchHistoryList.innerHTML = ""; // Clear all history items
}
