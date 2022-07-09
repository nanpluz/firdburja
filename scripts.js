let mostrando = false;
let firstTime = true;
document.getElementsByTagName('img')[0].style.opacity = '0';

// setTimeout(() => {
// 	var audio = new Audio('assets/fidibuja.mp3');
// 	audio.play();
// }, 5000);

if (firstTime) {
	firstTime = false;
	setTimeout(() => {
		console.log('teste');
		trocarFotos();
		setInterval(() => {
			console.log('teste');
			trocarFotos();
		}, 2000);
	}, 1000);
}

function trocarFotos() {
	if (mostrando === false) {
		mostrando = true;
		document.getElementsByTagName('img')[0].style.opacity = '1';
		document.getElementsByTagName('img')[1].style.opacity = '0';
	} else {
		mostrando = false;
		document.getElementsByTagName('img')[0].style.opacity = '0';
		document.getElementsByTagName('img')[1].style.opacity = '1';
	}
}

document.getElementsByTagName('button')[0].onclick = () => {
  console.log("teste")
	var audio = new Audio('assets/fidibuja.mp3');
	audio.play();
};

// primeira = 'show';
// segunda = 'hide';

// firstTime = true;

// ngOnInit(): void {
//   if (this.firstTime) {
//     this.firstTime = false;
//     setTimeout(() => {
//       console.log("teste")
//       this.trocarFotos()
//       setInterval(()=>{
//         console.log("teste")
//         this.trocarFotos()
//       }, 2000)
//     }, 1000);
//   }

//   var nanana = new Audio("assets/fidibuja.mp3")
//   nanana.play()

// }

// trocarFotos() {
//   if (this.primeira === 'show') {
//     this.primeira = 'hide';
//     this.segunda = 'show';
//   } else {
//     this.primeira = 'show';
//     this.segunda = 'hide';
//   }
// }
