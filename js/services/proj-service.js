'use strict'

var gProjs = createProjs()

function getProjs() {
    return gProjs
}

function _createProj(id, name, title, desc, url, labels) {
    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt: getTime(),
        labels
    }
}

function createProjs() {
    const projs = []

    projs.push(_createProj('01', 'Mine Sweeper', 'Uniquely redesigned', makeLorem(25), 'https://leesharon.github.io/Mine-Sweeper/', ['JS', 'Matrixes']))
    projs.push(_createProj('02', 'Book Shop', 'Book managar app', makeLorem(25), 'https://leesharon.github.io/Book-Shop/', ['JS', 'Matrixes']))
    projs.push(_createProj('03', 'Ball Board', 'Fun ball game', makeLorem(25), 'https://leesharon.github.io/Ball-Board/', ['JS', 'Matrixes']))
    projs.push(_createProj('04', 'Touch Numbers', 'Check your mouse skills', makeLorem(25), 'https://leesharon.github.io/Touch-the-Numbers/', ['JS', 'Matrixes']))
    projs.push(_createProj('05', 'Pacman', 'Some more matrixes..', makeLorem(25), 'https://leesharon.github.io/Pacman/', ['JS', 'Matrixes']))
    projs.push(_createProj('06', 'Chess', 'Check Mate!', makeLorem(25), 'https://leesharon.github.io/Chess/', ['JS', 'Matrixes']))

    return projs
}

function getModalById(projId) {
    return gProjs.find(proj => proj.id === projId)
}