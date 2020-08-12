$(document).ready(function() {      //先讀取頁面
    let cnt = 0, running = false, interval;     //起始是零秒，沒有再跑，宣告一個interval
    $('button').click(function() {      //抓到button這個按鈕之後，點擊，跑下面那一坨
        if (running){       //如果正在跑的話，跑底下那坨
            $('#running').slideUp();
            clearInterval(interval)
            $('button').text('start')       //這邊按鈕要顯示start
            running = false         //先更改他的狀態
        } else {        //一開始進入頁面會先在這邊，因為一進入頁面，他並沒有正在跑！
            $('#running').slideDown();
            interval = setInterval(function(){
                cnt = cnt + 1       //這邊表示原本的cnt會+1
                $('#seconds').text(cnt)     //這邊秀出加完之後的結果
                $('.dots div:last-child').prependTo($('.dots'))
            }, 1000)
            $('button').text('stop')    //這邊按鈕要顯示stop
            running = true      //按完按鈕之後，最後要更改狀態
        }
    })
})	

// 分隔線 // 

window.addEventListener('DOMContentLoaded', function() {
    // let cnt = 0, running = false, interval;
    document.getElementById('button').addEventListener('click', function() {
        if (running){
            document.getElementById('#running').
        }
    })
})