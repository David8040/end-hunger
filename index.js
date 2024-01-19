
function createOrganizationButtons(data) {
    const organizationListDiv = document.getElementById('organizationList');
  

    if (Array.isArray(data.donations)) {
      const organizations = data.donations;
  
      organizations.forEach(org => {
        const orgButton = document.createElement('button');
        orgButton.textContent = org.organization;
        orgButton.addEventListener('click', () => displayOrganizationDetails(org));
        organizationListDiv.appendChild(orgButton);
      });
    } else {
      console.error('Invalid data structure. "donations" property is not an array.');
    }
  }
  
  function displayOrganizationDetails(organization) {
    const organizationInfoDiv = document.getElementById('organizationInfo');
    organizationInfoDiv.innerHTML = '';
  
    const heading = document.createElement('h3');
    heading.textContent = organization.organization;
    organizationInfoDiv.appendChild(heading);
  
    const detailsList = document.createElement('ul');
    for (const key in organization) {
      if (key !== 'id' && key !== 'organization') {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${organization[key]}`;
        detailsList.appendChild(listItem);
      }
    }
    organizationInfoDiv.appendChild(detailsList);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    fetch('db.json')
      .then(response => response.json())
      .then(data => createOrganizationButtons(data))
      .catch(error => console.error('Error fetching data:', error));
  });
  