
// Sample product data
const products = [
    // Programming Books
    {
        id: 1,
        name: "Clean Code: A Handbook of Agile Software Craftsmanship",
        type: "Book",
        category: "Computer Science",
        price: 899,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        description: "Learn to write clean, maintainable code that your fellow developers will love"
    },
    {
        id: 2,
        name: "Design Patterns: Elements of Reusable Object-Oriented Software",
        type: "Book",
        category: "Computer Science",
        price: 1499,
        image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
        description: "Essential guide to writing better code using design patterns"
    },
    {
        id: 3,
        name: "JavaScript: The Good Parts",
        type: "Book",
        category: "Computer Science",
        price: 1299,
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a",
        description: "Discover JavaScript's good features and how to use them effectively"
    },
    {
        id: 17,
        name: "Compiler Construction: Principles and Practice",
        type: "Book",
        category: "Computer Science",
        price: 1899,
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        description: "Learn the fundamentals of compiler design and implementation"
    },
    {
        id: 18,
        name: "Operating Systems: Concepts and Design Vol. 1",
        type: "Book",
        category: "Computer Science",
        price: 2199,
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a",
        description: "Comprehensive guide to operating system principles and architecture"
    },
    {
        id: 19,
        name: "Operating Systems: Advanced Topics Vol. 2",
        type: "Book",
        category: "Computer Science",
        price: 2299,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        description: "Advanced concepts in operating system design and implementation"
    },
    {
        id: 20,
        name: "Object-Oriented Programming with Java",
        type: "Book",
        category: "Computer Science",
        price: 1799,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        description: "Master object-oriented programming concepts using Java"
    },
    {
        id: 21,
        name: "Software Testing: A Practical Approach",
        type: "Book",
        category: "Computer Science",
        price: 1699,
        image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
        description: "Learn modern software testing techniques and best practices"
    },
    {
        id: 4,
        name: "Python for Data Analysis",
        type: "Book",
        category: "Data Science",
        price: 1999,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        description: "Master data analysis with Python using NumPy and pandas"
    },
    {
        id: 5,
        name: "Machine Learning Engineering",
        type: "Book",
        category: "AI & ML",
        price: 2999,
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        description: "Comprehensive guide to building production-ready ML systems"
    },
    {
        id: 6,
        name: "Deep Learning with Python",
        type: "Book",
        category: "AI & ML",
        price: 2499,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        description: "Learn deep learning concepts with practical Python examples"
    },

    // Digital Marketing Books
    {
        id: 7,
        name: "Digital Marketing Strategy: A Complete Guide",
        type: "Book",
        category: "Digital Marketing",
        price: 3999,
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
        description: "Master modern digital marketing strategies and techniques for business growth"
    },
    {
        id: 22,
        name: "Social Media Marketing Mastery",
        type: "Book",
        category: "Digital Marketing",
        price: 3499,
        image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf",
        description: "Learn to create effective social media campaigns across all major platforms"
    },
    {
        id: 23,
        name: "SEO & Content Marketing Excellence",
        type: "Book",
        category: "Digital Marketing",
        price: 3799,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        description: "Master SEO techniques and content marketing strategies for online success"
    },
    {
        id: 24,
        name: "Email Marketing & Marketing Automation",
        type: "Book",
        category: "Digital Marketing",
        price: 3599,
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
        description: "Learn email marketing strategies and marketing automation tools for business growth"
    },
    {
        id: 29,
        name: "Google Ads & PPC Marketing",
        type: "Book",
        category: "Digital Marketing",
        price: 4199,
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
        description: "Master paid advertising with Google Ads and other PPC platforms"
    },
    {
        id: 30,
        name: "Influencer Marketing Strategy",
        type: "Book",
        category: "Digital Marketing",
        price: 3899,
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48",
        description: "Learn to create and execute successful influencer marketing campaigns"
    },
    {
        id: 31,
        name: "Digital Analytics & Conversion Optimization",
        type: "Book",
        category: "Digital Marketing",
        price: 4299,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        description: "Master web analytics and conversion rate optimization techniques"
    },
    {
        id: 8,
        name: "Cloud Computing: Concepts and Practices",
        type: "Book",
        category: "Cloud Computing",
        price: 3499,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        description: "Understanding cloud computing fundamentals and best practices"
    },
    {
        id: 9,
        name: "Cybersecurity Essentials",
        type: "Book",
        category: "Cybersecurity",
        price: 4499,
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de",
        description: "Essential guide to modern cybersecurity practices"
    },
    {
        id: 10,
        name: "DevOps Handbook",
        type: "Book",
        category: "DevOps",
        price: 3999,
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
        description: "Guide to implementing DevOps practices in your organization"
    },

    // Animation Books
    {
        id: 25,
        name: "3D Animation Fundamentals",
        type: "Book",
        category: "Animation",
        price: 4499,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        description: "Master the fundamentals of 3D animation and modeling"
    },
    {
        id: 26,
        name: "Character Animation Masterclass",
        type: "Book",
        category: "Animation",
        price: 4299,
        image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2",
        description: "Learn advanced character animation techniques and principles"
    },
    {
        id: 27,
        name: "Motion Graphics & Visual Effects",
        type: "Book",
        category: "Animation",
        price: 3999,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        description: "Create stunning motion graphics and visual effects for video production"
    },
    {
        id: 28,
        name: "2D Digital Animation Techniques",
        type: "Book",
        category: "Animation",
        price: 3799,
        image: "https://images.unsplash.com/photo-1616499370260-485b3e5ed653",
        description: "Learn modern 2D animation techniques using digital tools"
    },
    {
        id: 32,
        name: "Animation for Game Development",
        type: "Book",
        category: "Animation",
        price: 4599,
        image: "https://images.unsplash.com/photo-1556438064-2d7646166914",
        description: "Master animation techniques specifically for video game development"
    },
    {
        id: 33,
        name: "Stop Motion Animation Guide",
        type: "Book",
        category: "Animation",
        price: 3699,
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
        description: "Learn professional stop motion animation techniques and tools"
    },
    {
        id: 34,
        name: "Web Animation & Interactive Design",
        type: "Book",
        category: "Animation",
        price: 4099,
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
        description: "Create engaging web animations and interactive user experiences"
    },

    // Programming Courses
    {
        id: 11,
        name: "Complete Web Development Bootcamp",
        type: "Course",
        category: "Computer Science",
        price: 6999,
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
        description: "Master HTML, CSS, JavaScript, React, Node.js, and more"
    },
    {
        id: 12,
        name: "Advanced Python Programming",
        type: "Course",
        category: "Computer Science",
        price: 5999,
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
        description: "Take your Python skills to the next level"
    },
    {
        id: 13,
        name: "Mobile App Development Masterclass",
        type: "Course",
        category: "Mobile Dev",
        price: 7999,
        image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
        description: "Build iOS and Android apps using React Native"
    },

    // Data Science & AI Courses
    {
        id: 14,
        name: "Data Science Specialization",
        type: "Course",
        category: "Data Science",
        price: 9999,
        image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d",
        description: "Complete data science training with real-world projects"
    },
    {
        id: 15,
        name: "Machine Learning A-Z",
        type: "Course",
        category: "AI & ML",
        price: 8999,
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc",
        description: "Learn and master machine learning algorithms"
    },
    {
        id: 16,
        name: "Deep Learning Specialization",
        type: "Course",
        category: "AI & ML",
        price: 10999,
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        description: "Master deep learning and neural networks"
    },

    // IT & Security Courses
    {
        id: 17,
        name: "AWS Certified Solutions Architect",
        type: "Course",
        category: "Cloud Computing",
        price: 8999,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        description: "Prepare for the AWS Solutions Architect certification"
    },
    {
        id: 18,
        name: "Ethical Hacking Bootcamp",
        type: "Course",
        category: "Cybersecurity",
        price: 9999,
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de",
        description: "Learn ethical hacking and penetration testing"
    },
    {
        id: 19,
        name: "Complete DevOps Engineer Course",
        type: "Course",
        category: "DevOps",
        price: 10999,
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
        description: "Master DevOps tools and practices"
    },
    {
        id: 20,
        name: "Network Security Specialist",
        type: "Course",
        category: "Networking",
        price: 9999,
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
        description: "Advanced network security training and certification prep"
    }
];

