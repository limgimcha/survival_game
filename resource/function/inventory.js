var i = 0;
var getItemId = 0;
var cI = 0;

//dir0 음식 dir1 재료 dir2 무기 dir3 치료약
var default_item = {
    name: 'default',
    hgr: 0,
    thr: 0,
    id: 0,
    dir: 0,
    str: 0
};


var myInventory = [{
    name: 'default',
    hgr: 0,
    thr: 0,
    id: 0,
    dir: 0,
    str: 0
}, {
    name: 'default',
    hgr: 0,
    thr: 0,
    id: 0,
    dir: 0,
    str: 0
}, {
    name: 'default',
    hgr: 0,
    thr: 0,
    id: 0,
    dir: 0, str: 0
}, {
    name: 'default',
    hgr: 0,
    thr: 0,
    id: 0,
    dir: 0,
    str: 0
}, {
    name: 'default',
    hgr: 0,
    thr: 0,
    id: 0,
    dir: 0,
    str: 0
}, {
    name: 'default',
    hgr: 0,
    thr: 0,
    id: 0,
    dir: 0, str: 0
}, {
    name: 'default',
    hgr: 0,
    thr: 0,
    id: 0,
    dir: 0, str: 0
}, {
    name: 'default',
    hgr: 0,
    thr: 0,
    id: 0,
    dir: 0,
    str: 0
}, {
    name: 'default',
    hgr: 0,
    thr: 0,
    id: 0,
    dir: 0,
    str: 0
}, {
    name: 'default',
    hgr: 0,
    thr: 0,
    id: 0,
    dir: 0,
    str: 0
}];


function getItem(getItemId) {

    var g = getItemId;

    if (i < 10 && myInventory[i].id == 0) {
        myInventory[i] = item[getItemId];
        inventory();
        i++;


    } else {

        for (var v = 0; v < 10; v++) {
            if (myInventory[v].id == 0) {
                i = v;
                myInventory[i] = item[getItemId];
                inventory();
                i++;

            } else {
            }
        }

    }


}

function inventory() {

    if (i == 0) {
        document.getElementById("i0").src = "./resource/img/item/" + getItemId + ".png"
    } else if (i == 1) {
        document.getElementById("i1").src = "./resource/img/item/" + getItemId + ".png"

    } else if (i == 2) {
        document.getElementById("i2").src = "./resource/img/item/" + getItemId + ".png"

    } else if (i == 3) {
        document.getElementById("i3").src = "./resource/img/item/" + getItemId + ".png"

    } else if (i == 4) {
        document.getElementById("i4").src = "./resource/img/item/" + getItemId + ".png"

    } else if (i == 5) {
        document.getElementById("i5").src = "./resource/img/item/" + getItemId + ".png"

    } else if (i == 6) {
        document.getElementById("i6").src = "./resource/img/item/" + getItemId + ".png"

    } else if (i == 7) {
        document.getElementById("i7").src = "./resource/img/item/" + getItemId + ".png"

    } else if (i == 8) {
        document.getElementById("i8").src = "./resource/img/item/" + getItemId + ".png"

    } else if (i == 9) {
        document.getElementById("i9").src = "./resource/img/item/" + getItemId + ".png"

    }

}

function aband() {
    if (cI == 0) {
        document.getElementById("i0").src = "./resource/img/inventory/0.png"
        myInventory[0] = {
            name: 'default',
            hgr: 0,
            thr: 0,
            id: 0,
            dir: 0, str: 0
        }
    }
    else if (cI == 1) {
        document.getElementById("i1").src = "./resource/img/inventory/0.png"
        myInventory[1] = {
            name: 'default',
            hgr: 0,
            thr: 0,
            id: 0,
            dir: 0, str: 0
        }
    }
    else if (cI == 2) {
        document.getElementById("i2").src = "./resource/img/inventory/0.png"
        myInventory[2] = {
            name: 'default',
            hgr: 0,
            thr: 0,
            id: 0,
            dir: 0, str: 0
        }
    }
    else if (cI == 3) {
        document.getElementById("i3").src = "./resource/img/inventory/0.png"
        myInventory[3] = {
            name: 'default',
            hgr: 0,
            thr: 0,
            id: 0,
            dir: 0, str: 0
        }
    }
    else if (cI == 4) {
        document.getElementById("i4").src = "./resource/img/inventory/0.png"
        myInventory[4] = {
            name: 'default',
            hgr: 0,
            thr: 0,
            id: 0,
            dir: 0, str: 0
        }
    }
    else if (cI == 5) {
        document.getElementById("i5").src = "./resource/img/inventory/0.png"
        myInventory[5] = {
            name: 'default',
            hgr: 0,
            thr: 0,
            id: 0,
            dir: 0, str: 0
        }
    }
    else if (cI == 6) {
        document.getElementById("i6").src = "./resource/img/inventory/0.png"
        myInventory[6] = {
            name: 'default',
            hgr: 0,
            thr: 0,
            id: 0,
            dir: 0, str: 0
        }
    }
    else if (cI == 7) {
        document.getElementById("i7").src = "./resource/img/inventory/0.png"
        myInventory[7] = {
            name: 'default',
            hgr: 0,
            thr: 0,
            id: 0,
            dir: 0, str: 0
        }
    }
    else if (cI == 8) {
        document.getElementById("i8").src = "./resource/img/inventory/0.png"
        myInventory[8] = {
            name: 'default',
            hgr: 0,
            thr: 0,
            id: 0,
            dir: 0, str: 0
        }
    }
    else if (cI == 9) {
        document.getElementById("i9").src = "./resource/img/inventory/0.png"
        myInventory[9] = {
            name: 'default',
            hgr: 0,
            thr: 0,
            id: 0,
            dir: 0, str: 0
        }
    }

}

function equip() {
    if (myInventory[cI].dir == 0) {
        minseong.hgr += myInventory[cI].hgr;
        minseong.thr += myInventory[cI].thr;
        minseong.str -= myInventory[cI].str;
    }
    else if (myInventory[cI].dir == 2) {
        if (q[1] == 1) {
            minseong.hgr -= myInventory[cI].hgr;
            text = "아아아아악! 어떤 녀석이 숨어있었다. 내가 가진 둔기를 보고 소스라치게 놀라며 도망쳤다. 벙커에 들어오지 못하게 막을 방법이 없을까?";
            dialog();
            dialogText();
        } else {
            minseong.hgr -= myInventory[cI].hgr;
            text = "무기를 들고 벙커를 둘러보았지만, 아무도 없는 것 같다. 아무쪼록 조심해야겠다.";
            dialog();
            dialogText();
        }
    }
    else if (myInventory[cI].dir == 3) {
        minseong.str -= myInventory[cI].str;
        st_now[7] = 0;
        st_now[6] = 0;
        st_now[5] = 0;
        st_now[4] = 0;
        st_now[3] = 0;
        st_now[2] = 0;
        alert("역시 만병통치약!");
        stNow = '';

    }
    aband();


}
