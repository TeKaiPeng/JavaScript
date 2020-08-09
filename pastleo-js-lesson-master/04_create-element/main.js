window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('create-element').addEventListener('click', function() {
       
        const timeDiv = document.createElement('div') //定義 timeDiv 是用 document.createElement 創建一個區域
        timeDiv.className = 'time'   //然後他的class名稱是'time'
        const currentTime = new Date();     //定義 currentTime 是新增日期，
        timeDiv.textContent = currentTime.toString()     //再把他轉成字串

        document.querySelector('.right').appendChild(timeDiv) //把他印在id="right"的區域，appendChild就是放到right的最後一個
    })

    document.getElementById('reset-inner-html').addEventListener('click', function() {
        document.querySelector('.right').innerHTML = '<div class="title">DOM practice...</div>'
    })
    
    document.getElementById('remove').addEventListener('click', function() {
        const lastTime = document.querySelector('.right .time:last-child')
        
        if (lastTime !== null){
            lastTime.remove()
        }
    })

    document.getElementById('create-element-insert-adjacent').addEventListener('click', function(){
        const timeDiv = document.createElement('div') //定義 timeDiv 是用 document.createElement 創建一個區域
        timeDiv.className = 'time'   //然後他的class名稱是'time'
        const currentTime = new Date();     //定義 currentTime 是新增日期，
        timeDiv.textContent = currentTime.toString()     //再把他轉成字串
    
    document.querySelector('.title').insertAdjacentElement('afterend', timeDiv)//把上面那一坨塞在它下面，要學會去MDNJS找唷👍

    })
})
