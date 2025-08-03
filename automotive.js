document.addEventListener('DOMContentLoaded', function() {
    // Vehicle Data
    const vehicles = [
        {
            id: 1,
            name: "Toyota Corolla",
            type: "sedan",
            seats: 5,
            transmission: "Automatic",
            ac: true,
            luggage: 2,
            price: 4500,
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            rating: 4.8
        },
        {
            id: 2,
            name: "Land Cruiser Prado",
            type: "suv",
            seats: 7,
            transmission: "Automatic",
            ac: true,
            luggage: 4,
            price: 8500,
            image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            rating: 4.9
        },
        {
            id: 3,
            name: "Toyota Hiace",
            type: "van",
            seats: 12,
            transmission: "Manual",
            ac: true,
            luggage: 6,
            price: 6500,
            image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            rating: 4.5
        },
        {
            id: 4,
            name: "Mercedes Benz S-Class",
            type: "luxury",
            seats: 4,
            transmission: "Automatic",
            ac: true,
            luggage: 3,
            price: 12000,
            image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            rating: 4.9
        },
        {
            id: 5,
            name: "Safari Land Cruiser",
            type: "safari",
            seats: 7,
            transmission: "Manual",
            ac: true,
            luggage: 5,
            price: 9500,
            image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            rating: 4.7
        },
        {
            id: 6,
            name: "Subaru Outback",
            type: "suv",
            seats: 5,
            transmission: "Automatic",
            ac: true,
            luggage: 3,
            price: 6000,
            image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            rating: 4.6
        },
        {
            id: 7,
            name: "Nissan NV350",
            type: "van",
            seats: 14,
            transmission: "Manual",
            ac: true,
            luggage: 8,
            price: 7000,
            image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            rating: 4.4
        },
        {
            id: 8,
            name: "Range Rover Sport",
            type: "luxury",
            seats: 5,
            transmission: "Automatic",
            ac: true,
            luggage: 4,
            price: 15000,
            image: "https://images.unsplash.com/photo-1553444849-c9aa8c6b256e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            rating: 4.9
        }
    ];

    // DOM Elements
    const vehicleGrid = document.querySelector('.vehicle-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentTestimonial = 0;

    // Display all vehicles initially
    displayVehicles(vehicles);

    // Filter vehicles by type
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            if (filter === 'all') {
                displayVehicles(vehicles);
            } else {
                const filteredVehicles = vehicles.filter(vehicle => vehicle.type === filter);
                displayVehicles(filteredVehicles);
            }
        });
    });

    // Display vehicles function
    function displayVehicles(vehiclesToDisplay) {
        vehicleGrid.innerHTML = '';
        
        if (vehiclesToDisplay.length === 0) {
            vehicleGrid.innerHTML = '<p class="no-vehicles">No vehicles found matching your criteria.</p>';
            return;
        }
        
        vehiclesToDisplay.forEach(vehicle => {
            const vehicleCard = document.createElement('div');
            vehicleCard.classList.add('vehicle-card');
            
            vehicleCard.innerHTML = `
                <div class="vehicle-img">
                    <img src="${vehicle.image}" alt="${vehicle.name}">
                </div>
                <div class="vehicle-info">
                    <h3>${vehicle.name}</h3>
                    <div class="vehicle-meta">
                        <span><i class="fas fa-users"></i> ${vehicle.seats} seats</span>
                        <span><i class="fas fa-cog"></i> ${vehicle.transmission}</span>
                        <span><i class="fas fa-snowflake"></i> ${vehicle.ac ? 'AC' : 'No AC'}</span>
                    </div>
                    <div class="vehicle-meta">
                        <span><i class="fas fa-star"></i> ${vehicle.rating}/5</span>
                        <span><i class="fas fa-suitcase"></i> ${vehicle.luggage} bags</span>
                    </div>
                    <div class="vehicle-price">
                        <div class="price">
                            KES ${vehicle.price.toLocaleString()}
                            <span>/day</span>
                        </div>
                        <button class="book-btn">Book Now</button>
                    </div>
                </div>
            `;
            
            vehicleGrid.appendChild(vehicleCard);
        });
    }

    // Testimonial slider functionality
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
        currentTestimonial = index;
    }

    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    // Initialize first testimonial
    showTestimonial(0);

    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle (would need additional HTML and CSS)
    // This is a placeholder for future mobile menu implementation
});

// Initialize date picker for search inputs (would need a date picker library)
// This is a placeholder for future date picker implementation