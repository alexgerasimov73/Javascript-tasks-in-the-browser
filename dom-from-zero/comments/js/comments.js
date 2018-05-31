'use strict';

function showComments(list) {
  const commentsContainer = document.querySelector('.comments');
  const comments = list.map(createComment);
  //console.log(comments)
  const fragment = list.reduce((fragment, comment) => {
    fragment.appendChild(createComment(comment));
    return fragment;
  }, document.createDocumentFragment());
  commentsContainer.appendChild(fragment);
} 

function createComment(comment) {
  const commentWrap = document.createElement('div');
  const photo = document.createElement('div');
  const avatar = document.createElement('div');
  const commentBlock = document.createElement('div');
  const commentText = document.createElement('p');
  const bottomComment = document.createElement('div');
  const commentDate = document.createElement('div');
  const commentActions = document.createElement('ul');
  const complain = document.createElement('li');
  const reply = document.createElement('li');
  
  commentWrap.className = 'comment-wrap';
  photo.className = 'photo';
  photo.title = comment.author.name;
  avatar.className = 'avatar';
  avatar.style.backgroundImage = 'url(`${comment.author.pic}`)';
  commentBlock.className = 'comment-block';
  commentText.className = 'comment-text';
  commentText.innerText = comment.text;
  bottomComment.className = 'bottom-comment';
  commentDate.className = 'comment-date';
  commentDate.textContent = new Date(comment.date).toLocaleString('ru-Ru');
  commentActions.className = 'comment-actions';
  complain.className = 'complain';
  complain.textContent = 'Пожаловаться';
  reply.className = 'reply';
  reply.textContent = 'Ответить';
  
  commentWrap.appendChild(photo);
  commentWrap.appendChild(commentBlock);
  photo.appendChild(avatar);
  commentBlock.appendChild(commentText);
  commentBlock.appendChild(bottomComment);
  bottomComment.appendChild(commentDate);
  bottomComment.appendChild(commentActions);
  commentActions.appendChild(complain);
  commentActions.appendChild(reply);
  return commentWrap;
}

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);
