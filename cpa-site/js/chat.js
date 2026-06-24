document.addEventListener('DOMContentLoaded', function () {
  var win = document.getElementById('chatWindow');
  var input = document.getElementById('chatInput');
  var sendBtn = document.getElementById('chatSend');
  if (!win || !input || !sendBtn) return;

  var responses = [
    { keys: ['cpd', 'hours'], text: "Most members need 120 hours over a rolling 3-year period, including 4 verifiable ethics hours per year. Your provincial body sets the exact rule, here's the link to confirm yours." },
    { keys: ['cfe', 'exam', 'result'], text: 'CFE results for this sitting are posted in your student portal, typically within 8 weeks. The national performance summary is also published on the exam results page.' },
    { keys: ['login', 'password', 'reset', 'locked'], text: 'I can start a password reset right now, or connect you to member support if your account is locked. Which would you like?' },
    { keys: ['benefit', 'discount', 'saving'], text: 'Member benefits this quarter include the early-bird CPD discount and re-investable credits, they can be combined. Want the current list?' },
    { keys: ['find', 'firm', 'public'], text: 'You can search licensed CPAs by city or postal code on the Find a CPA page. Want me to take you there?' }
  ];

  function getResponse(q) {
    var lower = q.toLowerCase();
    for (var i = 0; i < responses.length; i++) {
      for (var j = 0; j < responses[i].keys.length; j++) {
        if (lower.indexOf(responses[i].keys[j]) !== -1) return responses[i].text;
      }
    }
    return "I can help with CPD requirements, exam results, membership, or standards. Could you tell me a bit more about what you're looking for?";
  }

  function addMessage(text, who) {
    var div = document.createElement('div');
    div.className = 'chat-msg ' + who;
    div.textContent = text;
    win.appendChild(div);
    win.scrollTop = win.scrollHeight;
  }

  function showTyping() {
    var dots = document.createElement('div');
    dots.className = 'typing-dots';
    dots.id = 'typingIndicator';
    dots.innerHTML = '<span></span><span></span><span></span>';
    win.appendChild(dots);
    win.scrollTop = win.scrollHeight;
  }

  function removeTyping() {
    var el = document.getElementById('typingIndicator');
    if (el) el.remove();
  }

  function handleAsk(text) {
    if (!text || !text.trim()) return;
    addMessage(text, 'user');
    showTyping();
    setTimeout(function () {
      removeTyping();
      addMessage(getResponse(text), 'bot');
    }, 600);
  }

  document.querySelectorAll('.chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      handleAsk(chip.getAttribute('data-q'));
    });
  });

  sendBtn.addEventListener('click', function () {
    handleAsk(input.value);
    input.value = '';
  });

  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      handleAsk(e.target.value);
      e.target.value = '';
    }
  });
});
