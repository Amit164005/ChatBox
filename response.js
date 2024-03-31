function getBotResponse(input) {
    
    if (input == "your name") {
        return "Amit Kumar";
    } else if (input == "Developer") {
        return "Yes Front-End Developer";
    } else if (input == "thank u") {
        return "Welocome Amit";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "How are you") {
        return "I am fine!";
    } else {
        return "Try asking something else!";
    }
}