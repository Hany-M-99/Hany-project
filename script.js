/* ============================================
   مطعم اللهيب - ملف الوظائف الكامل
   ============================================ */

// ===== الإعدادات =====
const WHATSAPP_NUMBER = "201067573766"; // 01067573766

// رسوم التوصيل حسب المحافظة
const DELIVERY_FEES = {
    "الدقهلية": 50,
    "القاهرة": 100,
    "الجيزة": 100,
    "الإسكندرية": 100,
    "الشرقية": 100,
    "المنوفية": 100,
    "القليوبية": 100,
    "الغربية": 100,
    "البحيرة": 100,
    "دمياط": 100,
    "بورسعيد": 100,
    "الإسماعيلية": 100,
    "السويس": 100,
    "كفر الشيخ": 100,
    "الفيوم": 150,
    "بني سويف": 150,
    "المنيا": 150,
    "أسيوط": 150,
    "سوهاج": 150,
    "قنا": 150,
    "الأقصر": 150,
    "أسوان": 150,
    "البحر الأحمر": 150,
    "الوادي الجديد": 150,
    "مطروح": 150,
    "شمال سيناء": 150,
    "جنوب سيناء": 150
};

// ===== الترجمة =====
const TRANSLATIONS = {
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_menu: "المينيو",
        nav_gallery: "صورنا",
        nav_reviews: "آراء العملاء",
        nav_contact: "تواصل",
        hero_tag: "✨ الأشهى في مصر",
        hero_title_1: "مشويات",
        hero_title_2: "فاخرة",
        hero_title_3: "على أصولها",
        hero_subtitle: "أجود أنواع اللحوم الطازجة، مشوية على الفحم، بلمسة أسرار خاصة صنعت شهرتنا منذ 1995",
        hero_btn_1: "اطلب الآن 🔥",
        hero_btn_2: "تعرف علينا",
        feat_1: "شوي على الفحم",
        feat_2: "لحوم طازجة 100%",
        feat_3: "توصيل سريع",
        about_tag: "قصتنا",
        about_title_1: "من",
        about_title_2: "نحن",
        about_subtitle: "رحلة 30 عاماً من النكهة الأصيلة",
        about_h3: "حكاية اللهيب",
        about_p1: "بدأت رحلتنا عام 1995 من مطبخ صغير في قلب القاهرة، بحلم واحد: نقدم أطيب المشويات اللي الناس تدوقها. النهارده بقينا وجهة لعشاق اللحم المشوي في مصر.",
        about_p2: "نختار لحومنا يومياً بعناية، ونستخدم بهارات وتوابل مشهورة بالاسم، ونشوي على الفحم الطبيعي للحصول على الطعم الأصيل.",
        stat_1: "سنة التأسيس",
        stat_2: "طبق في المينيو",
        stat_3: "عميل سعيد",
        stat_4: "فروع في مصر",
        menu_tag: "ماذا نقدم",
        menu_title_1: "قائمة",
        menu_title_2: "الطعام",
        menu_subtitle: "أشهى الأطباق بانتظارك",
        cat_all: "الكل",
        cat_grill: "المشويات",
        cat_app: "المقبلات",
        cat_side: "الأطباق الجانبية",
        cat_drink: "المشروبات",
        cat_dessert: "الحلويات",
        add_btn: "أضف +",
        item1_name: "كباب لحم", item1_desc: "كباب لحم بلدي مشوي على الفحم مع أرز وسلطة",
        item2_name: "دجاج مشوي", item2_desc: "نصف دجاجة مشوية بالتوابل الخاصة",
        item3_name: "طرب", item3_desc: "طرب مشوي بلمسة الشيف الخاصة",
        item4_name: "كفتة مشوية", item4_desc: "كفتة لحم مفروم بالبهارات مع أرز",
        item5_name: "ريش ضاني", item5_desc: "ريش ضاني طرية مشوية على الفحم",
        item6_name: "مشاوي مشكلة", item6_desc: "طبق مشاوي مشكل لشخصين (كباب، كفتة، دجاج)",
        item7_name: "سلطة بلدي", item7_desc: "طماطم، خيار، بصل، بقدونس",
        item8_name: "حمص بالطحينة", item8_desc: "حمص كريمي بالطحينة وزيت الزيتون",
        item9_name: "بابا غنوج", item9_desc: "باذنجان مشوي بالطحينة",
        item10_name: "شوربة عدس", item10_desc: "شوربة عدس دافئة بالليمون",
        item11_name: "أرز بخاري", item11_desc: "أرز بسمتي بالبهارات",
        item12_name: "بطاطس مقلية", item12_desc: "بطاطس مقرمشة ذهبية",
        item13_name: "عيش بلدي", item13_desc: "خمس أرغفة عيش بلدي طازج",
        item14_name: "مياه غازية", item14_desc: "كوكاكولا، سبرايت، فانتا",
        item15_name: "عصير مانجو", item15_desc: "عصير مانجو طازج",
        item16_name: "ليمون بالنعناع", item16_desc: "ليمون طازج مع نعناع",
        item17_name: "أم علي", item17_desc: "أم علي بالمكسرات والقشطة",
        item18_name: "تشيز كيك", item18_desc: "تشيز كيك بالفراولة",
        gallery_tag: "لقطات",
        gallery_title_1: "معرض",
        gallery_title_2: "الصور",
        gallery_subtitle: "لمحة من أجوائنا",
        reviews_tag: "قالوا عنا",
        reviews_title_1: "آراء",
        reviews_title_2: "العملاء",
        reviews_subtitle: "سمعتنا من عملائنا",
        review1: "\"أحسن مشويات جربتها في حياتي، اللحمة طازة والطعم خطير\"",
        review1_name: "محمود أحمد", review1_role: "عميل دائم",
        review2: "\"الخدمة سريعة والأكل واصل سخن، تجربة ممتازة بجد\"",
        review2_name: "سارة محمد", review2_role: "عميلة",
        review3: "\"طرب وريش الضاني تحفة، مش هتلاقي زيها في مكان تاني\"",
        review3_name: "عمر خالد", review3_role: "عميل",
        contact_tag: "تواصل",
        contact_title_1: "زورنا أو",
        contact_title_2: "اتصل",
        contact_subtitle: "نحن في خدمتك",
        contact_addr: "العنوان",
        contact_phone: "الهاتف",
        contact_hours: "ساعات العمل",
        contact_hours_val: "يومياً من 1 ظهراً حتى 2 صباحاً",
        form_name: "اسمك",
        form_phone: "رقم هاتفك",
        form_msg: "رسالتك...",
        form_send: "إرسال",
        footer_desc: "أشهى المشويات على الفحم منذ 1995",
        footer_links: "روابط",
        footer_contact: "تواصل",
        footer_rights: "© 2025 مطعم اللهيب. جميع الحقوق محفوظة.",
        cart_title: "🛒 سلة التسوق",
        cart_empty: "السلة فاضية",
        cart_total: "الإجمالي:",
        cart_checkout: "إتمام الأوردر",
        order_title: "📋 بيانات الأوردر",
        order_subtitle: "اكمل بياناتك وسيتم إرسال الطلب على واتساب",
        order_name: "الاسم بالكامل *",
        order_phone: "رقم الهاتف *",
        order_phone2: "رقم هاتف بديل",
        order_city: "المحافظة *",
        order_address: "العنوان بالتفصيل *",
        order_addr_ph: "الشارع، رقم العمارة، الدور، الشقة...",
        order_notes: "ملاحظات إضافية",
        order_notes_ph: "أي طلبات خاصة...",
        order_summary: "ملخص الأوردر",
        order_delivery: "رسوم التوصيل:",
        order_total: "الإجمالي:",
        order_submit: "✅ تأكيد وإرسال على واتساب"
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_menu: "Menu",
        nav_gallery: "Gallery",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        hero_tag: "✨ The Best in Egypt",
        hero_title_1: "Premium",
        hero_title_2: "Grills",
        hero_title_3: "Since 1995",
        hero_subtitle: "The finest fresh meats, grilled on charcoal, with a special secret touch that made our fame since 1995",
        hero_btn_1: "Order Now 🔥",
        hero_btn_2: "About Us",
        feat_1: "Charcoal Grilled",
        feat_2: "100% Fresh Meat",
        feat_3: "Fast Delivery",
        about_tag: "Our Story",
        about_title_1: "Who",
        about_title_2: "We Are",
        about_subtitle: "30 years of authentic flavor",
        about_h3: "The Lahib Story",
        about_p1: "Our journey began in 1995 from a small kitchen in the heart of Cairo, with one dream: to serve the best grills people have ever tasted. Today, we are a destination for grilled meat lovers in Egypt.",
        about_p2: "We carefully select our meat daily, use famous spices and seasonings, and grill on natural charcoal to get the authentic taste.",
        stat_1: "Founded",
        stat_2: "Dishes on Menu",
        stat_3: "Happy Customers",
        stat_4: "Branches",
        menu_tag: "What We Offer",
        menu_title_1: "Our",
        menu_title_2: "Menu",
        menu_subtitle: "The most delicious dishes await you",
        cat_all: "All",
        cat_grill: "Grills",
        cat_app: "Appetizers",
        cat_side: "Side Dishes",
        cat_drink: "Drinks",
        cat_dessert: "Desserts",
        add_btn: "Add +",
        item1_name: "Beef Kebab", item1_desc: "Grilled beef kebab on charcoal with rice and salad",
        item2_name: "Grilled Chicken", item2_desc: "Half grilled chicken with special spices",
        item3_name: "Tarboosh", item3_desc: "Grilled tarboosh with chef's special touch",
        item4_name: "Grilled Kofta", item4_desc: "Minced beef kofta with spices and rice",
        item5_name: "Lamb Chops", item5_desc: "Tender grilled lamb chops on charcoal",
        item6_name: "Mixed Grill", item6_desc: "Mixed grill platter for two (kebab, kofta, chicken)",
        item7_name: "Baladi Salad", item7_desc: "Tomato, cucumber, onion, parsley",
        item8_name: "Hummus with Tahini", item8_desc: "Creamy hummus with tahini and olive oil",
        item9_name: "Baba Ghanoush", item9_desc: "Grilled eggplant with tahini",
        item10_name: "Lentil Soup", item10_desc: "Warm lentil soup with lemon",
        item11_name: "Bukhari Rice", item11_desc: "Basmati rice with spices",
        item12_name: "French Fries", item12_desc: "Golden crispy fries",
        item13_name: "Baladi Bread", item13_desc: "Five fresh baladi bread loaves",
        item14_name: "Soft Drink", item14_desc: "Coca-Cola, Sprite, Fanta",
        item15_name: "Mango Juice", item15_desc: "Fresh mango juice",
        item16_name: "Lemon with Mint", item16_desc: "Fresh lemon with mint",
        item17_name: "Om Ali", item17_desc: "Om Ali with nuts and cream",
        item18_name: "Cheesecake", item18_desc: "Strawberry cheesecake",
        gallery_tag: "Snapshots",
        gallery_title_1: "Our",
        gallery_title_2: "Gallery",
        gallery_subtitle: "A glimpse of our atmosphere",
        reviews_tag: "What They Say",
        reviews_title_1: "Customer",
        reviews_title_2: "Reviews",
        reviews_subtitle: "Our reputation from our customers",
        review1: "\"Best grills I've ever tried, fresh meat and amazing taste\"",
        review1_name: "Mahmoud Ahmed", review1_role: "Regular Customer",
        review2: "\"Fast service and food arrived hot, excellent experience\"",
        review2_name: "Sara Mohamed", review2_role: "Customer",
        review3: "\"Tarboosh and lamb chops are amazing, you won't find better\"",
        review3_name: "Omar Khaled", review3_role: "Customer",
        contact_tag: "Contact",
        contact_title_1: "Visit or",
        contact_title_2: "Call Us",
        contact_subtitle: "We are at your service",
        contact_addr: "Address",
        contact_phone: "Phone",
        contact_hours: "Working Hours",
        contact_hours_val: "Daily from 1 PM to 2 AM",
        form_name: "Your Name",
        form_phone: "Your Phone",
        form_msg: "Your Message...",
        form_send: "Send",
        footer_desc: "The best charcoal grills since 1995",
        footer_links: "Links",
        footer_contact: "Contact",
        footer_rights: "© 2025 Al-Lahib Restaurant. All rights reserved.",
        cart_title: "🛒 Shopping Cart",
        cart_empty: "Cart is empty",
        cart_total: "Total:",
        cart_checkout: "Checkout",
        order_title: "📋 Order Details",
        order_subtitle: "Complete your data and the order will be sent on WhatsApp",
        order_name: "Full Name *",
        order_phone: "Phone Number *",
        order_phone2: "Alternative Phone",
        order_city: "Governorate *",
        order_address: "Detailed Address *",
        order_addr_ph: "Street, building number, floor, apartment...",
        order_notes: "Additional Notes",
        order_notes_ph: "Any special requests...",
        order_summary: "Order Summary",
        order_delivery: "Delivery Fee:",
        order_total: "Total:",
        order_submit: "✅ Confirm & Send on WhatsApp"
    }
};

