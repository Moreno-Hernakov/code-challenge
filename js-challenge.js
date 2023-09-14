// ==============================================================
// ======================= CODE CHALLENGE =======================
// ==============================================================

// HITUNG KARAKTER KATA PER HURUF TERBANYAK
let text = "The quick brown fox jumpedrrr over the lazy dog";
let wordlength = []

// convert array perkata berdasarkan spasi dan memasukan ke array wordlength panjang dari setiap kata
text.split(" ").forEach(data => wordlength.push(data.length));

// sortir array berdasarkan panjang terbesar dan mengambil index yang ke 0 atau yang terbersar
console.log(wordlength.sort(function(a, b){return b - a})[0])

// ==============================================================

// HITUNG KARAKTER KATA PER HURUF TERBANYAK DIDALAM ARRAY
function largestOfFour(arr, bigNumb = []) {
  let i = 0
  while(i < 4){

    bigNumb.push(arr[i].sort((a, b) => b - a)[0]);

    i++
  }
  return bigNumb
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// ==============================================================

// Cek Persamaan kata diakhir kalimat tanpa endsWith()

function confirmEnding(str, target) {
  // panjang kata kedua
  let pTarget = target.length
  // panjang kata pertama
  let pStr = [...str].length
  // ambil kata pertama sesuai dengan kata kedua
  let arrWord = [...str].slice(pStr - pTarget, pStr)
  // parse to string
  let toStr = arrWord.toString().replace(/,/g, "")
  
  return toStr === target? true : false
}

// confirmEnding("Bastian", "an");

// ==============================================================

// Menggandakan string sebanyak yang diminta tanpa repeat()

function repeatStringNumTimes(str, num) {
  let emptyArr = []
  let emptyArr2 = []

  // memasukan param pertama kedalam sebanyak nilai par kedua
  for(let i = 0; i < num; i++){
    emptyArr[i] = [...str]
  }

  // membedah banyak array kedalam 1 array 
  for(let i = 0; i < num; i++){
    emptyArr2[i] = emptyArr[i].toString().replace(/,/g, "")
  }

  // parse array menjadi string
  return emptyArr2.toString().replace(/,/g, "")
  console.log(emptyArr2.toString().replace(/,/g, ""))
}

repeatStringNumTimes("abc", 3);

// ==============================================================

// uppercase huruf pertama dalam kata

function titleCase(str) {
  let toLowerCase = str.toLowerCase()
  let arr = []
  let tostr = []


  toLowerCase.split(" ").forEach(data => {
    arr.push([...data])
  })


  for(let i = 0; i < arr.length; i++){
    let sementara = arr[i][0]
    arr[i].shift()
    arr[i].unshift(sementara.toUpperCase())


    tostr.push(arr[i].toString().replace(/,/g, "")
)
    
  }
  return tostr.toString().replace(/,/g, " ");
}

titleCase("I'm a little tea pot");

// ==============================================================

// menghapus satu value array sesuai index

const videoWindow = ['Netflix', 'YouTube', 'Vimeo', 'Vine']; 

function coba (index, arr){
    let before = arr.splice(0,index)
    let after = arr.splice(1)
    
    let final = before.concat(after)

    return final
}

console.log(coba(1, videoWindow))

// ==============================================================

// Pig Latin Transalte

function translatePigLatin(str) {
  let toArr = [...str]
  let shft = []
  let endWord = 'ay'
  let isNotVocal = true

  for(let i = 0 ; i < toArr.length ; i++){

    if
    (
      toArr[i] == 'a' ||toArr[i] == 'i' ||toArr[i] == 'u' ||
      toArr[i] == 'e' ||toArr[i] == 'o'
    )
    {
      if(i === 0){
        endWord = 'way'
      }
      isNotVocal = false
      toArr.splice(0, i)
      break;
    }

    shft.push(toArr[i])
    
  }

  let join = isNotVocal ? toArr : toArr.concat(shft)
  let toStr = join.toString().replace(/,/g, "")+endWord
  return toStr;
}

translatePigLatin("algorithm");
translatePigLatin("rhythm");
translatePigLatin("glove");

// ==============================================================

// Penganti Kata

function myReplace(str, before, after) {
  let toArr = str.split(' ')
  let afterWord = after

  if([...before][0] == [...before][0].toUpperCase()){
    afterWord = after.charAt(0).toUpperCase() + after.slice(1);
  }else{
    afterWord = after.toLowerCase()
  }

  toArr.forEach((e, index) => {
    if(e == before){
      toArr.splice(index, 1)
      toArr.splice(index, 0, afterWord)
    }
  })

  let toStr = toArr.toString().replace(/,/g, " ")
  return toStr;
}

myReplace("Let us go to the store", "store", "mall")

// ==============================================================

// Pair DNA

function pairElement(str) {
  let newArr = []
  let toStr = [...str]

  toStr.forEach(e => {
    let trigger = [e]
    let condt = ''
    switch(e){
      case 'A' :
        condt = 'T'
        break;
      case 'T' :
        condt = 'A'
        break;
      case 'C' :
        condt = 'G'
        break;
      case 'G' :
        condt = 'C'
        break;
    }
    trigger.push(condt)
    newArr.push(trigger)

    trigger = []
  })

  return newArr;
}

pairElement("GCG");

// ==============================================================

// Palindrome 

function palindrome(str) {
  let before = str
                .match(/[A-Za-z0-9]+/g)
                .join()
                .replace(/,/g, "")
                .toLowerCase()
  let after = before
                .split('')
                .reverse()
                .toString()
                .replace(/,/g, "")
  return before == after;
}

palindrome("eye");
palindrome("race car")

// ==============================================================

// Tambah 13 Charcode dari semula

function rot13(str) {
  let arr = []

  for(let i = 0 ; i < str.length; i++){

    let toCharCode = str.charCodeAt(i);

    if(toCharCode > 64 && toCharCode < 91 ){
      toCharCode += 13
      if(toCharCode > 90){
        toCharCode -= 26
      }
    }
    
    arr.push(String.fromCharCode(toCharCode))
  }

  let toStr = arr.join().replace(/,/g, "")
  return toStr;
}

rot13("SERR PBQR PNZC");
