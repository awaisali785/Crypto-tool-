async function fetchLivePrices() {
  const container = document.getElementById('price-container');
  container.innerHTML = "Loading...";

  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd');
    const data = await response.json();

    container.innerHTML = ''; // Clear previous content

    const coins = {
      bitcoin: "Bitcoin",
      ethereum: "Ethereum",
      litecoin: "Litecoin"
    };

    for (let key in coins) {
      const price = data[key].usd;
      const card = document.createElement('div');
      card.className = 'price-card';
      card.innerHTML = `<h3>${coins[key]}</h3><p>$${price}</p>`;
      container.appendChild(card);
    }

  } catch (error) {
    container.innerHTML = "Failed to load prices.";
    console.error(error);
  }
}

// Fetch prices on page load
window.addEventListener('DOMContentLoaded', fetchLivePrices);
