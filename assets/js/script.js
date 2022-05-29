function show(val) {
    document.getElementById("ans").value = document.getElementById("ans").value + val
}

function showClear() {
    document.getElementById("ans").value = ""
}

function showEqual() {
    var text = document.getElementById("ans").value
    var result = eval(text)
    document.getElementById("ans").value = result
}
