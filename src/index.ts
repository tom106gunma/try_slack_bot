import { App } from '@slack/bolt';
import 'dotenv/config'

//②SlackBotのトークンとシークレットを環境変数から読み込む
const env = process.env;

//③SlackBotの初期化
const app = new App({
  token: env.SLACK_BOT_TOKEN,
  signingSecret: env.SLACK_SIGNING_SECRET,
});

//④SlackBotにメッセージを送信する
app.message('', async ({ message, say }) => {
  if (!message.subtype) {
    await say(`Hello, <@${message.user}>. You said: ${message.text}`);
  }
});

(async () => {
  //⑤SlackBotを起動する
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
