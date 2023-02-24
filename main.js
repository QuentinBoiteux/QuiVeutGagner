let avatar = 0
let spidey = new Audio('sons/spidey.mp3')
let jacky = new Audio('sons/jack.mp3')
let kimy = new Audio('sons/kim.mp3')
let beany = new Audio('sons/Bean.mp3')
let pseudoStocker = ""
let bonus1 = document.querySelector('.bonus1')
let bonus2 = document.querySelector('.bonus2')
let bonus3 = document.querySelector('.bonus3')
let error = document.querySelector('.error')
let bienvenido = new Audio('sons/Bonjour_et_bienvenue.mp3')
let sonsBonneRéponse = [];
let sonsBravo = new Audio("sons/Bravo.mp3");
let sonsBienJoué = new Audio("sons/Bien_joue.mp3");
let clinDoeil = new Audio('sons/clin_doeil_V2.mp4')
let sonsMauvaisesRéponses = [];
let sonsDommage = new Audio("sons/Dommage.mp3");
let sonsNon = new Audio("sons/Non.mp3");
let SpiderMan = document.querySelector('.spiderMan')
let Jack = document.querySelector('.Jack')
let Kim = document.querySelector('.Kim')
let Joker = document.querySelector('.Joker')
let pseudo = document.querySelector('.pseudo')
let commencerBtn = document.querySelector('.commencerBtn')
let commencer = document.querySelector('.commencer')
let game = document.querySelector('.game')
let pageAcceuil = document.querySelector('.pageAcceuil')
let PageChoixPersonnage = document.querySelector('.PageChoixPersonnage')
let persoChoisi = document.querySelector('.imageChoisi')
let pseudoChoisi = document.querySelector('.pseudoChosi')
let blurred = document.querySelector('.blured')
let blurred2 = document.querySelector('.blured2')
let next = document.querySelector('.next')
let finalScored = document.querySelector('.finalScore')
function commencerClicked() {
    PageChoixPersonnage.style.display = 'flex'
    pageAcceuil.style.display = 'none'
}
let sonsFinPartie = [];
let sonsMerci = new Audio("sons/Merci.mp3");
let sonsProchainement = new Audio("sons/Retrouvez-prochainement.mp3")
let sonGameOver = new Audio('sons/Relire_le_cours.mp3')
let sonVictoire = new Audio("sons/Gloria.mp3")
let CommentJ = document.querySelector('.CommentJ')
let dernierMot = new Audio("sons/Dernier_clic.mp3");
let bonneReponse = new Audio('sons/BonneReponse.mp3')
let questionSuivante = new Audio('sons/QuestionSuivante.mp3')
let Arriver = new Audio('sons/ArriverDansLeJeu.mp3')
addEventListener('load', () => {
    Arriver.volume = 0.2
    Arriver.play()
});
//variables html
let JeanPierre = document.querySelector('.JeanPierre')
let JeanPierre2 = document.querySelector('.JeanPierre2')
let JeanPierre3 = document.querySelector('.JeanPierre3')
let reponse1 = document.querySelector('.reponse1')
let reponse2 = document.querySelector('.reponse2')
let reponse3 = document.querySelector('.reponse3')
let reponse4 = document.querySelector('.reponse4')
let questions = document.querySelector('.question')
let responses = document.querySelector('.allReponsesPossibilities')
let won = document.querySelector('.Win')
let dix = document.querySelector('.dix')
let neuf = document.querySelector('.neuf')
let huit = document.querySelector('.huit')
let sept = document.querySelector('.sept')
let six = document.querySelector('.six')
let cinq = document.querySelector('.cinq')
let quatre = document.querySelector('.quatre')
let trois = document.querySelector('.trois')
let deux = document.querySelector('.deux')
let un = document.querySelector('.un')
let GameQuestion = document.querySelector('.question')
let oui = document.querySelector('.Oui')
let non = document.querySelector('.Non')
let dernierMotSection = document.querySelector('.DernierMotSection')
let question = 1
let chose1 = false
let chose2 = false
let chose3 = false
let chose4 = false
let one
let two
let three
let four
if (question == 1) {
    one = false
    two = false
    three = false
    four = true
}

SpiderMan.addEventListener('click', () => {
    avatar = 1
    spidey.play()
    console.log(avatar)
    SpiderMan.style.backgroundColor = "gold"
    SpiderMan.style.border = "4px solid rgb(27, 22, 43)"
    Jack.style.backgroundColor = "rgb(27, 22, 43)"
    Kim.style.backgroundColor = "rgb(27, 22, 43)"
    Joker.style.backgroundColor = "rgb(27, 22, 43)"
    Kim.style.border = "4px solid gold"
    Joker.style.border = "4px solid gold"
    Jack.style.border = "4px solid gold"
})

Jack.addEventListener('click', () => {
    jacky.play()
    avatar = 2
    console.log(avatar)
    Jack.style.backgroundColor = "gold"
    Jack.style.border = "4px solid rgb(27, 22, 43)"
    SpiderMan.style.backgroundColor = "rgb(27, 22, 43)"
    Kim.style.backgroundColor = "rgb(27, 22, 43)"
    Joker.style.backgroundColor = "rgb(27, 22, 43)"
    Kim.style.border = "4px solid gold"
    Joker.style.border = "4px solid gold"
    SpiderMan.style.border = "4px solid gold"
})

Kim.addEventListener('click', () => {
    kimy.play()
    avatar = 3
    console.log(avatar)
    Kim.style.backgroundColor = "gold"
    Kim.style.border = "4px solid rgb(27, 22, 43)"
    SpiderMan.style.backgroundColor = "rgb(27, 22, 43)"
    Joker.style.backgroundColor = "rgb(27, 22, 43)"
    Jack.style.backgroundColor = "rgb(27, 22, 43)"
    Joker.style.border = "4px solid gold"
    Jack.style.border = "4px solid gold"
    SpiderMan.style.border = "4px solid gold"
})

Joker.addEventListener('click', () => {
    beany.play()
    avatar = 4
    console.log(avatar)
    Joker.style.backgroundColor = "gold"
    Joker.style.border = "4px solid rgb(27, 22, 43)"
    SpiderMan.style.backgroundColor = "rgb(27, 22, 43)"
    Kim.style.backgroundColor = "rgb(27, 22, 43)"
    Jack.style.backgroundColor = "rgb(27, 22, 43)"
    Kim.style.border = "4px solid gold"
    Jack.style.border = "4px solid gold"
    SpiderMan.style.border = "4px solid gold"
})

