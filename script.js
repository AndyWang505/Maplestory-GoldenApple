//element
const buyBtn = document.getElementById("buyBtn"),
    goldboxBtn = document.getElementById("goldboxBtn"),
    openBtn = document.getElementById("openBtn"),
    openboxBtn = document.getElementById("openboxBtn"),
    blackchipBtn = document.getElementById("blackchipBtn"),
    resetBtn = document.getElementById("resetBtn"),
    drawallBtn = document.getElementById("drawallBtn"),
    /* --Props Label-- */
    applesText = document.getElementById("apples"),
    applechipsText = document.getElementById("appleChips"),
    blackchipsText = document.getElementById("blackChips"),
    goldboxText = document.getElementById("goldBox"),
    frenzytotemText = document.getElementById("FrenzyTotem"),
    gourdText = document.getElementById("gourd"),
    countText = document.getElementById("count"),
    boxcountText = document.getElementById("boxCount"),
    blackchips1Text = document.getElementById("blackchips1"),
    blackchips2Text = document.getElementById("blackchips2"),
    blackchips3Text = document.getElementById("blackchips3"),
    blackchips4Text = document.getElementById("blackchips4"),
    blackchips5Text = document.getElementById("blackchips5"),
    blackchips6Text = document.getElementById("blackchips6"),
    blackchips7Text = document.getElementById("blackchips7"),
    blackchips8Text = document.getElementById("blackchips8"),
    blackchips9Text = document.getElementById("blackchips9"),
    blackchips10Text = document.getElementById("blackchips10"),
    spendText = document.getElementById("spend"),
    /* --廣頻-- */
    prizeText = document.getElementById("prize");

//variable
let apples = 0,
    appleChips = 0,
    blackChips = 0,
    goldBox = 0,
    frenzyTotem = 0,
    gourd = 0,
    count = 0,
    boxCount = 0,
    allPrize = {},
    smallPrize = [],//小獎1
    smallPrize2 = [],//小獎2航海
    bigPrize = [],//大獎池
    normalbigPrize = [],//漆黑碎片
    verybigPrize = {},//睿智葫蘆
    superbigPrize = {},//輪迴碑石
    goldboxPrize = [],//幸運的金色箱子
    blackchipsPrize = [],//漆黑的BOSS飾品
    textId = 0,//移除捲軸溢出標籤的id
    spend = 0,//蘋果購買花費
    /* --漆黑飾品數-- */
    blackchips1 = 0,
    blackchips2 = 0,
    blackchips3 = 0,
    blackchips4 = 0,
    blackchips5 = 0,
    blackchips6 = 0,
    blackchips7 = 0,
    blackchips8 = 0,
    blackchips9 = 0,
    blackchips10 = 0;


//載入後優先取得json
window.onload = () => {
    getJSON();
    alert("小技巧提醒：當點擊『開抽蘋果』按鈕後，可以長按Enter高速水溝。\n ＃另外補充了『重置』及『一鍵水溝』，請小心服用。");
}
//fetch取得本地json
let getJSON = () => {
    fetch("./prizeData.json").then((res) => {
        return res.json();
    }).then((data) => {
        smallPrize = data.smallPrize;
        smallPrize2 = data.smallPrize2;
        bigPrize = data.bigPrize;
        normalbigPrize = data.normalbigPrize;
        verybigPrize = data.verybigPrize;
        superbigPrize = data.superbigPrize;
        goldboxPrize = data.goldboxPrize;
        blackchipsPrize = data.blackchipsPrize;
        // console.log(smallPrize);
        // console.log(bigPrize);
        // console.log(normalbigPrize);
        // console.log(verybigPrize);
        // console.log(superbigPrize);
        // console.log(goldboxPrize);
    }).catch((err) => {
        console.log("getJSON error");
    })
}

//使滾動條焦點在底部
function scrollBar(){
    prizeText.scrollTop = prizeText.scrollHeight;
}

buyBtn.addEventListener("click", () => {
    apples += 35;
    spend += 1890;
    // console.log("買了 "+apples+" 個蘋果");
    applesText.innerHTML = apples;
    spendText.innerHTML = spend;
});
//重置
resetBtn.addEventListener("click", () => {
    prizeText.innerHTML = "";
    apples = 0;
    appleChips = 0;
    blackChips = 0;
    goldBox = 0;
    frenzyTotem = 0;
    gourd = 0;
    count = 0;
    boxCount = 0;
    spend = 0;
    blackchips1 = 0;
    blackchips2 = 0;
    blackchips3 = 0;
    blackchips4 = 0;
    blackchips5 = 0;
    blackchips6 = 0;
    blackchips7 = 0;
    blackchips8 = 0;
    blackchips9 = 0;
    blackchips10 = 0;
    applesText.innerHTML = apples;
    applechipsText.innerHTML = appleChips;
    blackchipsText.innerHTML = blackChips;
    goldboxText.innerHTML = goldBox;
    gourdText.innerHTML = gourd;
    frenzytotemText.innerHTML = frenzyTotem;
    countText.innerHTML = count;
    boxcountText.innerHTML = boxCount;
    spendText.innerHTML = spend;
    blackchips1Text.innerHTML = blackchips1;
    blackchips2Text.innerHTML = blackchips2;
    blackchips3Text.innerHTML = blackchips3;
    blackchips4Text.innerHTML = blackchips4;
    blackchips5Text.innerHTML = blackchips5;
    blackchips6Text.innerHTML = blackchips6;
    blackchips7Text.innerHTML = blackchips7;
    blackchips8Text.innerHTML = blackchips8;
    blackchips9Text.innerHTML = blackchips9;
    blackchips10Text.innerHTML = blackchips10;
});

