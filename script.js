/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const addBtn = document.getElementById('add');
const bookField = document.getElementById('bookField');
const authorField = document.getElementById('authorField');
const records = document.getElementById('records');
let edit_info = null;
let bookArray = [];
let authorArray = [];
const bookobj = localStorage.getItem('books');
const authorobj = localStorage.getItem('author');
if (bookobj !== null && authorobj !== null) {
  bookArray = JSON.parse(bookobj);
  authorArray = JSON.parse(authorobj);
}
function displayinfo() {
  let statement = '';

  authorArray.forEach((author, index) => {
    statement += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${bookArray[index]}</td>
                    <td>${author}</td>
                    <td>
                        <button onclick="editinfo(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="deleteinfo(${index})"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            `;
  });

  records.innerHTML = statement;
}
displayinfo();
function saveinfo(bookArray, authorArray) {
  const strName = JSON.stringify(bookArray);
  const strAuthor = JSON.stringify(authorArray);
  localStorage.setItem('books', strName);
  localStorage.setItem('author', strAuthor);
}

function deleteinfo(index) {
  bookArray.splice(index, 1);
  authorArray.splice(index, 1);
  saveinfo(bookArray, authorArray);
  displayinfo();
}
function editinfo(index) {
  edit_info = index;
  bookField.value = bookArray[index];
  authorField.value = authorArray[index];
  addBtn.innerText = 'Edit';
}
addBtn.onclick = () => {
  const name = bookField.value;
  const author = authorField.value;
  if (edit_info != null) {
    bookArray.splice(edit_info, 1, name);
    authorArray.splice(edit_info, 1, author);
  } else {
    bookArray.push(name);
    authorArray.push(author);
  }
  bookField.value = '';
  authorField.value = '';
  saveinfo(bookArray, authorArray);
  displayinfo();
  addBtn.innerText = 'Add';
};
