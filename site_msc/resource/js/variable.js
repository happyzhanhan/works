/**
 * Created by 文平 on 2016-03-06.
 */
/***
* siginVerifyMessage  验证提示信息
* @user：用户
* @setPW：设置密码
* @verifyPW：确认密码
* @email：邮箱
* @phone：手机
* @CAPTCHA：验证码
* @note：短信验证码
* @mail：邮箱验证码
* @referrer：推荐人
*
*
* @succee：成功
* @error：错误
* @activate：当前
* @message:普通提示信息
* */
var siginVerifyMessage = {};

siginVerifyMessage.user = {};
siginVerifyMessage.user.succee = [];
siginVerifyMessage.user.error = [];
siginVerifyMessage.user.activate = [];
siginVerifyMessage.user.message = [];

siginVerifyMessage.user.activate[0] = '用户名必须是……';

/*
添加信息示例如下：
* siginVerifyMessage.user.succee[0] = "成功信息1！";
* siginVerifyMessage.user.succee[1] = "成功信息2！";
*
* siginVerifyMessage.user.error[0] = "错误信息1！";
* siginVerifyMessage.user.error[1] = "错误信息2！";
*
* siginVerifyMessage.user.activate[0] = "当前信息1！";
* siginVerifyMessage.user.activate[1] = "当前信息2！";
*
* siginVerifyMessage.user.message[0] = "信息1！";
* siginVerifyMessage.user.message[1] = "信息2！";
* */

siginVerifyMessage.setPW = {};
siginVerifyMessage.setPW.succee = [];
siginVerifyMessage.setPW.error = [];
siginVerifyMessage.setPW.activate = [];
siginVerifyMessage.setPW.message = [];

siginVerifyMessage.setPW.activate[0] = '密码必须是……';


siginVerifyMessage.verifyPW = {};
siginVerifyMessage.verifyPW.succee = [];
siginVerifyMessage.verifyPW.error = [];
siginVerifyMessage.verifyPW.activate = [];
siginVerifyMessage.verifyPW.message = [];

siginVerifyMessage.verifyPW.activate[0] = '请注意保持密码一致';


siginVerifyMessage.email = {};
siginVerifyMessage.email.succee = [];
siginVerifyMessage.email.error = [];
siginVerifyMessage.email.activate = [];
siginVerifyMessage.email.message = [];

siginVerifyMessage.email.activate[0] = '邮箱……';


siginVerifyMessage.phone = {};
siginVerifyMessage.phone.succee = [];
siginVerifyMessage.phone.error = [];
siginVerifyMessage.phone.activate = [];
siginVerifyMessage.phone.message = [];

siginVerifyMessage.phone.activate[0] = '手机……';

siginVerifyMessage.CAPTCHA = {};
siginVerifyMessage.CAPTCHA.succee = [];
siginVerifyMessage.CAPTCHA.error = [];
siginVerifyMessage.CAPTCHA.activate = [];
siginVerifyMessage.CAPTCHA.message = [];

siginVerifyMessage.CAPTCHA.activate[0] = '验证码……';

siginVerifyMessage.note = {};
siginVerifyMessage.note.succee = [];
siginVerifyMessage.note.error = [];
siginVerifyMessage.note.activate = [];
siginVerifyMessage.note.message = [];

siginVerifyMessage.note.activate[0] = '短信……';

siginVerifyMessage.mail = {};
siginVerifyMessage.mail.succee = [];
siginVerifyMessage.mail.error = [];
siginVerifyMessage.mail.activate = [];
siginVerifyMessage.mail.message = [];

siginVerifyMessage.mail.activate[0] = '邮件……';

siginVerifyMessage.referrer = {};
siginVerifyMessage.referrer.succee = [];
siginVerifyMessage.referrer.error = [];
siginVerifyMessage.referrer.activate = [];
siginVerifyMessage.referrer.message = [];

siginVerifyMessage.referrer.activate[0] = '推荐人……';