let dialogue = document.querySelector('.dialogue')
let countNext = 0
commencerBtn.addEventListener('click', () => {
    bienvenido.play()
    console.log(pseudo.value.length)
    if (pseudo.value.length < 7 && avatar != 0 && pseudo.value != 0) {
        PageChoixPersonnage.style.display = 'none'
        JeanPierre.style.visibility = 'hidden'
        game.style.display = 'flex'
        pseudoStocker = pseudo.value
        console.log(pseudoStocker)
        console.log(avatar)
        if (avatar == 1) {
            console.log("yo")
            persoChoisi.style.backgroundImage = 'url(images/SpiderMAn.png)'
        }
        if (avatar == 2) {
            persoChoisi.style.backgroundImage = 'url(images/jack.png)'
        }
        if (avatar == 3) {
            persoChoisi.style.backgroundImage = 'url(images/Kim.png)'
        }
        if (avatar == 4) {
            persoChoisi.style.backgroundImage = 'url(images/mrBean.png)'
        }
        pseudoChoisi.innerText = pseudoStocker
    } else if (avatar == 0 && pseudo.value.length > 6) {
        error.innerText = "Pseudo ne doit pas dépasser 6 caractères, et n'oubliez pas de choisir votre avatar"
    } else if (pseudo.value.length == 0 && avatar == 0) {
        error.innerText = "Veuillez saisir votre pseudo pour commencer, et n'oubliez pas de choisir votre avatar"
    } else if (pseudo.value.length == 0) {
        error.innerText = "Veuillez saisir votre pseudo pour commencer"
    } else if (pseudo.value.length > 6) {
        error.innerText = "Pseudo ne doit pas dépasser 6 caractères"
    } else if (avatar == 0) {
        error.innerText = "Choisissez votre avatar"
    }
    GameQuestion.style.visibility = 'hidden'
    bonus1.style.pointerEvents = "none"
    bonus2.style.pointerEvents = "none"
    bonus3.style.pointerEvents = "none"
    reponse1.style.visibility = 'hidden'
    reponse2.style.visibility = 'hidden'
    reponse3.style.visibility = 'hidden'
    reponse4.style.visibility = 'hidden'
    dialogue.innerHTML = "Bienvenu(e) " + pseudoStocker + " à qui veut gagner des Thune en Masses !"

})
next.addEventListener('click', () => {
    countNext++
    if (countNext == 1) {
        dialogue.innerHTML = "Je suis presque heureux de vous avoir parmis nous ce soir car je sais que vous n'êtes pas très futé(e)."
    }
    if (countNext == 2) {
        if (avatar == 1) {
            dialogue.innerHTML = "Je vois que aimez SpiderMan, j'espère que vous possèdez aussi la petite antenne, vous en aurez besoin."
            next.innerHTML = '"Oui"'
        }
        if (avatar == 2) {
            dialogue.innerHTML = "Jack c'est bien ça? J'adore le look, mais il faut revoir l'odeur."
            next.innerHTML = '"le Rhum"'
        }
        if (avatar == 3) {
            dialogue.innerHTML = "Je croise réelement les doigts pour vous Kim."
            next.innerHTML = '"I am rich"'
        }
        if (avatar == 4) {
            dialogue.innerHTML = "Je suis un grand fan mr.Bean, mais êtes vous aussi instruit que drôle ?"
            next.innerHTML = '"Evidemment"'
        }

    }
    if (countNext == 3) {
        next.innerHTML = "Suivant"
        dialogue.innerHTML = "Je vais vous poser DIX questions vous devez faire un maximum de bonnes réponses."
    }
    if (countNext == 4) {
        dialogue.innerHTML = "Pour vous aider vous aurez droit à trois bonus, le 50/50, l'appel à un ami, ou le swap!"
    }
    if (countNext == 5) {
        dialogue.innerHTML = "Attention, l'appel peut vous trahir vous allez comprendre pourquoi, hehehe.."
    }
    if (countNext == 6) {
        dialogue.innerHTML = "Hahahahahaha.."
        next.innerHTML = '"haha"'
    }
    if (countNext == 7) {
        dialogue.innerHTML = "Bref."
        next.innerHTML = '"..."'
    }
    if (countNext == 8) {
        next.innerHTML = "Suivant"
        dialogue.innerHTML = "Le swap lui, ne pourra être utilisable qu'après avoir répondu à la première question."
    }
    if (countNext == 9) {
        dialogue.innerHTML = "Vous avez également 5min pour finir la partie, sinon vous perdrez."
    }
    if (countNext == 10) {
        dialogue.innerHTML = "Vous perdrez également si vous ne possèdez pas au moins 5 bonnes réponses, il faut le faire quand même."
    }
    if (countNext == 11) {
        dialogue.innerHTML = "Êtes vous prêt(e) " + pseudoStocker + " ?"
        next.innerHTML = "Allons-y!"
    }
    if (countNext == 12) {
        startTimer(299, timer);
        GameQuestion.style.visibility = 'visible'
        reponse1.style.visibility = 'visible'
        reponse2.style.visibility = 'visible'
        reponse3.style.visibility = 'visible'
        reponse4.style.visibility = 'visible'
        bonus1.style.pointerEvents = "auto"
        bonus2.style.pointerEvents = "auto"
        bonus3.style.pointerEvents = "auto"
        dialogue.style.display = 'none'
        next.style.display = 'none'
    }
})

reponse1.addEventListener("click", function () {
    JeanPierre.style.visibility = "visible"
    JeanPierre2.style.visibility = "hidden"
    dernierMot.play()
    chose1 = true
    reponse1.style.backgroundColor = 'rgb(255, 215, 0)'
    dernierMotSection.style.visibility = 'visible'
    reponse2.style.pointerEvents = "none"
    reponse3.style.pointerEvents = "none"
    reponse4.style.pointerEvents = "none"
})

reponse2.addEventListener("click", function () {
    JeanPierre.style.visibility = "visible"
    JeanPierre2.style.visibility = "hidden"
    dernierMot.play()
    chose2 = true
    reponse2.style.backgroundColor = 'rgb(255, 215, 0)'
    dernierMotSection.style.visibility = 'visible'
    reponse1.style.pointerEvents = "none"
    reponse3.style.pointerEvents = "none"
    reponse4.style.pointerEvents = "none"
    console.log('yo')
})

reponse3.addEventListener("click", function () {
    JeanPierre.style.visibility = "visible"
    JeanPierre2.style.visibility = "hidden"
    dernierMot.play()
    chose3 = true
    reponse3.style.backgroundColor = 'rgb(255, 215, 0)'
    dernierMotSection.style.visibility = 'visible'
    reponse2.style.pointerEvents = "none"
    reponse1.style.pointerEvents = "none"
    reponse4.style.pointerEvents = "none"
})

reponse4.addEventListener("click", function () {
    JeanPierre.style.visibility = "visible"
    JeanPierre2.style.visibility = "hidden"

    dernierMot.play()
    chose4 = true
    reponse4.style.backgroundColor = 'rgb(255, 215, 0)'
    dernierMotSection.style.visibility = 'visible'
    reponse2.style.pointerEvents = "none"
    reponse3.style.pointerEvents = "none"
    reponse1.style.pointerEvents = "none"
})

JeanPierre2.addEventListener('click', () => {
    clinDoeil.play()
    JeanPierre2.style.visibility = 'hidden'
    JeanPierre3.style.visibility = 'visible'
    setTimeout(() => {
        JeanPierre2.style.visibility = 'visible'
        JeanPierre3.style.visibility = 'hidden'
    }, 1500);
})

