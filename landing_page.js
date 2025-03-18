function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // Convert cm to m
    
    if (weight && height) {
        const bmi = (weight / (height * height)).toFixed(1);
        let category = '';
        let color = '';
        
        if (bmi < 18.5) {
            category = 'Underweight';
            color = '#3498db';
        } else if (bmi < 25) {
            category = 'Normal weight';
            color = '#2ecc71';
        } else if (bmi < 30) {
            category = 'Overweight';
            color = '#f1c40f';
        } else {
            category = 'Obese';
            color = '#e74c3c';
        }

        const result = document.getElementById('bmi-result');
        result.innerHTML = `Your BMI is ${bmi} (${category})`;
        result.style.background = color;
        result.style.color = 'white';
    }
}

function selectPlan(plan) {
    alert(`You've selected the ${plan} plan. Please log in or create an account to continue.`);
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // In a real application, this would connect to a backend
    alert('Login successful! Welcome to PowerFit Gym.');
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navbar
window.onscroll = function() {
    if (window.pageYOffset > 50) {
        document.querySelector('.navbar').style.background = 'rgba(0,0,0,0.9)';
    } else {
        document.querySelector('.navbar').style.background = 'rgba(0,0,0,0.7)';
    }
};
