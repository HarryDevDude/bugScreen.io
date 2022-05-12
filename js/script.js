const outerGrid = document.querySelector('.outer-grid')
const innerGrid = document.querySelector('.inner-grid')
const score = document.querySelector('score')
const bug = document.querySelectorAll('.bug')

// similar to querySelecting 'computerScreen' but kinda neat that you can do multiple parameters
// const allClickable = document.querySelectorAll('.inner-grid div')
const computerScreen = document.querySelectorAll('.computerScreen')


// made node list into an array.
let arrlist = Array.from(bug)
// console.log(arrlist); //<-why this logs multiple copies of all the divs sometimes and not other times?

// Visual representation of divs to be clickable
outerGrid.addEventListener('click', (e) => {
  if (e.target.classList.contains('computerScreen'))
  {
    e.target.style.backgroundColor = 'white';
    console.log(e.target)
  }
})
  
  // spacebar not working. Having difficulty trying to fin solution
  // outerGrid.onkeyup = (e) => {
  //   if (e.target.classList.contains('bug'))
  //   (e.key === 32 || e.key === 'Spacebar')
  //   e.target.style.backgroundColor = 'purple';
  //   console.log(e.target)
  // }



// random appearing when page is refreshed
let randomAppear = computerScreen[Math.floor(Math.random() * 36)]
// console.log(randomAppear);
randomAppear.classList.add('bug')



