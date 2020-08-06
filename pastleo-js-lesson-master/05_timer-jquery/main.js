$(document).ready(function() {
    let cnt = 0, running = false, interval;
    $('button').click(function() {
        if (running){
            clearInterval(interval)
            $('button').text('start')
            running = false
        } else {
            interval = setInterval(function(){
                cnt = cnt + 1
                $('#seconds').text(cnt)
            }, 100)
            $('button').text('stop')
            running = true
        }
    })
})