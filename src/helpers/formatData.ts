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
  });
}

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const toMinutes = (num: number) =>
  num % 60 === 0
    ? `${num / 60} min`
    : `${Math.floor(num / 60)} min ${num % 60} sec`;


export const removeUselessChars = (str: string[])=>{
  const isCuid = (segment: string): boolean => {
    const cuidRegex = /^[a-zA-Z0-9]{25}$/;
    return cuidRegex.test(segment);
  };
  
  return str.filter(
    (path) => !path.startsWith("create") && !isCuid(path)
  );
}