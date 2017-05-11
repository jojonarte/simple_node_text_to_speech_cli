const say = require('say')
const prompt = require('prompt')

prompt.start()

speakStart()

function speakStart() {
  prompt.get(['message'], (error, result)=> {
      console.log('result.message')
      if (!error) {

        var message = result.message
        say.speak(message)

        if (message.toLowerCase().trim() == 'goodbye') process.exit()

        speakStart()
      }

  })
}
