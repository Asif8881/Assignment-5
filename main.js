document.getElementById('blog-btn').addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./index2.html"
});

function clourChange() {
    event.preventDefault();
    document.body.style.backgroundColor =
        'rgb(' + Math.round(Math.random() * 255) +
        ',' + Math.round(Math.random() * 255) +
        ',' + Math.round(Math.random() * 255) + ')';
}



let buttons = document.querySelectorAll(".Button");
for (let button of buttons) {
    button.addEventListener('click', function () {
        var card = this.closest(".card"); // Get the closest card
        const titleText = card.querySelector("h2").textContent.trim(); // Get the h2 text

        const titleContainer = document.getElementById('title'); 

        if (titleContainer) { 
            titleContainer.classList.remove("hidden"); // Make it visible

            // ✅ Check if the title already exists to prevent duplicates
            const existingItems = titleContainer.querySelectorAll("li");
            for (let item of existingItems) {
                if (item.textContent.trim() === titleText) {
                    console.warn("Duplicate title prevented:", titleText);
                    return; 
                }
            }

            const newDiv = document.createElement('div'); 
            newDiv.classList.add("new-content"); 

            const ul = document.createElement('ul');
            const li = document.createElement('li');

            li.textContent = titleText; 
            ul.appendChild(li);
            newDiv.appendChild(ul);

            titleContainer.appendChild(newDiv);
            // this.disabled = true;
            // this.classList.add('bg-gray-200 cursor-not-allowed')
            button.disabled = true
            button.classList.replace('bg-blue-700', 'bg-white');
            button.classList.replace('text-white', 'text-black');
            alert(' adadded alard ')
            
        } else {
            console.warn("No element with id 'title' found!");
        }

        console.log(titleContainer);
    });
}





