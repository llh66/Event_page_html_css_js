//Made an array of artists 
const artists = [
    { picture: './images/artistImage0.jpeg', name: "ZAQ", date: "Sunday August 11th, 2024", location: "EXHIBITION HALL C - #136", time: "4:00 PM - 5:00PM", Genre: "Dance/Electronic/J-POP" },
    { picture: './images/artistImage1.jpeg', name: "TRUE", date: "Sunday August 11th, 2024", location: "EXHIBITION HALL C - AUTH 2", time: "2:30 PM - 3:30PM", Genre: "J-POP" },
    { picture: './images/artistImage2.jpeg', name: "DJ Naoh", date: "Saturday August 10th, 2024", location: "EXHIBITION HALL C - BLUE", time: "7:00 PM - 9:00M", Genre: "Dubstep/Hip-Hop" },
]
//loop to grab info on each artists
const getArtists = () => {
    for (let i = 0; i < artists.length; i++) {
        //outputs the information on html
        document.querySelector("#artist-section").innerHTML +=
            `<div id ="artist-container">
            <img src=${artists[i].picture} />
            <div id = "artist-about">
            <p class="artist-name">${artists[i].name}</p> 
            <p>Date: ${artists[i].date}</p>  
            <p>Location: ${artists[i].location}</p> 
           <p> Time: ${artists[i].time}</p> 
            <p>Genre: ${artists[i].Genre}</p> 
            </div>
            </div>
            `
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getArtists();
});