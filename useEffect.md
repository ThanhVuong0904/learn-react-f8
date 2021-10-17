1. useEffect(callback)
--Gọi callback mỗi khi component re-render
--Gọi callback sau khi component thêm element vào DOM

2. useEffect(callback, [])
--Chỉ gọi callback 1 LẦN sau khi component mounted (gọi API 1 lần)

3. useEffect(callback, [dependencies])
--Callback sẽ được gọi khi dependencies thay đổi

Trường hợp đúng với tất cả
- callback sẽ được gọi khi component mounted
