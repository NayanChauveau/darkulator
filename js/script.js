
// Calc part

document.querySelector('.calcul').addEventListener('click', () => {

    let brut = parseInt(document.querySelector('#salaire').value)
    let assurance = brut * 0.07
    let corse = brut * 0.05
    let impots = brut * 0.18

    let finres = brut

    if (document.querySelector('#impots').checked) {
        if (document.querySelector('#homme').checked) {
            if (document.querySelector('#char').value === '3') {
                impots = brut * 0.17
            } else if (document.querySelector('#char').value === '4+') {
                impots = brut * 0.16
            }
        } if (document.querySelector('#femme').checked) {
            if (document.querySelector('#char').value === '3') {
                impots = brut * 0.15
            } else if (document.querySelector('#char').value === '4+') {
                impots = brut * 0.14
            } else {
                impots = brut * 0.16
            }
        }
        finres -= impots
    }
    
    if (document.querySelector('#assur').checked) {
        finres -= assurance
    }

    if (document.querySelector('#corse').checked) {
        finres -= corse
    }

    if (document.querySelector('#suppl').value === 'bonus') {
        finres += 100
    }
    
    if (document.querySelector('#suppl').value === 'allocation') {
        finres += 150
    }

    finres = Math.round(finres)

    let encripted = window.btoa(finres); // Just for the little encryption effect

    let coolPhrase = [
        `Bravo !! Vous allez gagner <strong>${finres}</strong> !`,
        `Waaaaaah tu vas te faire <strong>$${finres}</strong>, t'es bien !`,
        `Bon dieu de dieu ! <strong>${finres}€</strong> !`,
        `<strong>${finres} €</strong> !!! Mon fils !`,
        `Ostie de calice ! <strong>${finres} €</strong> ! Que vas tu en faire tabernacle ?`,
        `Saint michel la bonne église ! <strong>${finres} €</strong> !`,
        `Bouloudouaaaaaahhh<strong>${finres}€</strong>baaaaliouass !`,
        `A ton tour de bosser : <strong>${encripted}</strong> ! lol`
    ]

    document.querySelector('.response').style.minWidth = (document.querySelector('.impt-ass-corse').offsetWidth - 32) + 'px'
    document.querySelector('.response').style.opacity = 1

    if (isNaN(brut)) {
        document.querySelector('.femme-homme').classList.remove('alert')
        document.querySelector('.response').innerHTML = "Veuillez entrer votre Brut ex: 12560"
        document.querySelector('.brut').classList.add('alert')
    } else if (!document.querySelector('#femme').checked && !document.querySelector('#homme').checked) {
        document.querySelector('.brut').classList.remove('alert')
        document.querySelector('.response').innerHTML = "Veuillez indiquer votre genre"
        document.querySelector('.femme-homme').classList.add('alert')
    } else {
        document.querySelector('.femme-homme').classList.remove('alert')
        document.querySelector('.response').innerHTML = coolPhrase[Math.floor(Math.random() * coolPhrase.length)]
    }
    
})

// End of the calc part

//Link checkbox to div

let checkWithADiv = function (divquery, checkquery) {
    let theCheckbox = document.querySelector(checkquery)
    document.querySelector(divquery).addEventListener('click', () => {
        if (theCheckbox.checked) {
            theCheckbox.checked = false
        } else {
            theCheckbox.checked = true
        }
    })
}

checkWithADiv('.impots', '#impots')
checkWithADiv('.assur', '#assur')
checkWithADiv('.corse', '#corse')




let addClassChecked = function (divquery) {
    let theDiv = document.querySelector(divquery)
    theDiv.addEventListener('click', () => {
        if (theDiv.classList.contains('checked') || theDiv.classList.contains('prechecked')) {
            theDiv.classList.remove('checked')
            theDiv.classList.remove('prechecked')
        } else {
            theDiv.classList.add('checked')
        }
    })
}


addClassChecked('.impots')
addClassChecked('.assur')
addClassChecked('.corse')



addClassChecked('.femme')
addClassChecked('.homme')
checkWithADiv('.femme', '#femme')
checkWithADiv('.homme', '#homme')

document.querySelector('.homme').addEventListener('click', () => {
    document.querySelector('.femme').classList.remove('checked')
})

document.querySelector('.femme').addEventListener('click', () => {
    document.querySelector('.homme').classList.remove('checked')
})

// End link check to div

document.querySelector('button').addEventListener('click', () => {
    if (document.querySelector('body').classList.contains('dark')) {
        document.querySelector('body').classList.remove('dark')
        document.querySelector('h1').innerText = 'Bienvenu sur le calculateur le plus cool de l\'histoire'
        document.querySelector('button').innerText = 'Je préfère le dark side'
    } else {
        document.querySelector('body').classList.add('dark')
        document.querySelector('h1').innerText = 'Bienvenu sur le calculateur le plus dark de l\'histoire'
        document.querySelector('button').innerText = 'Je préfère le white side'
    }
})