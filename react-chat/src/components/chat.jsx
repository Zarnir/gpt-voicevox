import { useState } from 'react';
import { ajax } from '../helpers/axios';
import { configs } from '../configs/index';


export const Chat = () => {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const API_URL = configs.API_URL;

  const chat = async (e, message) => {
    e.preventDefault();

    if (!message) return;
    
    setIsTyping(true);
    scrollTo(0, 1e10);

    let msgs = chats;
    msgs.push({ role: 'user', content: message });
    setChats(msgs);

    setMessage('');

    await ajax({
      method: 'POST',
      url: API_URL,
      data: msgs,
    })
    .then((response) => response.json())
    .then(({ data }) => {
      msgs.push(data);
      setChats(msgs);
      setIsTyping(false);
      scrollTo(0, 1e10);
    })
    .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Ask Me Anything Mortal</h2>

      <section>
        {
          chats && chats.length
          ? chats.map((chat, index) => (
            <p key={index} className={chat.role === 'user' ? 'user_msg' : ''}>
              <span>
                <b>{ chat.role.toUpperCase() }</b>
              </span>
              <span>:</span>
              <span>{chat.content}</span>
            </p>
          ))
          : ''
        }
      </section>

      <div className={isTyping ? '' : 'hide'}>
        <p>
          <i>{isTyping ? 'Typing' : ''}</i>
        </p>
      </div>

      <form action = '' onSubmit={(e) => chat(e, message)}>
        <input
          type='text'
          name='message'
          value={message}
          placeholder='Ask anythings'
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  )
}
