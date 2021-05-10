const size = 9;
const countmax = 5;
let cPlayer; //CPlayer(0 is O , 1 is X);
let l_played = [],
  l_win = [];
let inGame = false;
let mode = 0;
let AI = false;
let pwin = cPlayer;
let table = document.getElementById("table");
let row = document.getElementsByClassName("row");
let square = document.getElementsByClassName("square");

function getOptions() {
  if (document.getElementById("pX").checked == true) {
    cPlayer = 1;
  } else {
    cPlayer = 0;
  }
  if (document.getElementById("t0").checked == true) {
    AI = true;
  } else {
    AI = false;
  }

  //create table
  (l_played = []), (l_win = []);

  table.innerHTML = "";
  for (r = 0; r < size; r++) {
    table.innerHTML += '<tr class="row"></tr>';
    for (c = 0; c < size; c++) {
      let div = '<div class="square" onClick="Click(id)"></div>';
      row.item(r).innerHTML += '<td class="col">' + div + "</td>";
      square.item(c + r * size).setAttribute("id", (c + r * size).toString());
      square.item(c + r * size).setAttribute("player", "-1");
    }
  }
  inGame = true;
  document.getElementById("optionDlg").style.display = "none";
}
//play game
let move = 0;
function Click(id) {
  if (!inGame) return;
  let square = document.getElementsByClassName("square");
  let pos = parseInt(id);
  if (square.item(pos).getAttribute("player") != "-1") return;
  if (cPlayer == 1) {
    square.item(pos).innerHTML += '<span class="x">x</span>';
  } else {
    square.item(pos).innerHTML += '<span class="o">o</span>';
  }
  move++;
  square.item(pos).setAttribute("player", cPlayer.toString());
  pwin = cPlayer;
  if (!AI) {
    if (cPlayer == 0) {
      cPlayer = 1;
    } else {
      cPlayer = 0;
    }
  }
  if (WinGame()) {
    let mess = 'Player with "X" win';
    if (pwin == 0) mess = 'Player with "O" win';
    setTimeout(function () {
      alert(mess);
    }, 500);
    inGame = false;
  }
}
//restart
function restart() {
  if (move > 0) {
    let response = confirm("Are you sure you want to start over?");
  }
  setTimeout(function () {
    document.getElementById("optionDlg").style.display = "block";
  }, 1000);
  move = 0;
}
//Min Max
function maxab(a, b) {
  if (a > b) return a;
  else return b;
}
function minab(a, b) {
  if (a < b) return a;
  else return b;
}
//GetBoard save player
function GetBoard() {
  let TBoard = [];
  let sqr = document.getElementsByClassName("square");
  for (i = 0; i < size * size; i++)
    TBoard.push(parseInt(sqr.item(i).getAttribute("player")));
  return TBoard;
}
//Win
function WinGame() {
  let result = false;
  let Board = GetBoard();
  for (x = 0; x < size; x++) {
    for (y = 0; y < size; y++) {
      if (
        winHor(x, y, Board) ||
        winVer(x, y, Board) ||
         winCross1(x, y, Board) 
         ||winCross2(x, y, Board)
      ) {
        let square = document.getElementsByClassName("square");
        for (i = 0; i < l_win.length; i++) {
          square.item(l_win[i]).style.backgroundColor = "#FF0";
        }
        result = true;
      }
    }
  }
  return result;
}

function winHor(x, y, Board) {
  l_win = [];
  let count = 0;
  let player = Board[x + y * size];
  if (player == -1) return false;

  for (i = x; i < size; i++) {
    let p = Board[i + y * size];
    if (p == player && p != -1) {
      count++;
      l_win.push(i + y * size);
    } else {
      break;
    }
  }
  if (count >= countmax) {
    return true;
  }
  return false;
}

function winVer(x, y, Board) {
  l_win = [];
  let count = 0;
  let player = Board[x + y * size];
  if (player == -1) return false;
  for (i = y; i < size; i++) {
    let p = Board[x + i * size];
    if (p == player && p != -1) {
      count++;
      l_win.push(x + i * size);
    }else {
      break;
    }
  }
  if (count >= countmax) {
    return true;
  }
  return false;
}

function winCross1(x, y, Board) {
  l_win = [];
  if (x > size - countmax || y < countmax - 1) return false;
  let count = 0;
  let player = Board[x + y * size];
  if (player == -1) return false;
  for (i = 0; i <= minab(size - x, y); i++) {
    let p = Board[x + i + (y - i) * size];
    if (p == player && p != -1) {
      count++;
      l_win.push(x + i + (y - i) * size);
    }else {
      break;
    }
  }
  if (count >= countmax) {
    return true;
  }
  return false;
}

function winCross2(x, y, Board) {
  l_win = [];
  if (x > size - countmax || y > size - countmax) return false; 
  let count = 0;
  let player = Board[x + y * size];
  if (player == -1) return false;
  for (i = 0; i < minab(size - x, size - y); i++) {
    let p = Board[x + i + (y + i) * size];
    console.log(i +" "+ x +' '+ y+" "+p);
    if (p == player && p != -1) {
      count++;
      l_win.push(x + i + (y + i) * size);
    }else {
      break;
    }
  }
  if (count >= countmax) {
    return true;
  }
  return false;
}


                              