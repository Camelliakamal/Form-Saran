
const scriptURL = 
'https://script.google.com/macros/s/AKfycbwKhRxACIoLehZS9bG7sB0zZO0PjvyffcQFOo8FJEX8VS6lDqJx80vbNhvp1rpqyPE/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(Response => alert("Terimakasih! Data berhasil dikirim"))
    .then (() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))

})