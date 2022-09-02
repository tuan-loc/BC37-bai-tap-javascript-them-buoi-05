// Bài tập: Tính thuế thu nhập cá nhân

/**
 * Input: Nhập vào tổng thu nhập năm, số người phụ thuộc
 *
 * Process:
 * 1. Lấy các giá trị nhập vào
 * 2. Tính thu nhập chịu thuế. Thu nhập chịu thuế = tổng thu nhập năm - 4tr - số người phụ thuộc * 1.6tr
 * 3. Tính thuế thu nhập cá nhân. Thuế thu nhập cá nhân = thu nhập chịu thuế * thuế suất tương ứng
 * 4. Xuất kết quả ra màn hình
 *
 * Output: Tính và xuất thuế thu nhập cá nhân phải trả
 */

function personalTax(fullName, income, people) {
  var incomeOfTax = income - 4 - people * 1.6;
  var tax;
  if (incomeOfTax <= 60) {
    tax = (incomeOfTax * 5) / 100;
    console.log(fullName, "Thuế thu nhập cá nhân phải trả:", tax, "triệu");
  } else if (incomeOfTax <= 120) {
    tax = (incomeOfTax * 10) / 100;
    console.log(fullName, "Thuế thu nhập cá nhân phải trả:", tax, "triệu");
  } else if (incomeOfTax <= 210) {
    tax = (incomeOfTax * 15) / 100;
    console.log(fullName, "Thuế thu nhập cá nhân phải trả:", tax, "triệu");
  } else if (incomeOfTax <= 384) {
    tax = (incomeOfTax * 20) / 100;
    console.log(fullName, "Thuế thu nhập cá nhân phải trả:", tax, "triệu");
  } else if (incomeOfTax <= 624) {
    tax = (incomeOfTax * 25) / 100;
    console.log(fullName, "Thuế thu nhập cá nhân phải trả:", tax, "triệu");
  } else if (incomeOfTax <= 960) {
    tax = (incomeOfTax * 30) / 100;
    console.log(fullName, "Thuế thu nhập cá nhân phải trả:", tax, "triệu");
  } else {
    tax = (incomeOfTax * 35) / 100;
    console.log(fullName, "Thuế thu nhập cá nhân phải trả:", tax, "triệu");
  }
}
personalTax("Tuấn Lộc", 200, 4);

// --------------------------------------------------

// Bài tập: Tính tiền cáp

/**
 * Input: Nhập mã khách hàng, loại khách hàng, số kết nối, số kênh cao cấp
 *
 * Process:
 * 1. Lấy các giá trị người dùng nhập vào
 * 2. Nếu khách hàng là nhà dân thì tiền cáp = phí xử lý hóa đơn + phí dịch vụ cơ bản + phí thuê kênh cao cấp * số kênh
 * 3. Nếu khách hàng là doanh nghiệp thì tiền cáp = phí xử lý hóa đơn + phí dịch vị cơ bản (75$ cho tổng 10 kết nối, mỗi kết nối thêm 5$ / kết nối)
 * 4. In kết quả ra màn hình
 *
 * Output: Tính hóa đơn khách hàng cho công ty cáp
 */

function people(channel) {
  return 4.5 + 20.5 + 7.5 * channel;
}

function business(connect, channel) {
  if (connect <= 10) {
    var priceServices = 75;
  } else {
    var priceServices = 75 + (connect - 10) * 5;
  }
  return 15 + priceServices + 50 * channel;
}

function customer(typeOfCustomer, connect, channel) {
  switch (typeOfCustomer) {
    case "PEOPLE":
      return people(channel);

    case "BUSINESS":
      return business(connect, channel);
  }
}

console.log("Hóa đơn khách hàng:", customer("BUSINESS", 12, 5), "$");
