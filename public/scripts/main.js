document.addEventListener("DOMContentLoaded", () => {
  const signalContainer = document.getElementById("signals-container");

  // Example signal data
  const signals = [
    {
      name: "BTC/USDT",
      type: "Buy",
      entry: "61250",
      sl: "60400",
      tp: "63000",
      accuracy: "95%",
    },
    {
      name: "ETH/USDT",
      type: "Sell",
      entry: "3300",
      sl: "3350",
      tp: "3100",
      accuracy: "91%",
    },
  ];

  // Render signal cards
  signals.forEach((signal) => {
    const card = document.createElement("div");
    card.className = "signal-card";
    card.innerHTML = `
      <h3>${signal.name}</h3>
      <p><strong>Type:</strong> ${signal.type}</p>
      <p><strong>Entry:</strong> ${signal.entry}</p>
      <p><strong>SL:</strong> ${signal.sl}</p>
      <p><strong>TP:</strong> ${signal.tp}</p>
      <p><strong>Accuracy:</strong> ${signal.accuracy}</p>
    `;
    signalContainer.appendChild(card);
  });
});
