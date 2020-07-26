let plyName = prompt("名前を入力してください");
let flag = true;
//プレイヤーデータ
let pb = 1;
let plyLv = 1;
let plyHp = 6;
let plyHpMax = 6;
let plyAtt = 1;
let plyHeal = 1;
let plyExp = 0;
let plyExpNext = 5;
let plyExpNeed = 5;
let plyImg = document.getElementById("plyImg");
let plyid = [0, 1, 2, 3, 4, 5, 6];
for (i = 0; i < 7; i++) {
  let plySt = document.getElementById(plyid[i]);
}
plySt0.textContent = plyName;
//プレイヤー回復
plyImg.addEventListener("mousedown", () => {
  if (flag) {
    plyImg.src = "img/playerC" + pb + ".png";
  }
});
plyImg.addEventListener("mouseup", () => {
  if (flag) {
    plyImg.src = "img/playerA" + pb + ".png";
    plyHp += plyHeal;
    if (plyHp > plyHpMax) {
      plyHp = plyHpMax;
    }
    plySt2.textContent = "HP:" + plyHp;
  }
});
//敵データ
let j = 0;
let eneLv = 1;
let eneHp = 10;
let eneHpMax = [10, 20, 40, 100, 200, 320, 450, 540, 710, 840, 1000];
let eneAtt = [2, 3, 5, 10, 12, 15, 20, 27, 35, 40, 50];
let eneKill = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let eneExp = [1, 2, 8, 10, 18, 26, 34, 45, 58, 80, 0];
let eneCnt = 5;
let eneCntMax = [5, 5, 3, 8, 4, 5, 4, 7, 4, 8, 5];
let eneName = [
  "スライム",
  "コウモリさん",
  "チュウチュウ",
  "スネーク",
  "ウルフ",
  "ゴブリン",
  "ゴースト",
  "ゾンビ",
  "火の玉",
  "くま",
  "魔王",
];
let eneImg = document.getElementById("eneImg");
let eneid = [0, 1, 2, 3, 4];
for (i = 0; i < 5; i++) {
  let eneSt = document.getElementById(eneid[i]);
}
//敵を攻撃
eneImg.addEventListener("mousedown", () => {
  if (flag) {
    eneImg.src = "img/enemyB" + j + ".png";
  }
});
eneImg.addEventListener("mouseup", () => {
  if (flag) {
    eneImg.src = "img/enemyA" + j + ".png";
    if (eneHp > 1) {
      eneHp -= plyAtt;
    } else {
      eneHp = eneHpMax[j];
      eneSt2.textContent = "HP:" + eneHp;
      eneKill[j]++;
      eneSt4.textContent = "倒した回数：" + eneKill[j];
      //経験値処理
      plyExp += eneExp[j];
      plySt5.textContent = "経験値：" + plyExp;
      plyExpNext -= eneExp[j];
      //レベルアップ処理
      if (plyExpNext < 1) {
        plyExpNext = plyLv * 20;
        plyLv++;
        plySt1.textContent = "レベル:" + plyLv;
        if (pb == 1) {
          plyHpMax = (plyLv - 1) * 3 + 6;
          plyHp = plyHpMax;
          plyAtt = (plyLv - 1) * 2 + 1;
          if (plyLv % 3 == 0) {
            plyHeal = plyLv / 3 + 1;
          }
        } else if (pb == 2) {
          plyHpMax = plyLv + 3;
          plyHp = plyHpMax;
          plyAtt = plyLv * 3;
          plyHeal = 1;
        } else {
          plyHpMax = plyLv + 6;
          plyHp = plyHpMax;
          plyAtt = plyLv;
          plyHeal = plyLv;
        }
      }
      //クリア処理
      if (j == 10) {
        eneImg.src = "img/clear.png";
        clearInterval(loop);
        flag = false;
        eneSec.textContent = "おめでとう！魔王を倒した！";
      }
    }
    plySt2.textContent = "HP:" + plyHp;
    plySt3.textContent = "攻撃力:" + plyAtt;
    plySt4.textContent = "回復魔法:" + plyHeal;
    plySt6.textContent = "次のレベルまでの経験値" + plyExpNext + "ポイント";
    eneSt2.textContent = "HP:" + eneHp;
  }
});
//敵が攻撃
let eneSec = document.getElementById("eneSec");
let loop = setInterval(() => {
  if (eneCnt > 0) {
    eneCnt--;
    eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒";
  } else {
    plyImg.src = "img/playerB" + pb + ".png";
    plyHp -= eneAtt[j];
    if (plyHp > 0) {
      plySt2.textContent = "HP:" + plyHp;
      eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒";
    } else {
      plyHp = 0;
      clearInterval(loop);
      flag = false;
      plySt2.textContent = "HP:" + plyHp;
      eneSec.textContent = "ゲームオーバー";
    }
    setTimeout(() => {
      if (flag) {
        eneCnt = eneCntMax[j];
        plyImg.src = "img/playerA" + pb + ".png";
        eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒";
      }
    }, 500);
  }
}, 1000);

//逃げる処理
let nige = document.getElementById("left");
nige.addEventListener("click", () => {
  if (flag) {
    if (j > 0) {
      j--;
      eneLv--;
      eneImg.src = "img/enemyA" + j + ".png";
      eneHp = eneHpMax[j];
      eneSt0.textContent = eneName[j];
      eneSt1.textContent = "レベル：" + eneLv;
      eneSt2.textContent = "HP：" + eneHp;
      eneSt3.textContent = "攻撃力：" + eneAtt[j];
      eneSt4.textContent = "倒した回数：" + eneKill[j];
    }
  }
});

