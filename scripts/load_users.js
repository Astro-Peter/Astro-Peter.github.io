let cnt = 0;

function loadItems() {
    const savedCnt = localStorage.getItem('cnt');
    if (savedCnt) {
        cnt = JSON.parse(savedCnt);
    }
    fetchUsers();
}

async function fetchUsers() {
    let breed = "hound"
    if (cnt % 2 === 1) {
        breed = "corgi"
    }
    cnt += 1
    try {
        let url = "https://dog.ceo/api/breed/" + breed + "/images/random";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const users = await response.json();
        console.log(users.message);
        
        displayUsers(users.message);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
    saveItems();
}

function displayUsers(dog) {
    const dogImage = document.getElementById('dog-image');
    const loading = document.getElementById('loading');

    loading.style.display = 'none';
    dogImage.style.display = 'block';

    
    dogImage.src = dog;
}

function saveItems() {
    console.log(cnt);
    
    localStorage.setItem('cnt', JSON.stringify(cnt));
}

window.addEventListener('load', loadItems);