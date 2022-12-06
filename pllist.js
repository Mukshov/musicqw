const music = new Audio('vande.mp3');

// create Array 

const songs = [
  {
    id:"1",
    songName: 'Ayaulim<br><div class="subtitle">Qurmash Mahanov</div>',
    poster: "img/qazaq/1.jpg",
},
{
  id:"2",
  songName: 'Kolenke <br><div class="subtitle"> dudeontheguitar</div>',
  poster: "img/qazaq/2.jpg",
},
    // all object type 
    {
        id:"3",
        songName: 'Zita <br><div class="subtitle"> Kilemger</div>',
        poster: "img/qazaq/3.jpg",
    },
    {
        id:"4",
        songName: 'Huzuzn<br><div class="subtitle">Jeltoksan</div>',
        poster: "img/qazaq/4.jpg",
    },
    {
        id:"5",
        songName: ' Mahabatym<br><div class="subtitle">Moldanazar</div>',
        poster: "img/qazaq/5.jpg",
    },
    {
        id:"6",
        songName: 'Zhauap Barma? <br><div class="subtitle">Moldanazar</div>',
        poster: "img/qazaq/6.jpg",
    },
    {
        id:"7",
        songName: 'Alystama<br><div class="subtitle">Moldanazar</div>',
        poster: "img/qazaq/7.jpg",
    },
    {
        id:"8",
        songName: 'Zhapyragim <br><div class="subtitle">Kosumuse</div>',
        poster: "img/qazaq/8.jpg",
    },
    {
        id:"9",
        songName: 'Men Seni Suyemin <br><div class="subtitle">Son Pascal</div>',
        poster: "img/qazaq/9.jpg",
    },
    {
        id:"10",
        songName: 'Beinen <br><div class="subtitle">Ayau</div>',
        poster: "img/qazaq/10.jpg",
    },
    {
        id:"11",
        songName: 'Meili <br><div class="subtitle">Mars 3D</div>',
        poster: "img/qazaq/11.jpg",
    },
    {
        id:"12",
        songName: 'Suyemin <br><div class="subtitle">Rinat</div>',
        poster: "img/qazaq/12.jpg",
    },
    {
        id:"13",
        songName: 'Darumen<br><div class="subtitle">Darkhan Juzz</div>',
        poster: "img/qazaq/13.jpg",
    },
    {
        id:"14",
        songName:'Zhartarap<br><div class="subtitle">dudeontheguitar</div>',
        poster: "img/qazaq/14.jpg",
    },
    {
      id:"15",
      songName: 'Uide <br><div class="subtitle">Darkhan Juzz</div>',
      poster: "img/qazaq/15.jpg",
  },
  {
    id:"16",
    songName: 'Oralma Qashkyn <br><div class="subtitle">Taspay</div>',
    poster: "img/qazaq/16.jpg",
},
{
    id:"17",
    songName: 'Ainalaiyn <br><div class="subtitle">Yeskhat Zharkin & AG </div>',
    poster: "img/qazaq/17.jpg",
},

]


Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
  element.getElementsByTagName('img')[0].src = songs[i].poster;
  element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})




Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})



let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
  if (music.paused || music.currentTime <=0) {
      music.play();
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');
      wave.classList.add('active2');
  } else {
      music.pause();
      masterPlay.classList.add('bi-play-fill');
      masterPlay.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
  }
} )



function makeAllPlays() {
  Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.classList.add('bi-play-circle-fill');
    element.classList.remove('bi-pause-circle-fill');
  });
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/qazaq/${index}.mp3`;
        download_music.href = `audio/qazaq/${index}.mp3`;
        poster_master_play.src =`img/qazaq/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/qazaq/${index}.mp3`;
    poster_master_play.src =`img/qazaq/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/qazaq/${index}.mp3`;
    poster_master_play.src =`img/qazaq/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})