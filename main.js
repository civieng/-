// let counter = 0;
// function exeCount(){
//     counter++;
//     return counter
// } 

//テキストの入力と表示
let inputKey;
let inputKeys = "";
function showExeCount(event){
    // console.log(event.key);
    let color = document.getElementById('keyboardinput');
    // color.innerText =exeCount();

    //inputKeyに打った文字を代入
    if(event.key){ //event.keyがtrueかどうか（inputは.target‥なのでfalse）
        inputKey = event.key;
    }else{
        inputKey = event.target.innerText;
    }
    inputKeys+=inputKey;
    // console.log(inputKey);
    color.innerText = inputKeys;

//Enterを押したら判定する
    const right = document.getElementById('answer');
    if(inputKey === "Enter"){
        console.log("Enterが押されました");
        inputKeys = inputKeys.substring(0,inputKeys.length-5);
        color.innerText = inputKeys;
        if(wordgame.evaluation(inputKeys)){
            right.innerText = '正解';
        }else{
            right.innerText = '不正解';
        }
    }

//Deleteが押されたら一文字消す
    if(inputKey === "Delete"){
        console.log("Deleteが押されました");
        inputKeys = inputKeys.substring(0,inputKeys.length-7);
        color.innerText = inputKeys;
        right.innerText = '';
    }
    if(inputKey === "Backspace"){
        console.log("Deleteが押されました");
        inputKeys = inputKeys.substring(0,inputKeys.length-10);
        color.innerText = inputKeys;
        right.innerText = '';
    }
}

document.onkeydown = showExeCount

//ワードゲームの内容
const wordgame = {
    question : document.getElementById('question').innerText = 'リンゴの英単語は?',
    correct : 'apple',
    evaluation : function(answer){
        return wordgame.correct === answer;
    }
}

//キーボードの作成
showAlphabet();

function showAlphabet(){
    const virtualKeyAbord = document.getElementById('virtualkeyboard');
    const aNumber = 'a'.charCodeAt(0)
    const zNumber = 'z'.charCodeAt(0)
    for(let i = aNumber; i <= zNumber; i++){
        // String.fromCharCode(i)
        // document.write(String.fromCharCode(i))
        const word = String.fromCharCode(i);
        // const targetDiv = document.getElementById("virtualkeyboard");
        const button = document.createElement("button");
        button.innerText = word;
        virtualKeyAbord.appendChild(button);
        //カウントアップシステム
        virtualKeyAbord.onclick = showExeCount;
    }
    //Enterキーの表示
    const Enter = document.createElement("button");
    Enter.innerText = "Enter";
    virtualKeyAbord.appendChild(Enter);
    //Deleteキーの表示
    const br = document.createElement("br");
    virtualKeyAbord.appendChild(br);
    const Delete = document.createElement("button");
    Delete.innerText = "Delete";
    virtualKeyAbord.appendChild(Delete);
    
}

