// =====================================================================
// ⚙️ إعدادات: غيّر الرقم ده برقم الواتساب الحقيقي للمطعم
// الصيغة الدولية بدون + وبدون أصفار في الأول (مصر = 20 + الرقم بدون الصفر)
// مثال: 01012345678  ->  201012345678
// =====================================================================
const RESTAURANT_WHATSAPP = "201012345678";

// ---------------------------------------------------------
// منع حقن HTML (XSS) من مدخلات المستخدم
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---------------------------------------------------------
// زر "Order now" على كروت الأكل
document.querySelectorAll(".product button").forEach((btn) => {
  btn.addEventListener("click", function () {
    const mealName = this.previousElementSibling.textContent.trim();

    const checkbox = Array.from(
      document.querySelectorAll("#meals input[type='checkbox']")
    ).find((cb) => cb.value === mealName);

    if (checkbox) {
      if (!checkbox.checked) {
        checkbox.checked = true;
      } else {
        alert(`${mealName} is selected✅`);
      }
    }
  });
});

// ---------------------------------------------------------
const form = document.getElementById("orderForm");
let pendingOrder = null;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const quantity = parseInt(document.getElementById("quantity").value, 10);

  const selectedMeals = [
    ...document.querySelectorAll("#meals input:checked"),
  ].map((m) => m.value);

  if (name.length < 3) {
    alert("Name is very short");
    return;
  }

  if (!/^[0-9]{10,11}$/.test(phone)) {
    alert("Invalid Number!");
    return;
  }

  if (address.length < 5) {
    alert("Short address!");
    return;
  }

  if (selectedMeals.length === 0) {
    alert("Select Meal");
    return;
  }

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 50) {
    alert("Quantity must be a number between 1 and 50");
    return;
  }

  pendingOrder = { name, phone, address, quantity, meals: selectedMeals };

  // كل القيم بتتعمل لها escape قبل ما تتحط في الـ HTML
  document.getElementById("alertContent").innerHTML = `
    <div class="order-summary">
      <p>👤 <strong>Name:</strong> ${escapeHTML(name)}</p>
      <p>📞 <strong>Phone:</strong> ${escapeHTML(phone)}</p>
      <p>🏠 <strong>Address:</strong> ${escapeHTML(address)}</p>
      <p>🍽 <strong>Meals:</strong> ${escapeHTML(selectedMeals.join(", "))}</p>
      <p>🔢 <strong>Quantity:</strong> ${quantity}</p>
    </div>
  `;

  document.getElementById("customAlert").style.display = "flex";
});

// تأكيد الطلب: الموقع static (GitHub Pages) مفيهوش سيرفر،
// فالطلب بيتبعت للمطعم على واتساب برسالة جاهزة.
function confirmOrder() {
  if (!pendingOrder) return;

  const o = pendingOrder;
  const message =
    `🔥 New Order - Grill Master\n` +
    `Name: ${o.name}\n` +
    `Phone: ${o.phone}\n` +
    `Address: ${o.address}\n` +
    `Meals: ${o.meals.join(", ")}\n` +
    `Quantity (each): ${o.quantity}`;

  const url = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");

  document.getElementById("customAlert").style.display = "none";
  form.reset();
  pendingOrder = null;
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}
