function my_status() {
    if (st_now[2] == 1) {
        stNow += " [컨디션난조] ";
        woongbok = 1;
    }

    if (st_now[3] == 1) {
        stNow += " [질병] ";
        woongbok = 1;
    }


    if (st_now[4] == 1) {
        stNow += "<font color=red> [심각한질병] </font>";
        woongbok = 1;
    }
    if (st_now[5] == 1) {
        stNow += "<font color=red> [부상] </font>";
        woongbok = 1;
    }
    if (st_now[6] == 1) {
        stNow += " [미침] ";
        woongbok = 1;
    }
    if (st_now[7] == 1) {
        stNow += " [의욕부족] ";
        woongbok = 1;
    }
}

function my_status_img() {
    if (q[0] == 1 && st_now[5] == 1) {
        document.getElementById("minseong").src = './resource/img/etc/minseong2.gif';
    } else if (st_now[5] == 1) {
        document.getElementById("minseong").src = './resource/img/etc/minseong2o.gif';
    }
}