//用法同上
var loginVerifyMessage;
loginVerifyMessage = {};
loginVerifyMessage.user = {};
loginVerifyMessage.user.succee = [];
loginVerifyMessage.user.error = [];
loginVerifyMessage.user.activate = [];
loginVerifyMessage.user.message = [];
loginVerifyMessage.user.activate[0] = '用户名……';
loginVerifyMessage.password = {};
loginVerifyMessage.password.succee = [];
loginVerifyMessage.password.error = [];
loginVerifyMessage.password.activate = [];
loginVerifyMessage.password.message = [];
loginVerifyMessage.password.activate[0] = '密码必须是……';
loginVerifyMessage.trendsPW = {};
loginVerifyMessage.trendsPW.succee = [];
loginVerifyMessage.trendsPW.error = [];
loginVerifyMessage.trendsPW.activate = [];
loginVerifyMessage.trendsPW.message = [];
loginVerifyMessage.trendsPW.activate[0] = '请注意保持密码一致';

//用法同上
var retrievePWVerifyMessage;
retrievePWVerifyMessage = {};
retrievePWVerifyMessage.user = {};
retrievePWVerifyMessage.user.succee = [];
retrievePWVerifyMessage.user.error = [];
retrievePWVerifyMessage.user.activate = [];
retrievePWVerifyMessage.user.message = [];
retrievePWVerifyMessage.user.activate[0] = '用户名……';
retrievePWVerifyMessage.password = {};
retrievePWVerifyMessage.password.succee = [];
retrievePWVerifyMessage.password.error = [];
retrievePWVerifyMessage.password.activate = [];
retrievePWVerifyMessage.password.message = [];
retrievePWVerifyMessage.password.activate[0] = '密码必须是……';
retrievePWVerifyMessage.trendsPW = {};
retrievePWVerifyMessage.trendsPW.succee = [];
retrievePWVerifyMessage.trendsPW.error = [];
retrievePWVerifyMessage.trendsPW.activate = [];
retrievePWVerifyMessage.trendsPW.message = [];
retrievePWVerifyMessage.trendsPW.activate[0] = '请注意保持密码一致';
retrievePWVerifyMessage.phone = {};
retrievePWVerifyMessage.phone.succee = [];
retrievePWVerifyMessage.phone.error = [];
retrievePWVerifyMessage.phone.activate = [];
retrievePWVerifyMessage.phone.message = [];
retrievePWVerifyMessage.phone.activate[0] = '手机……';
retrievePWVerifyMessage.email = {};
retrievePWVerifyMessage.email.succee = [];
retrievePWVerifyMessage.email.error = [];
retrievePWVerifyMessage.email.activate = [];
retrievePWVerifyMessage.email.message = [];
retrievePWVerifyMessage.email.activate[0] = '邮箱……';
retrievePWVerifyMessage.CAPTCHA = {};
retrievePWVerifyMessage.CAPTCHA.succee = [];
retrievePWVerifyMessage.CAPTCHA.error = [];
retrievePWVerifyMessage.CAPTCHA.activate = [];
retrievePWVerifyMessage.CAPTCHA.message = [];
retrievePWVerifyMessage.CAPTCHA.activate[0] = '验证码……';
retrievePWVerifyMessage.dynamicCipherPhone = {};
retrievePWVerifyMessage.dynamicCipherPhone.succee = [];
retrievePWVerifyMessage.dynamicCipherPhone.error = [];
retrievePWVerifyMessage.dynamicCipherPhone.activate = [];
retrievePWVerifyMessage.dynamicCipherPhone.message = [];
retrievePWVerifyMessage.dynamicCipherPhone.activate[0] = '动态密码……';
retrievePWVerifyMessage.dynamicCipherMail = {};
retrievePWVerifyMessage.dynamicCipherMail.succee = [];
retrievePWVerifyMessage.dynamicCipherMail.error = [];
retrievePWVerifyMessage.dynamicCipherMail.activate = [];
retrievePWVerifyMessage.dynamicCipherMail.message = [];
retrievePWVerifyMessage.dynamicCipherMail.activate[0] = '动态密码……';






