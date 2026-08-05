const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU25KiSBT8l3rVGBEaRCMmYktQEUVR0G7YmAcuRVlytapQYcJ/38CenpmH3Ynet7pFnjyZeeo7KErC0Ao1YPIdVJRcA466JW8qBCZgWicJoqAP4oAHYAJEczOKkLe639SNrsKBdwihPyzCwRUmKN3uj5uwnSqHNBbSr+DRB1UdZiT6A2CjlDdrjNfjjJaVgjRmVq7vqZomEvF2bZaL3MNN3dOb9vAVPDrEgFBS4Fl1QjmiQbZCjR0Q+jn6njbjiXuHialoS12o4dviDvFKCuWhJ4zM9R636+nBzqap+jn6bDXcQu12rKavjtkuFftYCT37pbLLtZhx3enFzMUDutMW+J0+I7hA8TJGBSe8+bTuKnT1fV1z5+1shy9byR0dj9RY2VukH/16ObvwqV5fvVHwNvsccU+/XAWYbntaitoBMZazamNI61AMaVHTlzfX2pv7sJ4umtvvxG36kZX0/+hO4EbkNglnAhND6iE4Uq9jK1+ER0nY6jaJ1vMywvJGTcvP0b+2OTZPUz6iY8moF+2tgfyUbeZ3tp9lghba8mK7dtFmd4a/6Ae8pn9ieZtDeTa1SrPMMy0+Y8Td/dSJ9yt1qDS9o9Yc2sYXXy8etkVueUaCh7oSKwI8OulUMto1aX2WazuSZ0vhfD6c8nN9gl+fHaWoWcZgMnz0AUWYME4DTsrieaaO+iCIrw6KKOJPecGGmTTPhZ0+slOL3g1LtrVXHLYNxop5v+qGS3oaHJ4Fi30FfVDRMkKModggjJe0sRBjAUYMTP7+1gcFuvN347py0rAPEkIZPxR1lZVB/OHqx2UQRWVdcKcpIq1bIAomwq9jxDkpMOt0rIuARidyRdop4AxMkiBj6GeHiKIYTDit0c+p1cq4E/5l7umuu5mDPsifhpC4+1ukl7GgqLI8FGR5Ikl/sS+3Djeoqi8F4qAPsvd3Q3U4lmRVHIuSKj5fdhePnxQ7xBjxgGQMTIBmipgbtx2/DCzh5nnQgXAFYSfbR0sf2XjXXmjH0KmGIz8L1xe+ksZYj1ZcHO0zpbnI29uylB01v6Sy4f0bCJiAyiBmu53ftNFWvW9k8Twwo+PZcqcHHGJdO9yGzMeb9UC84s3WP98gLXf4baTEsLloyDj7h8uZrM57OIM+2pjS+nKvYRekPojRlUTo92JtdIfneeI7az2nyzmmTN8JS0bTxtJPFnRqIwnysVU46bgYNPWhUB2EGtY7OuzVtelKMLnQe+0Fcpq6Va4nqT9bfKT2OTXZj9+KPPPUmdVtE4Kew18EnYWfMO+deRcy4dH/DeTHf/IfMzmNrcFudomR6L82CnX4wIOSRuNa8BG71C7TVtvD1bxU270IHo9vfVBlAU9KmoMJCIqYliQGfUDLukvtskjKPxTT4GEJMV52rWcB4/DXJLgkR4wHeQUmw5Eqj8WRIr48/gF8tI14PwcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
