// File: script.js
document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carousel = {
        slides: document.querySelectorAll('.carousel-slide'),
        indicatorsContainer: document.querySelector('.carousel-indicators'),
        currentIndex: 0,
        interval: null,
        
        init: function() {
            // Create indicators
            this.slides.forEach((_, index) => {
                const indicator = document.createElement('div');
                indicator.classList.add('indicator');
                if (index === 0) indicator.classList.add('active');
                indicator.addEventListener('click', () => this.goToSlide(index));
                this.indicatorsContainer.appendChild(indicator);
            });
            
            // Show first slide
            this.showSlide(this.currentIndex);
            
            // Set up auto-rotation
            this.startAutoRotation();
            
            // Add event listeners for prev/next buttons
            document.querySelector('.carousel-prev').addEventListener('click', () => this.prevSlide());
            document.querySelector('.carousel-next').addEventListener('click', () => this.nextSlide());
            
            // Pause auto-rotation when hovering over carousel
            document.querySelector('.carousel-container').addEventListener('mouseenter', () => this.stopAutoRotation());
            document.querySelector('.carousel-container').addEventListener('mouseleave', () => this.startAutoRotation());
        },
        
        showSlide: function(index) {
            // Hide all slides
            this.slides.forEach(slide => slide.style.display = 'none');
            
            // Show the selected slide
            this.slides[index].style.display = 'block';
            
            // Update indicators
            document.querySelectorAll('.indicator').forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
            
            this.currentIndex = index;
        },
        
        nextSlide: function() {
            let newIndex = this.currentIndex + 1;
            if (newIndex >= this.slides.length) {
                newIndex = 0;
            }
            this.showSlide(newIndex);
        },
        
        prevSlide: function() {
            let newIndex = this.currentIndex - 1;
            if (newIndex < 0) {
                newIndex = this.slides.length - 1;
            }
            this.showSlide(newIndex);
        },
        
        goToSlide: function(index) {
            this.showSlide(index);
        },
        
        startAutoRotation: function() {
            this.interval = setInterval(() => this.nextSlide(), 4000);
        },
        
        stopAutoRotation: function() {
            clearInterval(this.interval);
        }
    };
    
    // Initialize the carousel
    carousel.init();
    
    // Search button functionality
    document.querySelector('.search-btn').addEventListener('click', function() {
        alert('Fitur pencarian akan segera tersedia!');
    });
});
