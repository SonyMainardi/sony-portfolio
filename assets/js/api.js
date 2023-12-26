
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/SonyMainardi/js-developer-portfolio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
