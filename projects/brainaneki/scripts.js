function runAneki() {
  interpret(compile(document.getElementById("code").value));
}

function compile(code) {
	let antoken = ["！！！","？？？","とても","クール","ばか","あんた","って言ったよねぇぇぇぇ！！！！？？？？ねええぇぇぇぇぇぇぇええ！！！お姉さんあれだから！正直に言えば怒らないから！"]
	let bftoken = [">","<","+","-",".","[","]"]
	let str = "";
	let out = "";
	for(let i = 0; i < code.length + 1; i++) {
		str += code.charAt(i);
		if (antoken.indexOf(str) != -1) {
			out += bftoken[antoken.indexOf(str)];
			str = "";
		}
	}
	return out;
}

function interpret(code) {
	let ascii = "\0------\a\b\t\n\v\f\r----------\e------- !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
	let out = "";
	let mem = [...Array(37564)].map(x => 0);
	let point = 18782;
	for(let i = 0; i < code.length + 1; i++) {
		switch(code[i]) {
			case ">" :
				point++;
				break;
			case "<" :
				point--;
				break;
			case "+" :
				mem[point]++;
				break;
			case "-" :
				mem[point]--;
				break;
			case "." :
				out += ascii.charAt(mem[point]);
				break;
			case "[" :
				if (mem[point] == 0) {
					let loop = 1;
					while(loop != 0) {
						i++;
						switch(code[i]) {
							case "[" :
								loop++;
								break;
							case "]" :
								loop--;
								break;
						}
					}
				}
				break;
			case "]" :
				if (mem[point] != 0) {
					let loop = 1;
					while(loop != 0) {
						i--;
						switch(code[i]) {
							case "[" :
								loop--;
								break;
							case "]" :
								loop++;
								break;
						}
					}
					
				}
				break;
		}
	}
	alert(out);
}

function anticompile(code) {
	let antoken = ["！！！","？？？","とても","クール","ばか","あんた","って言ったよねぇぇぇぇ！！！！？？？？ねええぇぇぇぇぇぇぇええ！！！お姉さんあれだから！正直に言えば怒らないから！"]
	let bftoken = [">","<","+","-",".","[","]"]
	let out = "";
	for(let i = 0; i < code.length; i++) {
		out += antoken[bftoken.indexOf(code.charAt(i))];
	}
	return out;
}