// User Authentication and Data
let currentUser = null;
let wishlist = [];
let orders = [];

// Shopping cart
let cart = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    initializeUI();
    setupEventListeners();
    setupModalListeners();
    setupAuthListeners();
    checkAuthStatus();
    updateCartCount();
    updateWishlistCount();
});

function initializeUI() {
    loadBooks();
    loadCourses();
    updateCategoryCards();
}

function setupEventListeners() {
    // Navigation
    setupNavigationListeners();
    
    // Search functionality
    setupSearchListeners();
    
    // View options
    setupViewOptionsListeners();
    
    // Filters
    setupFilterListeners();
    
    // Add to cart
    setupCartListeners();
}

function setupNavigationListeners() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Hero buttons
    const booksBtn = document.querySelector('.view-books-btn');
    const coursesBtn = document.querySelector('.view-courses-btn');
    
    if (booksBtn) {
        booksBtn.addEventListener('click', () => {
            document.querySelector('#books').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (coursesBtn) {
        coursesBtn.addEventListener('click', () => {
            document.querySelector('#courses').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

function setupViewOptionsListeners() {
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const view = e.target.closest('.view-btn').dataset.view;
            const section = e.target.closest('.product-section');
            const grid = section.querySelector('.product-grid');
            
            // Update active button
            section.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            e.target.closest('.view-btn').classList.add('active');
            
            // Update grid view
            grid.classList.remove('grid-view', 'list-view');
            grid.classList.add(`${view}-view`);
        });
    });
}

function setupFilterListeners() {
    // Category filters
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', (e) => {
            const section = e.target.closest('.product-section');
            const grid = section.querySelector('.product-grid');
            const category = e.target.value;
            const type = section.id === 'books' ? 'Book' : 'Course';
            
            loadFilteredProducts(grid, type, category);
        });
    });
    
    // Sort filters
    const sortFilters = document.querySelectorAll('.sort-filter');
    sortFilters.forEach(filter => {
        filter.addEventListener('change', (e) => {
            const section = e.target.closest('.product-section');
            const grid = section.querySelector('.product-grid');
            const sortBy = e.target.value;
            
            sortProducts(grid, sortBy);
        });
    });
}

