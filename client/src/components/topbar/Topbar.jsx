import './topbar.css';
import {
    Search as SearchIcon,
    Person as PersonIcon,
    Chat as ChatIcon,
    Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

const Topbar = () => {
    const {user} = useContext(AuthContext);
    const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                <span className="logo">Meetup</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className="searchIcon" />
                    <input
                        placeholder="Search for friend, post or video"
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`profile/${user.username}`}>
                <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" className="topbarImg" />
                </Link>
            </div>
        </div>
    );
}

export default Topbar;