var vm = new Vue({
	el: '#app',
	data: {
		base2number: "",
		base8number: "",
		base10number: "",
		base16number: "",
		unsigned: false
	},
	methods: {
		baseConverter(baseOrigin, baseName, unsigned) {
			if (!unsigned) {
				this.base10number = parseInt(this[baseName], baseOrigin);
				this.base2number = this.base10number.toString(2);
				this.base8number = this.base10number.toString(8);
				this.base16number = this.base10number.toString(16);
			} else {
				this.base10number = parseInt(this[baseName], baseOrigin);
				this.base2number = this.base10number.toString(2).shift();
				this.base8number = this.base10number.toString(8);
				this.base16number = this.base10number.toString(16);
			}
		},
		cleanInputFields(){
			this.base2number = "";
			this.base8number = "";
			this.base10number = "";
			this.base16number = "";
		},
		correctInputFields(baseOrigin, baseName, unsigned){
			if (unsigned) {
				switch(baseOrigin) {
					case 2:
						this[baseName] = this[baseName].replace(/[^01]/g, "");
						break;
					case 8:
						this[baseName] = this[baseName].replace(/([^0-7]|[^-])/g, "");
						break;
					case 10:
						this[baseName] = this[baseName].replace(/([^0-9]|[^-])/g, "");
						break;
					case 16:
						this[baseName] = this[baseName].replace(/([^0-9a-fA-f]|[^-])/g, "");
						break;
				}
			} else {
				switch(baseOrigin) {
					case 2:
						this[baseName] = this[baseName].replace(/[^01]/g, "");
						break;
					case 8:
						this[baseName] = this[baseName].replace(/[^0-7]/g, "");
						break;
					case 10:
						this[baseName] = this[baseName].replace(/[^0-9]/g, "");
						break;
					case 16:
						this[baseName] = this[baseName].replace(/[^0-9a-fA-f]/g, "");
						break;
				}
			}
		},
		numberChecker(baseOrigin){
			baseName = "base" + baseOrigin + "number";
			if(this[baseName] == ""){
				this.cleanInputFields();
			} else if (isNaN(parseInt(this[baseName], baseOrigin))){
				if(this[baseName].length == 1){
					this.cleanInputFields();
				} else {
					this.correctInputFields(baseOrigin, baseName);
				}
			} else {
				this.baseConverter(baseOrigin, baseName);
			}
		}
	}
});
