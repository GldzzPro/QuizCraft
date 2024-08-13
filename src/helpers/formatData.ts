
export function percentageNumber(num: number) {
    return new Intl.NumberFormat("en-US", { 
      style: "percent",
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(num / 100);
  }

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  })
}