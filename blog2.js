
let likeCounter2 = 3; 
let isLiked2 = false;

let likeButton2 = document.getElementById('like-button2');

likeButton2.addEventListener('click', function() {
    if (!isLiked2) {
        likeCounter2++;
        isLiked2 = true;
        likeButton2.style.backgroundColor = 'black'; 
    } else {
        likeCounter2--;
        isLiked2 = false;
        likeButton2.style.backgroundColor = '#fd1760'; 
    }
    document.getElementById('like-count2').innerText = likeCounter2;
});

// Set initial like count
document.getElementById('like-count2').innerText = likeCounter2;