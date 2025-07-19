// imageAnalyzer.js
export async function analyzeChartImage(file) {
  // Step 1: Convert Image to Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const base64Image = await toBase64(file);

  // Step 2: Call Free AI API for Analysis (Mock API for now)
  const response = await fetch("https://api.mockai.tools/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: base64Image,
      features: [
        "candlestick_patterns",
        "chart_patterns",
        "support_resistance",
        "market_structure",
        "smart_money_concept",
        "liquidity_zones",
        "news_sentiment",
      ],
      language: "urdu+english",
    }),
  });

  // Step 3: Get and Return the Response
  if (!response.ok) {
    return {
      success: false,
      message: "تجزیہ کرنے میں مسئلہ پیش آیا۔ بعد میں دوبارہ کوشش کریں۔",
    };
  }

  const result = await response.json();

  return {
    success: true,
    data: result,
  };
}
