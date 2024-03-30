const cardData = [
    { title: "NIMCET", content:"", link: "https://maarula.in/nimcet-maarula/", imageUrl: "nim.png" },
    { title: "CUET-PG", content:"",link: "https://maarula.in/cuet-pg-maarula/", imageUrl: "image2.png" },
    { title: "JAMIA", content:"", link: "https://maarula.in/jamia-maarula/",imageUrl: "jaamiaa.png" },
    // Add more data objects as needed
  ];
  
  const cardContainer = document.getElementById("cardContainer");
  
  cardData.forEach(data => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card-header">
      <a href="${data.link}" target="_blank">
        <img src="${data.imageUrl}" alt="${data.title}" class="card-image">
        <h2 class="card-title">${data.title}</h2>
      </div>
      <div class="card-content">
        <p>${data.content}</p>
      </div>
    `;
    cardContainer.appendChild(card);
    const cardImage = card.querySelector(".card-image");
    cardImage.style.width = "40px"; // Set custom width
    cardImage.style.height = "30px"; // Set custom height
  });
  
