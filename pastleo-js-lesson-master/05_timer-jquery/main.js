$(document).ready(function() {
    let cnt = 0, running = false, interval;
    $('button').click(function() {
        if (running){
            $('#running').slideUp();
            clearInterval(interval)
            $('button').text('start')
            running = false
        } else {
            $('#running').slideDown();
            interval = setInterval(function(){
                cnt = cnt + 1
                $('#seconds').text(cnt)
                $('.dots div:last-child').prependTo($('.dots'))
            }, 1000)
            $('button').text('stop')
            running = true
        }
    })
})	