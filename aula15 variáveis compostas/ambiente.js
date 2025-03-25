let num = [8,1,7,4,2,9]
num.sort()
num.push(6)

let pos = num.indexOf(2)

if (pos==-1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}