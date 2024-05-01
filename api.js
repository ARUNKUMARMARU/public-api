document.addEventListener("DOMContentLoaded", () => {
    let randomLink = document.getElementById("randomLink");
    let img = document.querySelector(".card-img-top");
    let loadingSymbol = document.getElementById("loadingSymbol");

    randomLink.addEventListener("click", async(e) => {
        e.preventDefault();
        randomLink.style.display = 'none';
        loadingSymbol.style.display = "inline-block";
        try {
            let response = await fetch("https://dog.ceo/api/breeds/image/random");
            let data = await response.json();
            let link = data.message;
            img.src = link;
        } catch (error) {
            console.error('Error fetching random dog image:', error);
        } finally {
           
            randomLink.style.display = 'inline-block';
            loadingSymbol.style.display = "none";
        }
    });
});