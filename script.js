/* ============================================
   مطعم اللهيب - ملف الوظائف
   ============================================ */

// ===== رقم الواتساب =====
const WHATSAPP_NUMBER = "201067573766"; // 01067573766 بصيغة دولية

// ===== المتغيرات =====
let cart = [];

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

// ===== Navbar Scroll =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    if (window.scrollY > 400) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// ===== Hamburger Menu =====
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});

// ===== Active Nav Link =====
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

// ===== Back to Top =====
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== فتح/غلق السلة =====
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
});

cartClose.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// ===== إضافة منتج للسلة =====
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
    showToast(`✅ تم إضافة "${name}" للسلة`);
}

// ===== تحديث السلة =====
function updateCart() {
    // عدد المنتجات
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalQty;
    
    // عرض المنتجات
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="cart-empty">السلة فاضية</p>';
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

// ===== تغيير الكمية =====
window.changeQty = function(index, change) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCart();
};

// ===== حذف منتج =====
window.removeItem = function(index) {
    cart.splice(index, 1);
    updateCart();
};

// ===== Toast Notification =====
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
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2200);
}

// ===== إتمام الأوردر =====
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('⚠️ السلة فاضية، أضف منتجات أولاً');
        return;
    }
    
    cartSidebar.classList.remove('open');
    modalOverlay.classList.add('open');
    renderOrderSummary();
});

// ===== عرض ملخص الأوردر في النافذة =====
function renderOrderSummary() {
    const summaryEl = document.getElementById('orderSummaryItems');
    const totalEl = document.getElementById('orderTotalPrice');
    
    summaryEl.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        
        const line = document.createElement('div');
        line.className = 'summary-line';
        line.innerHTML = `<span>${item.name} × ${item.qty}</span><span>${itemTotal} ج.م</span>`;
        summaryEl.appendChild(line);
    });
    
    totalEl.textContent = total + ' ج.م';
}

// ===== غلق النافذة =====
modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('open');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('open');
    }
});

// ===== إرسال الأوردر على واتساب =====
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
    
    // بناء الرسالة
    let message = `🔥 *أوردر جديد من مطعم اللهيب* 🔥\n\n`;
    message += `👤 *الاسم:* ${name}\n`;
    message += `📱 *الهاتف:* ${phone}\n`;
    if (phone2) message += `📞 *هاتف بديل:* ${phone2}\n`;
    message += `🏙️ *المحافظة:* ${city}\n`;
    message += `📍 *العنوان:* ${address}\n`;
    if (notes) message += `📝 *ملاحظات:* ${notes}\n`;
    
    message += `\n🛒 *الطلبات:*\n`;
    message += `━━━━━━━━━━━━━━━\n`;
    
    let total = 0;
    cart.forEach((item, i) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        message += `${i + 1}. ${item.name}\n`;
        message += `   ${item.price} × ${item.qty} = ${itemTotal} ج.م\n`;
    });
    
    message += `━━━━━━━━━━━━━━━\n`;
    message += `💰 *الإجمالي:* ${total} ج.م\n\n`;
    message += `⏰ *وقت الطلب:* ${new Date().toLocaleString('ar-EG')}`;
    
    // فتح واتساب
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    showToast('✅ تم إرسال الأوردر على واتساب');
    
    // تفريغ السلة
    setTimeout(() => {
        cart = [];
        updateCart();
        orderForm.reset();
        modalOverlay.classList.remove('open');
    }, 1500);
});

// ===== فلترة المينيو =====
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

// ===== فورم التواصل =====
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

// ===== رسوم متحركة عند التمرير =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-card, .review-card, .gallery-item, .stat-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===== أنيميشن Toast =====
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

// ===== رسالة ترحيب في الكونسول =====
console.log('%c🔥 مطعم اللهيب', 'color: #d4af37; font-size: 24px; font-weight: bold;');
console.log('%cمرحباً بك! الموقع شغال 100%', 'color: #d4af37; font-size: 14px;');
