window.addEventListener('DOMContentLoaded', function(){

    const statusDiv = document.querySelector('.status')   //可以先定義變數來縮短重複の程式碼
    const statusSpan = document.querySelector('.status span')

    document.getElementById('on').addEventListener('click', function(){
      document.body.classList.add('light');

      statusDiv.classList.remove('off')   //改變顏色用classList
      statusDiv.classList.add('on')
      statusSpan.textContent = '開'   //改變文字用textContent

    })
    document.getElementById('off').addEventListener('click', function(){
      document.body.classList.remove('light')

      statusDiv.classList.remove('on')
      statusDiv.classList.add('off')
      statusSpan.textContent = '關'

    })
})