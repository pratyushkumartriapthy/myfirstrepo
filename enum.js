var x;
(function (x) {
    x[x["up"] = 1] = "up";
    x[x["down"] = 2] = "down";
    x[x["left"] = 3] = "left";
    x[x["right"] = 4] = "right";
})(x || (x = {}));
console.log(x.up);
console.log(x.down);
console.log(x.right);
console.log(x.left);
