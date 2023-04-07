const messages = [
    "Fixed a bug that I created",
    "Added some magic",
    "It works on my machine",
    "Oops",
    "I have no idea what I’m doing",
    "This is fine",
    "Trust me, I’m an engineer",
    "YOLO",
    "I’m sorry, future me",
    "This is not a bug, it’s a feature",
    "I can’t believe this works",
    "Don’t ask me why",
    "I did a thing",
    "Here be dragons",
    "Hold my beer",
    "Let’s hope this works",
    "I’m not a smart man",
    "May the force be with you",
    "That’s what she said",
    "It’s not a bug, it’s an undocumented feature",
    "I have no clue what I just did",
    "This code sucks, but it works",
    "I need a vacation",
    "I'm too lazy to write a proper message",
    "I swear this is the last one",
    "I should have used a linter",
    "I hate this project",
    "I'm sorry for what I'm about to do",
    "It was like that when I got here",
    "Please don't fire me",
    "This is why we can't have nice things",
    "I'm not drunk, I swear",
    "Just testing something, ignore this",
    "Shh, don't tell anyone",
    "Coding is hard",
    "I should have slept more",
    "I hope nobody sees this",
    "This is the best I can do",
    "I'm sorry, Dave. I'm afraid I can't do that",
    "Houston, we have a problem",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };