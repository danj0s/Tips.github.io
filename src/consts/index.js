export const FETCHURL = {
  jar: "https://api.monobank.ua/bank/jar/5SCmE79vAMH8eYSgTLn4QQXvsHyRiEbh",
  jarInfo:
    "https://api.monobank.ua/personal/statement/j1j080oczHfu1RkWx880zSfmP4_irnc",
  personalInfo: "https://api.monobank.ua/personal/client-info",
};

export const GETRESOURCE = async (url, options) => {
  const result = await fetch(url, options);

  if (!result.ok) {
    throw new Error(`Pizdec, ${url}, status: ${result.status}`);
  }
  return await result.json();
};
