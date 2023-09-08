class videoEffect {
	constructor(id, link) {
		this.id = id;
		this.link = link;
	}
	process(data, width, height) {
		return data;
	}
	getSimpleJavaScript() {
		return ``;
	}
	getVisualisation(id) {
		return '<videffect type="'+videoEffect.name+'" class="" id="">\n<img src="./images/remove.png" alt="R" height="20" width="20" class="app remove" />DUMMMY\n</videffect>';
	}
	getUIUpdate(id = this.id) {
		//CONFIG-UPDATE
	}
	static getVisualisation(id = "-DUMMY") {
		return '<videffect type="'+videoEffect.name+'" class="'+id+'" id="">\n<img src="./images/remove.png" alt="R" height="20" width="20" class="app remove" />DUMMY\n</videffect>';
	}
	static name = "BASIC videoEffect";
}

class videoEffectAdd extends videoEffect {
	constructor(id, link) {
		super(id, link);
	}
	process(frame, width, height) {
		for (let i=0;i<frame.data.length/4;i++) {
			frame.data[i*4+0]+=this.config.r;
			frame.data[i*4+1]+=this.config.g;
			frame.data[i*4+2]+=this.config.b;
			frame.data[i*4+3]+=this.config.a;
		}
		return frame;
	}
	getSimpleJavaScript() {
		return `frame.data[i*4+0]+=${this.config.r};
		frame.data[i*4+1]+=${this.config.g};
		frame.data[i*4+2]+=${this.config.b};
		frame.data[i*4+3]+=${this.config.a};`;
	}
	getVisualisation(id = this.id) {
		return '<videffect type="'+videoEffectAdd.name+'" class="app_effect videoEffectAdd" id="Effect'+id+
		'">\n<img src="./images/remove.png" alt="R" height="20" width="20" class="app remove" />Add<br/>\n<div class="InputEffectStrap">R:<input ondblclick="VideoEffectManager.resetSlider(event);" onchange="'+this.link+'.updateSegment('+id+')" type="range" min="-255" max="255" id="Effect'+id+
		'_R"/>G:<input ondblclick="VideoEffectManager.resetSlider(event);" onchange="'+this.link+'.updateSegment('+id+')" type="range" min="-255" max="255" id="Effect'+id+
		'_G"/>B:<input ondblclick="VideoEffectManager.resetSlider(event);" onchange="'+this.link+'.updateSegment('+id+')" type="range" min="-255" max="255" id="Effect'+id+
		'_B"/>A:<input ondblclick="VideoEffectManager.resetSlider(event);" onchange="'+this.link+'.updateSegment('+id+')" type="range" min="-255" max="255" id="Effect'+id+
		'_A"/></div></videffect>';
	}
	getUIUpdate(id = this.id) {
		//CONFIG-UPDATE#
		if (this.config.r != document.getElementById('Effect'+id+'_R').value) this.config.r = document.getElementById('Effect'+id+'_R').value;
		if (this.config.g != document.getElementById('Effect'+id+'_G').value) this.config.g = document.getElementById('Effect'+id+'_G').value;
		if (this.config.b != document.getElementById('Effect'+id+'_B').value) this.config.b = document.getElementById('Effect'+id+'_B').value;
		if (this.config.a != document.getElementById('Effect'+id+'_A').value) this.config.a = document.getElementById('Effect'+id+'_A').value;
	}
	static getVisualisation(id = "-DUMMY") {
		return '<videffect type="'+videoEffectAdd.name+'" class="app_effect videoEffectAdd '+id+'" id="Effect'+id+'">\n<img src="./images/remove.png" alt="R" height="20" width="20" class="app remove" />Add<br/>\n<div class="InputEffectStrap">R:<input type="range" min="-255" max="255" id="Effect'+id+'_R"/>G:<input type="range" min="-255" max="255" id="Effect'+id+'_G"/>B:<input type="range" min="-255" max="255" id="Effect'+id+'_B"/>A:<input type="range" min="-255" max="255" id="Effect'+id+'_A"/></div></videffect>';
	}
	config= {r:0,g:0,b:0,a:0};
	static name = "ColorAdding";
}

