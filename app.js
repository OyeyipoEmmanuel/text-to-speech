const speechBtn = document.getElementById('btnConvert')

speechBtn.addEventListener('click', ()=>{
    window.speechSynthesis.cancel()
    const textValue = document.getElementById('text').value
    const speed = parseFloat(document.getElementById('speed').value)
    const lang = document.getElementById('lang').value

    if(textValue.trim().length === 0){
        
        const errContainer = document.getElementById('errContainer')
        const errMessage = document.getElementById('errMessage')
        const closeErr = document.getElementById('close')
        
        errContainer.style.display = 'flex'
        errMessage.innerText = "Please input a text" 

        setTimeout(() => {
            errContainer.style.display = "none"
        }, 3000);

        closeErr.addEventListener('click', ()=>{
            errContainer.style.display = "none"
        })

    }

    const speechObject = new SpeechSynthesisUtterance(textValue)
    speechObject.lang = lang;
    speechObject.rate = speed;

    window.speechSynthesis.speak(speechObject)
    
})