// ===== المتغيرات =====
let cart = [];
let currentLang = localStorage.getItem('lang') || 'ar';
let currentTheme = localStorage.getItem('theme') || 'dark';

// ===== عناصر الصفحة =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const cartItemsEl = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const orderForm = document.getElementById('orderForm');
const backToTop = document.getElementById('backToTop');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const langToggle = document.getElementById('langToggle');
const langLabel = document.querySelector('.lang-label');
const loader = document.getElementById('loader');
const readingProgress = document.getElementById('readingProgress');

// ============================================
// ===== شاشة التحميل =====
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1800);
});

// ============================================
// ===== الوضع الليلي/النهاري =====
// ============================================
function applyTheme() {
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.textContent = '☀️';
    } else {
        document.body.classList.remove('light-mode');
        themeIcon.textContent = '🌙';
    }
}

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme();
});

// ============================================
// ===== تبديل اللغة =====
// ============================================
function applyLanguage() {
    const html = document.documentElement;
    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.body.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

    langLabel.textContent = currentLang === 'ar' ? 'EN' : 'ع';

    const t = TRANSLATIONS[currentLang];

    // ترجمة النصوص
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // ترجمة الـ placeholder
    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
        const key = el.getAttribute('data-key-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // تحديث السلة
    updateCart();
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', currentLang);
    applyLanguage();
});

