import './friend.css'

const Friend = ({user}) => {
    const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
    return (
        <li className='sidebarFriend'>
            <img className='sidebarFriendImage' src={PF+user.profilePicture} alt="" />
            <span className='sidebarFriendName'>{user.username}</span>
        </li>
    )
}

export default Friend