import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export const WebSocketDemo = () => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState('ws://localhost:8000/chat/1');
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, readyState, lastJsonMessage } = useWebSocket(socketUrl);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (lastJsonMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastJsonMessage));
    }
  }, [lastJsonMessage]);

  const handleClickSendMessage = useCallback(() => sendMessage(content), [content]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <div>
      <input value={content} onChange={(e)=>setContent(e.target.value)} />
      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Click Me to send 'Hello'
      </button>
      <span>The WebSocket is currently {connectionStatus}</span>
      {lastJsonMessage ? <span>Last message: {lastJsonMessage.content}</span> : null}
      <ul>
        {messageHistory.map((message, idx) => (
          <li key={idx}>{message.timestamp} {message ? message.content : null}</li>
        ))}
      </ul>
    </div>
  );
};
