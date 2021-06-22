const nodemailer = require('nodemailer')

class MailService {

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth:{
                email: process.env.SMTP_USER,
                pass: process.env.SMTP_RASSWORD
            }
        })
    }
    async sendActivationMail(to, link) {    
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'активация аккаунта ToDo',
            text:'',
            html:
            `
            <div>
            <h1>Для активации аккаунта перейдите по ссылке:</h1>
            <a href="${link}">${link}</a>
            <div>Autor: </div>
            <a href="http://www.linkedin.com/in/nickmoskalev/" target="_blank" rel="noreferrer">ⓒMoskalevNick</a>
            </div>
            `
        }) 
    }
}

module.exports = new MailService()