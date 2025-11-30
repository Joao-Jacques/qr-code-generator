    # QR Code Generator

A single-page **React + Vite** application that generates, previews, and downloads QR codes instantly — no external API required.

## ✨ Features

* Clean, responsive card layout with **Space Grotesk** typography and soft gradients.
* **Local QR generation** using `qrcode.react` (no network dependency).
* Validates URLs before generating the QR code.
* Real-time preview via `<QRCodeCanvas />`.
* One-click **PNG download** directly from the canvas.
* Custom favicon served from `public/qrcode-gen.png`.

## 🚀 Getting Started

**Requirements:** Node.js 18+ and npm.

```bash
npm install
npm run dev     # start development server with HMR
npm run build   # generate production build
npm run preview # preview the production build
```

Then open the app at **[http://localhost:5173](http://localhost:5173)** (default Vite port).

## 📌 Usage

1. Paste a full URL (including `https://`) into the input field.
2. Click **“Gerar QR Code”** to validate and generate the QR.
3. Click **“Baixar PNG”** to download the generated code as an image.

## 📁 Project Structure

```
src/
  App.jsx             # Main wiring + state
  index.css           # Global styles
  components/
    hero.jsx          # Hero/intro section
    qrForm.jsx        # URL form + validation
    qrPreview.jsx     # QR canvas + download
    input.jsx         # URL input field
public/
  qrcode-gen.png      # Favicon
```

## 🧩 Tech Stack

* **React** (functional components + hooks)
* **Vite** (fast bundling and dev server)
* **qrcode.react** (local QR code generation)
* **CSS Modules / Vanilla CSS**

## 📝 Notes

* QR codes are generated **locally** on the user's browser using canvas.
* PNG download is handled by exporting the QR canvas via `toDataURL()`.
