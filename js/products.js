// ======================================================
// الأسعار — اكتب الرقم بدل null (بالجنيه، رقم بس).
// المنتج اللي سعره null بيظهر "السعر عند الطلب" ويتطلب عبر واتساب.
// أول ما تكتب رقم، المنتج بيتحول تلقائي لـ "أضف للسلة".
// ======================================================
const PRICES={
  101: null, // منظم مكتب بزخرفة ذهبية
  102: null, // منظم مكتب خشبي بزخرفة هندسية
  103: null, // طقم مكتب بني وذهبي
  104: null, // طقم مكتب أسود وذهبي
  105: null, // علبة أقلام مزخرفة
  201: null, // مبخرة برج منحوتة
  202: null, // مبخرة برج بزهور صغيرة
  203: null, // مبخرة برج ثنائية اللون
  204: null, // مبخرة برج مخرمة
  205: null, // مبخرة بيت خشبية
  206: null, // حامل مصحف مفرغ بالخط العربي
  207: null, // حامل مصحف بزخرفة هندسية
  208: null, // ديكور حائط زهور
};

const products=[
{id:101,name:'منظم مكتب بزخرفة ذهبية',category:'office',sub:'organizer',price:PRICES[101],material:'MDF',size:'حسب الطلب',images:['assets/products/org-gold-1.jpg','assets/products/org-gold-2.jpg','assets/products/org-gold-3.jpg','assets/products/org-gold-4.jpg'],desc:'منظم مكتب أنيق بزخارف منفذة بالليزر، فيه أقسام للأقلام والكروت والدفاتر.',badge:'',customizable:false},
{id:102,name:'منظم مكتب خشبي بزخرفة هندسية',category:'office',sub:'organizer',price:PRICES[102],material:'MDF',size:'حسب الطلب',images:['assets/products/org-geo-1.jpg'],desc:'منظم مكتب بتفريغ هندسي، فيه درج صغير وأقسام للأقلام والكروت.',badge:'',customizable:false},
{id:103,name:'طقم مكتب بني وذهبي',category:'office',sub:'desk',price:PRICES[103],material:'MDF',size:'حسب الطلب',images:['assets/products/set-brown-thumb.jpg','assets/products/set-brown-1.jpg','assets/products/set-brown-2.jpg'],desc:'طقم مكتب كامل بزخرفة ذهبية، مناسب للمدراء والشركات وكهدية.',badge:'',customizable:true,customLabel:'الاسم أو اللوجو المطلوب على الطقم'},
{id:104,name:'طقم مكتب أسود وذهبي',category:'office',sub:'desk',price:PRICES[104],material:'MDF',size:'حسب الطلب',images:['assets/products/set-black-thumb.jpg','assets/products/set-black-1.jpg','assets/products/set-black-2.jpg'],desc:'طقم مكتب كامل بتفاصيل ذهبية على خلفية داكنة، مناسب للمكاتب الرسمية والشركات.',badge:'',customizable:true,customLabel:'الاسم أو اللوجو المطلوب على الطقم'},
{id:105,name:'علبة أقلام مزخرفة',category:'office',sub:'organizer',price:PRICES[105],material:'MDF',size:'حسب الطلب',images:['assets/products/pen-box-1.jpg'],desc:'علبة أقلام بتفاصيل دائرية مفرغة بالليزر.',badge:'',customizable:false},
{id:201,name:'مبخرة برج منحوتة',category:'decor',sub:'incense',price:PRICES[201],material:'MDF',size:'حسب الطلب',images:['assets/products/inc-leaf-1.jpg','assets/products/inc-leaf-2.jpg','assets/products/inc-leaf-3.jpg','assets/products/inc-leaf-4.jpg','assets/products/inc-leaf-5.jpg'],desc:'مبخرة برج خشبية بنقوش منحوتة بالليزر، شكل مميز للمجلس والمنزل.',badge:'',customizable:false},
{id:202,name:'مبخرة برج بزهور صغيرة',category:'decor',sub:'incense',price:PRICES[202],material:'MDF',size:'حسب الطلب',images:['assets/products/inc-flower-1.jpg','assets/products/inc-flower-2.jpg'],desc:'مبخرة برج بلون خشب أحمر وتفريغ زهور صغيرة.',badge:'',customizable:false},
{id:203,name:'مبخرة برج ثنائية اللون',category:'decor',sub:'incense',price:PRICES[203],material:'MDF',size:'حسب الطلب',images:['assets/products/inc-twotone-1.jpg'],desc:'مبخرة برج بوجهين من خشب فاتح وغامق مع تفريغ زهرة كبيرة.',badge:'',customizable:false},
{id:204,name:'مبخرة برج مخرمة',category:'decor',sub:'incense',price:PRICES[204],material:'MDF',size:'حسب الطلب',images:['assets/products/inc-dots-1.jpg','assets/products/inc-dots-2.jpg','assets/products/inc-dots-3.jpg'],desc:'مبخرة برج بتخريم دائري يسمح بخروج البخور بشكل متساوي.',badge:'',customizable:false},
{id:205,name:'مبخرة بيت خشبية',category:'decor',sub:'incense',price:PRICES[205],material:'MDF',size:'حسب الطلب',images:['assets/products/inc-house-1.jpg','assets/products/inc-house-2.jpg'],desc:'مبخرة على شكل بيت صغير بسقف مثقب، قطعة ديكور وبخور في نفس الوقت.',badge:'',customizable:false},
{id:206,name:'حامل مصحف مفرغ بالخط العربي',category:'decor',sub:'quran',price:PRICES[206],material:'MDF',size:'حسب الطلب',images:['assets/products/quran-cal-1.jpg'],desc:'حامل مصحف بخط عربي مفرغ بالليزر، يصلح للمكتب والمنزل وكهدية.',badge:'',customizable:false},
{id:207,name:'حامل مصحف بزخرفة هندسية',category:'decor',sub:'quran',price:PRICES[207],material:'MDF',size:'حسب الطلب',images:['assets/products/quran-geo-1.jpg'],desc:'حامل مصحف بزخرفة هندسية إسلامية مفرغة بالليزر.',badge:'',customizable:false},
{id:208,name:'ديكور حائط زهور',category:'decor',sub:'wall',price:PRICES[208],material:'MDF',size:'حسب الطلب',images:['assets/products/wall-flowers-thumb.jpg','assets/products/wall-flowers-1.jpg'],desc:'ثلاث قطع ديكور حائط بتصميم أصص زهور مفرغة بالليزر.',badge:'',customizable:false}
];
products.forEach(p=>{p.image=p.images[0]});
const cats={all:'الكل',office:'مكاتب وشركات',decor:'ديكور منزل'};
const subs={office:{all:'الكل',desk:'أطقم مكتب',organizer:'منظمات مكتب'},decor:{all:'الكل',incense:'مباخر',quran:'حوامل مصحف',wall:'ديكور حائط'}};
const money=n=>new Intl.NumberFormat('ar-EG').format(n)+' ج.م';
const hasPrice=p=>typeof p.price==='number'&&p.price>0;
const priceText=p=>hasPrice(p)?money(p.price):'السعر عند الطلب';
const waAsk=p=>'https://wa.me/201003956998?text='+encodeURIComponent('مرحبًا، عايز أعرف سعر '+p.name);
function card(p){return `<article class="product-card"><a class="product-image" href="product.html?id=${p.id}">${p.badge?`<b class="badge">${p.badge}</b>`:''}<img src="${p.image}" alt="${p.name}" loading="lazy"><span class="view">عرض المنتج ↗</span></a><div class="product-info"><small>${cats[p.category]}</small><h3><a href="product.html?id=${p.id}">${p.name}</a></h3><p>${p.material} • ${p.size}</p><div class="product-bottom"><strong>${priceText(p)}</strong>${hasPrice(p)?`<button class="add-btn" onclick="addProduct(${p.id})">أضف للسلة</button>`:`<a class="add-btn" target="_blank" href="${waAsk(p)}">اسأل عن السعر</a>`}</div></div></article>`}
function getCart(){try{return(JSON.parse(localStorage.getItem('laserCart'))||[]).filter(i=>products.some(p=>p.id===i.id&&hasPrice(p)))}catch(e){return[]}}
function saveCart(c){localStorage.setItem('laserCart',JSON.stringify(c));updateCartCount()}
function updateCartCount(){document.querySelectorAll('#cartCount').forEach(e=>e.textContent=getCart().reduce((s,i)=>s+i.qty,0))}
function addProduct(id,qty=1,customText=''){customText=(customText||'').trim();let c=getCart(),key=customText?id+'|'+customText:String(id),x=c.find(i=>i.key===key);x?x.qty+=qty:c.push({key,id,qty,customText});saveCart(c);toast('تمت إضافة المنتج للسلة')}
function toast(t){let x=document.querySelector('.toast')||document.body.appendChild(Object.assign(document.createElement('div'),{className:'toast'}));x.textContent=t;x.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>x.classList.remove('show'),1700)}
document.addEventListener('DOMContentLoaded',updateCartCount);
