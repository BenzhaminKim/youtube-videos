export default async function getAllVideos() {
    const res = await fetch("https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyA_g1VitbPAwoZ3qwAzM7c-ZiO76CAtTNs&part=snippet,contentDetails,statistics,status");

    if (!res.ok) {
        throw new Error(res.statusText);
    }

    return res.json();
}