const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'confirm',
    name: 'value',
    message: 'Is your refrigerator running?',
  });

  if (response.value) {
    console.log('You better go catch it! 🥁')
  } else {
    console.log(`Ok, have a nice day. 😁`)
  }

})();
