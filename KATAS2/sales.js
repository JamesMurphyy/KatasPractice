const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1,
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500],
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100],
  },
];

// Implement your code here
let Telus = { totalSales: 0, totalTaxes: 0 };
//Telus.totalSales
//Telus.totalTaxes
let Bombardier = { totalSales: 0, totalTaxes: 0 };
//Bombardier.totalSales
//Bombardier.totalTaxes

// Required OUTPUT //

/*
   {
     Telus: { totalSales: 1300, totalTaxes: 144 },
     Bombardier: { totalSales: 800, totalTaxes: 40 }
   }
*/

const calculateSalesTax = function (salesData, taxRates) {
  const ans = {};

  for (let i = 0; i < salesData.length; i++) {

    if (!ans[salesData[i].name]) {
      ans[salesData[i].name] = { totalSales: 0, totalTaxes: 0 };


      for (let j = 0; j < salesData[i].sales.length; j++) {
        ans[salesData[i].name].totalSales += salesData[i].sales[j];
        ans[salesData[i].name].totalTaxes +=
          salesData[i].sales[j] * taxRates[salesData[i].province];
      }
    } else {
      for (let j = 0; j < salesData[i].sales.length; j++) {
        ans[salesData[i].name].totalSales += salesData[i].sales[j];
        ans[salesData[i].name].totalTaxes +=
          salesData[i].sales[j] * taxRates[salesData[i].province];
      }
    }
  }
  return ans;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));
