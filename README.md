# GoIT React — Ödev 03: Rehber Uygulaması

React, Formik ve CSS Modules kullanılarak geliştirilmiş tam özellikli bir kişi rehberi uygulaması. Kişi ekleme, arama, silme ve karanlık/aydınlık tema geçişi desteklenmektedir.

## Özellikler

- **Kişi ekleme** — Formik ve Yup ile doğrulamalı form (isim ve telefon)
- **Gerçek zamanlı arama** — İsme göre anlık filtreleme
- **Kişi silme** — Her karttan tek tıkla silme
- **Tema geçişi** — Saate göre otomatik başlangıç (07:00–19:00 arası aydınlık, diğer saatler karanlık), manuel geçiş desteği
- **localStorage** — Kişiler sayfa yenilenmesinde korunur
- **Duyarlı ızgara** — Ekran genişliğine göre 1'den 4 sütuna kadar otomatik düzen

## Proje Yapısı

```
src/
├── App.jsx
├── App.module.css
├── index.css
├── main.jsx
└── components/
    ├── ContactForm/
    │   ├── ContactForm.jsx
    │   └── ContactForm.module.css
    ├── SearchBox/
    │   ├── SearchBox.jsx
    │   └── SearchBox.module.css
    ├── ContactList/
    │   ├── ContactList.jsx
    │   └── ContactList.module.css
    ├── Contact/
    │   ├── Contact.jsx
    │   └── Contact.module.css
    └── ThemeToggle/
        ├── ThemeToggle.jsx
        └── ThemeToggle.module.css
```

## Bileşenler

| Bileşen | Açıklama |
|---|---|
| `App` | Kişi durumu, filtreleme ve localStorage senkronizasyonu |
| `ContactForm` | Formik + Yup doğrulamalı kişi ekleme formu |
| `SearchBox` | İsme göre gerçek zamanlı filtreleme girişi |
| `ContactList` | Duyarlı CSS Grid kişi listesi |
| `Contact` | İkon, isim, telefon ve sil butonu içeren kart |
| `ThemeToggle` | Saate dayalı otomatik başlangıçlı tema değiştirici |

## Tema Sistemi

CSS özel özellikleri (`var(--*)`) ile iki tema desteklenmektedir.

| Değişken | Karanlık | Aydınlık |
|---|---|---|
| `--bg-dark` | `#0f172a` | `#f1f5f9` |
| `--card-bg` | `#1e293b` | `#ffffff` |
| `--text-main` | `#f8fafc` | `#1e293b` |
| `--accent` | `#60a5fa` | `#3b82f6` |

Tema değiştirici, `body` üzerindeki `light-mode` sınıfını değiştirerek çalışır. Tüm geçişler `0.3s ease` ile yumuşatılmıştır.

## Duyarlı Izgara

| Genişlik | Sütun Sayısı |
|---|---|
| `< 480px` | 1 |
| `≥ 480px` | 2 |
| `≥ 768px` | 3 |
| `≥ 1024px` | 4 |

## Başlarken

```bash
npm install
npm run dev
```

## Komutlar

| Komut | Açıklama |
|---|---|
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Prodüksiyon için derleme yapar |
| `npm run preview` | Prodüksiyon derlemesini önizler |
| `npm run lint` | ESLint çalıştırır |

## Teknolojiler

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Formik](https://formik.org/) — Form yönetimi
- [Yup](https://github.com/jquense/yup) — Şema doğrulama
- [React Icons](https://react-icons.github.io/react-icons/) — `FaUser`, `FaPhone`
- [nanoid](https://github.com/ai/nanoid) — Benzersiz ID üretimi
- CSS Modules — Kapsamlı bileşen stilleri
- Montserrat — Google Fonts
