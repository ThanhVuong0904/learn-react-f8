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
```javascript
export default function Content() {
//Clean up function luôn được gọi trước khi callback được gọi (trừ lần mounted)
  const [count, setCount] = useState(1)
  useEffect(() => {
    console.log(`Mounted or Re-render lần ${count}`);

    return () => console.log(`Clean up lần ${count}`);
  }, [count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  )
}
```
![image](https://user-images.githubusercontent.com/68543789/139404168-64aa2a01-cb9c-4313-9a09-4b101a577011.png)

