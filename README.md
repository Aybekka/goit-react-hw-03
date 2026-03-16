# GoIT React — Ödev 03: Rehber Uygulaması

React ve Formik kullanılarak geliştirilmiş kişi rehberi uygulaması. Kişi ekleme, isimle arama ve silme işlemleri desteklenmektedir.

## Özellikler

- **Kişi ekleme** — Formik ve Yup ile doğrulamalı form
- **Gerçek zamanlı arama** — İsme göre anlık filtreleme
- **Kişi silme** — Her karttan tek tıkla silme
- **localStorage** — Kişiler sayfa yenilenmesinde korunur
- **Duyarlı ızgara** — Ekran genişliğine göre 1'den 4 sütuna kadar otomatik düzen
- **Tema geçişi** — Saate göre otomatik başlangıç (07:00–19:00 arası aydınlık, diğer saatler karanlık), manuel geçiş desteği

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
    └── Contact/
        ├── Contact.jsx
        └── Contact.module.css
```

## Bileşenler

| Bileşen       | Prop'lar               | Açıklama                                                |
| ------------- | ---------------------- | ------------------------------------------------------- |
| `App`         | —                      | Kişi durumu, filtreleme ve localStorage senkronizasyonu |
| `ContactForm` | `onAdd(fn)`            | Formik + Yup doğrulamalı kişi ekleme formu              |
| `SearchBox`   | `value`, `onChange`    | İsme göre gerçek zamanlı filtreleme girişi              |
| `ContactList` | `contacts`, `onDelete` | Duyarlı CSS Grid kişi listesi                           |
| `Contact`     | `contact`, `onDelete`  | `FaUser` / `FaPhone` ikonlu kişi kartı                  |

## Form Doğrulama

Formik ve Yup ile yönetilen form aşağıdaki kuralları uygular:

| Alan    | Kural                  |
| ------- | ---------------------- |
| İsim    | Zorunlu, 3–50 karakter |
| Telefon | Zorunlu, 3–50 karakter |

## Duyarlı Izgara

| Genişlik   | Sütun Sayısı |
| ---------- | ------------ |
| `< 480px`  | 1            |
| `≥ 480px`  | 2            |
| `≥ 768px`  | 3            |
| `≥ 1024px` | 4            |

## Başlarken

```bash
npm install
npm run dev
```

## Komutlar

| Komut             | Açıklama                        |
| ----------------- | ------------------------------- |
| `npm run dev`     | Geliştirme sunucusunu başlatır  |
| `npm run build`   | Prodüksiyon için derleme yapar  |
| `npm run preview` | Prodüksiyon derlemesini önizler |
| `npm run lint`    | ESLint çalıştırır               |

## Teknolojiler

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Formik](https://formik.org/) — Form yönetimi
- [Yup](https://github.com/jquense/yup) — Şema doğrulama
- [React Icons](https://react-icons.github.io/react-icons/) — `FaUser`, `FaPhone`
- [nanoid](https://github.com/ai/nanoid) — Benzersiz ID üretimi
- CSS Modules — Kapsamlı bileşen stilleri
