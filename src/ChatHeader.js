import { HelpRounded, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons';
import React from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import InboxIcon from '@material-ui/icons/Inbox';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

function ChatHeader({ channelName }) {
    return (
        <div className="chatHeader">
            <div className="chatHeader_left">
            <h3>
                <span className="chatHeader_hash">#</span>
                {channelName}</h3>
            </div>
            <div className="chatHeader_right">
                <NotificationsIcon />
                <PinDropIcon />
                <PeopleAltRoundedIcon />
                <div className="chatHeader_search">
                    <input placeholder="Search" />
                    <SearchRoundedIcon />
                </div>
                <InboxIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    );
}

export default ChatHeader
