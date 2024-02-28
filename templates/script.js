function addTask() {
    var taskInput = document.getElementById("taskInput");
    var reminderInput = document.getElementById("reminderInput");
    var taskText = taskInput.value.trim();
    var reminderDateTime = new Date(reminderInput.value); // Parse reminder time
    var now = new Date();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText + " - Reminder set for: " + reminderDateTime.toLocaleString();

    var timeDifference = reminderDateTime.getTime() - now.getTime();

    if (timeDifference > 0) {
        setTimeout(function() {
            alert("Reminder: " + taskText);
        }, timeDifference);
    } else {
        alert("Reminder time should be in the future!");
        return;
    }

    var deleteButton = document.createElement("span");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
    reminderInput.value = "";
}

function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark-theme");
}

function showDateTime() {
    var now = new Date();
    var options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    var dateTimeString = now.toLocaleString('en-US', options);
    var dateTimeElement = document.getElementById("dateTime");
    dateTimeElement.textContent = dateTimeString;
}

function login() {
    // Redirect to add task page for now
    window.location.href = "index.html";
}

function signup() {
    // Redirect to add task page for now
    window.location.href = "index.html";
}


// Show current date and time initially and update every second
showDateTime();
setInterval(showDateTime, 1000);