class videoEffectMult extends videoEffect {
	constructor(id, link) {
		super(id, link);
	}
	process(frame, width, height) {
		for (let i=0;i<frame.data.length/4;i++) {
			frame.data[i*4+0]*=this.config.r;
			frame.data[i*4+1]*=this.config.g;
			frame.data[i*4+2]*=this.config.b;
			frame.data[i*4+3]*=this.config.a;
		}
		return frame;
	}
	getSimpleJavaScript() {
		return `frame.data[i*4+0]*=${this.config.r};
		frame.data[i*4+1]*=${this.config.g};
		frame.data[i*4+2]*=${this.config.b};
		frame.data[i*4+3]*=${this.config.a};`;
	}
	getVisualisation(id = this.id) {
		return '<videffect type="'+videoEffectMult.name+
		'" class="app_effect videoEffectAdd" id="Effect'+id+
		'">\n<img src="./images/remove.png" alt="R" height="20" width="20" class="app remove" />Multiply<br/>\n<div class="InputEffectStrap">R:<input step="0.5" ondblclick="VideoEffectManager.resetSlider(event);" onchange="'+this.link+'.updateSegment('+id+')" type="range" min="0" max="5" id="Effect'+id+
		'_R"/>G:<input step="0.5" ondblclick="VideoEffectManager.resetSlider(event);" onchange="'+this.link+'.updateSegment('+id+')" type="range" min="0" max="5" id="Effect'+id+
		'_G"/>B:<input step="0.5" ondblclick="VideoEffectManager.resetSlider(event);" onchange="'+this.link+'.updateSegment('+id+')" type="range" min="0" max="5" id="Effect'+id+
		'_B"/>A:<input step="0.1" ondblclick="VideoEffectManager.resetSlider(event);" onchange="'+this.link+'.updateSegment('+id+')" type="range" min="0" max="1" id="Effect'+id+
		'_A"/></div></videffect>';
	}
	getUIUpdate(id = this.id) {
		//CONFIG-UPDATE
		if (this.config.r != document.getElementById('Effect'+id+'_R').value) this.config.r = document.getElementById('Effect'+id+'_R').value;
		if (this.config.g != document.getElementById('Effect'+id+'_G').value) this.config.g = document.getElementById('Effect'+id+'_G').value;
		if (this.config.b != document.getElementById('Effect'+id+'_B').value) this.config.b = document.getElementById('Effect'+id+'_B').value;
		if (this.config.a != document.getElementById('Effect'+id+'_A').value) this.config.a = document.getElementById('Effect'+id+'_A').value;
	}
	static getVisualisation(id = "-DUMMY") {
		return '<videffect type="'+videoEffectMult.name+'" class="app_effect videoEffectAdd '+id+'" id="Effect'+id+'">\n<img src="./images/remove.png" alt="R" height="20" width="20" class="app remove" />Multiply<br/>\n<div class="InputEffectStrap">R:<input type="range" min="0" max="5" id="Effect'+id+'_R"/>G:<input type="range" min="0" max="5" id="Effect'+id+'_G"/>B:<input type="range" min="0" max="5" id="Effect'+id+'_B"/>A:<input type="range" min="0" max="5" id="Effect'+id+'_A"/></div></videffect>';
	}
	config= {r:1,g:1,b:1,a:1};
	static name = "ColorMultipily";
}
class videoEffectInvert extends videoEffect {
	constructor(id, link) {
		super(id, link);
	}
	process(frame, width, height) {
		for (let i=0;i<frame.data.length/4;i++) {
			frame.data[i*4+0]=255-frame.data[i*4+0];
			frame.data[i*4+1]=255-frame.data[i*4+1];
			frame.data[i*4+2]=255-frame.data[i*4+2];
			//frame.data[i*4+3]=255-frame.data[i*4+3];
		}
		return frame;
	}
	getSimpleJavaScript() {
		return ``;
	}
	getVisualisation(id) {
		return '<videffect type="'+videoEffectInvert.name+'" class="" id="">\n<img src="./images/remove.png" alt="R" height="20" width="20" class="app remove" />Invert\n</videffect>';
	}
	getUIUpdate(id = this.id) {
		//CONFIG-UPDATE
	}
	static getVisualisation(id = "-DUMMY") {
		return '<videffect type="'+videoEffectInvert.name+'" class="'+id+'" id="">\n<img src="./images/remove.png" alt="R" height="20" width="20" class="app remove" />Invert\n</videffect>';
	}
	config = {}
	static name = "Inverting videoEffect";
}


