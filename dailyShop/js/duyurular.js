function incele(duyuruId) {
  var modal = document.getElementById('modal');
  var modalContent = document.getElementById('modal-content');
  var modalTitle = document.getElementById('modal-title');
  var modalImage = document.getElementById('modal-image');
  var modalText = document.getElementById('modal-text');

  // Duyurunun içeriği örneğin burada bir veritabanından çekilebilir.
  var duyuruIcerik = getDuyuruIcerik(duyuruId);

  // Modal içeriğini güncelle
  modalTitle.textContent = duyuruIcerik.baslik;
  modalText.textContent = duyuruIcerik.icerik;
  modalImage.src = duyuruIcerik.resimUrl; // Yeni özellik: resim URL'si

  // Modal'ı göster
  modal.style.display = 'block';
}

function kapatModal() {
  var modal = document.getElementById('modal');
  modal.style.display ='none';
}

// Bu fonksiyon örneğin bir veritabanından duyuru içeriğini çekebilir.
function getDuyuruIcerik(duyuruId) {
  // Bu örnekte basit bir veri döndürüyoruz, gerçek projede veritabanından çekilebilir.
  if (duyuruId === 'duyuru1') {
      return { baslik: 'ÖZEL ÜRETİM! Outdoor Trekking Polyester Uyku Tulumu ', icerik: ' Doğayla Uyumlu Uyku: Yepyeni Özel Üretim Uyku Tulumumuz Sizleri Bekliyor! Bu uyku tulumu, 10°C ve üstü sıcaklıklarda bivak yaparken rahatça uyuyabilmeniz için tasarlandı. Mumya tipi kesimli bu uyku tulumu, az yer kaplayan ve hafif yapısıyla yazları kullanım için idealdir. Harika havalandırma sağlayan çift kürsörlü 2 yan fermuarına bayılacaksınız. Sadece doğa severlerin anlayacağı bir konfor! Yüksek kaliteli malzemelerden özel üretilen uyku tulumumuz, kamp deneyiminizi bir üst seviyeye taşıyor. Hafif, su geçirmez ve sıcak tutma özellikleri ile doğada rahat bir uyku için ideal. Bu özel tasarım, sınırlı sayıda üretildi, bu yüzden hemen sahip olun! Daha ayrıntılı bilgi için tüm duyurular sayfamızı ziyaret edin!', resimUrl: 'img/camping images/duyuru uyku tulumu.jpg' };
  } else if (duyuruId === 'duyuru2') {
      return { baslik: 'SINIRLI SAYIDA! Solar Basınçlı Kamp Duşu - 10L', icerik: 'Güneş Enerjisi ile Sıcak Su Keyfi: Solar Duşlar Stoklarla Sınırlı! 10 litre kapasiteli bu ürün, dış mekanda rahatça duş almanız ve eşyalarınızı yıkamanız için tasarlandı.Motivasyonumuzu öğrenmek ister misiniz? Sizlere duşunuzu asmadan kullanabileceğiniz bir ürün sunmak! Pompa sistemi sayesinde basınçlı bir su ile gerçek bir duşun altında gibi hissedeceksiniz! Kamp alanında duş keyfini yaşamak artık mümkün! Solar duşlarımız, güneş enerjisi ile sıcak su üretir, böylece doğada temiz ve konforlu bir duş deneyimi yaşarsınız. Ancak stoklar sınırlı! Hemen sipariş verin ve doğanın ortasında ferahlamanın tadını çıkarın. Daha ayrıntılı bilgi için tüm duyurular sayfamızı ziyaret edin!', resimUrl: 'img/camping images/duyuru basınçlı duş.jpg' };
  } else if (duyuruId === 'duyuru3') {
      return { baslik: 'İKİ AL BİR ÖDE KAMPANYASI! Kendi Kendine Şişen Esnek Soğutucu - 25 Litre - 15 Saat Serin Tutma', icerik: 'Siz sadece keyfini çıkarın, soğutmayı bize bırakın! Kamp Keyfini İki Katına Çıkarın: Soğutucu Çanta İki Al Bir Öde Kampanyasıyla! Bu az yer kaplayan 25 L hacimli soğutucu, yüksek performanslı ve dayanıklı yapısıyla yiyecek ve içeceklerinizi gün boyunca serin tutması için tasarlandı. Motivasyonumuzu öğrenmek ister misiniz? Size yenilikçi ve yüksek performanslı bir soğutucu sunmak: Yiyecekleri buz kalıbı olmadan 15 saat serin tutar. Esnektir, her yere götürülür, kolay saklanır. Hem ekonomik hem de pratik bir tercih için şimdi sipariş verin.', resimUrl: 'img/camping images/duyuru otomatik şişen esnek soğutucu.jpg' };
  } else {
      return { baslik: '', icerik: '', resimUrl: '' };
  }
}

// Sayfa yüklendiğinde document objesine tıklama olayı ekleniyor
document.addEventListener('click', function (event) {
  var modal = document.getElementById('modal');

  // Tıklanan öğenin modal içeriği olup olmadığını kontrol et
  if (event.target === modal) {
      kapatModal();
  }
});