// ============================================
// ===== Navbar Scroll + شريط التقدم =====
// ============================================
window.addEventListener('scroll', () => {
    // Navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // زر العودة للأعلى
    if (window.scrollY > 400) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

    // شريط التقدم
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    readingProgress.style.width = scrolled + '%';
});

// ============================================
// ===== Hamburger Menu =====
// ============================================
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});

// ============================================
// ===== Active Nav Link =====
// ============================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// ===== Back to Top =====
// ============================================
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// ===== فتح/غلق السلة =====
// ============================================
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
});

cartClose.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// ============================================
// ===== إضافة منتج للسلة =====
// ============================================
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const name = e.target.getAttribute('data-name');
        const price = parseFloat(e.target.getAttribute('data-price'));
        addToCart(name, price);
    });
});

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    updateCart();
    saveCart();
    showToast(`✅ تم إضافة "${name}" للسلة`);
    playBeep();
}

// ============================================
// ===== حفظ واسترجاع السلة =====
// ============================================
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
            updateCart();
        } catch (e) {
            cart = [];
        }
    }
}

// ============================================
// ===== تحديث السلة =====
// ============================================
function updateCart() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalQty;

    const t = TRANSLATIONS[currentLang];

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<p class="cart-empty">${t.cart_empty}</p>`;
        cartTotal.textContent = '0 ج.م';
        return;
    }

    cartItemsEl.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span>${item.price} × ${item.qty} = ${itemTotal} ج.م</span>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
                <span class="qty-value">${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                <button class="remove-btn" onclick="removeItem(${index})">🗑</button>
            </div>
        `;
        cartItemsEl.appendChild(div);
    });

    cartTotal.textContent = total + ' ج.م';
}

