document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('#counter')
  const add1 = document.querySelector('#plus')
  const minus1 = document.querySelector('#minus')
  const heart1 = document.querySelector('#heart')
  const form = document.querySelector('#comment-form')
  const commentList = document.querySelector('#list')
  let stopCounter = document.querySelector('#pause')
  let timerId = setInterval(() => { countUp()}, 1000)


  form.addEventListener('submit', e => handleComment(e))
  
  let timeStart = 0

  function pauseCounter() {
    if (stopCounter.id === 'pause') {
      clearInterval(timerId)
      stopCounter.textContent = 'resume'
      stopCounter.id = 'resume'
      add1.disabled = true
      minus1.disabled = true
      heart1.disabled = true
    } else {
      timerId = setInterval(() => { countUp()}, 1000)
      stopCounter.textContent = 'pause'
      stopCounter.id = 'pause'
      add1.disabled = false
      minus1.disabled = false
      heart1.disabled = false
    }
  }

  function countUp() {
    counter.innerHTML = parseInt(timeStart)
    timeStart += 1
  }
  
  function userAdd1() {
    counter.innerHTML = timeStart
    timeStart += 1
  }

  function userMinus1() {
    counter.innerHTML = timeStart
    timeStart -= 1
  }

  function numberLikes() {
    let likeList = document.querySelector('ul')
    addNewLike(counter.textContent, likeList)
  }

  function addNewLike(x,y) {
      let liPresent = document.getElementById(x)
      let numberOfLikes = 1 
      if (liPresent) {
        let currentLikes = liPresent.textContent.split(' ')
        let updatedLikes = parseInt(currentLikes[4]) + 1
        liPresent.textContent = `${x} has been liked ${updatedLikes} times`
      } else {
        let like = document.createElement(`li`);
        like.textContent = `${x} has been liked ${numberOfLikes} time`
        like.id = x
        y.appendChild(like)}
  }

  function handleComment(e) {
    e.preventDefault()
    const newComment = document.createElement('li')
    newComment.textContent = e.target[0].value
    commentList.appendChild(newComment)
  }

  countUp(timerId);
  add1.addEventListener('click', userAdd1)
  minus1.addEventListener('click', userMinus1)
  stopCounter.addEventListener('click', pauseCounter)
  heart1.addEventListener('click', numberLikes)
})
