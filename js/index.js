const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $fordward = document.querySelector('#fordward')
const $barra = document.querySelector('#progress')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click',handleBackward)
$fordward.addEventListener('click',handleFordward)
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeupdate)
$barra.addEventListener('input', handleInput)

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al boton de play')
}

function handlePause(){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click al boton de pause')
}

function handleBackward(){
    $video.currentTime =  $video.currentTime - 10
    console.log('le diste -10 sgs', $video.currentTime)
}

function handleFordward(){
    $video.currentTime =  $video.currentTime + 10
    console.log('le diste +10 sgs', $video.currentTime)
}

function handleLoaded(){
    $barra.max = $video.duration
    console.log('ha cargado el video', video.duration) 
}

function handleTimeupdate(){
    $barra.value = $video.currentTime
    console.log('holi', $video.currentTime)
}

function handleInput(){
    $video.currentTime = $barra.value
    console.log($barra.value)
}
