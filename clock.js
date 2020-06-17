const clockContainer=document.querySelector(".js-clock"),
clockTitle=clockContainer.querySelector(".js-title"),
eclipse=clockContainer.querySelector(".ecl")
maxiEcl=clockContainer.querySelector(".maxi");


// 15:57 ~ 18:07

const portion = [0.16, 0.42, 0.75, 1.15, 1.59, 2.08, 2.6, 3.16, 3.76, 4.39, 5.04, 5.72, 6.43, 7.16, 7.91, 8.68, 9.48, 10.29, 11.12, 11.96, 12.82, 13.69, 14.58, 15.48, 16.39, 17.31, 18.23, 19.17, 20.11, 21.06, 22.02, 22.98, 23.94, 24.9, 25.87, 26.83, 27.8, 28.76, 29.71, 30.66, 31.61, 32.54, 33.47, 34.38, 35.29, 36.18, 37.05, 37.91, 38.74, 39.56, 40.35, 41.12, 41.87, 42.58, 43.26, 43.92, 44.53, 45.11, 45.66, 46.16, 46.62, 47.04, 47.41, 47.73, 48, 48.23, 48.4, 48.52, 48.61, 48.6, 48.56, 48.47, 48.32, 48.12, 47.86, 47.56, 47.2, 46.79, 46.33, 45.82, 45.27, 44.67, 44.03, 43.35, 42.64, 41.88, 41.09, 40.26, 39.41, 38.52, 37.61, 36.68, 35.72, 34.74, 33.74, 32.72, 31.69, 30.64, 29.58, 28.51, 27.43, 26.35, 25.26, 24.17, 23.07, 21.97, 20.88, 19.79, 18.7, 17.62, 16.55, 15.48, 14.43, 13.39, 12.36, 11.36, 10.37, 9.4, 8.45, 7.53, 6.63, 5.77, 4.94, 4.15, 3.4, 2.69, 2.04, 1.44, 0.92, 0.48, 0.14];
var ecl = {};
for (var i=957; i<957+portion.length; i++) {
    ecl[i] = portion[i-957];
}

function getTime(){
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
    const hourMin = 60*hours+minutes;
	clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
		minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10 ? `0${seconds}` : seconds}`;
    if(hourMin>=957 && hourMin<=1087) {
		eclipse.innerText = `${ecl[hourMin]} %`;
		
		if(hourMin=1025) {
			maxiEcl.style.display = 'inline';
		} else {maxiEcl.style.display = 'inline';}
	}
}

function init() {
	getTime();
	setInterval(getTime, 1000);
}

init();