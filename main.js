function getSong(song) {
    const url = `https://api.lyrics.ovh/suggest/${song}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        const songDetails = data.data;
        let mySongDetails = [];
        for (let i = 0; i < 5; i++) {
            const mySong = songDetails[i];
            mySongDetails.push(mySong)
        }
        ;
        document.getElementById('song-1').innerText = mySongDetails[0].title;
        document.getElementById('artist-1').innerText = mySongDetails[0].artist.name;
        document.getElementById('song-2').innerText = mySongDetails[1].title;
        document.getElementById('artist-2').innerText = mySongDetails[1].artist.name;
        document.getElementById('song-3').innerText = mySongDetails[2].title;
        document.getElementById('artist-3').innerText = mySongDetails[2].artist.name;
        document.getElementById('song-4').innerText = mySongDetails[3].title;
        document.getElementById('artist-4').innerText = mySongDetails[3].artist.name;
        document.getElementById('song-5').innerText = mySongDetails[4].title;
        document.getElementById('artist-5').innerText = mySongDetails[4].artist.name;


         
    })
}



function clickToSearch() {

    const songQuery = document.getElementById('search-box').value;
    if (songQuery == '' || input == null){
        alert ('Enter a song name or artist name');
        return false;
    }
    else{
    getSong(songQuery);
    setTimeout(() => {
        document.getElementById('search-result').style.display = 'block';
    }, 1000);
    }
    
    document.getElementById("lyrics-field").innerHTML = null;
    document.getElementById('lyrics-title').innerHTML = null;
    document.getElementById('search-box').value = null;
}



function getLyrics(id) {
    const lyricsHeader = document.getElementById('lyrics-title');
    const artistName = document.getElementById(`artist-${id}`).innerText;
    const songName = document.getElementById(`song-${id}`).innerText;
    lyricsHeader.innerText = `${songName} - ${artistName}`;
    document.getElementById('search-result').style.display = 'none';
    document.getElementById('lyrics-field').style.display = 'block';
    // console.log(songName);
    const url = `https://api.lyrics.ovh/v1/${artistName}/${songName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const ReceivedLyrics = data.lyrics;
        const lyrics = document.createElement('p');
        lyrics.innerText = ReceivedLyrics;
        document.getElementById('lyrics-field').appendChild(lyrics);
        
        
    })
}


document.addEventListener('click', function(e) { 
    if(document.activeElement.toString() == '[object HTMLButtonElement]'){ 
       document.activeElement.blur(); 
    } 
   })

   const input = document.getElementById("search-box");
    
input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
                document.getElementById("search-btn").click();
        }
    });