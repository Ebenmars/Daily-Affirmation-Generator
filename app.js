function genQuote(){
    let generateBtn = document.getElementById("genBtn");

    let quotesArr = [
        "I am capable of achieving great things.",
  "I am confident in my abilities.",
  "I embrace challenges and find solutions.",
  "I am deserving of love and happiness.",
  "I am grateful for all that I have in my life.",
  "I am resilient and can overcome any obstacles.",
  "I am constantly growing and evolving.",
  "I believe in myself and my dreams.",
  "I radiate positivity and attract positivity.",
  "I am in control of my own happiness.",
  "I am surrounded by love and support.",
  "I have the power to create the life I desire.",
  "I am open to new opportunities and experiences.",
  "I am worthy of success and abundance.",
  "I choose to focus on the present moment and find joy in it.",
  "I am proud of myself and my achievements.",
  "I trust in my intuition and make wise decisions.",
  "I am full of energy and vitality.",
  "I release all negativity and embrace positivity.",
  "I am loved, cherished, and valued.",
    ];

    let sentence;

    if(generateBtn){
          sentence =  quotesArr[Math.floor(Math.random() * quotesArr.length)];
        document.getElementById("quote").innerHTML = sentence;
    }
}