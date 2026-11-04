
/* =================================
   EDEN v0.2 - NAVIGATION ENGINE
================================= */

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const workspace = document.getElementById("workspace");

const navigationButtons = document.querySelectorAll(".nav-item");


/* MOBILE SIDEBAR */

menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("open");
});


/* PAGE CONTENT */

const pages = {

    
dashboard: `
    <div class="dashboard">

        <!-- WELCOME SECTION -->
        <section class="welcome-card">

            <p class="eyebrow">
                PERSONAL INTELLIGENCE SYSTEM
            </p>

            <h2>Welcome to EDEN.</h2>

            <p>
                Empowering Discernment through
                Excellence and Nurture.
            </p>

            <div class="welcome-line"></div>

            <p class="welcome-message">
                Your personal workspace is ready.
            </p>

        </section>


        <!-- SYSTEM OVERVIEW -->
        <section class="dashboard-section">

            <h3>System Overview</h3>

            <div class="overview-grid">

                <div class="overview-card">
                    <span class="card-icon">◈</span>
                    <h4>Interface</h4>
                    <p class="card-value">ONLINE</p>
                    <p class="card-description">
                        Prototype operational
                    </p>
                </div>

                <div class="overview-card">
                    <span class="card-icon">✧</span>
                    <h4>AI Intelligence</h4>
                    <p class="card-value pending">
                        PENDING
                    </p>
                    <p class="card-description">
                        Integration planned
                    </p>
                </div>

                <div class="overview-card">
                    <span class="card-icon">◎</span>
                    <h4>Memory</h4>
                    <p class="card-value pending">
                        PENDING
                    </p>
                    <p class="card-description">
                        Storage not connected
                    </p>
                </div>

            </div>

        </section>


        <!-- SPECIALISED AGENTS -->
        <section class="dashboard-section">

            <h3>Specialised Agents</h3>

            <div class="agent-overview">

                <div class="agent-item">
                    <span>⌕</span>
                    <p>Research</p>
                </div>

                <div class="agent-item">
                    <span>▤</span>
                    <p>Scholar</p>
                </div>

                <div class="agent-item">
                    <span>⌘</span>
                    <p>Developer</p>
                </div>

                <div class="agent-item">
                    <span>⬡</span>
                    <p>Guardian</p>
                </div>

                <div class="agent-item">
                    <span>♡</span>
                    <p>Personal</p>
                </div>

                <div class="agent-item">
                    <span>✦</span>
                    <p>Creative</p>
                </div>

            </div>

        </section>


        <!-- DEVELOPMENT ACTIVITY -->
        <section class="dashboard-section">

            <h3>Development Activity</h3>

            <div class="activity-panel">

                <p>
                    <span class="activity-dot"></span>
                    EDEN v0.1 published
                </p>

                <p>
                    <span class="activity-dot"></span>
                    EDEN v0.2 interface created
                </p>

                <p>
                    <span class="activity-dot"></span>
                    Navigation system operational
                </p>

            </div>

        </section>

    </div>
`,


    
chat: `
    <div class="chat-page">

        <!-- CHAT HEADER -->
        
        <div class="chat-header">

            <div>
                <p class="eyebrow">COMMUNICATION CENTRE</p>
                <h2>EDEN Chat</h2>
                <p class="chat-subtitle">
                    Your personal communication space.
                </p>
            </div>

            <span class="chat-indicator">
                <span class="status-dot"></span>
                READY
            </span>

        </div>

     <!-- CONVERSATION WINDOW -->
<div class="conversation-window" id="conversationWindow">

    <div class="chat-message eden-message">

        <div class="message-label">
            EDEN
        </div>

        <div class="message-bubble">Welcome. I am EDEN, your personal assistant interface. How may I assist you today?
</div>

        <span class="message-time">
            SYSTEM MESSAGE
        </span>

    </div>

</div>   
        

        </div>


        <!-- MESSAGE INPUT -->
        <form class="chat-input-area"
              id="chatForm">
  

            <textarea
                id="chatInput"
                placeholder="Message EDEN..."
                rows="2"
                aria-label="Your message"
            ></textarea>

            <button type="submit"
                    class="send-button">
                Send
            </button>

        </form>


        <!-- CHAT CONTROLS -->
        <div class="chat-controls">

            <p>EDEN v0.2 | Prototype</p>

            <button type="button"
                    id="clearChat">
                Clear conversation
            </button>

        </div>

    </div>
`,


    
agents: `
    <div class="agents-page">

        <div class="page-heading">
            <p class="eyebrow">SPECIALISED INTELLIGENCE</p>
            <h2>EDEN Agents</h2>
            <p>
                Six specialised roles. One unified intelligence system.
            </p>
        </div>

        <div class="agents-grid">

            <div class="agent-card">
                <span class="agent-symbol">⌕</span>
                <h3>EDEN Research</h3>
                <p>
                    Research, fact-checking and
                    reliable information gathering.
                </p>
                <span class="agent-status">IN DEVELOPMENT</span>
            </div>

            <div class="agent-card">
                <span class="agent-symbol">▤</span>
                <h3>EDEN Scholar</h3>
                <p>
                    Learning, tutoring, revision
                    and academic development.
                </p>
                <span class="agent-status">IN DEVELOPMENT</span>
            </div>

            <div class="agent-card">
                <span class="agent-symbol">⌘</span>
                <h3>EDEN Developer</h3>
                <p>
                    Programming, debugging and
                    software development.
                </p>
                <span class="agent-status">IN DEVELOPMENT</span>
            </div>

            <div class="agent-card">
                <span class="agent-symbol">⬡</span>
                <h3>EDEN Guardian</h3>
                <p>
                    Privacy, security awareness
                    and responsible decisions.
                </p>
                <span class="agent-status">IN DEVELOPMENT</span>
            </div>

            <div class="agent-card">
                <span class="agent-symbol">♡</span>
                <h3>EDEN Personal</h3>
                <p>
                    Organisation, reminders,
                    planning and supportive conversations.
                </p>
                <span class="agent-status">IN DEVELOPMENT</span>
            </div>

            <div class="agent-card">
                <span class="agent-symbol">✦</span>
                <h3>EDEN Creative</h3>
                <p>
                    Brainstorming, writing,
                    design and creative thinking.
                </p>
                <span class="agent-status">IN DEVELOPMENT</span>
            </div>

        </div>

        <div class="agent-notice">
            <p>
                All six agents are currently defined
                as interface profiles. Their intelligence
                and capabilities will be developed later.
            </p>
        </div>

    </div>
`,


    memory: `
        <div class="welcome-card">
            <p class="eyebrow">PERSONAL KNOWLEDGE</p>
            <h2>EDEN Memory</h2>
            <p>Your personal information centre.</p>
            <div class="welcome-line"></div>
            <p class="welcome-message">
                Memory management will be introduced later.
            </p>
        </div>
    `,

    settings: `
        <div class="welcome-card">
            <p class="eyebrow">SYSTEM CONFIGURATION</p>
            <h2>Settings</h2>
            <p>Configure your EDEN experience.</p>
            <div class="welcome-line"></div>
            <p class="welcome-message">
                Additional settings are coming soon.
            </p>
        </div>
    `

};


