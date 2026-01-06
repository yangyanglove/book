// =========================
// 分类视角切换（Timeline）
// =========================

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".category-nav button");
  const entries = document.querySelectorAll(".entry");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      // 切换按钮状态
      buttons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      // 显示 / 隐藏记录
      entries.forEach(entry => {
        const category = entry.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          entry.style.display = "";
        } else {
          entry.style.display = "none";
        }
      });
    });
  });
});
