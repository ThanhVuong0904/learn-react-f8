<h1>useRef Hook</h1>

1. Lưu các giá trị qua một tham chiếu mới bên ngoài function component
2. Là 1 hàm, nhận 1 đối số là **initialValue - giá trị khởi tạo** (bất cứ giá trị gì)
3. Chỉ sử dụng giá trị khởi tạo trong **lần đầu tiên** component được **mounted**, khi component **re-render** nó sẽ **không dùng lại giá trị khởi tạo** nữa

```javascript
  const ref = useRef(99)
 ```

Hàm này sẽ trả về 1 object có properties tên là **current**

![image](https://user-images.githubusercontent.com/68543789/139522158-3e054fb1-6ea7-4e75-b9cf-08a47d3a6448.png)