non.addEventListener("click", function () {
    JeanPierre.style.visibility = "hidden"
    JeanPierre2.style.visibility = "visible"
    dernierMotSection.style.visibility = "hidden"
    reponse1.style.pointerEvents = "auto"
    reponse2.style.pointerEvents = "auto"
    reponse3.style.pointerEvents = "auto"
    reponse4.style.pointerEvents = "auto"
    reponse1.style.backgroundColor = 'rgb(50, 40, 77)'
    reponse2.style.backgroundColor = 'rgb(50, 40, 77)'
    reponse3.style.backgroundColor = 'rgb(50, 40, 77)'
    reponse4.style.backgroundColor = 'rgb(50, 40, 77)'
    chose1 = false
    chose2 = false
    chose3 = false
    chose4 = false
})
let grats = false
let mauvaiseR = 0
let reponseDev = document.querySelector('.reponseDev')
let blured = document.querySelector('.blur')
let suivantClicked = 0
function clearBlured() {
    blured.style.visibility = 'hidden'
}
let bonneReponseCount = 0
let finalScore = 0
oui.addEventListener('click', function () {
    console.log(chose1, chose2, chose3, chose4, one, two, three, four)
    blured.style.visibility = "visible"
    if (chose1 == one && chose2 == two && chose3 == three && chose4 == four) {
        if (question == 1) {
            finalScore += 10
        }
        if (question == 2) {
            finalScore += 50
            console.log(finalScore)
        }
        if (question == 3) {
            finalScore += 100
            console.log(finalScore)
        }
        if (question == 4) {
            finalScore += 500
            console.log(finalScore)
        }
        if (question == 5) {
            finalScore += 1000
            console.log(finalScore)
        }
        if (question == 6) {
            finalScore += 5000
            console.log(finalScore)
        }
        if (question == 7) {
            finalScore += 10000
            console.log(finalScore)
        }
        if (question == 8) {
            finalScore += 50000
            console.log(finalScore)
        }
        if (question == 9) {
            finalScore += 100000
            console.log(finalScore)
        }
        if (question == 10) {
            finalScore += 1000000
            console.log(finalScore)
        }
        finalScored.innerHTML = 'Score final ' + finalScore
        bonneReponseCount++
        setTimeout(() => {
            reponse1.style.visibility = 'visible'
            reponse2.style.visibility = 'visible'
            reponse3.style.visibility = 'visible'
            reponse4.style.visibility = 'visible'
            reponse4.style.display = "flex"
            reponse3.style.display = "flex"
            reponse1.style.display = "flex"
            reponse2.style.display = 'flex'
        }, 1000)
        JeanPierre.style.visibility = "hidden"
        JeanPierre2.style.visibility = "visible"
        bonneReponse.volume = 0.15
        reponse1.style.backgroundColor = 'rgb(50, 40, 77)'
        reponse2.style.backgroundColor = 'rgb(50, 40, 77)'
        reponse3.style.backgroundColor = 'rgb(50, 40, 77)'
        reponse4.style.backgroundColor = 'rgb(50, 40, 77)'
        reponse1.style.pointerEvents = "auto"
        reponse2.style.pointerEvents = "auto"
        reponse3.style.pointerEvents = "auto"
        reponse4.style.pointerEvents = "auto"
        dernierMotSection.style.visibility = 'hidden'
        console.log(question)
        console.log(chose1, chose2, chose3, chose4, one, two, three, four)
        question++
        if (question != 11) {
            bonneReponse.play()
            sonsBonneRéponse.push(sonsBravo, sonsBienJoué)
            sonsBonneRéponse[Math.floor(Math.random() * sonsBonneRéponse.length)].play();
        }
    } else {
        mauvaiseR = 1
        setTimeout(() => {
            reponse1.style.visibility = 'visible'
            reponse2.style.visibility = 'visible'
            reponse3.style.visibility = 'visible'
            reponse4.style.visibility = 'visible'
        }, 1000)
        JeanPierre.style.visibility = "hidden"
        JeanPierre2.style.visibility = "visible"
        reponse1.style.backgroundColor = 'rgb(50, 40, 77)'
        reponse2.style.backgroundColor = 'rgb(50, 40, 77)'
        reponse3.style.backgroundColor = 'rgb(50, 40, 77)'
        reponse4.style.backgroundColor = 'rgb(50, 40, 77)'
        reponse1.style.pointerEvents = "auto"
        reponse2.style.pointerEvents = "auto"
        reponse3.style.pointerEvents = "auto"
        reponse4.style.pointerEvents = "auto"
        dernierMotSection.style.visibility = 'hidden'
        console.log(question)
        console.log(chose1, chose2, chose3, chose4, one, two, three, four)
        question++
        sonsMauvaisesRéponses.push(sonsNon, sonsDommage);
        sonsMauvaisesRéponses[Math.floor(Math.random() * sonsMauvaisesRéponses.length)].play();
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    chose1 = false
    chose2 = false
    chose3 = false
    chose4 = false
    let suivant = document.querySelector('.suivant')
    let propositions = getRandomInt(3)
    let propositions2 = getRandomInt(3)
    let propositions3 = getRandomInt(3)
    let propositions4 = getRandomInt(3)
    let propositions5 = getRandomInt(3)
    let propositions6 = getRandomInt(3)
    let propositions7 = getRandomInt(3)
    let propositions8 = getRandomInt(3)
    let propositions9 = getRandomInt(3)
    let reponseDev = document.querySelector('.reponseDev')
    if (question == 2) {
        if (mauvaiseR == 0) {
            dix.style.backgroundColor = "white"
            dix.style.border = "10px solid white"
            dix.style.color = "black"
        } else {
            dix.style.color = "white"
            dix.style.backgroundColor = "red"
            dix.style.border = "10px solid red"
            mauvaiseR = 0
        }
        reponse4.style.backgroundColor = "green"
        reponse4.style.animation = 'blink 0.5s infinite'
        if (propositions == 0) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Le H1 est une balise HTML qui indique le titre sur un site web."
            })
            setTimeout(() => {
                reponse4.style.animation = 'none'
                reponse4.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = 'Quelle balise doit être intégrée une seule fois sur une page internet ?'
                reponse1.innerHTML = "H2"
                reponse2.innerHTML = "H1"
                reponse3.innerHTML = "H3"
                reponse4.innerHTML = "H7"
            }, "1000")
            one = false
            two = true
            three = false
            four = false
        }
        if (propositions == 1) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Le localisateur uniforme de ressource est l'adresse d'un site ou d'une page hypertexte sur internet."
            })
            setTimeout(() => {
                reponse4.style.animation = 'none'
                reponse4.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = 'Que signifie URL ?'
                reponse1.innerHTML = "Universal Rocket League"
                reponse2.innerHTML = "Uniform Ressource Locator"
                reponse3.innerHTML = "Unification Realiste Locale"
                reponse4.innerHTML = "Union Républicaine libre "
            }, "1000")
            one = false
            two = true
            three = false
            four = false
        }
        if (propositions == 2) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: SEA peut être une page de résultats suite à une requête lancée sur un moteur de recherche."
            })
            setTimeout(() => {
                reponse4.style.animation = 'none'
                reponse4.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Que signifie l'acronyme SEA ?"
                reponse1.innerHTML = "Serpentard Engraine Aragogue"
                reponse2.innerHTML = "Search Engine Advertising"
                reponse3.innerHTML = "Search Engine Animated"
                reponse4.innerHTML = "Search Engine Alabama"
            }, "1000")
            one = false
            two = true
            three = false
            four = false
        }
    }
    if (question == 3) {
        if (mauvaiseR == 0) {
            neuf.style.backgroundColor = "white"
            neuf.style.border = "10px solid white"
            neuf.style.color = "black"
        } else {
            neuf.style.color = "white"
            neuf.style.backgroundColor = "red"
            neuf.style.border = "10px solid red"
            mauvaiseR = 0
        }

        reponse2.style.backgroundColor = "green"
        reponse2.style.animation = 'blink 0.5s infinite'
        if (propositions2 == 0) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Fait référence à la concéption d'un site ou d'une application qui répond à l'environnement dans lequel il est vu."
            })
            setTimeout(() => {
                reponse2.style.animation = 'none'
                reponse2.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Quelle technique permet à votre site de s'adapter automatiquement à toutes les tailles d'écrans ?"
                reponse1.innerHTML = "Le Copy and PAste"
                reponse2.innerHTML = "Le control + Z"
                reponse3.innerHTML = "Responsive Web Design"
                reponse4.innerHTML = "Adaptive Screen Design"
            }, "1000")
            one = false
            two = false
            three = true
            four = false
        }
        if (propositions2 == 1) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Site web dont la conception vise, grâce à différents principes et techniques, à offrir une consultation confortable sur des ecrans de taille différentes."
            })
            setTimeout(() => {
                reponse2.style.animation = 'none'
                reponse2.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Comment appelle-t-on un site utilisant le responsive design ?"
                reponse1.innerHTML = "Un site web on fleek"
                reponse2.innerHTML = "Un site web formatif"
                reponse3.innerHTML = "Un site web réactif"
                reponse4.innerHTML = "Un site web récréatif"
            }, "1000")
            one = false
            two = false
            three = true
            four = false
        }
        if (propositions2 == 2) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Le SEO correspond au référencement naturel, le SEA est un référencement payant."
            })
            setTimeout(() => {
                reponse2.style.animation = 'none'
                reponse2.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Quelle est la différence entre SEO et SEA ?"
                reponse1.innerHTML = "Le SEO est fait pour les sites Online"
                reponse2.innerHTML = "Le SEA est fait pour les Applications"
                reponse3.innerHTML = "Le SEO est naturel, le SEA est payant"
                reponse4.innerHTML = "Le SEO est payant, le SEA est gratuit"
            }, "1000")
            one = false
            two = false
            three = true
            four = false
        }
    }
    if (question == 4) {
        if (mauvaiseR == 0) {
            huit.style.backgroundColor = "white"
            huit.style.border = "10px solid white"
            huit.style.color = "black"
        } else {
            huit.style.color = "white"
            huit.style.backgroundColor = "red"
            huit.style.border = "10px solid red"
            mauvaiseR = 0
        }
        reponse3.style.backgroundColor = "green"
        reponse3.style.animation = 'blink 0.5s infinite'
        if (propositions3 == 0) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: C'est une balise HTML correspondant au titre de votre page web."
            })
            setTimeout(() => {
                reponse3.style.animation = 'none'
                reponse3.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Dans la page de résulats Google, à quelle balise correspond la ligne principale en bleu ?"
                reponse1.innerHTML = "Meta Title"
                reponse2.innerHTML = "Tetra Title"
                reponse3.innerHTML = "Balise Title"
                reponse4.innerHTML = "Balise H1"
            }, "1000")
            one = true
            two = false
            three = false
            four = false
        }
        if (propositions3 == 1) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: c'est un texte visible utilisé pour créer des liens vers des pages internes ou externes à votre site."
            })
            setTimeout(() => {
                reponse3.style.animation = 'none'
                reponse3.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Qu'est ce qu'un texte d'ancrage ?"
                reponse1.innerHTML = "Un lien hypertexte"
                reponse2.innerHTML = "Un texte écrit à la plume"
                reponse3.innerHTML = "Un texte de développement personnel"
                reponse4.innerHTML = "Un pop-up de référence"
            }, "1000")
            one = true
            two = false
            three = false
            four = false
        }
        if (propositions3 == 2) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Si votre texte est trop long , Google le coupera à l'affichage. C'est pour cela que l'on parle d'environ 60 à 65 caractères minimum (espaces compris)"
            })
            setTimeout(() => {
                reponse3.style.animation = 'none'
                reponse3.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Quelle est la longueur approximative d'une balise Title sur Google"
                reponse1.innerHTML = "65 caractères"
                reponse2.innerHTML = "120 caractères"
                reponse3.innerHTML = "40 caractères"
                reponse4.innerHTML = "160 caractères"
            }, "1000")
            one = true
            two = false
            three = false
            four = false
        }
    }
    if (question == 5) {
        if (mauvaiseR == 0) {
            sept.style.backgroundColor = "white"
            sept.style.border = "10px solid white"
            sept.style.color = "black"
        } else {
            sept.style.color = "white"
            sept.style.backgroundColor = "red"
            sept.style.border = "10px solid red"
            mauvaiseR = 0
        }
        reponse1.style.backgroundColor = "green"
        reponse1.style.animation = 'blink 0.5s infinite'
        if (propositions4 == 0) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Technique fondamentale dans le référencement consistant à multiplier les backlinks (lien pointant vers un site Internet)."
            })
            setTimeout(() => {
                reponse1.style.animation = 'none'
                reponse1.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Qu'est ce que le netlinking ?"
                reponse1.innerHTML = "Multiplier les liens pointant vers un autre site internet"
                reponse2.innerHTML = "Technique pour surfer sur le net"
                reponse3.innerHTML = "La conception de balises HTML"
                reponse4.innerHTML = "Inserer des pop up dans un site"
            }, "1000")
            one = true
            two = false
            three = false
            four = false
        }
        if (propositions4 == 1) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: 301 redirect est un code de réponse HTTP qui est utilisé pour une redirection d'URL permanente."
            })
            setTimeout(() => {
                reponse1.style.animation = 'none'
                reponse1.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Que signifie le code de redirection 301 ?"
                reponse1.innerHTML = "Une redirection permanente"
                reponse2.innerHTML = "Une erreur qui touche à la base de données"
                reponse3.innerHTML = "Une erreur interne au serveur"
                reponse4.innerHTML = "Erreur Fatale"
            }, "1000")
            one = true
            two = false
            three = false
            four = false
        }
        if (propositions4 == 2) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Un lien hypertexte qui permet d'envoyer un internaute d'un site web X vers un site web Y."
            })
            setTimeout(() => {
                reponse1.style.animation = 'none'
                reponse1.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Comment appelle-t-on un lien pointant vers un autre site internet ?"
                reponse1.innerHTML = "Un Backlink"
                reponse2.innerHTML = "Un Otherlink"
                reponse3.innerHTML = "Un Weblink"
                reponse4.innerHTML = "Un Decklink"
            }, "1000")
            one = true
            two = false
            three = false
            four = false
        }
    }
    if (question == 6) {
        if (mauvaiseR == 0) {
            six.style.backgroundColor = "white"
            six.style.border = "10px solid white"
            six.style.color = "black"
        } else {
            six.style.color = "white"
            six.style.backgroundColor = "red"
            six.style.border = "10px solid red"
            mauvaiseR = 0
        }
        reponse1.style.backgroundColor = "green"
        reponse1.style.animation = 'blink 0.5s infinite'
        if (propositions5 == 0) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Taux d’internautes qui sont entrés sur une page Web et qui ont quitté le site après, sans consulter d'autres pages"
            })
            setTimeout(() => {
                reponse1.style.animation = 'none'
                reponse1.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Qu'est ce qu'un taux de rebond ?"
                reponse1.innerHTML = "Le taux de recharge d'une page"
                reponse2.innerHTML = "C'est le pourcentage de rebonds d'une balle contre un mur"
                reponse3.innerHTML = "Quand l'internaute n'a consulté qu'une seule page du site sur lequel il a atterri"
                reponse4.innerHTML = "Le taux de visiteurs qui double clic sur la page"
            }, "1000")
            one = false
            two = false
            three = true
            four = false
        }
        if (propositions5 == 1) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Une page de résultats suite à une requête lancée sur un moteur de recherche."
            })
            setTimeout(() => {
                reponse1.style.animation = 'none'
                reponse1.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Que signifie l'acronyme SERP ?"
                reponse1.innerHTML = "Serpentard Engraine Rogue à Poudlard"
                reponse2.innerHTML = "Search Engine Ranking Page"
                reponse3.innerHTML = "Search Engine Results Page"
                reponse4.innerHTML = "Serpillère"
            }, "1000")
            one = false
            two = false
            three = true
            four = false
        }
        if (propositions5 == 2) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Googlebot est le nom générique du robot d'exploration de Google. Il désigne deux types de robots d'exploration distincts : l'un simule un internaute sur un ordinateur, tandis que l'autre simule un utilisateur sur un appareil mobile."
            })
            setTimeout(() => {
                reponse1.style.animation = 'none'
                reponse1.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Comment s'appelle le robot du moteur de recherche Google"
                reponse1.innerHTML = "Tim Cook"
                reponse2.innerHTML = "Hummingbird"
                reponse3.innerHTML = "GoogleBot"
                reponse4.innerHTML = "iRobot"
            }, "1000")
            one = false
            two = false
            three = true
            four = false
        }
    }
    if (question == 7) {
        if (mauvaiseR == 0) {
            cinq.style.backgroundColor = "white"
            cinq.style.border = "10px solid white"
            cinq.style.color = "black"
        } else {
            cinq.style.color = "white"
            cinq.style.backgroundColor = "red"
            cinq.style.border = "10px solid red"
            mauvaiseR = 0
        }
        reponse3.style.backgroundColor = "green"
        reponse3.style.animation = 'blink 0.5s infinite'
        if (propositions6 == 0) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Le système de notation utilisé par Google pour évaluer la qualité d’un site Web."
            })
            setTimeout(() => {
                reponse3.style.animation = 'none'
                reponse3.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Qu'est ce que le page rank ?"
                reponse1.innerHTML = "Le positionnement dans la page de recherche Google"
                reponse2.innerHTML = "Un habitant de Bolbec"
                reponse3.innerHTML = "Un système de notation utilisé par Google"
                reponse4.innerHTML = "Une technique de codage"
            }, "1000")
            one = true
            two = false
            three = false
            four = false
        }
        if (propositions6 == 1) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Le cloaking est une technique (interdite par Google) qui permet de fournir un résultat (une page web) différent selon le visiteur qui demande à consulter une information. "
            })
            setTimeout(() => {
                reponse3.style.animation = 'none'
                reponse3.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Qu'est ce que le Cloaking sur un site web ?"
                reponse1.innerHTML = "Afficher des informations différentes pour un robot et un internaute"
                reponse2.innerHTML = "Afficher l'heure sur un site web"
                reponse3.innerHTML = "Faire claquer sa langue sur son palais "
                reponse4.innerHTML = "Du traffic de codes"
            }, "1000")
            one = true
            two = false
            three = false
            four = false
        }
        if (propositions6 == 2) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Le cloaking est une technique d’optimisation strictement interdite par Google."
            })
            setTimeout(() => {
                reponse3.style.animation = 'none'
                reponse3.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Le cloaking est une technique strictement interdite par :"
                reponse1.innerHTML = "Google"
                reponse2.innerHTML = "Monsieur Ferreira"
                reponse3.innerHTML = "Mozilla Firefox"
                reponse4.innerHTML = "Wordpress"
            }, "1000")
            one = true
            two = false
            three = false
            four = false
        }
    }
    if (question == 8) {
        if (mauvaiseR == 0) {
            quatre.style.backgroundColor = "white"
            quatre.style.border = "10px solid white"
            quatre.style.color = "black"
        } else {
            quatre.style.color = "white"
            quatre.style.backgroundColor = "red"
            quatre.style.border = "10px solid red"
            mauvaiseR = 0
        }
        reponse1.style.backgroundColor = "green"
        reponse1.style.animation = 'blink 0.5s infinite'
        if (propositions7 == 0) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Le système de notation utilisé par Google pour évaluer la qualité d’un site Web."
            })
            setTimeout(() => {
                reponse1.style.animation = 'none'
                reponse1.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Quelle est la bonne balise lien ?"
                reponse1.innerText = "<media='https://campussaintmarcrouen.com'/a>"
                reponse2.innerText = "<a href media='https://campussaintmarcrouen.com'/>CSM Rouen</a>"
                reponse3.innerText = "<media='https://campussaintmarcrouen.com'/>CSM Rouen</a>"
                reponse4.innerText = "<a href='https://campussaintmarcrouen.com'>CSM Rouen</a>"
            }, "1000")
            one = false
            two = false
            three = false
            four = true
        }
        if (propositions7 == 1) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: La longue traîne est l’ensemble des mots clés qui, pris individuellement, génèrent peu de trafic mais qui, une fois cumulés, peuvent peser jusqu’à 80 % du trafic."
            })
            setTimeout(() => {
                reponse1.style.animation = 'none'
                reponse1.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "La longue traine consiste à gagner du trafic en :"
                reponse1.innerHTML = "Laissant trainer des lignes de codes"
                reponse2.innerHTML = "Indexant le site via Google"
                reponse3.innerHTML = "Laissant trainer le voile de la mariée"
                reponse4.innerHTML = "Cummulant des mots clés"
            }, "1000")
            one = false
            two = false
            three = false
            four = true
        }
        if (propositions7 == 2) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Format d’adresse URL permettant l’enregistrement d’informations sur les campagnes webmarketing. Une url de tracking, encore appelée “lien tracké” est traditionnellement utilisée dans le cadre de la mesure de performance des campagnes payantes d’acquisition de trafic."
            })
            setTimeout(() => {
                reponse1.style.animation = 'none'
                reponse1.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Qu'est ce que la tracking?"
                reponse1.innerHTML = "Suivre quelqu'un à la sortie du métro"
                reponse2.innerHTML = "Monsieur Lemetais en challenge"
                reponse3.innerHTML = "Robots de Google qui inspectent votre page"
                reponse4.innerHTML = "Pister les internautes sur Internet "
            }, "1000")
            one = false
            two = false
            three = false
            four = true
        }
    }
    if (question == 9) {
        if (mauvaiseR == 0) {
            trois.style.backgroundColor = "white"
            trois.style.border = "10px solid white"
            trois.style.color = "black"
        } else {
            trois.style.color = "white"
            trois.style.backgroundColor = "red"
            trois.style.border = "10px solid red"
            mauvaiseR = 0
        }
        reponse4.style.backgroundColor = "green"
        reponse4.style.animation = 'blink 0.5s infinite'
        if (propositions8 == 0) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Une balise HTML qui permet aux moteurs de recherche d'avoir un aperçu du contenu des pages affichées dans la SERP."
            })
            setTimeout(() => {
                reponse4.style.animation = 'none'
                reponse4.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Qu'est ce que la balise meta description ?"
                reponse1.innerHTML = "La balise utilisée dans le metaverse"
                reponse2.innerHTML = "Une description des plug-ins"
                reponse3.innerHTML = "Elle fournit une description aux moteurs de recherche"
                reponse4.innerHTML = "Un assemblement de métastases"
            }, "1000")
            one = false
            two = false
            three = true
            four = false
        }
        if (propositions8 == 1) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Il s'agit d'un logiciel qui a pour principale mission d'explorer le Web afin d'analyser le contenu des documents visités."
            })
            setTimeout(() => {
                reponse4.style.animation = 'none'
                reponse4.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "L'indexation des sites Web sur Internet est effectuée par ?"
                reponse1.innerHTML = "Les hommes crabes"
                reponse2.innerHTML = "La base de données"
                reponse3.innerHTML = "Les crawlers"
                reponse4.innerHTML = "Monsieur Ferreira"
            }, "1000")
            one = false
            two = false
            three = true
            four = false
        }
        if (propositions8 == 2) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Un cookie est un petit fichier stocké par un serveur dans le terminal (ordinateur, téléphone, etc.) d'un utilisateur."
            })
            setTimeout(() => {
                reponse4.style.animation = 'none'
                reponse4.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Qu'est ce qu'un cookie ?"
                reponse1.innerHTML = "Un biscuit au chocolat"
                reponse2.innerHTML = "Un équivalent des CGU"
                reponse3.innerHTML = "Un fichier stockant nos informations de navigation en mémoire"
                reponse4.innerHTML = "Un virus bénin"
            }, "1000")
            one = false
            two = false
            three = true
            four = false
        }
    }
    if (question == 10) {
        if (mauvaiseR == 0) {
            deux.style.backgroundColor = "white"
            deux.style.border = "10px solid white"
            deux.style.color = "black"
        } else {
            deux.style.color = "white"
            deux.style.backgroundColor = "red"
            deux.style.border = "10px solid red"
            mauvaiseR = 0
        }
        reponse3.style.backgroundColor = "green"
        reponse3.style.animation = 'blink 0.5s infinite'
        if (propositions9 == 0) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: Il sert à améliorer le positionnement d'une page, d'un site ou d'une application web dans la page de résultats d'un moteur de recherche."
            })
            setTimeout(() => {
                reponse3.style.animation = 'none'
                reponse3.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Que signifie l'acronyme SEO ?"
                reponse1.innerHTML = "Search Engine Optimisation"
                reponse2.innerHTML = "Scientific Engine Organizations"
                reponse3.innerHTML = "Surfing Europeen Oligation"
                reponse4.innerHTML = "Solution Excluding Orphans"
            }, "1000")
            one = true
            two = false
            three = false
            four = false
        }
        if (propositions9 == 1) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: C'est l'organisation (maillage) des liens permettant de naviguer d'une page à une autre d'un même site web."
            })
            setTimeout(() => {
                reponse3.style.animation = 'none'
                reponse3.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Qu’est-ce que le maillage interne d’un site Web ?"
                reponse1.innerHTML = "L’ensemble des liens internes entre les pages d’un site Web"
                reponse2.innerHTML = "L'ensemble des connexions d'un site web"
                reponse3.innerHTML = "L'ensembles des liens mail d'un site web"
                reponse4.innerHTML = "L'ensemble des liens externes d'un site web"
            }, "1000")
            one = true
            two = false
            three = false
            four = false
        }
        if (propositions9 == 2) {
            suivant.addEventListener('click', function () {
                reponseDev.innerText = "Réponse développée: À l'époque où les imprimeurs recevaient des manuscrits (écrits «à la main», pas tapés à la machine donc), ils composaient en italique ce qui était souligné dans le texte."
            })
            setTimeout(() => {
                reponse3.style.animation = 'none'
                reponse3.style.backgroundColor = "rgb(50, 40, 77)"
                GameQuestion.innerHTML = "Dans quel cas doit-on souligner un texte ?"
                reponse1.innerHTML = "Pour les titres d'oeuvre"
                reponse2.innerHTML = "Pour un lien cliquable"
                reponse3.innerHTML = "Pour faire jolie "
                reponse4.innerHTML = "Il ne faut rien souligner"
            }, "1000")
            one = true
            two = false
            three = false
            four = false
        }
    }
    if (question == 11) {
        if (mauvaiseR == 0) {
            un.style.backgroundColor = "white"
            un.style.border = "10px solid white"
            un.style.color = "black"
            un.style.animation = 'blink 0.5s infinite'
        } else {
            un.style.color = "white"
            un.style.backgroundColor = "red"
            un.style.border = "10px solid red"
            mauvaiseR = 0
        }
        if (bonneReponseCount >= 5) {
            sonVictoire.volume = 0.1;
            sonVictoire.play();
            setTimeout(() => {
                sonsFinPartie.push(sonsMerci, sonsProchainement)
                sonsFinPartie[Math.floor(Math.random() * sonsFinPartie.length)].play();
            }, 2000)
            blurred.style.display = 'flex'
            reponse1.style.backgroundColor = "green"
            reponse1.style.animation = 'blink 0.5s infinite'
            setTimeout(() => {
                JeanPierre2.style.visibility = 'hidden'
                reponse1.style.animation = 'none'
                reponse1.style.backgroundColor = "rgb(50, 40, 77)"
                questions.style.visibility = "hidden"
                responses.style.visibility = "hidden"
                reponse1.style.display = 'none'
                reponse2.style.display = 'none'
                reponse3.style.display = 'none'
                reponse4.style.display = 'none'
            }, "1000")
        } else {
            setTimeout(() => {
                sonGameOver.play();
            }, 1500)
            setTimeout(() => {
                sonsFinPartie.push(sonsMerci, sonsProchainement)
                sonsFinPartie[Math.floor(Math.random() * sonsFinPartie.length)].play();
            }, 4000)
            blurred2.style.display = 'flex'
            reponse1.style.backgroundColor = "green"
            reponse1.style.animation = 'blink 0.5s infinite'
            setTimeout(() => {
                JeanPierre2.style.visibility = 'hidden'
                reponse1.style.animation = 'none'
                reponse1.style.backgroundColor = "rgb(50, 40, 77)"
                questions.style.visibility = "hidden"
                responses.style.visibility = "hidden"
                reponse1.style.display = 'none'
                reponse2.style.display = 'none'
                reponse3.style.display = 'none'
                reponse4.style.display = 'none'
            }, "1000")
        }
    }
    bonus3.addEventListener("click", function () {
        bonus3.style.opacity = "0.6"
        bonus3.style.filter = 'hue-rotate(90deg)'
        bonus3.style.pointerEvents = 'none'
        propositions = propositions == 0 ? 1 : 2;
        propositions = propositions == 1 ? 0 : 2;
        propositions = propositions == 2 ? 0 : 1;
        propositions2 = propositions2 == 0 ? 1 : 2;
        propositions2 = propositions2 == 1 ? 0 : 2;
        propositions2 = propositions2 == 2 ? 0 : 1;
        propositions3 = propositions3 == 0 ? 1 : 2;
        propositions3 = propositions3 == 1 ? 0 : 2;
        propositions3 = propositions3 == 2 ? 0 : 1;
        propositions4 = propositions4 == 0 ? 1 : 2;
        propositions4 = propositions4 == 1 ? 0 : 2;
        propositions4 = propositions4 == 2 ? 0 : 1;
        propositions5 = propositions5 == 0 ? 1 : 2;
        propositions5 = propositions5 == 1 ? 0 : 2;
        propositions5 = propositions5 == 2 ? 0 : 1;
        propositions6 = propositions6 == 0 ? 1 : 2;
        propositions6 = propositions6 == 1 ? 0 : 2;
        propositions6 = propositions6 == 2 ? 0 : 1;
        propositions7 = propositions7 == 0 ? 1 : 2;
        propositions7 = propositions7 == 1 ? 0 : 2;
        propositions7 = propositions7 == 2 ? 0 : 1;
        propositions8 = propositions8 == 0 ? 1 : 2;
        propositions8 = propositions8 == 1 ? 0 : 2;
        propositions8 = propositions8 == 2 ? 0 : 1;
        propositions9 = propositions9 == 0 ? 1 : 2;
        propositions9 = propositions9 == 1 ? 0 : 2;
        propositions9 = propositions9 == 2 ? 0 : 1;

        if (question == 2) {
            if (propositions == 0) {
                setTimeout(() => {
                    reponse4.style.animation = "none";
                    reponse4.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Le H1 est une balise HTML qui indique le titre sur un site web."
                    GameQuestion.innerHTML =
                        "Quelle balise doit être intégrée une seule fois sur une page internet ?";
                    reponse1.innerHTML = "H2";
                    reponse2.innerHTML = "H1";
                    reponse3.innerHTML = "H3";
                    reponse4.innerHTML = "H7";
                }, 1000);
                one = false;
                two = true;
                three = false;
                four = false;
            }
            if (propositions == 1) {
                setTimeout(() => {
                    reponse4.style.animation = "none";
                    reponse4.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Le localisateur uniforme de ressource est l'adresse d'un site ou d'une page hypertexte sur internet."
                    GameQuestion.innerHTML = "Que signifie URL ?";
                    reponse1.innerHTML = "Universal Rocket League";
                    reponse2.innerHTML = "Uniform Ressource Locator";
                    reponse3.innerHTML = "Unification Realiste Locale";
                    reponse4.innerHTML = "Union Républicaine libre ";
                }, 1000);
                one = false;
                two = true;
                three = false;
                four = false;
            }
            if (propositions == 2) {
                setTimeout(() => {
                    reponse4.style.animation = "none";
                    reponse4.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: SEA peut être une page de résultats suite à une requête lancée sur un moteur de recherche."
                    GameQuestion.innerHTML = "Que signifie l'acronyme SEA ?";
                    reponse1.innerHTML = "Serpentard Engraine Aragogue";
                    reponse2.innerHTML = "Search Engine Advertising";
                    reponse3.innerHTML = "Search Engine Animated";
                    reponse4.innerHTML = "Search Engine Alabama";
                }, 1000);
                one = false;
                two = true;
                three = false;
                four = false;
            }
        }
        if (question == 3) {
            if (propositions2 == 0) {
                setTimeout(() => {
                    reponse2.style.animation = "none";
                    reponse2.style.backgroundColor = "rgb(50, 40, 77)";
                    GameQuestion.innerHTML =
                        "Quelle technique permet à votre site de s'adapter automatiquement à toutes les tailles d'écrans ?";
                    reponse1.innerHTML = "Le Copy and PAste";
                    reponse2.innerHTML = "Le control + Z";
                    reponse3.innerHTML = "Responsive Web Design";
                    reponse4.innerHTML = "Adaptive Screen Design";
                }, "1000");
                one = false;
                two = false;
                three = true;
                four = false;
            }
            if (propositions2 == 1) {
                setTimeout(() => {
                    reponse2.style.animation = "none";
                    reponse2.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Fait référence à la concéption d'un site ou d'une application qui répond à l'environnement dans lequel il est vu."
                    GameQuestion.innerHTML =
                        "Comment appelle-t-on un site utilisant le responsive design ?";
                    reponse1.innerHTML = "Un site web on fleek";
                    reponse2.innerHTML = "Un site web formatif";
                    reponse3.innerHTML = "Un site web réactif";
                    reponse4.innerHTML = "Un site web récréatif";
                }, "1000");
                one = false;
                two = false;
                three = true;
                four = false;
            }
            if (propositions2 == 2) {
                setTimeout(() => {
                    reponse2.style.animation = "none";
                    reponse2.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Le SEO correspond au référencement naturel, le SEA est un référencement payant."
                    GameQuestion.innerHTML =
                        "Quelle est la différence entre SEO et SEA ?";
                    reponse1.innerHTML = "Le SEO est fait pour les sites online";
                    reponse2.innerHTML = "Le SEA est fait pour les applications";
                    reponse3.innerHTML = "Le SEO est naturel, le SEA payant";
                    reponse4.innerHTML = "Le SEO est payant, le SEA est gratuit";
                }, "1000");
                one = false;
                two = false;
                three = true;
                four = false;
            }
        }
        if (question == 4) {
            if (propositions3 == 0) {
                setTimeout(() => {
                    reponse3.style.animation = "none";
                    reponse3.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: C'est une balise HTML correspondant au titre de votre page web."
                    GameQuestion.innerHTML =
                        "Dans la page de résulats Google, à quelle balise correspond la ligne principale en bleu ? ";
                    reponse1.innerHTML = "Meta Title";
                    reponse2.innerHTML = "Tetra Title";
                    reponse3.innerHTML = "Balise Title";
                    reponse4.innerHTML = "Balise H1";
                }, "1000");
                one = true;
                two = false;
                three = false;
                four = false;
            }
            if (propositions3 == 1) {
                setTimeout(() => {
                    reponse3.style.animation = "none";
                    reponse3.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: c'est un texte visible utilisé pour créer des liens vers des pages internes ou externes à votre site."
                    GameQuestion.innerHTML = "Qu'est ce qu'un texte d'ancrage ?";
                    reponse1.innerHTML = "Un lien hypertexte";
                    reponse2.innerHTML = "Un texte écrit à la plume";
                    reponse3.innerHTML = "Un texte de développement personnel";
                    reponse4.innerHTML = "Un pop-up de référence";
                }, "1000");
                one = true;
                two = false;
                three = false;
                four = false;
            }
            if (propositions3 == 2) {
                setTimeout(() => {
                    reponse3.style.animation = "none";
                    reponse3.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: c'est un texte visible utilisé pour créer des liens vers des pages internes ou externes à votre site."
                    GameQuestion.innerHTML =
                        "Quelle est la longueur approximative d'une balise Title sur Google";
                    reponse1.innerHTML = "65 caractères";
                    reponse2.innerHTML = "120 caractères";
                    reponse3.innerHTML = "40 caractères";
                    reponse4.innerHTML = "160 caractères";
                }, "1000");
                one = true;
                two = false;
                three = false;
                four = false;
            }
        }
        if (question == 5) {
            if (propositions4 == 0) {
                setTimeout(() => {
                    reponse1.style.animation = "none";
                    reponse1.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Technique fondamentale dans le référencement consistant à multiplier les backlinks (lien pointant vers un site Internet)."
                    GameQuestion.innerHTML = "Qu'est ce que le netlinking ?";
                    reponse1.innerHTML =
                        "Multiplier les liens pointants vers un autre site internet";
                    reponse2.innerHTML = "Technique pour surfer sur le net";
                    reponse3.innerHTML = "La conception de balises HTML";
                    reponse4.innerHTML = "Inserer des pop up dans un site";
                }, "1000");
                one = true;
                two = false;
                three = false;
                four = false;
            }
            if (propositions4 == 1) {
                setTimeout(() => {
                    reponse1.style.animation = "none";
                    reponse1.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: 301 redirect est un code de réponse HTTP qui est utilisé pour une redirection d'URL permanente."
                    GameQuestion.innerHTML = "Que signifie le code de redirection 301 ?";
                    reponse1.innerHTML = "Une redirection permanente";
                    reponse2.innerHTML = "Une erreur qui touche à la base de données";
                    reponse3.innerHTML = "Une erreur interne au serveur";
                    reponse4.innerHTML = "Erreur Fatale";
                }, "1000");
                one = true;
                two = false;
                three = false;
                four = false;
            }
            if (propositions4 == 2) {
                setTimeout(() => {
                    reponse1.style.animation = "none";
                    reponse1.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Un lien hypertexte qui permet d'envoyer un internaute d'un site web X vers un site web Y."
                    GameQuestion.innerHTML =
                        "Comment appelle-t-on un lien pointant vers un autre site internet ?";
                    reponse1.innerHTML = "Un Backlink";
                    reponse2.innerHTML = "Un Otherlink";
                    reponse3.innerHTML = "Un Weblink";
                    reponse4.innerHTML = "Un Decklink";
                }, "1000");
                one = true;
                two = false;
                three = false;
                four = false;
            }
        }
        if (question == 6) {
            if (propositions5 == 0) {
                setTimeout(() => {
                    reponse1.style.animation = "none";
                    reponse1.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Taux d’internautes qui sont entrés sur une page Web et qui ont quitté le site après, sans consulter d'autres pages"
                    GameQuestion.innerHTML = "Qu'est ce qu'un taux de rebond ?";
                    reponse1.innerHTML = "Le taux de recharge d'une page";
                    reponse2.innerHTML =
                        "C'est le pourcentage de rebonds d'une balle contre un mur";
                    reponse3.innerHTML =
                        "Quand l'internaute n'a consulté qu'une seule page du site sur lequel il a atterri";
                    reponse4.innerHTML =
                        "Le taux de visiteurs qui double clic sur la page";
                }, "1000");
                one = false;
                two = false;
                three = true;
                four = false;
            }
            if (propositions5 == 1) {
                setTimeout(() => {
                    reponse1.style.animation = "none";
                    reponse1.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Une page de résultats suite à une requête lancée sur un moteur de recherche."
                    GameQuestion.innerHTML = "Que signifie l'acronyme SERP ?";
                    reponse1.innerHTML = "Serpentard Engraine Rogue à Poudlard";
                    reponse2.innerHTML = "Search Engine Ranking Page";
                    reponse3.innerHTML = "Search Engine Results Page";
                    reponse4.innerHTML = "Serpillère";
                }, "1000");
                one = false;
                two = false;
                three = true;
                four = false;
            }
            if (propositions5 == 2) {
                setTimeout(() => {
                    reponse1.style.animation = "none";
                    reponse1.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Googlebot est le nom générique du robot d'exploration de Google. Il désigne deux types de robots d'exploration distincts : l'un simule un internaute sur un ordinateur, tandis que l'autre simule un utilisateur sur un appareil mobile."
                    GameQuestion.innerHTML =
                        "Comment s'appelle le robot du moteur de recherche Google";
                    reponse1.innerHTML = "Tim Cook";
                    reponse2.innerHTML = "Hummingbird";
                    reponse3.innerHTML = "GoogleBot";
                    reponse4.innerHTML = "iRobot";
                }, "1000");
                one = false;
                two = false;
                three = true;
                four = false;
            }
        }
        if (question == 7) {
            if (propositions6 == 0) {
                setTimeout(() => {
                    reponse3.style.animation = "none";
                    reponse3.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Le système de notation utilisé par Google pour évaluer la qualité d’un site Web."
                    GameQuestion.innerHTML = "Qu'est ce que le page rank ?";
                    reponse1.innerHTML =
                        "Le positionnement dans la page de recherche Google";
                    reponse2.innerHTML = "Un habitant de Bolbec";
                    reponse3.innerHTML = "Un système de notation utilisé par Google";
                    reponse4.innerHTML = "Une technique de codage";
                }, "1000");
                one = true;
                two = false;
                three = false;
                four = false;
            }
            if (propositions6 == 1) {
                setTimeout(() => {
                    reponse3.style.animation = "none";
                    reponse3.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Le cloaking est une technique (interdite par Google) qui permet de fournir un résultat (une page web) différent selon le visiteur qui demande à consulter une information. "
                    GameQuestion.innerHTML =
                        "Qu'est ce que le Cloaking sur un site web ?";
                    reponse1.innerHTML =
                        "Afficher des informations différentes pour un robot et un internaute";
                    reponse2.innerHTML = "Afficher l'heure sur un site web";
                    reponse3.innerHTML = "Faire claquer sa langue sur son palais ";
                    reponse4.innerHTML = "Du traffic de codes";
                }, "1000");
                one = true;
                two = false;
                three = false;
                four = false;
            }
            if (propositions6 == 2) {
                setTimeout(() => {
                    reponse3.style.animation = "none";
                    reponse3.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Le cloaking est une technique d’optimisation strictement interdite par Google."
                    GameQuestion.innerHTML =
                        "Le cloaking est une technique strictement interdite par :";
                    reponse1.innerHTML = "Google";
                    reponse2.innerHTML = "Monsieur Ferreira";
                    reponse3.innerHTML = "Mozilla Firefox";
                    reponse4.innerHTML = "Wordpress";
                }, "1000");
                one = true;
                two = false;
                three = false;
                four = false;
            }
        }
        if (question == 8) {
            if (propositions7 == 0) {
                setTimeout(() => {
                    reponse1.style.animation = "none";
                    reponse1.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Le système de notation utilisé par Google pour évaluer la qualité d’un site Web."
                    GameQuestion.innerHTML = "Quelle est la bonne balise lien ?";
                    reponse1.innerHTML = "<media='https://campussaintmarcrouen.com'/a>";
                    reponse2.innerHTML =
                        "<a href media='https://campussaintmarcrouen.com'/>Campus Saint Marc Rouen</a>";
                    reponse3.innerHTML =
                        "<media='https://campussaintmarcrouen.com'/>Campus Saint Marc Rouen</a>";
                    reponse4.innerHTML =
                        "<a href='https://campussaintmarcrouen.com'>Campus Saint Marc Rouen</a>";
                }, "1000");
                one = false;
                two = false;
                three = false;
                four = true;
            }
            if (propositions7 == 1) {
                setTimeout(() => {
                    reponse1.style.animation = "none";
                    reponse1.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: La longue traîne est l’ensemble des mots clés qui, pris individuellement, génèrent peu de trafic mais qui, une fois cumulés, peuvent peser jusqu’à 80 % du trafic."
                    GameQuestion.innerHTML =
                        "La longue traine consiste à gagner du trafic en :";
                    reponse1.innerHTML = "Laissant trainer des lignes de codes";
                    reponse2.innerHTML = "Indexant le site via Google";
                    reponse3.innerHTML = "Laissant trainer le voile de la mariée";
                    reponse4.innerHTML = "Cummulant des mots clés";
                }, "1000");
                one = false;
                two = false;
                three = false;
                four = true;
            }
            if (propositions7 == 2) {
                setTimeout(() => {
                    reponse1.style.animation = "none";
                    reponseDev.innerText = "Réponse développée: Format d’adresse URL permettant l’enregistrement d’informations sur les campagnes webmarketing. Une url de tracking, encore appelée “lien tracké” est traditionnellement utilisée dans le cadre de la mesure de performance des campagnes payantes d’acquisition de trafic."
                    reponse1.style.backgroundColor = "rgb(50, 40, 77)";
                    GameQuestion.innerHTML = "Qu'est ce que la tracking'";
                    reponse1.innerHTML = "Suivre quelqu'un à la sortie du métro";
                    reponse2.innerHTML = "Monsieur Lemetais en challenge";
                    reponse3.innerHTML = "Robots de Google qui inspectent votre page";
                    reponse4.innerHTML = "Pister les internautes sur Internet ";
                }, "1000");
                one = false;
                two = false;
                three = false;
                four = true;
            }
        }
        if (question == 9) {
            if (propositions8 == 0) {
                setTimeout(() => {
                    reponse4.style.animation = "none";
                    reponse4.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Une balise HTML qui permet aux moteurs de recherche d'avoir un aperçu du contenu des pages affichées dans la SERP."
                    GameQuestion.innerHTML = "Qu'est ce que la balise meta description ?";
                    reponse1.innerHTML = "La balise utilisée dans le metaverse";
                    reponse2.innerHTML = "Une description des plug-ins";
                    reponse3.innerHTML =
                        "Elle fournit une description aux moteurs de recherche";
                    reponse4.innerHTML = "Un assemblement de métastases";
                }, "1000");
                one = false;
                two = false;
                three = true;
                four = false;
            }
            if (propositions8 == 1) {
                setTimeout(() => {
                    reponse4.style.animation = "none";
                    reponse4.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Il s'agit d'un logiciel qui a pour principale mission d'explorer le Web afin d'analyser le contenu des documents visités."
                    GameQuestion.innerHTML =
                        "L'indexation des sites Web sur Internet est effectuée par ?";
                    reponse1.innerHTML = "Les hommes crabes";
                    reponse2.innerHTML = "La base de données";
                    reponse3.innerHTML = "Les crawlers";
                    reponse4.innerHTML = "Monsieur Ferreira";
                }, "1000");
                one = false;
                two = false;
                three = true;
                four = false;
            }
            if (propositions8 == 2) {
                setTimeout(() => {
                    reponse4.style.animation = "none";
                    reponse4.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Un cookie est un petit fichier stocké par un serveur dans le terminal (ordinateur, téléphone, etc.) d'un utilisateur."
                    GameQuestion.innerHTML = "Qu'est ce qu'un cookie ?";
                    reponse1.innerHTML = "Un biscuit au chocolat";
                    reponse2.innerHTML = "Un équivalent des CGU";
                    reponse3.innerHTML =
                        "Un fichier stockant nos informations de navigation en mémoire";
                    reponse4.innerHTML = "Un virus bénin";
                }, "1000");
                one = false;
                two = false;
                three = true;
                four = false;
            }
        }
        if (question == 10) {
            if (propositions9 == 0) {
                setTimeout(() => {
                    reponse3.style.animation = "none";
                    reponse3.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: Il sert à améliorer le positionnement d'une page, d'un site ou d'une application web dans la page de résultats d'un moteur de recherche."
                    GameQuestion.innerHTML = "Que signifie l'acronyme SEO";
                    reponse1.innerHTML = "Search Engine Optimisation";
                    reponse2.innerHTML = "Scientific Engine Organizations";
                    reponse3.innerHTML = "Surfing Europeen Oligation";
                    reponse4.innerHTML = "Solution Excluding Orphans";
                }, "1000");
                one = true;
                two = false;
                three = false;
                four = false;
            }
            if (propositions9 == 1) {
                setTimeout(() => {
                    reponse3.style.animation = "none";
                    reponse3.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: C'est l'organisation (maillage) des liens permettant de naviguer d'une page à une autre d'un même site web."
                    GameQuestion.innerHTML =
                        "Qu’est-ce que le maillage interne d’un site Web ?";
                    reponse1.innerHTML =
                        "L’ensemble des liens internes entre les pages d’un site Web";
                    reponse2.innerHTML = "L'ensemble des connexions d'un site web";
                    reponse3.innerHTML = "L'ensembles des liens mail d'un site web";
                    reponse4.innerHTML = "L'ensemble des liens externes d'un site web";
                }, "1000");
                one = true;
                two = false;
                three = false;
                four = false;
            }
            if (propositions9 == 2) {
                setTimeout(() => {
                    reponse3.style.animation = "none";
                    reponse3.style.backgroundColor = "rgb(50, 40, 77)";
                    reponseDev.innerText = "Réponse développée: À l'époque où les imprimeurs recevaient des manuscrits (écrits «à la main», pas tapés à la machine donc), ils composaient en italique ce qui était souligné dans le texte."
                    GameQuestion.innerHTML = "Dans quel cas doit-on souligner un texte ?";
                    reponse1.innerHTML = "Pour les titres d'oeuvre";
                    reponse2.innerHTML = "Pour un lien cliquable";
                    reponse3.innerHTML = "Pour faire jolie ";
                    reponse4.innerHTML = "Il ne faut rien souligner";
                }, "1000");
                one = true;
                two = false;
                three = false;
                four = false;
            }
        }
    });
})


