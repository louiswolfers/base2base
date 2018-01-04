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
			}
		},
		base8(){
		},
		base10(){
		},
		base16(){
		}
	}
});
