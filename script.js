document.getElementById('submit').addEventListener('click',Activate)

let urage = 0

function Activate () {
  urage = document.getElementById('userage').value

  urage = parseInt(urage)

  if (urage >= 17) {
    document.getElementById('output').innerHTML = ' You can watch all types of movies including R rated movies alone'
  } else if (urage >= 13) {
    document.getElementById('output').innerHTML = ' You can watch PG-13 movies alone, but rated R movies you shouldn\'t be watching'
  } else if (urage >= 5) {
    document.getElementById('output').innerHTML = ' You can watch Pg and G movies alone. But parental guidence is needed to watch Pg-13 moives.'
  } else {
    document.getElementById('output').innerHTML = ' You are very young and should ask your parents before watching any sort of content'
  }
}