// ============================================
// ===== تغيير الكمية =====
// ============================================
window.changeQty = function(index, change) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCart();
    saveCart();
};

// ============================================
// ===== حذف منتج =====
// ============================================
window.removeItem = function(index) {
    cart.splice(index, 1);
    updateCart();
    saveCart();
};

// ============================================
// ===== صوت تنبيه =====
// ============================================
function playBeep() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.frequency.value = 800;
        osc.type = 'sine';

        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.2);
    } catch (e) {
        // تجاهل لو المتصفح مش داعم
    }
}

// ============================================
// ===== Toast Notification =====
// ============================================
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #d4af37, #a8841f);
        color: #0a0a0a;
        padding: 14px 28px;
        border-radius: 50px;
        font-weight: 700;
        font-family: 'Cairo', sans-serif;
        z-index: 2000;
        box-shadow: 0 10px 30px rgba(212,175,55,0.4);
        animation: toastIn 0.3s ease;
        max-width: 90vw;
        text-align: center;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2200);
}

// ============================================
// ===== إتمام الأوردر =====
// ============================================
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('⚠️ السلة فاضية، أضف منتجات أولاً');
        return;
    }

    cartSidebar.classList.remove('open');
    modalOverlay.classList.add('open');
    renderOrderSummary();
});