function loadFilteredProducts(grid, type, category) {
    const filteredProducts = category === 'all' 
        ? products.filter(p => p.type === type)
        : products.filter(p => p.type === type && p.category === category);
        
    renderProducts(grid, filteredProducts);
}

function sortProducts(grid, sortBy) {
    const products = Array.from(grid.children);
    
    products.sort((a, b) => {
        switch(sortBy) {
            case 'name':
                return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
            case 'price-low':
                return parseFloat(a.querySelector('.product-price').textContent.slice(1)) - 
                       parseFloat(b.querySelector('.product-price').textContent.slice(1));
            case 'price-high':
                return parseFloat(b.querySelector('.product-price').textContent.slice(1)) - 
                       parseFloat(a.querySelector('.product-price').textContent.slice(1));
            case 'newest':
                return b.dataset.id - a.dataset.id;
            default:
                return 0;
        }
    });
    
    grid.innerHTML = '';
    products.forEach(product => grid.appendChild(product));
}

function loadBooks() {
    const booksGrid = document.querySelector('.books-grid');
    if (!booksGrid) return;
    
    const books = products.filter(product => product.type === 'Book');
    renderProducts(booksGrid, books);
}

function loadCourses() {
    const coursesGrid = document.querySelector('.courses-grid');
    if (!coursesGrid) return;
    
    const courses = products.filter(product => product.type === 'Course');
    renderProducts(coursesGrid, courses);
}

