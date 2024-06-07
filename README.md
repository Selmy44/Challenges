<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Photo Gallery</title>
    <link rel="stylesheet" href="styles.css">
  <style>
    /* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #383838;
    flex-direction: column;
}


.intro {
    background-color:#ca3d3d;
    border-radius: 8px;
    padding: 10px;

}

.intro-item1{
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

.intro:hover {
    border: 1px solid rgb(124, 124, 175);
}

.intro-items:hover {
    border: 1px solid rgb(124, 124, 175);
}

.intro-item1:hover {
    border: 1px solid rgb(152, 152, 192);
}

.intro-item2:hover {
    border: 1px solid rgb(124, 124, 175);
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 1px;
    padding: 6px;
}


.gallery-item img {
    width: 100%;
    height: auto;
}

.gallery:hover  {
                    border: 1px solid red;
                }

.gallery-item:hover {
    border: 1px solid red;
}



.photos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 1px;
    padding: 6px;
}


.photos-item img {
    width: 100%;
    height: auto;
}

.photos:hover  {
                    border: 1px solid red;
                }

.photos-item:hover {
    border: 1px solid red;
}



  </style>
</head>
<body>

    <div>
        <p>Intro</p>
        <div class="intro">
            <div class="intro-items">
                <div>
                    <p class="intro-item1">The designs represents bot</p>
                    <p class="intro-item1">desktop and mobile view</p>
                </div>
                <br>

                <div class="intro-item2">
                    <p class="intro-item1">To view Interactions:</p>
                    <p class="intro-item1">Run the designs in prototype mode.</p>
                </div>
            </div>
        </div>
    </div>

    <div>
        <p>Gallery 01</p>
        <div class="gallery">
            <div class="gallery-item"><img src="/images/Image Interaction (1).png" alt="Photo 1"></div>
            <div class="gallery-item"><img src="/images/Image Interaction (2).png" alt="Photo 2"></div>
            <div class="gallery-item"><img src="/images/Image Interaction (3).png" alt="Photo 3"></div>
            <div class="gallery-item"><img src="/images/Image Interaction (4).png" alt="Photo 3"></div>
        </div>
    </div>
    <br><br>
    
    <div>
        <p>Gallery 02</p>
        <div class="photos">
            <div class="photos-item"><img src="/images/Image Interaction (1).png" alt="Photo 1"></div>
            <div class="photos-item"><img src="/images/Image Interaction (2).png" alt="Photo 2"></div>
            <div class="photos-item"><img src="/images/Image Interaction (3).png" alt="Photo 3"></div>
            <div class="photos-item"><img src="/images/Image Interaction (4).png" alt="Photo 3"></div>
        </div>
    </div>
    
    <script src="scripts.js">
    document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const details = document.createElement('div');
            details.className = 'details';
            details.textContent = 'Additional details about the photo';
            item.appendChild(details);
        });

        item.addEventListener('mouseout', () => {
            const details = item.querySelector('.details');
            if (details) {
                details.remove();
            }
        });
    });
});
</script>
</body>
</html>
