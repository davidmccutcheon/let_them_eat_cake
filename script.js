function eatCake(str) {
    var seq = "";
    var seq2 = "";
    var max = 1;

    if (str.length > 1) {
        var first = str.substring(0, 1);
        var same = true;
    }
    for (var j = 1; j < str.length + 1; j++) {
        if (first !== str.substring(j - 1, j)) {
            same = false;
        }
    }
    if (same) {
        max = str.length;
    }

    for (var i = str.length - 1; i > 0; i--) {
        if (str.length % i == 0) {
            seq = str.substring(0, str.length/i);
            seq2 = str.substring(str.length/i, str.length/i + seq.length);

            if (seq == seq2 && max < i) {
                var tooGoodToBeTrue = false;
                for (var k = 1; k < str.length/i + 1; k++) {
                    seq = seq2;
                    seq2 = str.substring(k*str.length/i, k*str.length/i + seq.length);
                    if (seq !== seq2 && seq2.length > 0) {
                        tooGoodToBeTrue = true;
                    }
                }
                if (!tooGoodToBeTrue) {
                    max = i;
                }
            }
        }
    }

    return max;
}