function renderProducts(container, products) {
    container.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-meta">
                    <span class="product-type">${product.type}</span>
                    <span class="product-category">${product.category}</span>
                </div>
                <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                    <button class="wishlist-toggle ${wishlist.includes(product.id) ? 'active' : ''}" 
                            onclick="toggleWishlist(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateCategoryCards() {
    const categoryGrid = document.querySelector('.category-grid');
    if (!categoryGrid) return;

    const categories = [
        { name: 'Computer Science', icon: 'fa-laptop-code', description: 'Learn coding fundamentals and advanced techniques' },
        { name: 'Data Science', icon: 'fa-database', description: 'Master data analysis and machine learning' },
        { name: 'Digital Marketing', icon: 'fa-chart-line', description: 'Master modern digital marketing strategies and techniques' },
        { name: 'Cloud Computing', icon: 'fa-cloud', description: 'Learn AWS, Azure, and cloud services' },
        { name: 'AI & ML', icon: 'fa-robot', description: 'Artificial Intelligence and Machine Learning' },
        { name: 'Cybersecurity', icon: 'fa-shield-alt', description: 'Master digital security and ethical hacking' },
        { name: 'DevOps', icon: 'fa-project-diagram', description: 'Learn development operations and tools' },
        { name: 'Animation', icon: 'fa-film', description: 'Master 2D and 3D animation techniques' }
    ];

    categoryGrid.innerHTML = categories.map(category => `
        <div class="category-card" data-category="${category.name}">
            <i class="fas ${category.icon}"></i>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        </div>
    `).join('');

    // Add click event listeners
    const categoryCards = categoryGrid.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            // Update both books and courses sections
            document.querySelectorAll('.category-filter').forEach(filter => {
                filter.value = category;
                filter.dispatchEvent(new Event('change'));
            });
            // Scroll to books section
            document.querySelector('#books').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function setupSearchListeners() {
    const searchInputs = document.querySelectorAll('input[type="text"]');
    searchInputs.forEach(input => {
        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                searchProducts(e.target.value);
            }
        });
    });

    const searchButtons = document.querySelectorAll('.search-btn');
    searchButtons.forEach(button => {
        if (!button.classList.contains('add-to-cart')) {
            button.addEventListener('click', () => {
                const input = button.previousElementSibling;
                searchProducts(input.value);
            });
        }
    });
}

function searchProducts(query) {
    query = query.toLowerCase().trim();
    const productGrid = document.querySelector('.product-grid');
    
    if (!query) {
        loadProducts('All');
        return;
    }

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    productGrid.innerHTML = filteredProducts.length ? filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-meta">
                    <span class="product-type">${product.type}</span>
                    <span class="product-category">${product.category}</span>
                </div>
                <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
                <button class="search-btn add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `).join('') : '<p class="no-results">No products found matching your search.</p>';
}

function setupCartListeners() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        }
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();
    showCartModal();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

function showCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.add('show');
    updateCartModal();
}

function updateCartModal() {
    const cartItems = document.querySelector('.cart-items');
    const totalAmount = document.querySelector('.total-amount');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        totalAmount.textContent = '₹0.00';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = `₹${total.toLocaleString('en-IN')}`;
}

function updateItemQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    if (!cartItem) return;

    cartItem.quantity += change;
    if (cartItem.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }

    updateCartCount();
    updateCartModal();
}

function setupModalListeners() {
    // Close modal buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('show');
            });
        });
    });

    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    });

    // Cart quantity buttons
    document.querySelector('.cart-items').addEventListener('click', (e) => {
        if (e.target.classList.contains('quantity-btn')) {
            const productId = parseInt(e.target.dataset.id);
            const change = e.target.classList.contains('plus') ? 1 : -1;
            updateItemQuantity(productId, change);
        }
    });

    // Proceed to checkout
    document.querySelector('.proceed-to-checkout').addEventListener('click', () => {
        document.getElementById('cartModal').classList.remove('show');
        document.getElementById('deliveryModal').classList.add('show');
    });

    // Back to cart
    document.querySelector('.back-to-cart').addEventListener('click', () => {
        document.getElementById('deliveryModal').classList.remove('show');
        document.getElementById('cartModal').classList.add('show');
    });

    // Handle delivery form submission
    document.getElementById('deliveryForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!currentUser) {
            document.getElementById('loginModal').classList.add('show');
            return;
        }
        
        const formData = new FormData(e.target);
        const deliveryDetails = Object.fromEntries(formData.entries());
        
        // Create new order
        const order = {
            id: Date.now(),
            date: new Date().toISOString(),
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            delivery: deliveryDetails,
            status: 'Pending'
        };
        
        orders.push(order);
        saveUserData();
        
        // Clear cart and close modal
        cart = [];
        updateCartCount();
        document.getElementById('deliveryModal').classList.remove('show');
        
        // Show success message
        alert('Order placed successfully! You can view it in My Orders.');
    });
}

