document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
      image.addEventListener('click', function(event) {
        event.preventDefault();
        const href = image.getAttribute('href');
        alert('Clicked! Href: ' + href);
      });
    });
    const girl = document.querySelectorAll('.girl');

  girl.forEach(function(item) {
    item.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      rotateImage(item);
    });
});

function rotateImage(img) {
  let currentRotation = img.dataset.rotation ? parseInt(img.dataset.rotation) : 0;
  currentRotation = (currentRotation + 90) % 360;
  img.style.transform = 'rotate(' + currentRotation + 'deg)';
  img.dataset.rotation = currentRotation;
}

  function addHref(link) {
    link.setAttribute("href", "https://example.com");
  }

  function removeHref(link) {
    link.removeAttribute("href");
  }


const links = document.querySelectorAll('.link');
  links.forEach(link => {
    link.addEventListener('mouseover', function() {
      const spanId = this.querySelector('span').id;
      const text = document.getElementById(spanId).innerText;
      this.setAttribute('href', text);
    });

    link.addEventListener('mouseout', function() {
      this.removeAttribute('href');
    });
  });

  /// task 3

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const age = document.getElementById('age');

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const ageValue = age.value.trim();

    if (!isValidName(firstNameValue) || !isValidName(lastNameValue)) {
      markInvalidField(firstName);
      markInvalidField(lastName);
    } else if (!isValidAge(ageValue)) {
      markInvalidField(age);
    } else if(isValidName(firstNameValue) && isValidName(lastNameValue) && isValidAge(ageValue)) {
      clearInvalidField(firstName);
      clearInvalidField(lastName);
      clearInvalidField(age);
      displayMessage(firstNameValue, lastNameValue, ageValue);
    }
  }

  function isValidName(name) {
    return /^[A-Za-z\s]{1,50}$/.test(name);
  }

  function isValidAge(age) {
    return !isNaN(age) && age >= 0;
  }

  function markInvalidField(field) {
    field.classList.add('invalid');
  }

  function clearInvalidField(field) {
    field.classList.remove('invalid');
  }

  function displayMessage(firstName, lastName, age) {
    const demoDiv = document.getElementById('demo');
    demoDiv.innerHTML = `
      <p>First name: ${firstName}</p>
      <p>Last name: ${lastName}</p>
      <p>Age: ${age}</p>
    `;
  }


    const btn = document.querySelector('.main-btn');

    let status = 0;

    btn.addEventListener('click', function() {
      status++;
      if(status > 2) {
        status = 0;
      }
      updateStatus();
    });

    function updateStatus () {
      switch (status) {
        case 0 :
          setStatus('Update', 'green');
          break;
        case 1 :
          setStatus('Delete', 'red');
          break;
        case 2:
          setStatus('Pending', 'orange');
          break;
      }
    }

    function setStatus(text, color) {
      btn.textContent = text;
      btn.style.backgroundColor = color;
    }





  let board = null;
  const game = new Chess();
  const moveHistory = document.getElementById('move-history');
  let moveCount = 1;
  let userColor = 'w';


  const makeRandomMove = () => {
    const possibleMoves = game.moves();

    if (game.game_over()) {
      alert("Checkmate!");
    } else {
      const randomIdx = Math.floor(Math.random() * possibleMoves.length);
      const move = possibleMoves[randomIdx];
      game.move(move);
      board.position(game.fen());
      recordMove(move, moveCount);
      moveCount++;
    }
  };


  const recordMove = (move, count) => {
    const formattedMove = count % 2 === 1 ? `${Math.ceil(count / 2)}. ${move}` : `${move} -`;
    moveHistory.textContent += formattedMove + ' ';
    moveHistory.scrollTop = moveHistory.scrollHeight;
  };


  const onDragStart = (source, piece) => {
    return !game.game_over() && piece.search(userColor) === 0;
  };


  const onDrop = (source, target) => {
    const move = game.move({
      from: source,
      to: target,
      promotion: 'q',
    });

    if (move === null) return 'snapback';

    window.setTimeout(makeRandomMove, 250);
    recordMove(move.san, moveCount);
    moveCount++;
  };


  const onSnapEnd = () => {
    board.position(game.fen());
  };


  const boardConfig = {
    showNotation: true,
    draggable: true,
    position: 'start',
    onDragStart,
    onDrop,
    onSnapEnd,
    moveSpeed: 'fast',
    snapBackSpeed: 500,
    snapSpeed: 100,
  };


  board = Chessboard('board', boardConfig);
  document.querySelector('.play-again').addEventListener('click', () => {
    game.reset();
    board.start();
    moveHistory.textContent = '';
    moveCount = 1;
    userColor = 'w';
  });


  document.querySelector('.set-pos').addEventListener('click', () => {
    const fen = prompt("Enter the FEN notation for the desired position!");
    if (fen !== null) {
      if (game.load(fen)) {
        board.position(fen);
        moveHistory.textContent = '';
        moveCount = 1;
        userColor = 'w';
      } else {
        alert("Invalid FEN notation. Please try again.");
      }
    }
  });


  document.querySelector('.flip-board').addEventListener('click', () => {
    board.flip();
    makeRandomMove();
    userColor = userColor === 'w' ? 'b' : 'w';
  });
  });

