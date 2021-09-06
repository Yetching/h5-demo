const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < 5; i++) {
  (function (lockedIndex) {
    setTimeout(() => {
      console.log(arr[lockedIndex]);
    }, 1000);
  })(i);
}

for (var i = 0; i < 5; i++) {
  (function (lockedIndex) {
    setTimeout(() => {
      console.log(arr[lockedIndex]);
    }, 1000);
  })(i);
}

for (var i = 0; i < 5; i++) {
  setTimeout(
    (function (lockedIndex) {
      return function () {
        console.log(arr[lockedIndex]);
      };
    })(i),
    1000
  );
}
