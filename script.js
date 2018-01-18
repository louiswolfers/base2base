var vm = new Vue({
	el: '#app',
	data: {
		base2number: "0",
		base8number: "0",
		base10number: "0",
		base16number: "0"
	},
	methods: {
		baseConverter(baseOrigin, baseName) {
			this.base10number = parseInt(this[baseName], baseOrigin);
			this.base2number = this.base10number.toString(2);
			this.base8number = this.base10number.toString(8);
			this.base16number = this.base10number.toString(16);
		},
		numberChecker(baseOrigin){
			baseName = "base" + baseOrigin + "number";
			if(this[baseName] == ""){
				cleanInputFields();
			} else if (isNaN(parseInt(this[baseName], baseOrigin))){
				if(this[baseName].length == 1){
					cleanInputFields();
				} else {
					this[baseName].pop();
				}
			} else {
				this.baseConverter(baseOrigin, baseName);
			}
		},
		cleanInputFields(){
			this.base2number = "";
			this.base8number = "";
			this.base10number = "";
			this.base16number = "";
		}
	}
});
