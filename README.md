# Next.js 15 Image Optimization Error

This repository demonstrates a bug in Next.js 15 where image optimization fails when a specific API route is present.  The issue is related to the way Next.js handles image optimization during the build process. The error message is simply "Image optimization failed", which is not very helpful. This repo includes a minimal reproducible example of this error.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser console.

## Solution

The solution involves removing the API route that conflicts with the image optimization process. In this case, it's likely that the API route is interfering with Next.js's ability to process images properly. If this API route is critical you need to find alternative ways of handling images that don't cause conflict.