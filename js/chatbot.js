// AI Chatbot Functionality
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotForm = document.getElementById('chatbot-form');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotMessages = document.getElementById('chatbot-messages');

// Toggle chatbot window
if (chatbotToggle) {
  chatbotToggle.addEventListener('click', () => {
    const isHidden = chatbotWindow.hasAttribute('hidden');
    if (isHidden) {
      chatbotWindow.removeAttribute('hidden');
      chatbotInput.focus();
    } else {
      chatbotWindow.setAttribute('hidden', '');
    }
  });
}

// Close chatbot
if (chatbotClose) {
  chatbotClose.addEventListener('click', () => {
    chatbotWindow.setAttribute('hidden', '');
  });
}

// Predefined responses for the chatbot
const botResponses = {
  'hello': 'Hello! How can I help you with our digital services today?',
  'hi': 'Hi there! What can I assist you with?',
  'services': 'We offer Web Development, App Development, SEO Services, and Social Media Marketing. You can learn more on our <a href="pages/services.html">Services page</a>.',
  'web development': 'Our web development services include custom websites, e-commerce solutions, PWAs, and CMS development. Visit our <a href="pages/services.html#web-dev">Web Development page</a> for details.',
  'app development': 'We build iOS, Android, and cross-platform apps using React Native and Flutter. Check out our <a href="pages/services.html#app-dev">App Development services</a>.',
  'seo': 'Our SEO services include technical audits, keyword research, on-page SEO, and local SEO. Learn more on our <a href="pages/services.html#seo">SEO Services page</a>.',
  'social media': 'We offer social media strategy, content creation, paid advertising, and community management. Visit our <a href="pages/services.html#smm">Social Media Marketing page</a>.',
  'portfolio': 'You can view our successful projects on our <a href="pages/portfolio.html">Portfolio page</a>.',
  'contact': 'You can reach us at info@veltrixdigital.com or call +1 (555) 123-4567. Or visit our <a href="pages/contact.html">Contact page</a> to send a message.',
  'pricing': 'Pricing varies based on project requirements. Please visit our <a href="pages/contact.html">Contact page</a> to get a custom quote.',
  'team': 'Meet our team on our <a href="pages/about.html">About page</a>.',
  'blog': 'Check out our latest insights on our <a href="pages/blog.html">Blog page</a>.',
  'careers': 'View our open positions on our <a href="pages/careers.html">Careers page</a>.',
  'default': 'I\'m not sure I understand. You can ask about our services, portfolio, team, pricing, or contact information. Or visit our <a href="pages/contact.html">Contact page</a> to speak with a human.'
};

// Function to get bot response
function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase().trim();
  
  for (const key in botResponses) {
    if (message.includes(key)) {
      return botResponses[key];
    }
  }
  
  return botResponses['default'];
}

// Handle form submission
if (chatbotForm) {
  chatbotForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const userMessage = chatbotInput.value.trim();
    if (!userMessage) return;
    
    // Add user message
    addMessage(userMessage, 'user');
    chatbotInput.value = '';
    
    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      addMessage(botResponse, 'bot');
    }, 1000);
  });
}

// Function to add message to chat
function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}`;
  messageDiv.innerHTML = `<p>${text}</p>`;
  
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Close chatbot with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && chatbotWindow && !chatbotWindow.hasAttribute('hidden')) {
    chatbotWindow.setAttribute('hidden', '');
  }
});