let croix = document.querySelector('.croix')
let tuto = document.querySelector('.tuto')
function commentJouer() {
    tuto.style.display = 'block'
}

function croixClicked() {
    tuto.style.display = 'none'

}
let clickedBtn1 = 0
bonus1.addEventListener("click", function () {
    if (clickedBtn1 == 0 && four == true) {
        clickedBtn1 = 1
        let bonusTab = []
        if (four == true) {
            bonusTab.push("reponse1", "reponse2", "reponse3")
        }
        console.log(bonusTab)
        let numberRand = entierAleatoire(0, 2);
        document.querySelector("." + bonusTab[numberRand]).style.visibility = "hidden"
        const index = bonusTab.indexOf(bonusTab[numberRand]);
        const x = bonusTab.splice(index, 1);
        let numberRand2 = entierAleatoire(0, 1);
        document.querySelector("." + bonusTab[numberRand2]).style.visibility = "hidden"
        bonus1.style.opacity = "0.6"
        bonus1.style.filter = 'hue-rotate(90deg)'
        bonus1.style.pointerEvents = 'none'
    }
})
bonus1.addEventListener("click", function () {
    if (clickedBtn1 == 0 && two == true) {
        clickedBtn1 = 1
        let bonusTab = []
        if (two == true) {
            bonusTab.push("reponse1", "reponse3", "reponse4")
        }
        console.log(bonusTab)
        let numberRand = entierAleatoire(0, 2);
        document.querySelector("." + bonusTab[numberRand]).style.visibility = "hidden"
        const index = bonusTab.indexOf(bonusTab[numberRand]);
        const x = bonusTab.splice(index, 1);
        let numberRand2 = entierAleatoire(0, 1);
        document.querySelector("." + bonusTab[numberRand2]).style.visibility = "hidden"
        bonus1.style.opacity = "0.6"
        bonus1.style.filter = 'hue-rotate(90deg)'
        bonus1.style.pointerEvents = 'none'
    }
})
bonus1.addEventListener("click", function () {
    if (clickedBtn1 == 0 && three == true) {
        clickedBtn1 = 1
        let bonusTab = []
        if (three == true) {
            bonusTab.push("reponse1", "reponse2", "reponse4")
        }
        console.log(bonusTab)
        let numberRand = entierAleatoire(0, 2);
        document.querySelector("." + bonusTab[numberRand]).style.visibility = "hidden"
        const index = bonusTab.indexOf(bonusTab[numberRand]);
        const x = bonusTab.splice(index, 1);
        let numberRand2 = entierAleatoire(0, 1);
        document.querySelector("." + bonusTab[numberRand2]).style.visibility = "hidden"
        bonus1.style.opacity = "0.6"
        bonus1.style.filter = 'hue-rotate(90deg)'
        bonus1.style.pointerEvents = 'none'
    }
})
bonus1.addEventListener("click", function () {
    if (clickedBtn1 == 0 && one == true) {
        clickedBtn1 = 1
        let bonusTab = []
        if (one == true) {
            bonusTab.push("reponse4", "reponse2", "reponse3")
        }
        console.log(bonusTab)
        let numberRand = entierAleatoire(0, 2);
        document.querySelector("." + bonusTab[numberRand]).style.visibility = "hidden"
        const index = bonusTab.indexOf(bonusTab[numberRand]);
        const x = bonusTab.splice(index, 1);
        let numberRand2 = entierAleatoire(0, 1);
        document.querySelector("." + bonusTab[numberRand2]).style.visibility = "hidden"
        bonus1.style.opacity = "0.6"
        bonus1.style.filter = 'hue-rotate(90deg)'
        bonus1.style.pointerEvents = 'none'
    }
})

