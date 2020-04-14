const webpush = require('web-push'); // web-pushを参照
// サーバー鍵ペア
const vapidPublicKey = 'BCHMTJD33YwmxNH00P8SvYYdAppj0jAFIU8KdTfV06mMP0ZEEP0CGcrERCVSFcn7FjDfMVt3Z7ssx_kET3d0hjk';
const vapidPrivateKey = '4SRIEqUvBV1oOeMoPjHGF8M1hoHJW6q5zD8Jo2oeVjA';
// 通知に必要なパラメーター
// エンドポイント
const endpoint = 'https://fcm.googleapis.com/fcm/send/cBWLilRz55A:APA91bEC2PYh58ts8u0hSNrKbwGZfSRQr21JTP0EtYE86z0Z9XpduKGr2HVryzSR4GsUbSuYOdewPrzGkcfF2d-_VSXzg0XylLPAFyZ364XTZfyih4s7WEJtzRGOQw83c83FeeE_gy_T';
// クライアント公開鍵
const p256dh = 'BCCxnaRWk6T9f-bP4KbCNovInEJEDe9QCNGNQ0HcayLUSe7eik-_2eY_P2LWZLg-ar0CQHrw-Bc4FgJ-9ZtUT6w';
// Auth Secret
const auth = 'l3TDzYBRPAgdziE3NSpU5Q';
// web-pushライブラリーに検証のための情報を設定

function setVapidDetails(_vapidPublicKey , _vapidPrivateKey) {
  webpush.setVapidDetails(
    'mailto:daikih@jsw-nis.co.jp',
    _vapidPublicKey,
    _vapidPrivateKey
  );
}
/*
webpush.setVapidDetails(
  'mailto:daikih@jsw-nis.co.jp',
  vapidPublicKey,
  vapidPrivateKey
);*/
// pushSubscription（プッシュ通知送信先情報）を作成
const pushSubscription = {
  endpoint: endpoint,
  keys: {
    p256dh: p256dh,
    auth: auth
  }
};

function sendNotification(_endpoint , _p256dh, _auth, _title, _body) {
  // プッシュ通知送信
  webpush.sendNotification(
    {
      endpoint: _endpoint,
      keys: {
        p256dh: _p256dh,
        auth: _auth
      }
    },
    JSON.stringify({
      notification: {
        title: _TITLE,
        body: _body,
        icon: 'assets/icons/icon-192x192.png'
      },
      data: { // ペイロードにデータを追加
        url:'https://www.codezine.jp'
      }
    })
  );
  
}
