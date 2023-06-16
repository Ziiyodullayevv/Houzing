export const replace = (query, value) => {
  let url = new URL(window.location.href); // qaysi urlda turganimizni korsatib turadi
  console.log(url, "url malumotlari");
  url.searchParams.set(query, value);
  if (!value && value !== 0) {
    // value !== 0 qoyilishidan maqsad 0 ni ham qabul qilishi kerak
    url.searchParams.delete(query);
  }
  return url.search;
};
