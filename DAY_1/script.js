const containerImages = document.querySelectorAll(".container-image")

containerImages.forEach(containerImage => {
    containerImage.addEventListener('click', () => {
        removeActiveClasses()
        containerImage.classList.add('active')
    } )

})

function removeActiveClasses() {
    containerImages.forEach(containerImage => {
        containerImage.classList.remove('active')
    })
}