const arr = []
document.querySelectorAll(".as-imagegrid-item").forEach((item) => {
  arr.push(item.innerText)
})
console.log(arr)

/* If we want to replace /nSupport from array we can use
 arr.push(item.innerText.replace("/nSupport", ""))*/
