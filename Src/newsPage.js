const feedDisplay = document.getElementById('feed')
const clock = document.getElementById('clock')

fetch('http://localhost:8000/results') // Grab results from node.js and insert into feed div
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for(let i = 0; i < 10; i++){// Insert the first 10 links into the feed and makes them open in a new tab when clicked
            var arcitleItem = `<a class="link" style="display: block;" target="_blank" rel="noopener noreferrer"  href=` + data[i].url + `>` + data[i].title
            feedDisplay.insertAdjacentHTML('beforeend', arcitleItem)
        }
    }).catch(err => console.log(err))

    window.onload = displayClockDate();
    function displayClockDate(){
      var display = new Date().toLocaleTimeString();
      clock.innerHTML = display;
      setTimeout(displayClockDate, 1000); 
    }