// ============================================
// ===== عرض ملخص الأوردر =====
// ============================================
function renderOrderSummary() {
    const summaryEl = document.getElementById('orderSummaryItems');
    const totalEl = document.getElementById('orderTotalPrice');
    const deliveryEl = document.getElementById('deliveryFee');

    summaryEl.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        const line = document.createElement('div');
        line.className = 'summary-line';
        line.innerHTML = `<span>${item.name} × ${item.qty}</span><span>${itemTotal} ج.م</span>`;
        summaryEl.appendChild(line);
    });

    // حساب رسوم التوصيل
    const city = document.getElementById('oCity').value;
    const deliveryFee = city ? (DELIVERY_FEES[city] || 100) : 0;

    deliveryEl.textContent = deliveryFee + ' ج.م';
    totalEl.textContent = (subtotal + deliveryFee) + ' ج.م';
}

// تحديث عند تغيير المحافظة
document.getElementById('oCity').addEventListener('change', renderOrderSummary);

// ============================================
// ===== غلق النافذة =====
// ============================================
modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('open');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('open');
    }
});

// ============================================
// ===== إرسال الأوردر على واتساب =====
// ============================================
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('oName').value.trim();
    const phone = document.getElementById('oPhone').value.trim();
    const phone2 = document.getElementById('oPhone2').value.trim();
    const city = document.getElementById('oCity').value;
    const address = document.getElementById('oAddress').value.trim();
    const notes = document.getElementById('oNotes').value.trim();

    if (!name || !phone || !city || !address) {
        showToast('⚠️ اكمل الحقول المطلوبة');
        return;
    }

    let subtotal = 0;
    let message = `🔥 *أوردر جديد من مطعم اللهيب* 🔥\n\n`;
    message += `👤 *الاسم:* ${name}\n`;
    message += `📱 *الهاتف:* ${phone}\n`;
    if (phone2) message += `📞 *هاتف بديل:* ${phone2}\n`;
    message += `🏙️ *المحافظة:* ${city}\n`;
    message += `📍 *العنوان:* ${address}\n`;
    if (notes) message += `📝 *ملاحظات:* ${notes}\n`;

    message += `\n🛒 *الطلبات:*\n`;
    message += `━━━━━━━━━━━━━━━\n`;

    cart.forEach((item, i) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        message += `${i + 1}. ${item.name}\n`;
        message += `   ${item.price} × ${item.qty} = ${itemTotal} ج.م\n`;
    });

    const deliveryFee = DELIVERY_FEES[city] || 100;
    const grandTotal = subtotal + deliveryFee;

    message += `━━━━━━━━━━━━━━━\n`;
    message += `💵 *المجموع:* ${subtotal} ج.م\n`;
    message += `🚚 *رسوم التوصيل:* ${deliveryFee} ج.م\n`;
    message += `💰 *الإجمالي:* ${grandTotal} ج.م\n\n`;
    message += `⏰ *وقت الطلب:* ${new Date().toLocaleString('ar-EG')}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    showToast('✅ تم إرسال الأوردر على واتساب');

    setTimeout(() => {
        cart = [];
        updateCart();
        saveCart();
        orderForm.reset();
        modalOverlay.classList.remove('open');
    }, 1500);
});

// ============================================
// ===== فلترة المينيو =====
// ============================================
document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.getAttribute('data-category');

        document.querySelectorAll('.menu-card').forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ============================================
// ===== فورم التواصل =====
// ============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('cStatus').textContent = '✅ تم استلام رسالتك، سنتواصل معك قريباً';
        contactForm.reset();
        setTimeout(() => {
            document.getElementById('cStatus').textContent = '';
        }, 4000);
    });
}

// ============================================
// ===== رسوم متحركة عند التمرير =====
// ============================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-card, .review-card, .gallery-item, .stat-box').forEach(el => {
    observer.observe(el);
});

// ============================================
// ===== أنيميشن Toast =====
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes toastIn {
        from { opacity: 0; transform: translateX(-50%) translateY(20px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    @keyframes toastOut {
        from { opacity: 1; }
        to { opacity: 0; transform: translateX(-50%) translateY(20px); }
    }
`;
document.head.appendChild(style);

// ============================================
// ===== تشغيل أولي =====
// ============================================
applyTheme();
applyLanguage();
loadCart();

console.log('%c🔥 مطعم اللهيب', 'color: #d4af37; font-size: 24px; font-weight: bold;');
console.log('%cالموقع شغال 100%', 'color: #d4af37; font-size: 14px;');
