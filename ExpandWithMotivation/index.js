// selects all node with .content class
const contents = document.querySelectorAll('.content');

// adds an eventlistener to all nodes havinf .content class
// the onlick function removes active class from all nodes and adds to the event generator node
contents.forEach(content=>content.addEventListener('click',()=>{
    contents.forEach(content=> content.classList.remove('active'));
    content.classList.add('active');
}));