/* NAVIGATION FUNCTION */

/**
 * @param {string} pageName
 */

// EDEN Chat: Temporary conversation storage
let savedConversation = "";

/* NAVIGATION FUNCTION */

/**
 * @param {string} pageName
 */
function changePage(pageName) {

    if (!pages[pageName]) {
        return;
    }

    // Save the conversation before leaving Chat
    const currentConversation = document.getElementById("conversationWindow");

    if (currentConversation) {
        savedConversation = currentConversation.innerHTML;
    }

    // Load the selected page
    workspace.innerHTML = pages[pageName];

    // Restore the conversation when returning to Chat
    if (pageName === "chat" && savedConversation !== "") {
        const conversationWindow = document.getElementById("conversationWindow");

        if (conversationWindow) {
            conversationWindow.innerHTML = savedConversation;
        }
    }

    navigationButtons.forEach(function (button) {

        button.classList.remove("active");

        if (button.dataset.page === pageName) {
            button.classList.add("active");
        }

    });

    sidebar.classList.remove("open");

}


/* NAVIGATION BUTTON EVENTS */

navigationButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedPage = button.dataset.page;

        changePage(selectedPage);

    });

});


// EDEN Chat: Message submission and typing indicator
workspace.addEventListener("submit", function (event) {
    if (event.target.id !== "chatForm") {
        return;
    }

    event.preventDefault();

    const chatInput = document.getElementById("chatInput");
    const conversationWindow = document.getElementById("conversationWindow");

    const message = chatInput.value.trim();

    if (message === "") {
        return;
    }

    // Create the user's message
    const messageElement = document.createElement("div");
    messageElement.className = "chat-message user-message";

    const label = document.createElement("div");
    label.className = "message-label";
    label.textContent = "YOU";

    const bubble = document.createElement("div");
    bubble.className = "message-bubble";
    bubble.textContent = message;

    const time = document.createElement("div");
    time.className = "message-time";
    time.textContent = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    messageElement.appendChild(label);
    messageElement.appendChild(bubble);
    messageElement.appendChild(time);

    conversationWindow.appendChild(messageElement);

    // Create EDEN's typing indicator
    const typingMessage = document.createElement("div");
    typingMessage.className = "chat-message eden-message";

    const edenLabel = document.createElement("div");
    edenLabel.className = "message-label";
    edenLabel.textContent = "EDEN";

    const typingBubble = document.createElement("div");
    typingBubble.className = "typing-indicator";

    const typingText = document.createElement("div");
    typingText.textContent = "Hmm, let me think...";

    typingBubble.appendChild(typingText);

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement("span");
        typingBubble.appendChild(dot);
    }

  // Add EDEN's message timestamp
const edenTime = document.createElement("div");
edenTime.className = "message-time";
edenTime.textContent = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
});

