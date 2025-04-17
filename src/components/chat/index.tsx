'use client';
import React, { useState } from 'react';
import styles from './chat.module.css';

const ChatComponent = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const handleChangeMessage = (msg: string) => {
    setMessage(msg);
  };

  const handleClickButton = () => {
    setMessages((currentValue) => [...currentValue, message]);
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to chat Bot</h1>

      <div>
        {messages.map((item, index) => (
          <p key={`${item}-${index}`}>{item}</p>
        ))}
      </div>

      <div className={styles.inputWrapper}>
        <input
          value={message}
          name="input"
          placeholder="put your message here"
          onChange={(e) => handleChangeMessage(e.target.value)}
        />
        <button className={styles.ctaButton} onClick={handleClickButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
