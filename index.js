const teamSearchInput = document.getElementById('teamSearch');
const championFilterCheckbox = document.getElementById('championFilter');
        const standingsTable = document.getElementById('standings').getElementsByTagName('tbody')[0];
        const rows = standingsTable.getElementsByTagName('tr');

        championFilterCheckbox.addEventListener('change', filterChampions);

        function filterChampions() {
            const showChampionsOnly = championFilterCheckbox.checked;

            for (let i = 0; i < rows.length; i++) {
                const isChampion = rows[i].getElementsByTagName('td')[6].textContent === 'Yes';
                let shouldShowRow = true;

                if (showChampionsOnly && !isChampion) {
                    shouldShowRow = false;
                }

                rows[i].style.display = shouldShowRow ? '' : 'none';
            }
        }