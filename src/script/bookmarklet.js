(function() {
  console.log('scroll start ======================');
  stopButton();
  let height = 0;
  let retryAttempt = 0;
  const scroller = setInterval(() => {
    if (height !== document.body.scrollHeight) {
      height = document.body.scrollHeight;
      window.scrollTo(0, document.body.scrollHeight);
      retryAttempt = 0;
    } else if (retryAttempt < 3) {
      retryAttempt++;
    } else {
      stopScrolling();
    }
  }, 700);

  function stopButton() {
    let button = document.createElement('button');
    button.innerHTML = 'Stop Scrolling';
    button.id = 'stopScrollBottomButton';
    button.style.backgroundColor = 'red';
    button.style.color = 'white';
    button.style.fontSize = '18px';
    button.style.padding = '10px 15px';
    button.style.position = 'fixed';
    button.style.bottom = '0px';
    button.style.left = '20px';
    button.style.zIndex = '100001';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '5px';

    button.addEventListener('click', function() {
      stopScrolling();
    });

    let body = document.querySelector('body');
    body.appendChild(button);
  }

  function stopScrolling() {
    clearInterval(scroller);
    console.log('scroll end ========================');
    let button = document.querySelector('#stopScrollBottomButton');
    button.parentNode.removeChild(button);
  }
})();
