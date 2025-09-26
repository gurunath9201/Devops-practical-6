function showMessage() {
       const messageDiv = document.getElementById('message');
       const messages = [
           'Jenkins is awesome! 🚀',
           'CI/CD makes development easier! 💻',
           'Automated deployment successful! ✅',
           'Keep coding and stay awesome! 🌟'
       ];
       
       const randomMessage = messages[Math.floor(Math.random() * messages.length)];
       messageDiv.textContent = randomMessage;
       messageDiv.style.color = '#4ecdc4';
   }