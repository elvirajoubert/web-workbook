var total = 0;
var limit = 10;
var i;

function test() {
    for (i = 0; i < limit; i++) {

        total += i;
    }

    console.log(total);

    return total;
}
test();