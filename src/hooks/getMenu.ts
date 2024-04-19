// Define the interface
interface Props {
  foodType: string,
  items: Array<{
    name: string,
    price: string,
    img: string
  }>
}

const Menu: { data?: Props } = {};
// Function to fetch and process the CSV data
async function fetchMenuData(): Promise<Props> {
  const response = await fetch('/menu.csv');
  const csvData = await response.text();
  console.log(csvData);
  const menu: Props = { foodType: '', items: [] };

  // Parse CSV data
  // const rows = csvData.trim().split('\n').map(row => row.split(','));

  // Extract menu items
  // for (let i = 1; i < rows.length; i++) {
  //   const [type, name, price, img] = rows[i].map(item => item.trim());
  //   const item = { name, price, img };

  //   // Check if the type already exists in the menu
  //   // const existingTypeIndex = menu.items.findIndex(menuItem => menuItem.foodType === type);

  //   // if (existingTypeIndex === -1) {
  //   //   menu.items.push({ foodType, items: [item] });
  //   // } else {
  //   //   menu.items[existingTypeIndex].items.push(item);
  //   // }
  // }

  return menu;
}

// Example usage:
fetchMenuData()
  .then(menu => {
    console.log(menu);
  })
  .catch(error => {
    console.error('Error fetching menu data:', error);
  });

export default async function getMenu(){
  if (!Menu.data) await fetchMenuData();
  return Menu.data || null;
}
