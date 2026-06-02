# 🏙️ katibrabat.com

> موقع كاتب عمومي احترافي في الرباط — متعدد اللغات، محسّن لمحركات البحث، جاهز للنشر على GitHub Pages

---

## 📁 هيكل الملفات

```
katib-rabat/
├── index.html          ← الصفحة الرئيسية (HTML + SEO كامل)
├── style.css           ← التصميم (RTL/LTR, Responsive) — لون أزرق
├── app.js              ← منطق التطبيق
├── translations.js     ← محتوى 4 لغات + 110 مقالة مدونة
├── sitemap.xml         ← خريطة الموقع (110+ رابط)
├── robots.txt          ← توجيهات محركات البحث
├── manifest.json       ← PWA manifest
├── service-worker.js   ← خدمة عمال للعمل بدون إنترنت
├── offline.html        ← صفحة عدم الاتصال
├── 404.html            ← صفحة الخطأ المخصصة
├── seo.json            ← بيانات SEO المنظمة
├── .gitignore          ← ملفات Git المستبعدة
└── README.md           ← هذا الملف
```

---

## 🎨 الهوية البصرية

هذا الموقع مخصص **للدار البيضاء** ويستخدم لوحة ألوان زرقاء تعكس هوية المدينة الاقتصادية:
- **اللون الرئيسي:** `#1a3a5c` (أزرق داكن)
- **اللون الذهبي:** `#c8971a`
- **الخلفية:** `#f0f4f8` (رمادي فاتح)

---

## 🚀 النشر على GitHub Pages

### الطريقة السريعة

1. أنشئ repo جديداً على GitHub
2. ارفع جميع الملفات
3. **Settings → Pages → Branch: main → Save**
4. موقعك يعمل على: `https://yourusername.github.io/katib-rabat`

### ربط دومين مخصص (katibrabat.com)

```
Type: A → 185.199.108.153
Type: A → 185.199.109.153
Type: A → 185.199.110.153
Type: A → 185.199.111.153
Type: CNAME → www → yourusername.github.io
```

---

## ✏️ تخصيص المحتوى

### تغيير رقم واتساب
في `app.js` السطر الأول:
```javascript
const WA_NUMBER = "212612605737"; // ← نفس الرقم لكلا الموقعين
```

### تغيير نصوص الموقع
جميع النصوص في `translations.js` — كل لغة في قسمها:
```javascript
TRANSLATIONS.ar  // العربية
TRANSLATIONS.fr  // الفرنسية
TRANSLATIONS.en  // الإنجليزية
TRANSLATIONS.es  // الإسبانية
```

### إضافة مقالة مدونة
في `translations.js`، داخل `BLOG_ARTICLES.ar`:
```javascript
{
  id: "ar-51",
  slug: "slug-url-friendly",
  title: "عنوان المقالة",
  excerpt: "مقتطف قصير...",
  category: "فئة",
  date: "2025-10-01",
  readTime: "5 دقائق"
}
```

---

## 🔍 SEO المُضمَّن

- ✅ Schema.org `LocalBusiness` مع إحداثيات الرباط (34.0209, -6.8416)
- ✅ Geo tags: `MA-07` (Rabat-Settat)
- ✅ Open Graph + Twitter Cards
- ✅ Hreflang لـ 4 لغات في `sitemap.xml`
- ✅ 110 مقالة مدونة مُحسَّنة لمصطلحات الرباط

### مصطلحات SEO المستهدفة
- كاتب عمومي الرباط
- كاتب عمومي الرباط
- écrivain public Rabat
- public writer Rabat
- escritor público Rabat

---

## ⚠️ قائمة تحقق ما بعد النشر

- [ ] استبدل `katibrabat.com` بدومينك في: `sitemap.xml`, `robots.txt`, `index.html`, `seo.json`
- [ ] أضف صورة `og-image.jpg` (1200×630) — صورة الرباط
- [ ] أضف `icons/icon-192.png` و `icons/icon-512.png`
- [ ] أضف Google Analytics
- [ ] أرسل `sitemap.xml` لـ Google Search Console
- [ ] اختبر الموقع على: [PageSpeed Insights](https://pagespeed.web.dev)

---

## 📞 معلومات الاتصال

| | |
|--|--|
| **واتساب** | +212 612 605 737 |
| **بريد** | salatrir@gmail.com |
| **موقع** | katibrabat.com |
| **مدينة** | الرباط، المغرب |

---

## 🔗 الموقع الشقيق

هذا الموقع نسخة الرباط من مشروع مزدوج:
- **KatibMarrakech.com** — موقع مراكش
- **katibrabat.com** — هذا الموقع

كلا الموقعين يستخدمان نفس رقم واتساب: **+212 612 605 737**

---

*بُني بـ ❤️ لخدمة مجتمع الرباط*
