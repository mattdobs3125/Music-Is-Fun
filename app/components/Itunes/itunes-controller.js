import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService();

function drawSongs(songs) {
  console.log(songs);
  // console.log(songs)
  
  let template = "";
  for (let i = 0; i < songs.length; i++) {
    const song = songs[i];
    // style="background-color:#42a5f5"
    // <div style="outline: 1px solid black" class="col-3">
    template += `
    <div class="panel panel-default">
    <div class="panel panel-heading">
    <img src="${song.albumArt}" alt="">   
    </div>
    <div class="panel-body">
    <audio controls class="audio">
    <source src="${song.preview}"/>
    </audio> 
    <h4 class="well"> Song Title: ${song.title}</h4>
    <h3 class="price">Album Price: ${song.price}</h3>
    <h4 class="well"> Artist: ${song.artist}</h4>
    </div>
    </div>
    `;
    document.getElementById("song-temp").innerHTML = template;
  }
  
    
    
    
}

//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $("#get-music-button").text("LOADING....");
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results);
      //changes button back to GET MUSIC once songs are loaded
      $("#get-music-button").text("GET MUSIC");
    });
  }
}

export default ItunesController;
