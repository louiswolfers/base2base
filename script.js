var vm = new Vue({
	el: '#app',
	data: {
		base2number: "0",
		base8number: "0",
		base10number: "0",
		base16number: "0"
	},
	methods: {
		base2(){
			if(this.base2number != ""){
				this.base10number = parseInt(this.base2number, 2);
				this.base8number = this.base10number.toString(8);
				this.base16number = this.base10number.toString(16);
			} else {
				this.base8number = 0;
				this.base10number = 0;
				this.base16number = 0;
			}
		},
		base8(){
			if(this.base8number != ""){
				this.base10number = parseInt(this.base8number, 8);
				this.base2number = this.base10number.toString(2);
				this.base16number = this.base10number.toString(16);
			} else {
				this.base2number = 0;
				this.base10number = 0;
				this.base16number = 0;
			}
		},
		base10(){
			if(this.base10number != ""){
				this.base10number = parseInt(this.base10number);
				this.base2number = this.base10number.toString(2);
				this.base8number = this.base10number.toString(8);
				this.base16number = this.base10number.toString(16);
			} else {
				this.base2number = 0;
				this.base8number = 0;
				this.base16number = 0;
			}
		},
		base16(){
			if(this.base16number != ""){
				this.base10number = parseInt(this.base16number, 16);
				this.base2number = this.base10number.toString(2);
				this.base8number = this.base10number.toString(8);
			} else {
				this.base2number = 0;
				this.base8number = 0;
				this.base10number = 0;
			}
		}
	}
});
