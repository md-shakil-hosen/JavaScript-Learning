
// 1. Add button Event Handler 
document.getElementById("submit-comment").addEventListener('click', function(){
    
// 2. Get User Comment 
  const commentText = document.getElementById("text-field");

//3. Create Comment Paragraph 
const newComment = document.createElement('p');
newComment.innerText = commentText.value;

// 4. Append the comment
const commentContainer = document.getElementById("comment-container");
commentContainer.appendChild(newComment);

//5. Clean The Comment Box
commentText.value = '';


})