openBtn.addEventListener("click", () => {
    if(apples === 0){
        alert("黃金蘋果數量不足，請確認數量是否足夠。");
    }else{
        prizeText.focus;
        console.log("抽獎進行"+count+"次，剩"+apples);
        prizeDraw();
        applesText.innerHTML = apples;
        applechipsText.innerHTML = appleChips;
        blackchipsText.innerHTML = blackChips;
        gourdText.innerHTML = gourd;
        frenzytotemText.innerHTML = frenzyTotem;
        countText.innerHTML = count;
        removeText();
        scrollBar();
    }
});
//抽蘋果開獎
function prizeDraw(){
    apples -= 1;
    appleChips += 1;
    count += 1;
    //100.00%
    let probability = Math.round(Math.random()*10000);
    if(probability <= 6){
        //輪迴碑石0.06%
        frenzyTotem += 1;
        // console.log("最後獎勵為：" + superbigPrize.name);
        prizeText.innerHTML += `<h6 class="appleBigprizeText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${superbigPrize.name}</span>。</h6>`;
        alert("恭喜從黃金蘋果機獲得【輪迴碑石】！ 第"+count+"抽");
    }else if(probability <= 117){
        //睿智葫蘆1.11%
        gourd += 1;
        // console.log("最後獎勵為：" + verybigPrize.name);
        prizeText.innerHTML += `<h6 class="appleText" id="Id${textId+=1}">已獲得<span class="textPrize">${verybigPrize.name}</span> 道具1個。</h6>`;
    }else if(probability <= 808){
        //漆黑碎片(1) 6.91%
        blackChips += 1;
        // console.log("最後獎勵為：" + normalbigPrize.name);
        prizeText.innerHTML += `<h6 class="appleBigprizeText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${normalbigPrize.name}</span>。</h6>`;
    }else if(probability <= 964){
        //上廣獎 9.64% 採用 普通皮皮計算上廣機率https://www.youtube.com/watch?v=al8tnzHBBo0&ab_channel=%E6%99%AE%E9%80%9A%E7%9A%AE%E7%9A%AE
        let bigPrizeLength = bigPrize.length-1;
        let normalP = Math.round(Math.random() * bigPrizeLength);
        // console.log(normalP);
        // console.log("最後獎勵為：" + bigPrize[normalP].name);
        prizeText.innerHTML += `<h6 class="appleBigprizeText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${bigPrize[normalP].name}</span>。</h6>`;
    }else if(probability <= 3964){
        //小獎 30% 航海師裝備
        let smallPrize2Length = bigPrize.length-1;
        let smallP2  = Math.round(Math.random() * smallPrize2Length);
        // console.log("最後獎勵為：" + smallPrize2[smallP2].name);
        prizeText.innerHTML += `<h6 class="appleText" id="Id${textId+=1}">已獲得<span class="textPrize">${smallPrize2[smallP2].name}</span> 道具1個。</h6>`;
    }else{
        //一般獎勵
        let smallPrizeLength = smallPrize.length-1;
        let smallP  = Math.round(Math.random() * smallPrizeLength);
        // console.log("最後獎勵為：" + smallPrize[smallP].name);
        prizeText.innerHTML += `<h6 class="appleText" id="Id${textId+=1}">已獲得<span class="textPrize">${smallPrize[smallP].name}</span> 道具1個。</h6>`;
    }
}
//一鍵抽
drawallBtn.addEventListener("click", () => {
    if(apples === 0){
        alert("黃金蘋果數量不足，請確認數量是否足夠。");
    }else{
        alert("抽取較大的量需要時間計算，請稍等一下『廣頻』及『道具欄』更新。");
        let k = apples;
        for(let j=0;j<k;j++){
            // console.log("j="+j)
            // console.log("a="+k)
            prizeDraw();
            removeText();
        }
        applesText.innerHTML = apples;
        applechipsText.innerHTML = appleChips;
        blackchipsText.innerHTML = blackChips;
        gourdText.innerHTML = gourd;
        frenzytotemText.innerHTML = frenzyTotem;
        countText.innerHTML = count;
        scrollBar();
    }
});
goldboxBtn.addEventListener("click", () => {
    if(appleChips === 0 || appleChips < 100){
        alert("黃金蘋果碎片數量不足，請確認數量是否足夠。")
    }else if(appleChips >= 100){
        appleChips -= 100;
        goldBox += 1;
        goldboxText.innerHTML = goldBox;
        applechipsText.innerHTML = appleChips;
    }
});
openboxBtn.addEventListener("click", () => {
    if(goldBox === 0){
        alert("幸運的金色寶箱數量不足，請確認數量是否足夠。");
    }else{
        let probability = Math.round(Math.random()*100);
        if(probability <= 5){
            //輪迴5%
            frenzyTotem += 1;
            // console.log("寶箱獎勵為：" + superbigPrize.name);
            prizeText.innerHTML += `<h6 class="goldboxText" id="Id${textId+=1}">恭喜"你"從幸運的金色箱子機獲得<span class="textPrize">【${superbigPrize.name}】</span>。</h6>`;
            alert("恭喜從黃金蘋果機獲得【輪迴碑石】！");
        }else{
            let goldboxPrizeLength = goldboxPrize.length-1
            let goldboxP = Math.round(Math.random() * goldboxPrizeLength);
            if(goldboxPrize[goldboxP].name == "漆黑的Boss飾品碎片(10)"){
                blackChips += 10;
            }else if(goldboxPrize[goldboxP].name == "漆黑的Boss飾品碎片(15)"){
                blackChips += 15;
            }else if(goldboxPrize[goldboxP].name == "漆黑的Boss飾品碎片(20)"){
                blackChips += 20;
            }
            // console.log("寶箱獎勵為：" + goldboxPrize[goldboxP].name);
            prizeText.innerHTML += `<h6 class="goldboxText" id="Id${textId+=1}">恭喜"你"從幸運的金色箱子機獲得<span class="textPrize">[${goldboxPrize[goldboxP].name}]</span>。</h6>`;
        }
        boxCount += 1;
        goldBox -= 1;
        blackchipsText.innerHTML = blackChips;
        boxcountText.innerHTML = boxCount;
        goldboxText.innerHTML = goldBox;
        gourdText.innerHTML = gourd;
        frenzytotemText.innerHTML = frenzyTotem;
        removeText();
        scrollBar();
    }
});
blackchipBtn.addEventListener("click", () => {
    if(blackChips === 0 || blackChips < 50){
        alert("漆黑的BOSS飾品碎片數量不足，請確認數量是否足夠。");
    }else{
        //漆黑的boss飾品機率相同，取隨機
        blackChips -= 50;
        let blackchipsPLength = blackchipsPrize.length-1
        let blackchipsP = Math.round(Math.random() * blackchipsPLength);
        switch(blackchipsPrize[blackchipsP].name){
            case "口紅控制器標誌":
                blackchips1 += 1;
                break;
            case "附有魔力的眼罩":
                blackchips2 += 1;
                break;
            case "夢幻的腰帶":
                blackchips3 += 1;
                break;
            case "苦痛的根源":
                blackchips4 += 1;
                break;
            case "巨大的恐怖":
                blackchips5 += 1;
                break;
            case "指揮官力量耳環":
                blackchips6 += 1;
                break;
            case "受詛咒的黃魔導書":
                blackchips7 += 1;
                break;
            case "受詛咒的赤魔導書":
                blackchips8 += 1;
                break;
            case "受詛咒的綠魔導書":
                blackchips9 += 1;
                break;
            case "受詛咒的青魔導書":
                blackchips10 += 1;
                break
            default:
                console.log("不符合")
                break;
        }
        // console.log("漆黑飾品獎勵為：" + blackchipsPrize[blackchipsP].name);
        prizeText.innerHTML += `<h6 class="blackchipsText" id="Id${textId+=1}">從漆黑的BOSS飾品碎片中獲得<span class="textPrize">${blackchipsPrize[blackchipsP].name}</span>了。</h6>`;
        removeText();
        scrollBar();
    }
    blackchipsText.innerHTML = blackChips;
    /* 漆黑飾品 */
    blackchips1Text.innerHTML = blackchips1;
    blackchips2Text.innerHTML = blackchips2;
    blackchips3Text.innerHTML = blackchips3;
    blackchips4Text.innerHTML = blackchips4;
    blackchips5Text.innerHTML = blackchips5;
    blackchips6Text.innerHTML = blackchips6;
    blackchips7Text.innerHTML = blackchips7;
    blackchips8Text.innerHTML = blackchips8;
    blackchips9Text.innerHTML = blackchips9;
    blackchips10Text.innerHTML = blackchips10;
});
//捲軸範圍超過scrollHeight時移除溢出的標籤
function removeText(){
    if(prizeText.scrollHeight > 1921){
        let removeId = textId-100
        document.getElementById("Id"+removeId).remove();
    }
}