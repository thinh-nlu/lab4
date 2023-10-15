function getRandomGreeting() {
    const greetings = [
        "Xin chào",
        "Hello",
        "Hi",
        "Bonjour",
        "Hola"
    ]

    const randomIndex = Math.floor(Math.random() * greetings.length)
    return greetings[randomIndex]
}