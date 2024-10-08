let txtInp=document.getElementById("txtInp")
const goBtn=document.getElementById("goBtn")
const txtRes=document.getElementsByClassName("txtRes")[0]

const calculateLength=()=>{
    txtRes.innerHTML=""
    const txtInpVal=txtInp.value.trim()
    let txtLen=0
    for (let i=0; i<txtInpVal.length; i++){
        if (txtInpVal[i]!==" "){
            txtLen++
        }
    }
    txtRes.append(`Length of character: ${txtLen}`)
    txtInp.value = ""
}
goBtn.addEventListener("click", calculateLength)