function setupAuthListeners() {
    // Login form
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Signup form
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
    
    // Switch between login and signup
    document.querySelector('.switch-to-signup').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('loginModal').classList.remove('show');
        document.getElementById('signupModal').classList.add('show');
    });
    
    document.querySelector('.switch-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('signupModal').classList.remove('show');
        document.getElementById('loginModal').classList.add('show');
    });
    
    // Show login/signup modals
    document.querySelector('.login-btn').addEventListener('click', () => {
        document.getElementById('loginModal').classList.add('show');
    });
    
    document.querySelector('.signup-btn').addEventListener('click', () => {
        document.getElementById('signupModal').classList.add('show');
    });
    
    // Logout
    document.querySelector('.logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        handleLogout();
    });
    
    // Toggle password visibility
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            const type = input.type === 'password' ? 'text' : 'password';
            input.type = type;
            button.querySelector('i').classList.toggle('fa-eye');
            button.querySelector('i').classList.toggle('fa-eye-slash');
        });
    });
    
    // Wishlist
    document.querySelector('.wishlist-btn').addEventListener('click', (e) => {
        e.preventDefault();
        if (!currentUser) {
            document.getElementById('loginModal').classList.add('show');
            return;
        }
        document.getElementById('wishlistModal').classList.add('show');
    });
    
    // My Orders
    document.querySelector('.my-orders').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('ordersModal').classList.add('show');
        updateOrdersList();
    });
    
    // Profile
    document.querySelector('.profile-btn').addEventListener('click', () => {
        document.getElementById('profileModal').classList.add('show');
        loadProfileData();
        loadSavedAddresses();
        loadRecentOrders();
    });
}

function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Here you would typically validate against a backend
    // For demo purposes, we'll just simulate a successful login
    currentUser = {
        name: 'Demo User',
        email: email
    };
    
    localStorage.setItem('user', JSON.stringify(currentUser));
    updateAuthUI();
    document.getElementById('loginModal').classList.remove('show');
    
    // Load user data
    loadUserData();
}

function handleSignup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Validate passwords match
    if (formData.get('password') !== formData.get('confirmPassword')) {
        alert('Passwords do not match!');
        return;
    }
    
    // Here you would typically send this to a backend
    // For demo purposes, we'll just simulate a successful signup
    currentUser = {
        name: formData.get('name'),
        email: formData.get('email')
    };
    
    localStorage.setItem('user', JSON.stringify(currentUser));
    updateAuthUI();
    document.getElementById('signupModal').classList.remove('show');
    
    // Initialize user data
    wishlist = [];
    orders = [];
    saveUserData();
}

function handleLogout() {
    currentUser = null;
    wishlist = [];
    orders = [];
    localStorage.removeItem('user');
    localStorage.removeItem('wishlist');
    localStorage.removeItem('orders');
    updateAuthUI();
}

function checkAuthStatus() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthUI();
        loadUserData();
    }
}

function updateAuthUI() {
    const authButtons = document.querySelector('.auth-buttons');
    const userProfile = document.querySelector('.user-profile');
    const username = document.querySelector('.username');
    
    if (currentUser) {
        authButtons.style.display = 'none';
        userProfile.style.display = 'block';
        username.textContent = currentUser.name;
    } else {
        authButtons.style.display = 'flex';
        userProfile.style.display = 'none';
    }
}

function loadUserData() {
    // Load wishlist
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
        updateWishlistCount();
    }
    
    // Load orders
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }
}

function saveUserData() {
    if (currentUser) {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        localStorage.setItem('orders', JSON.stringify(orders));
    }
}

// Wishlist functionality
function toggleWishlist(productId) {
    if (!currentUser) {
        document.getElementById('loginModal').classList.add('show');
        return;
    }
    
    const index = wishlist.indexOf(productId);
    if (index === -1) {
        wishlist.push(productId);
    } else {
        wishlist.splice(index, 1);
    }
    
    updateWishlistCount();
    saveUserData();
    updateWishlistModal();
}

function updateWishlistCount() {
    const wishlistCount = document.querySelector('.wishlist-count');
    wishlistCount.textContent = wishlist.length;
    wishlistCount.style.display = wishlist.length > 0 ? 'flex' : 'none';
}

