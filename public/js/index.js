function handleSubmitBtn() {
    const btn__submit = document.querySelector('#btn__submit')
    const input__email = document.querySelector('#input__email')
    const input__pass = document.querySelector('#input__pass')
    if (!input__email.value || !input__pass.value) {
        btn__submit.disable = false
        btn__submit.style.backgroundColor = '#B2DFFC'
    } else {
        btn__submit.disable = true
        btn__submit.style.backgroundColor = '#0095F6'
    }
    console.log(btn__submit.disable)
}