const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'eemelijarvine@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Hope you enjoy`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'eemelijarvine@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}. Hope to see you again`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}