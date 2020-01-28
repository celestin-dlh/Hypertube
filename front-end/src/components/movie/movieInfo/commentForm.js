import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import useForm from 'react-hook-form';

/* Services */ 
import { postComment, getComments } from '../../services/requestManager';
import { Comment } from '../../services/textLang';

const CommentForm = (props) => {
    const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en')
    const [comment, setComment] = useState({
        imdb_id: undefined,
        comment: ''
    });

    const [listComments, setListComments] = useState([]);


    useEffect(() => {
        setComment({imdb_id: props.imdb_id});
        getComments(props.imdb_id)
            .then((res) => {
                setListComments(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [props.imdb_id]);

    const handleChange = (event) => {
		const {name, value} = event.target;
        setComment({ ...comment, [name]: value});
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = () => {
        if (comment.imdb_id !== undefined) {
            postComment(comment)
                .then(() => {
                    alert('Posted')
                })
                .catch(() => console.log('Error while posting'))
        }
    };

    return (
        <>
            <div>
                <form className="commentForm" onSubmit={handleSubmit(onSubmit)} style={{margin: "auto"}}>
                    <div className="input-form" style={{color: "white"}}>
                        <label htmlFor="inp" className="inp">
                            <input className="input"
                                   id="input"
                                   type="text"
                                   placeholder="&nbsp;"
                                   name="comment"
                                   defaultValue={comment.comment}
                                   onChange={handleChange}
                                   ref={register({ required: true, maxLength: 80, minLength: 3})}
                            />
                            <span className="label">{Comment[lang]}</span>
                            <span className="border"></span>
                        </label>
                    </div>
                    <Button variant="primary" size="lg" block type="submit" className="submit-button">
                        {Comment[lang]}
                    </Button>  
                </form>
            </div>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "20px 0px"}}>
                {listComments ? listComments.map((comment) => {
                    return (
                        <div className="commentDiv" key={comment._id}>
                            <a href={`/profile/${comment.username}`}><p className="commentAuthor">{comment.username}</p></a>
                            <p className="commentContent">{comment.comment}</p>
                        </div>
                    )})
                : null }
            </div>
        </>
    )
};

export default CommentForm;