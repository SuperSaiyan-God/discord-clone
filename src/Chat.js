import { AddCircle, CardGiftcard } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmoticonsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import db from './firebase';
import firebase from 'firebase';

function Chat() {
    const channelId = useSelector(selectChannelId);
    const user = useSelector(selectUser);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if(channelId) {
        db.collection('channels').doc(channelId).collection("messages").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
        setMessages(snapshot.docs.map((doc) => doc.data())));
        }
    }, [channelId]);

    const sendMessage = e => {
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages').add({
            message: input,
            user: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />
            <div className="chat_messages">
                {messages.map((message) => (
                    <Message
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}
                    />
                ))}
            </div>
            <div className="chat_input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input value={input} disabled={!channelId} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                    <button onClick={sendMessage} disabled={!channelId} className="chat_inputButton" type="submit">Send Message</button>
                </form>
                <div className="chat_inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmoticonsIcon fontSize="large" />
                </div>
            </div>
        </div>
    );
}

export default Chat