function getRandomsInt(max) {
    return Math.floor(Math.random() * max);
}

let bonus2Luck1 = getRandomsInt(3)
let bonus2Luck2 = getRandomsInt(3)
let bonus2Luck3 = getRandomsInt(3)
let bonus2Luck4 = getRandomsInt(3)

let troll = new Audio('sons/Troll_repondeur.mp3')
let jsp = new Audio('sons/Je_sais_pas.mp3')
let reponseA = new Audio('sons/Reponse-A.mp3')
let reponseB = new Audio('sons/La_reponse_B.mp3')
let reponseC = new Audio('sons/La_reponse_C_2.mp3')
let reponseD = new Audio('sons/La_reponse_D.mp3')
let bip = new Audio('sons/Bip.mp3')
let caf = new Audio('La_caf.mp3')
console.log(one)
console.log(two)
console.log(three)
console.log(four)
bonus2.addEventListener("click", function () {
    if (one == true) {
        if (bonus2Luck1 == 0) {
            reponseA.play()
            reponse4.style.display = "none"
            reponse3.style.display = "none"
            reponse2.style.display = "none"
        }
        if (bonus2Luck1 == 1) {
            troll.play()
        }
        if (bonus2Luck1 == 2) {
            jsp.play()
        }
        bonus2.style.opacity = "0.6"
        bonus2.style.filter = 'hue-rotate(90deg)'
        bonus2.style.pointerEvents = 'none'
    }
})

