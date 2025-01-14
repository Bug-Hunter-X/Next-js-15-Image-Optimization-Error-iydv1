```javascript
// pages/api/route.js
export default function handler(req, res) {
  // some logic here
  res.status(200).json({ name: 'John Doe' });
}
```
This code causes the following error when using next/image in a component:
```
Error: Image optimization failed
```