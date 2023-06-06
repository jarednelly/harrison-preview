import { magic } from "./../goTime.js";
import { projectSysItem } from "./../components/project-system-item.js";

export const PortfolioSys = async () => {
  try {
    const url = `${magic}/api/projects?populate=deep,3`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data;
    const panel = document.getElementById('PortfolioSys');
    
    // Create an empty object to store the grouped items
    const groupedItems = {};

    // Iterate over the data array
    data.forEach(item => {
    const categoryName = item.attributes.portfolio_categories.data[0].attributes.CategoryName;
    
    // Check if the category name already exists as a key in the groupedItems object
    if (groupedItems.hasOwnProperty(categoryName)) {
        // If it exists, push the current item to the existing category
        groupedItems[categoryName].push(item);
    } else {
        // If it doesn't exist, create a new array with the current item
        groupedItems[categoryName] = [item];
    }
    });

    for(const category in groupedItems) {
        const group = groupedItems[category];
        const div = document.createElement('div');
        div.classList.add(category.toLowerCase().replace(/\s/g, '-'), 'cat-itm', 'bdr_bt');

        panel.querySelector('.mn_wd').appendChild(div);

        //Create an H2 for the Category Name
        const catHead = document.createElement('strong');
        catHead.classList.add('fnt_t-2', 'fnt_tc-2', 'pd_bt', 'bdr_bt');
        catHead.textContent = category;
        div.appendChild(catHead);

        //Create ul for each item in group
        const ul = document.createElement('ul');
        ul.classList.add('flx-grd-mx-4-ato-sz', 'f_rw', 'mrg_tp-30', 'mrg_bt-30');
        div.appendChild(ul);

        group.forEach(item => {
            item.attributes.Item.forEach(itemData => {
                projectSysItem(ul, itemData);
            });
        });
    }

    const lightBox = document.createElement('script');
    lightBox.src = 'includes/js/action/light-box.js';
    panel.append(lightBox);

  } catch (error) {
    console.log(error);
  }
};