//次のモンスター
let tugi = document.getElementById("right");
tugi.addEventListener("click", () => {
  if (flag) {
    if (j < 10) {
      j++;
      eneLv++;
      eneImg.src = "img/enemyA" + j + ".png";
      eneHp = eneHpMax[j];
      eneSt0.textContent = eneName[j];
      eneSt1.textContent = "レベル：" + eneLv;
      eneSt2.textContent = "HP：" + eneHp;
      eneSt3.textContent = "攻撃力：" + eneAtt[j];
      eneSt4.textContent = "倒した回数：" + eneKill[j];
    }
  }
});

//必殺技
let waza = document.getElementById("waza");
let ct = 30;
waza.addEventListener("click", () => {
  ct =30;
  if (flag && ct == 0) {
    if (pb == 1 || pb == 2) {
      eneHp -= plyLv * 5;
    } else {
      eneHp -= plyLv * 10;
    }
    if (eneHp < 0) {
      eneHp = eneHpMax[j];
      eneKill[j]++;
      eneSt4.textContent = "倒した回数：" + eneKill[j];
      //経験値処理
      plyExp += eneExp[j];
      plySt5.textContent = "経験値：" + plyExp;
      plyExpNext -= eneExp[j];
      //レベルアップ処理
      if (plyExpNext < 1) {
        plyExpNext = plyLv * 20;
        plyLv++;
        plySt1.textContent = "レベル:" + plyLv;
        if (pb == 1) {
          plyHpMax = (plyLv - 1) * 3 + 6;
          plyHp = plyHpMax;
          plyAtt = (plyLv - 1) * 2 + 1;
          if (plyLv % 3 == 0) {
            plyHeal = plyLv / 3 + 1;
          }
        } else if (pb == 2) {
          plyHpMax = plyLv + 3;
          plyHp = plyHpMax;
          plyAtt = plyLv * 3;
          plyHeal = 1;
        } else {
          plyHpMax = plyLv + 6;
          plyHp = plyHpMax;
          plyAtt = plyLv;
          plyHeal = plyLv;
        }
      }
      plySt2.textContent = "HP:" + plyHp;
      plySt3.textContent = "攻撃力:" + plyAtt;
      plySt4.textContent = "回復魔法:" + plyHeal;
      plySt6.textContent = "次のレベルまでの経験値" + plyExpNext + "ポイント";
    }
    
    eneSt2.textContent = "HP:" + eneHp;
    waza.textContent = "必殺技発動まで" + ct + "秒";
  }
});
let time = setInterval(() => {
      if (flag) {
        if (ct > 0) {
          ct--;
          waza.textContent = "必殺技発動まで" + ct + "秒";
        } else {
          if (pb == 1 || pb == 2) {
            ct = 30;
            waza.textContent = "必殺技発動可能（レベルの5倍のダメージ）";
          } else {
            ct = 30;
            waza.textContent = "必殺技発動可能（レベルの10倍のダメージ）";
          }
        }
      }
    }, 1000);

//ジョブチェンジ
let yusya = document.getElementById("yusya");
let kenshi = document.getElementById("kenshi");
let maho = document.getElementById("maho");
yusya.addEventListener("click", () => {
  if (flag) {
    pb = 1;
    plyImg.src = "img/playerA" + pb + ".png";
    plyHpMax = (plyLv - 1) * 3 + 6;
    plyAtt = (plyLv - 1) * 2 + 1;
    plyHeal = plyLv / 3 + 1;
    if (plyHpMax < plyHp) {
      plyHp = plyHpMax;
    }
    plySt2.textContent = "HP:" + plyHp;
    plySt3.textContent = "攻撃力:" + plyAtt;
    plySt4.textContent = "回復魔法:" + plyHeal;
    plySt6.textContent = "次のレベルまでの経験値" + plyExpNext + "ポイント";
  }
});
kenshi.addEventListener("click", () => {
  if (flag) {
    pb = 2;
    plyImg.src = "img/playerA" + pb + ".png";
    plyHpMax = plyLv + 3;
    plyAtt = plyLv * 3;
    plyHeal = 1;
    if (plyHpMax < plyHp) {
      plyHp = plyHpMax;
    }
    plySt2.textContent = "HP:" + plyHp;
    plySt3.textContent = "攻撃力:" + plyAtt;
    plySt4.textContent = "回復魔法:" + plyHeal;
    plySt6.textContent = "次のレベルまでの経験値" + plyExpNext + "ポイント";
  }
});
maho.addEventListener("click", () => {
  if (flag) {
    pb = 3;
    plyImg.src = "img/playerA" + pb + ".png";
    plyHpMax = plyLv + 6;
    plyAtt = plyLv;
    plyHeal = plyLv;
    if (plyHpMax < plyHp) {
      plyHp = plyHpMax;
    }
    plySt2.textContent = "HP:" + plyHp;
    plySt3.textContent = "攻撃力:" + plyAtt;
    plySt4.textContent = "回復魔法:" + plyHeal;
    plySt6.textContent = "次のレベルまでの経験値" + plyExpNext + "ポイント";
  }
});
