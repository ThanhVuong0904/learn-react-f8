#useRef Hook

1. Lưu các giá trị qua một tham chiếu mới bên ngoài function component
2. Là 1 hàm, nhận 1 đối số là **initialValue - giá trị khởi tạo** (bất cứ giá trị gì)
3. Chỉ sử dụng giá trị khởi tạo trong **lần đầu tiên** component được **mounted**, khi component **re-render** nó sẽ **không dùng lại giá trị khởi tạo** nữa
