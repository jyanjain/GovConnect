import React, { useState } from "react";
import Navbar from "../components/Navbar";

function ChatBotScreen() {
  const [messages, setMessages] = useState([
    { 
      sender: "user", 
      text: "I need to return an item.", 
      time: "10:02 AM",
      name: "You"
    },
    { 
      sender: "bot", 
      text: "Would you like to return your item for a refund or exchange?", 
      time: "10:03 AM",
      name: "Customer support"
    },
  ]);
  const [input, setInput] = useState("");

  const navLinks = [
    { label: "Home", href: "/" },
    
  ];

  const commonQueries = [
    "How do I reset my password?",
    "How to upload documents?",
    "How to update my profile information?",
    "How to check which Government Schemes I have applied for?",
  ];

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = {
      sender: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      name: "You"
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        sender: "bot",
        text: "I understand you're trying to get help. How can I assist you further?",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        name: "Customer support"
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  const handleQueryClick = (query) => {
    const newMessage = {
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      name: "You"
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        sender: "bot",
        text: `Let me help you with: ${query}`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        name: "Customer support"
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div style={styles.page}>
      <Navbar links={navLinks} />
      
      <div style={styles.content}>
        <header style={styles.header}>
          <h1 style={styles.title}>How can we help you?</h1>
          <h2 style={styles.languageHeading}>Select a language</h2>
          <div style={styles.languageSelector}>
            <button style={styles.languageButton}>English</button>
            <button style={styles.languageButton}>Hindi</button>
          </div>
        </header>

        <div style={styles.chatWindow}>
          <div style={styles.chatTitle}>Chat history</div>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={msg.sender === "user" ? styles.userMessageContainer : styles.botMessageContainer}
            >
              <div style={msg.sender === "user" ? styles.userMessageContent : styles.botMessageContent}>
                <div style={{
                  ...styles.profileCircle,
                  backgroundColor: msg.sender === "user" ? "#007bff" : "#e0e0e0",
                  color: msg.sender === "user" ? "#fff" : "#666"
                }}>
                  {msg.sender === "user" ? "Y" : "C"}
                </div>
                <div style={styles.messageContent}>
                  <div style={styles.messageName}>{msg.name}</div>
                  <div style={msg.sender === "user" ? styles.userMessage : styles.botMessage}>
                    {msg.text}
                  </div>
                  <span style={styles.timestamp}>{msg.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.commonQueries}>
          <h2 style={styles.commonQueriesTitle}>Common queries</h2>
          <ul style={styles.queryList}>
            {commonQueries.map((query, index) => (
              <li 
                key={index} 
                style={styles.queryItem}
                onClick={() => handleQueryClick(query)}
              >
                {query} <span style={styles.arrow}>›</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Type your question here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            style={styles.input}
          />
          <button onClick={handleSendMessage} style={styles.sendButton}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  content: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "16px",
    boxSizing: "border-box",
  },
  header: {
    textAlign: "center",
    marginBottom: "24px",
  },
  title: {
    fontSize: "24px",
    margin: "0 0 16px",
    fontWeight: "600",
  },
  languageHeading: {
    fontSize: "16px",
    margin: "0 0 8px",
    fontWeight: "500",
    color: "#333",
  },
  languageSelector: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
  },
  languageButton: {
    padding: "8px 24px",
    border: "1px solid #e0e0e0",
    borderRadius: "20px",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.2s ease",
  },
  chatWindow: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    height: "400px",
    overflowY: "auto",
  },
  chatTitle: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
    marginBottom: "16px",
  },
  userMessageContainer: {
    marginBottom: "16px",
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  botMessageContainer: {
    marginBottom: "16px",
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
  },
  userMessageContent: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "flex-start",
    gap: "12px",
    maxWidth: "80%",
  },
  botMessageContent: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    maxWidth: "80%",
  },
  profileCircle: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "500",
    flexShrink: 0,
  },
  messageContent: {
    flex: 1,
  },
  messageName: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "4px",
  },
  userMessage: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: "12px",
    borderTopRightRadius: "4px",
    fontSize: "14px",
    lineHeight: "1.4",
    wordWrap: "break-word",
  },
  botMessage: {
    backgroundColor: "#f5f5f5",
    color: "#333",
    padding: "12px 16px",
    borderRadius: "12px",
    borderTopLeftRadius: "4px",
    fontSize: "14px",
    lineHeight: "1.4",
    wordWrap: "break-word",
  },
  timestamp: {
    display: "block",
    fontSize: "12px",
    color: "#999",
    marginTop: "4px",
  },
  commonQueries: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  },
  commonQueriesTitle: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
    margin: "0 0 12px",
  },
  queryList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  queryItem: {
    padding: "12px 16px",
    borderBottom: "1px solid #f0f0f0",
    cursor: "pointer",
    fontSize: "14px",
    color: "#333",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background-color 0.2s ease",
  },
  arrow: {
    color: "#007bff",
    fontSize: "18px",
  },
  inputContainer: {
    display: "flex",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    gap: "12px",
  },
  input: {
    flex: 1,
    padding: "12px 16px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    fontSize: "14px",
  },
  sendButton: {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export default ChatBotScreen;