class VideoEffectManager {
	static resetSlider(event) {
		event.srcElement.value = 0;
	}
	constructor(link, droplink, name) {
		this.registerd = {};
		this.EffectList = [];
		this.EffectCount = 0;
		this.droplink = droplink;
		this.loaded = false;
		this.link = link;
		this.height = 0;
		this.width = 0;
		this.FVideo = document.createElement('video');
		this.canvas_viw = document.createElement('canvas');
		this.ctx_viw = this.canvas_viw.getContext('2d');
		this.canvas_prc = document.createElement('canvas');
		this.ctx_prc = this.canvas_prc.getContext('2d');
		this.name = name;
	}
	register(id1) {
		let existsAlredy = false;
		Object.keys(this.registerd).map((objkey, index)=>{
			//let value = this.registerd[objkey];
			if (objkey == id1.name) {
				existsAlredy = true;
			}
		});
		if (!existsAlredy) {
			this.registerd[id1.name] = id1;
		}
		this.updateDragList();
	}
	newVideoEffect(type /*= prompt('Effect- Name/-Identifier: ')*/) {
		//let type = prompt('Effect- Name/-Identifier: ');
		//console.log(this.registerd[type]);
		let value = this.registerd[type];
		if (!(value == undefined)) {
			this.EffectCount+=1;
			this.EffectList[this.EffectCount] = new value(this.EffectCount, this.name);
		}
		this.updateList();
	}
	updateList() {
		let res = `<videffect type="init"><movleft><button onclick="Manager.getCapture('camera');">Kamera</button><button onclick="Manager.getCapture('window');">Fenster</button><button id="pauseStream" disabled="true" onclick="Manager.PauseClick();">||</button><button disabled="true" id="stopStream" onclick="Manager.stopCapture();"></button></movleft><movright><button id="PopupButton" onclick="managePopup();">Open  Popup</button><button id="PopupButton2" onclick="managePopup2();">Open  Popup2</button><button id="loadEffect">Load Effects</button></movright></videffect>`;
		this.EffectList.forEach((value)=>{
			res+=value.getVisualisation();
		});
		let obj = document.getElementsByClassName(this.link)[0];
		obj.innerHTML = res;
	}
	updateDragList() {
		if (this.loaded) {
			let list = document.getElementsByClassName(this.droplink)[0];
			list.innerHTML = "";
			Object.keys(this.registerd).map((objkey, index)=>{
				list.innerHTML+=this.registerd[objkey].getVisualisation();
			});
			Object.keys(document.getElementsByClassName("-DUMMY")).map((objkey, index)=>{
				let value = document.getElementsByClassName("-DUMMY")[objkey];
				value.ondrag = (event) => {
					event.target.draggable = true;
				}
				value.ondragstart = (event) => {
					event.target.draggable = true;
					if (event.target.attributes.type != undefined) {
						event.dataTransfer.setData("text/plain", event.target.attributes.type.value);
					} else if (event.target.parentElement.attributes.type != undefined) {
						event.dataTransfer.setData("text/plain", event.target.parentElement.attributes.type.value);
					} else {
						event.dataTransfer.setData("text/plain", "BASIC videoEffect");
					}
				}
			});
		}
	}
	PauseClick() {
		let stopButton = document.getElementById('stopStream');
		let pauseButton = document.getElementById('pauseStream');
		if (this.streamPaused) {
			this.streamPaused = false;
			pauseButton.innerHTML = '||';
			this.FVideo.play();
			this.#computeFrames(this);
		} else {
			this.streamPaused = true;
			pauseButton.innerHTML = '> ';
			this.FVideo.pause();
		}
	}
	updateDropContainer() {
		if (this.loaded) {
			let container = document.getElementsByClassName(this.link)[0];
			container.ondragover = (event) => {
				event.preventDefault();
			}
			container.ondrop = (event) => {
				event.preventDefault();
				let type = event.dataTransfer.getData("text/plain");
				this.newVideoEffect(type);
			}
		}
	}
	streamRunning = false;
	streamPaused = false;
	stream = null;
	getCapture(select) {
		if (select == "window") {
			navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then((Rstream)=>{
				this.stream = Rstream;
				this.streamRunning = true;
				this.manageButtons();
				this.FVideo.srcObject = this.stream;
				this.width = this.FVideo.videoWidth;
				this.height = this.FVideo.videoHeight;
				this.initCompute();
			}).catch((error) => {
				console.error('Fehler beim Abrufen des MediaCapture-Streams:', error);
			});
		} else if (select == "camera") {
			navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((Rstream)=>{
				this.stream = Rstream;
				this.streamRunning = true;
				this.streamPaused = false;
				this.manageButtons();
				this.FVideo.srcObject = this.stream;
				this.FVideo.play();
				this.width = this.FVideo.videoWidth;
				this.height = this.FVideo.videoHeight;
				this.initCompute();
			}).catch((error) => {
				console.error('Fehler beim Abrufen des MediaCapture-Streams:', error);
			});
		}
	}
	manageButtons() {
		let stopButton = document.getElementById('stopStream');
		let pauseButton = document.getElementById('pauseStream');
		if (this.streamRunning) {
			stopButton.disabled = false;
			pauseButton.disabled = false;
		} else {
			stopButton.disabled = true;
			pauseButton.disabled = true;
		}
	}
	stopCapture() {
		this.stream.getTracks().forEach((track) => {
			track.stop();
		});
		this.streamRunning = false;
		this.manageButtons();
	}
	#computeFrames(self) {
		self.width = self.FVideo.videoWidth;
		self.height = self.FVideo.videoHeight;
		self.ctx_tmp.drawImage(self.FVideo, 0, 0, self.width, self.height);
		let frame = self.ctx_tmp.getImageData(0, 0, self.width, self.height);
		frame = self.processAll(frame);
		self.ctx_viw.putImageData(frame, 0, 0);
		self.ctx_prc.putImageData(frame, 0, 0);
		if ((self.streamRunning) && !(self.streamPaused)) {
			setTimeout(()=>{self.#computeFrames(self)}, 0);
		}
	}
	initCompute() {
		setTimeout(()=>{
			let canvas_tmp = document.createElement('canvas');
			this.ctx_tmp = canvas_tmp.getContext('2d');
			setTimeout(()=>{
				this.width = this.FVideo.videoWidth;
				this.height = this.FVideo.videoHeight;
				this.canvas_viw.setAttribute('width', this.width);
				this.canvas_viw.setAttribute('height', this.height);
				this.canvas_prc.setAttribute('width', this.width);
				this.canvas_prc.setAttribute('height', this.height);
				canvas_tmp.setAttribute('width' , this.width);
				canvas_tmp.setAttribute('height' , this.height);
				this.#computeFrames(this);
			},1000);
		},300);
	}
	processAll(frame) {
		let lastframe = frame;
		this.EffectList.forEach((effect)=>{
			lastframe = effect.process(lastframe,this.width,this.height);
		});
		return lastframe;
	}
	updateSegment(id) {
		this.EffectList[id].getUIUpdate();
	}
}

Manager = new VideoEffectManager('effectContainer', 'effectSelectContainer', 'Manager');
Manager.register(videoEffect);
Manager.register(videoEffectAdd);
Manager.register(videoEffectMult);
Manager.register(videoEffectInvert);

let popup,popup2;
let popupopen = false;
let popupopen2 = false;

function managePopup(inp = true) {
	if (!(popupopen) && inp) {
		let popupButton = document.getElementById('PopupButton');
		popup = window.open('','ModularVideoPopup','width=400,height=200');
		popupButton.innerHTML = "Close Popup";
		popupopen = true;
		popup.onbeforeunload = (event) => {
			window.managePopup(false);
		}
		popup.document.title = "Configuration";
		popup.document.body.appendChild(Manager.canvas_prc);
	} else {
		let popupButton = document.getElementById('PopupButton');
		popupopen = false;
		popupButton.innerHTML = "Open  Popup";
		popup.close();
	}
}
function managePopup2(inp = true) {
	if (!(popupopen2) && inp) {
		let popupButton = document.getElementById('PopupButton2');
		popup2 = window.open('','ModularVideoPopup2','width=400,height=200,top=250');
		popupButton.innerHTML = "Close Popup2";
		popupopen2 = true;
		popup2.onbeforeunload = (event) => {
			window.managePopup2(false);
		}
		popup2.document.title = "Projection";
		popup2.document.body.appendChild(Manager.canvas_viw);
	} else {
		let popupButton = document.getElementById('PopupButton2');
		popupopen2 = false;
		popupButton.innerHTML = "Open  Popup2";
		popup2.close();
	}
}


function addEffect() {
	/*let emptyVIDeffect = */Manager.newVideoEffect();
	Manager.updateList();
	let effectContainer = document.getElementsByClassName('effectContainer')[0];
	//effectContainer.innerHTML += emptyVIDeffect;
}

setTimeout(()=>{
	Manager.loaded = true;
	Manager.updateDragList();
	Manager.updateDropContainer();
	Manager.updateList();
},1000);