import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')

  const onChangeName = event => setName(event.target.value)

  const [commentText, setCommentText] = useState('')

  //   const commentDetails = {name, commentText}

  //   const [comment, setComment] = useState({name: '', commentText: ''})

  const [commentList, setCommentList] = useState([])

  const onAddComment = event => {
    event.preventDefault()
    // setComment({name, commentText})
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setName('')
    setCommentText('')
    setCommentList(prevCommentsList => [...prevCommentsList, newComment])
  }

  const onChangeCommentText = event => setCommentText(event.target.value)
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      {/* <CommentItem commentDetails={comment} /> */}
      <CommentsList>
        {commentList.map(eachComment => (
          <CommentItem key={eachComment.id} commentDetails={eachComment} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
