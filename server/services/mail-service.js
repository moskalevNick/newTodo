const nodemailer = require('nodemailer')

class MailService {
    
    constructor(){
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth:{
                email: process.env.SMTP_USER,
                password: process.env.SMTP_RASSWORD
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
                </div>
           `
       }) 
    }
}

module.exports = new MailService()