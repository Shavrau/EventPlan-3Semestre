import React, { useEffect, useState, useRef } from 'react';
import { ref, push, onValue, off, set } from 'firebase/database';
import { database } from '../../firebase/config';
import styles from './Chat.module.css';

const Chat = ({ eventId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesRef = useRef(null);

  useEffect(() => {
    if (eventId) {
      messagesRef.current = ref(database, `events/${eventId}/messages`);
      
      const fetchMessages = () => {
        onValue(messagesRef.current, (snapshot) => {
          const data = snapshot.val();
          const messagesList = data ? Object.values(data) : [];
          const limitedMessages = messagesList.slice(-6); 
          setMessages(limitedMessages);
        });
      };
      
      fetchMessages();

      return () => {
        if (messagesRef.current) {
          off(messagesRef.current, 'value');
        }
      };
    }
  }, [eventId]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (newMessage.trim() === '') return;

    const newMessageRef = push(messagesRef.current);

    set(newMessageRef, {
      text: newMessage,
      timestamp: Date.now(),
    }).then(() => {
      setNewMessage('');
    }).catch((error) => {
      console.error('Error sending message:', error);
    });
  };

  return (
    <div className={`container ${styles.container}`}>
      <div className={`card ${styles.chatCard}`}>
        <div className={`card-header ${styles.cardHeader}`}>
          <h2>Chat em Tempo Real</h2>
        </div>
        <div className={`card-body ${styles.cardBody}`}>
          <div className={styles.messages} style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {messages.map((message, index) => (
              <div key={index} className={styles.message}>
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage}>
            <div className="input-group">
              <input
                type="text"
                className={`form-control ${styles.input}`}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
              />
              <div className="input-group-append">
                <button type="submit" className={styles.btn} aria-label="Enviar">
                  ENVIAR
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
