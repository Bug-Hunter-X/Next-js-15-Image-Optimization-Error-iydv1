```javascript
// pages/api/route.js //remove this file

// or if you can't remove this file, change the location of the api route
// pages/api/other/route.js
export default function handler(req, res) {
  // some logic here
  res.status(200).json({ name: 'John Doe' });
}
```