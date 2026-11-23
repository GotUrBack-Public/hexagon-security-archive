(() => {
  const search = document.getElementById("search-input");
  const filter = document.getElementById("priority-filter");
  const list = document.getElementById("registry-entries");
  if (!search || !filter || !list) return;
  const rows = [...list.querySelectorAll(".registry-row")];
  const empty = document.getElementById("empty-state");
  const count = document.getElementById("record-count");
  const total = document.getElementById("summary-total");
  const format = value => String(value).padStart(2, "0");
  const update = () => {
    const query = search.value.trim().toLowerCase();
    const severity = filter.value;
    let visible = 0;
    rows.forEach(row => {
      const matchesText = row.textContent.toLowerCase().includes(query);
      const matchesSeverity = severity === "all" || row.dataset.priority === severity;
      const show = matchesText && matchesSeverity;
      row.hidden = !show;
      if (show) visible += 1;
    });
    empty.hidden = visible !== 0;
    count.textContent = format(visible);
  };
  if (total) total.textContent = format(rows.length);
  update();
  search.addEventListener("input", update);
  filter.addEventListener("change", update);
})();