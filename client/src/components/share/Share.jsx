import {
    PermMedia as PermMediaIcon,
    Label as LabelIcon,
    Room as RoomIcon,
    EmojiEmotions as EmojiEmotionsIcon,
    Cancel as CancelIcon
} from "@mui/icons-material";
import './share.css';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Share = () => {
    const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);
    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = `${Date.now()}-${file.name}`;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            try {
                await axios.post('/upload', data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            await axios.post('/posts', newPost)
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" />
                    <input className="shareInput" ref={desc} placeholder={"What's on your mind, " + user.username + "?"} />
                </div>
                <hr className="shareHr" />
                {file && (
                    <div className="shareImgContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                        <CancelIcon className="shareImgCancel" onClick={() => setFile(null)} />
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler} encType="multipart/form-data">
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMediaIcon htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input style={{ display: "none" }} type="file" id="file" name="file" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <div className="shareOption">
                            <LabelIcon htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <RoomIcon htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}

export default Share