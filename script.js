document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const mainContainer = document.querySelector('.main-container');
    
    console.log('Found', navLinks.length, 'nav links');
    console.log('Main container:', mainContainer);
    
    navLinks.forEach((link, index) => {
        link.onclick = function(e) {
            e.preventDefault();
            console.log('Clicked:', link.textContent, 'Index:', index);
            const scrollPos = index * window.innerWidth;
            console.log('Scrolling to:', scrollPos);
            if (mainContainer) {
                mainContainer.scrollLeft = scrollPos;
            }
            return false;
        };
    });
    
    // Parallax effect for floating shapes
    document.addEventListener('mousemove', function(e) {
        const shapes = document.querySelectorAll('.shape');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const xPos = (x - 0.5) * speed * 50;
            const yPos = (y - 0.5) * speed * 50;
            shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    });
    
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (index === 0) { // First project
                showProjectModal('Agricultural AI-Based ChatBot', 
                    'Created an AI-powered Telegram chatbot to assist farmers with crop-related and weather-based queries. Trained the bot using domain-specific datasets to provide contextual ML-driven replies. Designed a conversational interface to guide users with simple language. Aimed at enhancing agriculture accessibility for non-tech-savvy farmers.');
            } else if (index === 1) { // Second project
                showProjectModal('OpenCV-Based Hand Gesture Recognition for the Disabled', 
                    'Developed a computer vision system to recognize hand gestures for differently-abled users. Used OpenCV to track and classify hand movements in real time through webcam feed. Enabled communication via gesture mapping and visual output. Built with a focus on accessibility and ease of use.');
            } else if (index === 2) { // Third project
                showProjectModal('Telegram Crypto Game Bot', 
                    'Built an engaging Telegram-based crypto simulation game using custom bot logic. Handled real-time user interactions with secure session management. Included trading logic, balance tracking, and leaderboard system. Improved user retention through game design and instant feedback mechanisms.');
            } else if (index === 3) { // Fourth project
                showProjectModal('Nexus Pulse - AI Based Fetal Rhythm Monitoring', 
                    'Currently researching and designing a wearable device to detect fetal heartbeat patterns using AI models. Focus is on real-time fetal rhythm tracking, Signal anomaly detection, and maternal health data integration. The Project is being developed for Smart India Hackathon and FAER Fellowship Proposal 2024. Aims to address prenatal care challenges in rural and undeserved regions.');
            } else if (index === 4) { // Fifth project
                showProjectModal('Telugu ASR using Whisper Model', 
                    'Collaborated in a team to develop an Automatic Speech Recognition system for Telugu using the Whisper model. contributed to model integration, real-time testing, and interface setup for regional audio input. The project focused on accurate transcription of dialect-rich speech with Hugging Face utilities, Helped evaluate output quality and optimize performance through fine-tuning iterations.');
            } else if (index === 5) { // Sixth project
                showProjectModal('AIcademy-Bot', 
                    'We\'re building a chatbot that personalizes learning for each student using AI-driven adaptive learning paths. It also detects stress with emotional intelligence, offering mental health support to create a positive learning environment. The chatbot enhances engagement through virtual labs, interactive simulations, and voice assistant integration. Additionally, it connects students for group studies and mentorship, making learning more interactive and collaborative. Our solution transforms education by offering personalized, supportive, and engaging student experiences.');
            }
        });
    });
});

function showProjectModal(title, description) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}