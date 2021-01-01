
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('button')! as NodeListOf<HTMLButtonElement>;
    let display = (document.getElementById('inp')! as HTMLInputElement)

    const initvalue = 0

    display.value = initvalue.toString()

    let total: number = 0;
    let operator: string = '';
    let number: string = '';


    elements.forEach(el => el.addEventListener('click', (e: any) => {
        if (isNaN(+e.target.innerText)) {
            let value = e.target.innerText;

            if (value === 'AC') {
                display.value = initvalue.toString()
                total = 0
                number = ''
                operator = ''
            }
            if (value === "+/-") {
                total = +total < 0 ? total : total
            }
            if (value === "%") {
                display.value = "%"
                total = +total * 0.01
            }

            if (value === '.') {
                number += '.'
            }

            if (value === "/") {
                display.value = "/"
                operator = '/'
                if (total === 0) {
                    total += +number
                }
                number = ''
            }

            if (value === "*") {
                display.value = "*"
                operator = '*'
                if (total === 0) {
                    total += +number
                }
                number = ''
            }

            if (value === "-") {
                display.value = "-"
                operator = '-'
                if (total === 0) {
                    total += +number
                }
                number = ''
            }

            if (value === "+") {
                display.value = "+"
                operator = '+'
                total += +number
                number = ''
            }

            if (value === "=") {
                if (operator === '/') {
                    total /= +number
                    number = ''
                }
                if (operator === '*') {
                    total *= +number
                    number = ''
                }
                if (operator === '-') {
                    total -= +number
                    number = ''
                }
                if (operator === '+') {
                    total += +number
                    number = ''
                }
                display.value = total.toString()
            }
        } else {
            number += e.target.innerText
            display.value = number.toString()
        }
    }))
})





