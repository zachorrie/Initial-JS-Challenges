const randNumGenerator = (number) => {
    let randomNum = Math.floor(Math.random() * number);
    return randomNum;
};


// Work information
const workInfo = {
    satisfaction: ['happy', 'satisfied', 'grumpy', 'hateful', 'miserable', 'inspired', 'excited'],
    occupation: ['architect', 'engineer', 'scientist', 'CEO', 'teacher', 'influencer', 'H3Technician'],
    aptitude: ['ready to change the world', 'so bad at your job', 'the workplace golden goose', 'zuo ni de gong zuo de hai keyi'],
    salary: {
        architect: '65k',
        engineer: '110k',
        scientist: '96k',
        CEO: '343k',
        teacher: '54k',
        influencer: '954k',
        H3Technician: '1.2m'
    }
}


// Store Message Data
let messageData = [];
for (let prop in workInfo) {
    if (prop === 'salary') {
        messageData.push(workInfo[prop][messageData[1]])
    } else {
        let keyValue = workInfo[prop];
        let randomIndex = randNumGenerator(keyValue.length);
        messageData.push(keyValue[randomIndex]);
    }
}


// Log Mixed Message to Console
const workMessage = (array) => {
    let messageArray = [];
    messageArray.push(`You are an incredibly ${messageData[0]} ${messageData[1]}! \u{1F468} \u{1F52C}`)
    messageArray.push(`Although you are ${messageData[2]}, you are shocked to find out that your salary is ${messageData[3]} \u{1F449}`)
    let messageString = messageArray.join('\n');
    console.log(messageString);
}

workMessage(messageData);

    