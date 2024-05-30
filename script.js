document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        // Create new observer object
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            // Loop through IntersectionObserverEntry objects
            entries.forEach(function (entry) {
                // Do these if the target intersects with the root
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                    lazyImage.parentElement.classList.remove("skeleton")
                }
            });
        });

        // Loop through and observe each image
        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});