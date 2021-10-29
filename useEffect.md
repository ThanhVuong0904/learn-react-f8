<h1>Use Effect Hook</h1>

 <h3>1. useEffect(callback)</h3>
 
* Gọi callback mỗi khi component re-render
* Gọi callback sau khi component thêm element vào DOM

<h3>2. useEffect(callback, [])</h3>

  * Chỉ gọi callback 1 LẦN sau khi component mounted (gọi API 1 lần)

<h3>3. useEffect(callback, [dependencies])</h3>

  * Callback sẽ được gọi khi dependencies thay đổi

**Trường hợp đúng với tất cả**
* Callback sẽ được gọi khi component mounted
* Clean up function luôn được gọi trước khi component unmounted
* Clean up function luôn được gọi trước khi callback được gọi (trừ lần mounted)