typingMessage.appendChild(edenLabel);
typingMessage.appendChild(typingBubble);
typingMessage.appendChild(edenTime);

conversationWindow.appendChild(typingMessage);

    // Clear the input and scroll to the newest message
    chatInput.value = "";
    conversationWindow.scrollTop = conversationWindow.scrollHeight;

    // Prototype demonstration: remove the indicator after 1.5 seconds
    setTimeout(function () {
        typingMessage.remove();
    }, 1500);
});


// EDEN Chat: Unified keyboard handler
workspace.addEventListener("keydown", function (event) {

    if (event.target.id !== "chatInput") {
        return;
    }

    if (event.key !== "Enter") {
        return;
    }

    // Mobile: allow Enter to insert a new line
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    if (isMobile) {
        return;
    }

    // Desktop: Shift + Enter inserts a new line
    if (event.shiftKey) {
        return;
    }

    // Desktop: Enter sends the message
    event.preventDefault();

    const chatForm = document.getElementById("chatForm");

    if (chatForm) {
        chatForm.requestSubmit();
    }
});



// Initialise EDEN with the updated dashboard
changePage("dashboard");


// EDEN Chat: Clear Conversation handler
workspace.addEventListener("click", function (event) {

    const clearButton = event.target.closest("#clearChat");

    if (!clearButton) {
        return;
    }

    const conversationWindow =
        document.getElementById("conversationWindow");

    if (!conversationWindow) {
        return;
    }

    // Restore EDEN's original welcome message
    conversationWindow.innerHTML = `
        <div class="chat-message eden-message">

            <div class="message-label">
                EDEN
            </div>

            <div class="message-bubble">Welcome. I am EDEN, your personal assistant interface. How may I assist you today?
</div>

            <span class="message-time">
                SYSTEM MESSAGE
            </span>

        </div>
    `;

    // Return to the beginning of the conversation
    conversationWindow.scrollTop = 0;

});
