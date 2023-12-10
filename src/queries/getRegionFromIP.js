const API_KEY = '18626c459594e5';

export async function getRegionFromIP() {
  try {
    const response = await fetch(`https://ipinfo.io/json?token=${API_KEY}`);
    const data = await response.json();
    const isUserInRussia = data.country === 'RU';
    
    if (isUserInRussia) {
      return 'RU'
    } else {
    }
  } catch (error) {
    console.error(error);
  }
}

// Вызываем функцию
