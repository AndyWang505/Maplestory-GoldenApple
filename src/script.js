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
    blackchips10 = 0,
    tableData = {};


//載入後優先取得json
window.onload = () => {
    getJSON();
    alert("小技巧提醒：當點擊『開抽蘋果』按鈕後，可以長按Enter高速水溝。\n ＃另外補充了『重置』及『一鍵水溝』，請小心服用。");
}
//fetch取得本地json
let getJSON = () => {
    fetch("./data/prizeData.json").then((res) => {
        return res.json();
    }).then((data) => {
        tableData = data;
    }).catch((err) => {
        console.log("getJSON error");
    })
}

//使滾動條焦點在底部
function scrollBar(){
    prizeText.scrollTop = prizeText.scrollHeight;
    // console.log("prizeText.scrollHeight : "+prizeText.scrollHeight)
    // console.log("prizeText.scrollTop : "+prizeText.scrollTop)
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
        prizeDraw();
        console.log("抽獎進行"+count+"次，剩"+apples);
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
    let probability = Math.random();
    let total = 0;
    for (let i = 0; i < tableData.apple.length; i++) {
        let prize = tableData.apple[i];
        if (probability >= total && probability <= total + prize.p) {
            // yes, it's in range!
            switch (prize.name) {
                case "輪迴碑石":
                    prizeText.innerHTML += `<h6 class="appleBigprizeText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${prize.name}</span>。</h6>`;
                    alert("恭喜從黃金蘋果機獲得【輪迴碑石】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "漆黑的BOSS飾品碎片":
                    prizeText.innerHTML += `<h6 class="appleBigprizeText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${prize.name}</span>。</h6>`;
                    blackChips += 1;
                    break;
                case "神秘冥界武器變換箱":
                    prizeText.innerHTML += `<h6 class="appleBigprizeText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${prize.name}</span>。</h6>`;
                    break;
                case "神秘冥界防具變換箱":
                    prizeText.innerHTML += `<h6 class="appleBigprizeText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${prize.name}</span>。</h6>`;
                    break;
                case "星力16星強化卷軸":
                    prizeText.innerHTML += `<h6 class="appleBigprizeText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${prize.name}</span>。</h6>`;
                    break;
                case "星力15星強化卷軸":
                    prizeText.innerHTML += `<h6 class="appleBigprizeText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${prize.name}</span>。</h6>`;
                    break;
                case "星力14星強化卷軸":
                    prizeText.innerHTML += `<h6 class="appleBigprizeText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${prize.name}</span>。</h6>`;
                    break;
                case "鈦之心":
                    prizeText.innerHTML += `<h6 class="appleBigprizeText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${prize.name}</span>。</h6>`;
                    break;
                case "精靈之心":
                    prizeText.innerHTML += `<h6 class="appleBigprizeText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${prize.name}</span>。</h6>`;
                    break;
                case "睿智葫蘆":
                    prizeText.innerHTML += `<h6 class="appleText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${prize.name}</span>。</h6>`;
                    gourd += 1;
                    break;
                default:
                    prizeText.innerHTML += `<h6 class="appleText" id="Id${textId+=1}">恭喜"你"從黃金蘋果機獲得<span class="textPrize">${prize.name}</span>。</h6>`;
                    break;
            }
            break;
        } else {
            // not in range, going to next loop
            total = total + prize.p;
        }
    }
}

//一鍵抽
drawallBtn.addEventListener("click", () => {
    if(apples === 0){
        alert("黃金蘋果數量不足，請確認數量是否足夠。");
    }else{
        alert("抽取較大的量需要時間計算，請稍等一下『廣頻』及『道具欄』更新。");
        let k = apples;
        for (let j=0; j<k; j++){
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
//幸運的金色箱子開獎
openboxBtn.addEventListener("click", () => {
    if(goldBox === 0){
        alert("幸運的金色寶箱數量不足，請確認數量是否足夠。");
    }else{
        let probability =Math.random();

        let total = 0;
        for (let i = 0; i < tableData.box.length; i++) {
            let prize = tableData.box[i];
            if (probability >= total && probability <= total + prize.p) {
                // yes, it's in range!
                prizeText.innerHTML += `<h6 class="goldboxText" id="Id${textId+=1}">恭喜"你"從幸運的金色箱子機獲得<span class="textPrize">【${prize.name}】</span>。</h6>`;
                switch (prize.name) {
                    case "輪迴碑石":
                        alert("恭喜從黃金蘋果機獲得【輪迴碑石】！");
                        frenzyTotem += 1;
                        break;
                    case "漆黑的BOSS碎片*20":
                        blackChips += 20;
                        break;
                    case "漆黑的BOSS碎片*15":
                        blackChips += 15;
                        break;
                    case "漆黑的BOSS碎片*10":
                        blackChips += 10;
                        break;
                    default:
                        break;
                }
                break;
            } else {
                // not in range, going to next loop
                total = total + prize.p;
            }
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
//兌換漆黑碎片
blackchipBtn.addEventListener("click", () => {
    if(blackChips === 0 || blackChips < 50){
        alert("漆黑的BOSS飾品碎片數量不足，請確認數量是否足夠。");
    }else{
        //漆黑的boss飾品機率相同，取隨機
        blackChips -= 50;
        let blackchipsPLength = tableData.blackchipsPrize.length-1
        let blackchipsP = Math.round(Math.random() * blackchipsPLength);
        switch(tableData.blackchipsPrize[blackchipsP].name){
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
                break;
        }
        // console.log("漆黑飾品獎勵為：" + tableData.blackchipsPrize[blackchipsP].name);
        prizeText.innerHTML += `<h6 class="blackchipsText" id="Id${textId+=1}">從漆黑的BOSS飾品碎片中獲得<span class="textPrize">${tableData.blackchipsPrize[blackchipsP].name}</span>了。</h6>`;
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
