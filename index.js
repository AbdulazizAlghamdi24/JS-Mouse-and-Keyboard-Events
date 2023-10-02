const championFilterCheckbox = document.getElementById('championFilter');
const teamSearchInput = document.getElementById('teamSearch');
const standingsTable = document.getElementById('standings').getElementsByTagName('tbody')[0];
const rows = standingsTable.getElementsByTagName('tr');

championFilterCheckbox.addEventListener('change', filterTeams);
teamSearchInput.addEventListener('input', filterTeams);

function filterTeams() {
    const showChampionsOnly = championFilterCheckbox.checked;
    const searchTerm = teamSearchInput.value.toLowerCase();

    for (let i = 0; i < rows.length; i++) {
        const teamName = rows[i].getElementsByTagName('td')[0].textContent.toLowerCase();
        const isChampion = rows[i].getElementsByTagName('td')[6].textContent === 'Yes';
        let shouldShowRow = true;

        if (showChampionsOnly && !isChampion) {
            shouldShowRow = false;
        }

        if (searchTerm && !teamName.includes(searchTerm)) {
            shouldShowRow = false;
        }

        rows[i].style.display = shouldShowRow ? '' : 'none';
    }
}