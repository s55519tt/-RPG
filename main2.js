let id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 1; i < 11; i++) {
  let b = document.getElementById(id[i]);
}
b1.textContent =
  "このゲームはいわゆるクリッカーゲームです。魔王を倒すことでゲームクリアとなります。";
b2.textContent = "敵をクリックで攻撃";
b3.textContent = "自分をクリックで回復";
b4.textContent = "上の必殺技の文字をクリックで必殺技";
b5.textContent = "逃げるをクリックで前の敵に戻る";
b6.textContent = "次のモンスターをクリックで次の敵に進む";
b7.textContent =
  "下のキャラをクリックでジョブチェンジ（ジョブチェンジしてもレベルは引き継がれる）";
b8.textContent = "左のキャラは勇者です。HPが高くステータスが上がりやすい。";
b9.textContent = "真ん中のキャラは剣士です。攻撃力が高いがHPと回復は低い。";
b10.textContent =
  "右のキャラは魔法使いです。HPと攻撃力はあまり高くないが回復が高く必殺技の威力が高い。";
