function changeImage() {
    const imageUrl = document.getElementById("imageUrl").value;
    const displayImage = document.getElementById("displayImage");
    
    if (imageUrl) {
        displayImage.src = imageUrl;
        displayImage.style.display = "block"; 
    }
    else{
        displayImage.style.display = "none";
    }
    }