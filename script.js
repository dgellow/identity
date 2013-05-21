clickImage = function (that, c) {
  if (that.classList.contains(c)) {
    that.classList.remove(c)
  } else {
    that.classList.add(c)
  }
}