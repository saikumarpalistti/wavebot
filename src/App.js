import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputMessage, setInputMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleMessageSend = async () => {
    try {
      console.log("handleMessageSend start");
      const { data } = await axios.get(`http://localhost:5001/chat?message=${inputMessage}`);
      console.log("data: "+data);

      setResponse(data.response);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="App">
      <h1>Chatbot</h1>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
      {response && (
        <div>
          <strong>Response:</strong> {response}
        </div>
      )}
    </div>
  );
}

export default App;

