# Line_Chatbot
## 步驟:
1. 申請Line Developers 並開通channel token
2. 使用 https://github.com/boybundit/linebot 
3. run起程式後使用 [ngrok](https://ngrok.com/) 
4. 至Line Developers確認網址

**webhook:**

    {  
     “replyToken”: “nHuyWiB7yP5Zw52FIkcQobQuGDXCTA”,  
     “type”: “message”,  
     “timestamp”: 1462629479859,  
     “source”: {  
     “type”: “user”,  
     “userId”: “U4af4980629…”  
     },  
     “message”: {  
     “id”: “325708”,  
     “type”: “text”,  
     “text”: “Hello, world”  
     }  
    }

**response:**

    http_status_code:200

#### entity & intent

Entities 表示用戶輸入中的對象或是關鍵字詞   
Intents 表示使用情境，也就是使用者說了什麼的分類

#### Datetime picker action:

    event.reply({  
      type: 'template',  
      altText: 'this is a buttons template',  
      template: {  
        type: 'buttons',  
        thumbnailImageUrl: '[https://example.com/bot/images/image.jpg'](https://example.com/bot/images/image.jpg%27),  
        title: '開啟菜單',  
        text: '❗️注意:請先確認您line版本在7.12.0以上',  
        actions: [{  
          type:'datetimepicker',  
          label:'我要新增',  
          data:'create',  
          mode:'datetime',  
        }, {  
          type:'datetimepicker',  
          label:'我要查詢',  
          data:'search',  
          mode:'datetime',  
        }]  
      }  
    });

[Datetime picker action](https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action)

[Postback event](https://developers.line.biz/en/reference/messaging-api/#postback-event)

#### reply multiple text messages

    //reply multiple text messages  
    event.reply([‘Hello, world 1’, ‘Hello, world 2’]);
    
    // reply multiple message object  
    event.reply([  
      { type: 'text', text: 'Hello, world 1' },  
      { type: 'text', text: 'Hello, world 2' }  
    ]);

[https://github.com/boybundit/linebot#eventreplymessage](https://github.com/boybundit/linebot#eventreplymessage)

#### 📎links:

[認識 Line Messaging API Webhook](https://ithelp.ithome.com.tw/articles/10193441)

[使用Node.js建置你的第一個LINE BOT](https://medium.com/pyradise/%E4%BD%BF%E7%94%A8node-js%E5%BB%BA%E7%BD%AE%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E5%80%8Bline-bot-590b7ba7a28a)

[SDK for the LINE Messaging API for Node.js](https://github.com/boybundit/linebot)

[ngrok](https://ngrok.com/)

[Line@ MANAGER](https://ithelp.ithome.com.tw/articles/10195333) — [http://at.line.me/tw/](http://at.line.me/tw/)

[Actions](https://developers.line.biz/en/docs/messaging-api/actions/)

    {   
     “type”:”message”,  
     “label”:”Yes”,  
     “text”:”Yes”   //反傳訊息  
    }


