// Store preview settings — confirm your final retail price before launch.
const PRODUCT={name:"Mini Magnetic Drawing Board",price:49.90,currency:"RM"};
let quantity=1,cartQuantity=0,selectedColour="Red";
const $=id=>document.getElementById(id);
const money=n=>`${PRODUCT.currency} ${n.toFixed(2)}`;
$("year").textContent=new Date().getFullYear();
$("price").textContent=money(PRODUCT.price);
function renderCart(){
 $("cart-count").textContent=cartQuantity;
 $("subtotal").textContent=money(cartQuantity*PRODUCT.price);
 $("cart-content").innerHTML=cartQuantity?`<div class="cart-item"><div><strong>${PRODUCT.name}</strong><small>Colour: ${selectedColour} · Quantity: ${cartQuantity}</small></div><strong>${money(cartQuantity*PRODUCT.price)}</strong></div>`:'<p class="empty-cart">Your bag is empty for now.</p>';
}
$("qty-minus").addEventListener("click",()=>{quantity=Math.max(1,quantity-1);$("qty").textContent=quantity;});
$("qty-plus").addEventListener("click",()=>{quantity=Math.min(10,quantity+1);$("qty").textContent=quantity;});
$("add-to-bag").addEventListener("click",()=>{cartQuantity+=quantity;renderCart();$("cart-overlay").hidden=false;});
$("cart-open").addEventListener("click",()=>{$("cart-overlay").hidden=false;});
$("cart-close").addEventListener("click",()=>{$("cart-overlay").hidden=true;});
$("cart-overlay").addEventListener("click",e=>{if(e.target===$("cart-overlay"))$("cart-overlay").hidden=true;});
document.querySelectorAll(".swatch").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".swatch").forEach(b=>b.classList.remove("active"));
 btn.classList.add("active");selectedColour=btn.dataset.colour;$("selected-colour").textContent=selectedColour;renderCart();
 const imageMap={Red:"assets/colour-red.jpg",Black:"assets/colour-black.jpg",Blue:"assets/colour-blue.jpg",Turquoise:"assets/colour-turquoise.jpg"};
 if(imageMap[selectedColour])setMainImage(imageMap[selectedColour]);
}));
function setMainImage(src){
 $("main-image").src=src;
 document.querySelectorAll(".thumb").forEach(b=>b.classList.toggle("active",b.dataset.image===src));
}
document.querySelectorAll(".thumb").forEach(btn=>btn.addEventListener("click",()=>setMainImage(btn.dataset.image)));
renderCart();
