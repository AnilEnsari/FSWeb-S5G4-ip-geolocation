//axios import buraya gelecek
import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<176.41.47.150>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/
// https://apis.ergineer.com/ipgeoapi/176.41.47.150
axios
  .get("https://apis.ergineer.com/ipgeoapi/176.41.47.150")
  .then((response) => {
    let veriler = response;
  });

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! 
	Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/
function ipControl(nesne) {
  const div1 = document.createElement("div");
  div1.classList.add("card");
  const flagimg = document.createElement("img");
  flagimg.setAttribute("src", "https://flagsapi.com/TR/flat/64.png");
  const div2 = document.createElement("div");
  div2.classList.add("card-info");
  const baslik = document.createElement("h3");
  baslik.classList.add("ip");
  baslik.textContent = nesne["sorgu"];
  const p1 = document.createElement("p");
  p1.classList.add("ulke");
  p1.textContent = nesne["ülke"] + " (" + nesne["ülkeKodu"] + ")";
  const p2 = document.createElement("p");
  p2.textContent = "Enlem: " + nesne["enlem"] + " Boylam: " + nesne["boylam"];
  const p3 = document.createElement("p");
  p3.textContent = "Şehir: " + nesne["şehir"];
  const p4 = document.createElement("p");
  p4.textContent = "Saat dilimi: " + nesne["saatdilimi"];
  const p5 = document.createElement("p");
  p5.textContent = "Para birimi: " + nesne["parabirimi"];
  const p6 = document.createElement("p");
  p6.textContent = "ISP: " + nesne["isp"];
  div2.append(baslik, p1, p2, p3, p4, p4, p5, p6);
  div1.append(flagimg, div2);

  return div1;
}
/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/
const cardsHtml = document.querySelector(".cards");
cardsHtml.append(ipControl(veriler));

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
