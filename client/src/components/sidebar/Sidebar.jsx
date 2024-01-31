import Friend from '../friend/Friend';
import './sidebar.css'
import {
    RssFeed as RssFeedIcon,
    Chat as ChatIcon,
    PersonalVideo as PersonalVideoIcon,
    Group as GroupIcon,
    Bookmark as BookmarkIcon,
    HelpOutline as HelpOutlineIcon,
    WorkOutline as WorkOutlineIcon,
    School as SchoolIcon,
    Event as EventIcon,
} from '@mui/icons-material';
import { Users } from '../../dummyData';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className='sidebarListItem'>
                        <RssFeedIcon className='sidebarListIcon' />
                        <span className='sidebarListItemText'>Feed</span>
                    </li>
                    <li className='sidebarListItem'>
                        <ChatIcon className='sidebarListIcon' />
                        <span className='sidebarListItemText'>Chat</span>
                    </li>
                    <li className='sidebarListItem'>
                        <PersonalVideoIcon className='sidebarListIcon' />
                        <span className='sidebarListItemText'>Video</span>
                    </li>
                    <li className='sidebarListItem'>
                        <GroupIcon className='sidebarListIcon' />
                        <span className='sidebarListItemText'>Groups</span>
                    </li>
                    <li className='sidebarListItem'>
                        <BookmarkIcon className='sidebarListIcon' />
                        <span className='sidebarListItemText'>Bookmark</span>
                    </li>
                    <li className='sidebarListItem'>
                        <HelpOutlineIcon className='sidebarListIcon' />
                        <span className='sidebarListItemText'>Question</span>
                    </li>
                    <li className='sidebarListItem'>
                        <WorkOutlineIcon className='sidebarListIcon' />
                        <span className='sidebarListItemText'>Job</span>
                    </li>
                    <li className='sidebarListItem'>
                        <SchoolIcon className='sidebarListIcon' />
                        <span className='sidebarListItemText'>Events</span>
                    </li>
                    <li className='sidebarListItem'>
                        <EventIcon className='sidebarListIcon' />
                        <span className='sidebarListItemText'>Courses</span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show more</button>
                <hr className='sidebarHr'/>
                <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <Friend key={u.id} user={u}/>                     
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar