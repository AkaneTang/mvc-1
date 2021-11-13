import "./app1.css"
import $ from "jquery"

const $button1 = $("#add1")
const $button2 = $("#minus1")
const $button3 = $("#mul2")
const $button4 = $("#divide2")
const $button5 = $("#reset")
const $number = $("#number")
const number_init = parseInt($number.text())
const n = localStorage.getItem("n")
$number.text(n || number_init)

$button1.on("click", () => {
  let n = parseInt($number.text())
  n += 1
  localStorage.setItem("n", n)
  $number.text(n)
})
$button2.on("click", () => {
  let n = parseInt($number.text())
  n -= 1
  localStorage.setItem("n", n)
  $number.text(n)
})
$button3.on("click", () => {
  let n = parseInt($number.text())
  n *= 2
  localStorage.setItem("n", n)
  $number.text(n)
})
$button4.on("click", () => {
  let n = parseInt($number.text())
  n /= 2
  localStorage.setItem("n", n)
  $number.text(n)
})
$button5.on("click", () => {
  $number.text(number_init)
  localStorage.setItem("n", number_init)
})
