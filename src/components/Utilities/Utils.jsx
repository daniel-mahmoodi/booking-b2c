export const submitOrderHandler = (event) => {
  event.stopPropagation();
};
// export const ticketStatus = ["تایید شده", "کنسل شده", "درخواست کنسل داده شده", "باطل شده"];
export const ticketStatus = [" درانتظار پرداخت",'پرداخت شده', "کنسل شده"];
export const paymentMethod = ["آنلاین", "کیف پول"];
export const paymentsType = [
  "پرداخت آنلاین",
  "پرداخت با چک",
  "پرداخت از اعتبار",
];
