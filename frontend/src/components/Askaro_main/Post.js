import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../css/Post.css";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { BorderTop, MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-responsive-modal";
import parse from 'html-react-parser';

// import db from "../firebase";
// import { selectQuestionId, setQuestionInfo } from "../features/questionSlice";
import firebase from "firebase";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-responsive-modal/styles.css";
import CloseIcon from "@material-ui/icons/Close";
import TimeAdded from "../../Utils/timeAgo";
import { token } from "../../Utils/decodedToken";
import axios from "axios";
import { errorModal, successModal } from "../../Utils/AlertModal";

function Post({ questionId, key, question, imageUrl, timestamp, users, answers }) {
  const dispatch = useDispatch();
  const [voteState, setVoteState] = useState(null); // null represents no vote initially

  const handleVote = (newState) => {
    setVoteState(newState === voteState ? null : newState);
  };
  const userLogin = useSelector((state) => state.userLogin);

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  // const questionId = useSelector(selectQuestionId);
  const [answer, setAnswer] = useState("");
  const [getAnswers, setGetAnswers] = useState(answers);

  // console.log(answers)

  const [show, setShow] = useState(false)
  const Close = (
    <CloseIcon
      style={{
        color: "red",
        border: " 2px solid lightgray",
        borderRadius: "3px",
      }}
    />
  );

  const handleQuill = (value) => {
    setAnswer(value);
  };

  const handleModal = () => {
    setIsModalOpen(true);
    console.log(questionId);
  };

  const handleAnswer = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    };
    if (answer !== "") {
      const body = {
        answer: answer,
        questionId: questionId,
        userDetails: {
          role: userLogin?.userInfo?.role,
          userEmail: userLogin?.userInfo?.userEmail,
          userId: userLogin?.userInfo?.userId,
        },
      };

      await axios
        .post(`/api/answers`, body, config)
        .then((res) => {
          console.log(res.data);
          successModal('Answer added successfully')
          // alert('Answer added succesfully')
          setIsModalOpen(false)
        })
        .catch((err) => {
          console.log(err);
          errorModal('Error while adding question')
        });
    }
  };
  return (
    <div
      key={key}
      className="post"
      // onClick={() =>
      //   // dispatch(
      //   //   setQuestionInfo({
      //   //     questionId: Id,
      //   //     questionName: question,
      //   //   })
      //   // )
      // }
    >
      <div className="post-info">
        <Avatar
          src={
            "http://tinygraphs.com/labs/isogrids/hexa16/tinygraphs?theme=heatwave&numcolors=4&size=220&fmt=svg"
          }
        />
        <h4>{users?.name ? users?.name : users?.email}</h4>
        {timestamp && (
          <small>
            <TimeAdded date={timestamp} />
          </small>
        )}
      </div>
      <div className="post-body">
        <div className="post-question">
          <p>{question}</p>
          <button onClick={handleModal} style={{backgroundColor:"rgb(185, 43, 39)"}} className="post-answerbtn">
            Answer
          </button>

          <Modal
            open={IsmodalOpen}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc={true}
            center
            closeOnOverlayClick={false}
            closeIcon={Close}
          >
            <div className="modal-question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {users?.name ? users?.name : users?.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {/* {timestamp && (
                    <small>
                      <TimeAdded date={timestamp} />
                    </small>
                  )} */}
                  {new Date(timestamp).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal-answer">
              <ReactQuill
                value={answer}
                onChange={handleQuill}
                placeholder="Enter your answer"
              ></ReactQuill>
            </div>
            <div className="modal-button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        <img style = {{
          width: "100%",
          objectFit: "contain"
        }} src={imageUrl} alt="" />
        <div className="post-footer">
        <div className="post-footerAction">
          <ArrowUpwardOutlinedIcon className={voteState === 'upvote' ? 'upvoted' : ''}
        onClick={() => handleVote('upvote')}/>
          <p style={{marginLeft:'5px',marginRight:'20px',color:"black",fontWeight:'bold',fontFamily:'sans-serif'}} >Upvote</p>
          <ArrowDownwardOutlinedIcon className={voteState === 'downvote' ? 'downvoted' : ''}
        onClick={() => handleVote('downvote')} />
        </div>
      </div>
        <p style = {{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0"
        }}>{answers.length} {`${answers.length < 2 ? 'Answer' : 'Answers'}`}</p>
        <div style = {{
              margin: "5px 0px 0px 0px",
              padding: "5px 0px 0px 20px",
              borderTop: "1px solid lightgray",
            }} className="post__answer">
              
          {
            // answer comes here
            getAnswers.map((_answer) => (<>
            <div style = {{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "10px 5px",
              borderTop: "1px solid lightgray",
            }} className = 'post-answer-container'>
              <div style = {{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",fontSize: '12px',
                fontWeight: "600",
                color: "#888"
              }} className = 'post-answered'>
                <Avatar src = {
                  "http://tinygraphs.com/labs/isogrids/hexa16/tinygraphs?theme=heatwave&numcolors=4&size=220&fmt=svg"
                } />
                <div style = {{
                  margin: "0px 10px"
                }} className = 'post-info'>
                  
                  <p style = {{
                    margin: "5px 0"
                  }}>{_answer?.userDetails?.userName ? _answer?.userDetails?.userName : _answer?.userDetails?.userEmail}</p>
                  {
                    _answer?.createdAt &&
                    <span><TimeAdded date = {_answer.createdAt} /></span>
                  }
                  
                </div>
              </div>
              <div className = 'post-answer'>
                {parse(_answer.answer)}
              </div>
            </div>
            </>))
          }
        </div>
      </div>
      
    </div>
  );
}

export default Post;
