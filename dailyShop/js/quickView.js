function openQuickView(Ürün_Adi, price,Bulunabilirlik, Açıklama, Kategori, img1, img2, img3) {
    document.getElementById("quick-view-title").innerHTML = Ürün_Adi;
    document.getElementById("quick-view-price").innerHTML = "$" + price;
    document.getElementById("quick-view-availability").innerHTML = "Availability: " + Bulunabilirlik;
    document.getElementById("quick-view-description").innerHTML = Açıklama;
    document.getElementById("quick-view-category").innerHTML = "Category: " + Kategori;
    document.getElementById("img1").src = img1;
    document.getElementById("img2").src = img2;
    document.getElementById("img3").src = img3;
    document.getElementById("quick-view-modal").style.display = "block";
}

function openProductDetails(Ürün_Adi, Açıklama, Kategori) {
    document.getElementById("product-details-title").innerHTML = Ürün_Adi;
    document.getElementById("product-details-description").innerHTML = Açıklama;
    document.getElementById("product-details-category").innerHTML = "Category: " + Kategori;
    document.getElementById("product-details-modal").style.display = "block";
}