function updateWishlistModal() {
    const wishlistItems = document.querySelector('.wishlist-items');
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p class="empty-wishlist">Your wishlist is empty</p>';
        return;
    }
    
    const wishlistProducts = wishlist.map(id => products.find(p => p.id === id));
    wishlistItems.innerHTML = wishlistProducts.map(product => `
        <div class="wishlist-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="wishlist-item-info">
                <h3>${product.name}</h3>
                <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
            </div>
            <div class="wishlist-item-actions">
                <button onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <button onclick="toggleWishlist(${product.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function updateOrdersList() {
    const ordersList = document.querySelector('.orders-list');
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p class="empty-orders">You haven\'t placed any orders yet</p>';
        return;
    }
    
    ordersList.innerHTML = orders.map(order => `
        <div class="order-item">
            <div class="order-header">
                <span class="order-id">Order #${order.id}</span>
                <span class="order-date">${new Date(order.date).toLocaleDateString()}</span>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-info">
                            <h3>${item.name}</h3>
                            <p>Quantity: ${item.quantity}</p>
                            <p class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="order-total">
                <span>Total:</span>
                <span>₹${order.total.toLocaleString('en-IN')}</span>
            </div>
            <div class="order-status ${order.status.toLowerCase()}">
                ${order.status}
            </div>
        </div>
    `).join('');
}

// Profile Management
const profileModal = document.getElementById('profileModal');
const profileForm = document.getElementById('profileForm');
const addressForm = document.getElementById('addressForm');
const savedAddresses = document.getElementById('savedAddresses');
const recentOrdersList = document.getElementById('recentOrdersList');

// Show profile modal
document.querySelector('.profile-btn').addEventListener('click', () => {
    profileModal.style.display = 'block';
    loadProfileData();
    loadSavedAddresses();
    loadRecentOrders();
});

// Close profile modal
profileModal.querySelector('.close-modal').addEventListener('click', () => {
    profileModal.style.display = 'none';
});

// Handle profile form submission
profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(profileForm);
    const profileData = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone')
    };
    saveProfileData(profileData);
});

// Handle address form submission
addressForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addressForm);
    const addressData = {
        street: formData.get('street'),
        city: formData.get('city'),
        state: formData.get('state'),
        zipCode: formData.get('zipCode'),
        id: Date.now() // Use timestamp as unique ID
    };
    saveAddress(addressData);
    addressForm.reset();
});

function saveProfileData(data) {
    localStorage.setItem('userProfile', JSON.stringify(data));
    alert('Profile updated successfully!');
}

function loadProfileData() {
    const profileData = JSON.parse(localStorage.getItem('userProfile') || '{}');
    if (profileData.fullName) {
        profileForm.fullName.value = profileData.fullName;
        profileForm.email.value = profileData.email || '';
        profileForm.phone.value = profileData.phone || '';
    }
}

function saveAddress(address) {
    const addresses = JSON.parse(localStorage.getItem('deliveryAddresses') || '[]');
    addresses.push(address);
    localStorage.setItem('deliveryAddresses', JSON.stringify(addresses));
    loadSavedAddresses();
}

function loadSavedAddresses() {
    const addresses = JSON.parse(localStorage.getItem('deliveryAddresses') || '[]');
    savedAddresses.innerHTML = addresses.map(addr => `
        <div class="address-card">
            <i class="fas fa-times delete-address" data-id="${addr.id}"></i>
            <p>${addr.street}</p>
            <p>${addr.city}, ${addr.state} ${addr.zipCode}</p>
        </div>
    `).join('');

    // Add delete functionality
    savedAddresses.querySelectorAll('.delete-address').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            deleteAddress(id);
        });
    });
}

function deleteAddress(id) {
    let addresses = JSON.parse(localStorage.getItem('deliveryAddresses') || '[]');
    addresses = addresses.filter(addr => addr.id !== id);
    localStorage.setItem('deliveryAddresses', JSON.stringify(addresses));
    loadSavedAddresses();
}

function loadRecentOrders() {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    recentOrdersList.innerHTML = orders.map(order => `
        <div class="order-item">
            <div class="order-details">
                <p><strong>Order #${order.id}</strong></p>
                <p>Date: ${new Date(order.date).toLocaleDateString()}</p>
                <p>Total: ₹${order.total.toLocaleString('en-IN')}</p>
            </div>
            <span class="order-status status-${order.status.toLowerCase()}">${order.status}</span>
        </div>
    `).join('');
}

// Add notification styles
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow);
        transform: translateY(100%);
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }

    .product-meta {
        display: flex;
        gap: 1rem;
        margin: 0.5rem 0;
    }

    .product-type,
    .product-category {
        background: #e0e7ff;
        color: var(--primary-color);
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.8rem;
    }

    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 2rem;
        color: var(--light-text);
    }
`;

document.head.appendChild(style);
