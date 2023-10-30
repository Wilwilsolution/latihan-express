document.addEventListener('DOMContentLoaded', () => {
  const dataList = document.getElementById('data-list');
  const data = JSON.parse(localStorage.getItem('data')) || [];

  data.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name; // Ganti "name" dengan properti yang sesuai dalam objek Anda
    dataList.appendChild(listItem);
  });
});
const data = [
  { name: 'Data 1' },
  { name: 'Data 2' },
  { name: 'Data 3' },
];

localStorage.setItem('data', JSON.stringify(data));