export const clickable = (event) => {
  event.stopPropagation();
};


export const ticketStatus = ["تایید شده", "کنسل شده", "درخواست کنسل داده شده", "باطل شده"];
export const orderStatus = [" درانتظار پرداخت",'پرداخت شده', "لفو سیستمی"];
export const paymentMethod = ["آنلاین", "کیف پول"];
export const paymentsType = [
  "پرداخت آنلاین",
  "پرداخت با چک",
  "پرداخت از اعتبار",
];
