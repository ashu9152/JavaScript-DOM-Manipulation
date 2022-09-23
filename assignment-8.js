let lanuage_list = document.querySelectorAll("#SIvCob a")
for (i = 0; i < lanuage_list.length; i++) {
  if (i % 2 === 0) {
    lanuage_list[i].remove()
  }
}
console.log(lanuage_list)
