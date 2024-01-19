const infoButton = document.getElementById('info')
const loginInput = document.getElementById('login')
const missingLoginErrorMessage = 'Please enter GitHub login'
const infoText = document.createElement('p')
const errorText = document.createElement('p')
const errorMessageColor = 'red'
const infoTextColor = 'black'

async function fetchUserData (login) {
  const response = await fetch(`https://api.github.com/users/${login}`)
  const data = await response.json()
  return data
}

function printUser () {
  const login = loginInput.value
  infoText.innerHTML = ''
  errorText.innerHTML = ''

  if (login) {
    infoButton.after(infoText)

    const user = fetchUserData(login)

    user.then((data) => {
      const avatar = document.createElement('img')
      infoText.appendChild(avatar)
      avatar.src = data.avatar_url
      avatar.width = 100
      avatar.height = 100

      const loginName = document.createElement('p')
      infoText.appendChild(loginName)
      loginName.innerHTML = 'Login: ' + data.login

      const name = document.createElement('p')
      infoText.appendChild(name)
      name.innerHTML = 'Name: ' + data.name

      const urlCaption = document.createElement('p')
      urlCaption.innerHTML = 'Account URL: '
      infoText.appendChild(urlCaption)

      const url = document.createElement('a')
      urlCaption.append(url)
      url.href = data.html_url
      url.innerHTML = data.html_url

      const blog = document.createElement('p')
      infoText.appendChild(blog)
      blog.innerHTML = 'Blog: ' + data.blog

      const type = document.createElement('p')
      infoText.appendChild(type)
      type.innerHTML = 'User type: ' + data.type
    }).catch((error) => console.error(error))

    infoText.style.color = infoTextColor
  } else {
    infoButton.after(errorText)
    errorText.innerHTML = missingLoginErrorMessage
    errorText.style.color = errorMessageColor

    throw new Error(missingLoginErrorMessage)
  }
}

infoButton.addEventListener('click', () => {
  try {
    printUser()
  } catch (exception) {
    console.log(exception)
  }
})
