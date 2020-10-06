export default function formatMoney (price) {
  if (price < 1) {
    return `${price.toFixed(2) * 100}¢`
  } else {
    return `$${price.toFixed(2)}`;
  }
}