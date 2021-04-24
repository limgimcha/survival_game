

setInterval(function () {
    document.getElementById("minseong-hgr").innerHTML = "허기: " + minseong.hgr + ' / ' + minseong.maxHgr;
    document.getElementById("minseong-thr").innerHTML = "갈증: " + minseong.thr + ' / ' + minseong.maxThr;
    document.getElementById("minseong-st").innerHTML = "상태: " + stNow;
    document.getElementById("material-wood").innerHTML = "나무: " + mat[0];
    document.getElementById("material-mot").innerHTML = "쇠붙이: " + mat[1];
    document.getElementById("minseong-str").innerHTML = "스트레스: " + minseong.str + ' / ' + minseong.maxStr;
    document.getElementById("today").innerHTML = "오늘은.. " + today + " 일 째..";
    document.getElementById("itemInfo0").innerHTML = "<br>이름: " + myInventory[0].name + "<br>허기:" + myInventory[0].hgr + "<br>갈증:" + myInventory[0].thr + "<br>";
    document.getElementById("itemInfo1").innerHTML = "<br>이름: " + myInventory[1].name + "<br>허기:" + myInventory[1].hgr + "<br>갈증:" + myInventory[1].thr + "<br>";
    document.getElementById("itemInfo2").innerHTML = "<br>이름: " + myInventory[2].name + "<br>허기:" + myInventory[2].hgr + "<br>갈증:" + myInventory[2].thr + "<br>";
    document.getElementById("itemInfo3").innerHTML = "<br>이름: " + myInventory[3].name + "<br>허기:" + myInventory[3].hgr + "<br>갈증:" + myInventory[3].thr + "<br>";
    document.getElementById("itemInfo4").innerHTML = "<br>이름: " + myInventory[4].name + "<br>허기:" + myInventory[4].hgr + "<br>갈증:" + myInventory[4].thr + "<br>";
    document.getElementById("itemInfo5").innerHTML = "<br>이름: " + myInventory[5].name + "<br>허기:" + myInventory[5].hgr + "<br>갈증:" + myInventory[5].thr + "<br>";
    document.getElementById("itemInfo6").innerHTML = "<br>이름: " + myInventory[6].name + "<br>허기:" + myInventory[6].hgr + "<br>갈증:" + myInventory[6].thr + "<br>";
    document.getElementById("itemInfo7").innerHTML = "<br>이름: " + myInventory[7].name + "<br>허기:" + myInventory[7].hgr + "<br>갈증:" + myInventory[7].thr + "<br>";
    document.getElementById("itemInfo8").innerHTML = "<br>이름: " + myInventory[8].name + "<br>허기:" + myInventory[8].hgr + "<br>갈증:" + myInventory[8].thr + "<br>";
    document.getElementById("itemInfo9").innerHTML = "<br>이름: " + myInventory[9].name + "<br>허기:" + myInventory[9].hgr + "<br>갈증:" + myInventory[9].thr + "<br>";

    if (minseong.hgr >= 0) {

        document.getElementById("hgr-bar").style.width = minseong.hgr * 22 / minseong.maxHgr + '%';
    } else {
        document.getElementById("hgr-bar").style.width = 0;
    }

    if (minseong.thr >= 0) {

        document.getElementById("thr-bar").style.width = minseong.thr * 22 / minseong.maxThr + '%';
    } else {
        document.getElementById("thr-bar").style.width = 0;
    }

    if (minseong.str >= 0) {

        document.getElementById("str-bar").style.width = minseong.str * 22 / minseong.maxStr + '%';
    } else {
        document.getElementById("str-bar").style.width = 0;
    }

    if (minseong.hgr > minseong.maxHgr) {
        minseong.hgr = minseong.maxHgr;
    }
    if (minseong.thr > minseong.maxThr) {
        minseong.thr = minseong.maxThr;
    }
    if (minseong.str > minseong.maxStr) {
        minseong.str = minseong.maxStr;
    }
    if (minseong.str < 0) {
        minseong.str = 0;
    }
    if (today > 200) {
        alert("베타버전 끝.");
    }
    my_status_img();
    if (woongbok == 0) {
        my_status();
    }
    stress();
    gameOver();


}, 10)