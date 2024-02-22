function display() {
  var menuItems = document.querySelectorAll('.menu')
  var buttonIcon = document.querySelector('.fa')

  menuItems.forEach(function (item, index) {
    setTimeout(function () {
      item.classList.toggle('hid')
      item.classList.toggle('show')

      // Check if it's the last item to toggle the button icon
      if (index === menuItems.length - 1) {
        buttonIcon.classList.toggle('fa-bars')
        buttonIcon.classList.toggle('fa-times')
      }
    }, index * 100) // Adjust the delay as needed (in milliseconds)
  })
}

function showAll() {
  document.getElementById('pythonProject').style.display = 'flex'
  document.getElementById('portfolioProject').style.display = 'flex'
}

function showWebDevelopment() {
  document.getElementById('pythonProject').style.display = 'none'
  document.getElementById('portfolioProject').style.display = 'flex'
}

function showPython() {
  document.getElementById('pythonProject').style.display = 'flex'
  document.getElementById('portfolioProject').style.display = 'none'
}

const text = document.querySelector('.typed-text')
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'Web Development'
  }, 0)
  setTimeout(() => {
    text.textContent = 'Data Science'
  }, 4000)
  setTimeout(() => {
    text.textContent = 'App Development'
  }, 8000)
  setTimeout(() => {
    text.textContent = 'Blockchain Technology'
  }, 12000)
}

textLoad()
setInterval(textLoad, 16000)
