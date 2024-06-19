

let scrollTo = function (id) {
    document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default scrollTo;