// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '##channelId',
  channelSecret: '##channelSecret',
  channelAccessToken: '##channelAccessToken'
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
if(event.message.text=="關於肌少症"){
    event.reply({
  type: 'template',
  altText: 'this is a buttons template',
  template: {
    type: 'buttons',
    thumbnailImageUrl: 'https://4.bp.blogspot.com/-KLpxld-3_dM/Vq89HylbvTI/AAAAAAAA3mw/hjsIfFEw4e0/s400/otoshiyori_kagamu.png',
    title: '關於肌少症',
    text: '歡迎詢問以下問題',
    actions: [{
      type: 'postback',
      label: '什麼是肌少症?',
      text:"什麼是肌少症?",
      data: 'action=buy&itemid=123'
    }, {
      type: 'postback',
      label: '為什麼會造成肌少症?',
      text:"為什麼會造成肌少症?",
      data: 'action=why&itemid=123'
    }, {
      type: 'postback',
      label: '肌少症會造成什麼影響?',
      text:"肌少症會造成什麼影響?",
      data: 'action=cause&itemid=123'
    }]
  }
});
  }else if(event.message.text=="如何改善"){
     event.reply({
  type: 'template',
  altText: 'this is a buttons template',
  template: {
    type: 'buttons',
    thumbnailImageUrl: 'https://3.bp.blogspot.com/-Gg4DhN2V_qM/Wn1WFIcgFgI/AAAAAAABKHc/EUC1ThmSdL0caCnoZGsfFhwXZtF5I2dygCLcBGAs/s450/medical_kaigo_tsuuin_kaijo_man.png',
    title: '肌少症可以怎麼改善呢?',
    text: '歡迎詢問以下問題',
    actions: [{
      type: 'postback',
      label: '飲食方面',
      text:"飲食方面",
      data: 'action=food&itemid=123'
    }, {
      type: 'postback',
      label: '運動方面',
      text:"運動方面",
      data: 'action=exercise&itemid=123'
    }]
  }
});
  }
  else if(event.message.text=="如何檢測"){
    event.reply([
  { type: 'text', text: '⭐️您可以量小腿最寬處\n50歲以上，小腿圍\n🧑男性小於34公分\n👩女性小於32公分\n或者\n\n⭐️您也可以以雙手食指和拇指圍住小腿肚看是否可圍住喔(如下圖)(圖片來源:ihealth)' },
  { type: 'image', originalContentUrl: 'https://i1.wp.com/www.ihealth.com.tw/article/wp-content/uploads/2018/12/%E8%82%8C%E5%B0%91%E7%97%87_%E8%87%AA%E6%88%91%E6%AA%A2%E6%B8%AC.jpg?w=1000&ssl=1',previewImageUrl: 'https://i1.wp.com/www.ihealth.com.tw/article/wp-content/uploads/2018/12/%E8%82%8C%E5%B0%91%E7%97%87_%E8%87%AA%E6%88%91%E6%AA%A2%E6%B8%AC.jpg?w=1000&ssl=1' }]).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });    
  }
  else if(event.message.text=="飲食方面"){
    event.reply("可以多攝取以下食物:\n⭐️維生素D \n黑木耳、鮭魚、秋刀魚、鮭魚、鮪魚、沙丁魚、牛奶、起司、蛋黃\n❗️且有充足的日照!!\n❗️目前台灣對於每日維生素D 的建議攝取量為：成人200 I.U.（5 微克）、老年人400 I.U.（10 微克），補充上限為2000 I.U.（50 微克）。\n\n⭐️蛋白質\n豆漿、牛奶、起司、蛋類、雞肉、魚肉、牛肉 堅果雜糧").then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
  }
  else if(event.message.text=="運動方面"){
    event.reply("⭐️有氧運動\n慢跑、散步、健走(3000-5000/天)、游泳、太極拳\n裝滿水的寶特瓶當作啞鈴練習舉重\n利用彈力帶針對肩膀、肘、大腿、膝蓋等部位進行每10次為一組的重複動作。\n❗️建議每週至少三次，每次至少 30 分鐘!").then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
  }
  else if(event.message.text=="什麼是肌少症?"){
    event.reply("隨著年紀的增加肌肉逐漸衰退，不只是肌肉質量減少，而包括肌肉無力、活動表現變差\n成年人在 40 歲之後，肌肉質量平均每十年減少 8%").then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
  }
  else if(event.message.text=="為什麼會造成肌少症?"){
    event.reply("以下原因都可能造成肌肉減少:\n✔️久坐不動\n✔️長期臥床\n✔️缺乏運動\n✔️營養攝取不均").then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
  }
  else if(event.message.text=="肌少症會造成什麼影響?"){
    event.reply("可能會導致\n🔸肌肉無力，導致跌倒風險增加，甚至導致失能\n🔸走路變緩慢且吃力\n🔸久則可能導致骨質疏鬆，增加骨折可能").then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
  }else{
    event.reply("不好意思我不懂您的意思").then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
  }
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3011, function () {
    console.log('[BOT已準備就緒]');
});