bonus2.addEventListener("click", function () {
    if (two == true) {
        if (bonus2Luck2 == 0) {
            reponseB.play()
            reponse4.style.display = "none"
            reponse3.style.display = "none"
            reponse1.style.display = "none"
        }
        if (bonus2Luck2 == 1) {
            bip.play()
        }
        if (bonus2Luck2 == 2) {
            caf.play()
        }

        bonus2.style.opacity = "0.6"
        bonus2.style.filter = 'hue-rotate(90deg)'
        bonus2.style.pointerEvents = 'none'
    }
})

bonus2.addEventListener("click", function () {
    if (three == true) {
        if (bonus2Luck3 == 0) {
            reponseC.play()
            reponse4.style.display = "none"
            reponse1.style.display = "none"
            reponse2.style.display = "none"
        }
        if (bonus2Luck3 == 1) {
            jsp.play()
        }
        if (bonus2Luck3 == 2) {
            caf.play()
        }

        bonus2.style.opacity = "0.6"
        bonus2.style.filter = 'hue-rotate(90deg)'
        bonus2.style.pointerEvents = 'none'
    }
})

bonus2.addEventListener("click", function () {
    if (four == true) {
        console.log(bonus2Luck4)
        if (bonus2Luck4 == 0) {
            reponseD.play()
            reponse1.style.display = "none"
            reponse2.style.display = "none"
            reponse3.style.display = "none"
        }
        if (bonus2Luck4 == 1) {
            bip.play()
        }
        if (bonus2Luck4 == 2) {
            troll.play()
        }
        bonus2.style.opacity = "0.6"
        bonus2.style.filter = 'hue-rotate(90deg)'
        bonus2.style.pointerEvents = 'none'
    }
})

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let blurred3 = document.querySelector('.blured3')

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            blurred3.style.display = 'flex'
        }
    }, 1000);
}

let blured4 = document.querySelector('.blured4')
let engrenage = document.querySelector('.engrenage')
engrenage.addEventListener('click', () => {
    blured4.style.display = 'flex'
})

function continu() {
    blured4.style.display = 'none'
}

function restart() {
    window.location.reload()
}