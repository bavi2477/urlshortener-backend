import nodemailer from 'nodemailer';

const mail = async (to, subject, text) => {
    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bavithra.sjh@gmail.com',
            pass: 'wnvr kpip xumf ncjq'
        }
    });

    const mailOptions = {
        from: 'bavithra.sjh@gmail.com',
        to,
        subject,
        text
    };

    const sendMailAsync = async (mailOptions) => {
        try {
            await mailTransporter.sendMail(mailOptions);
            console.log("Mail sent successfully.");
        } catch (err) {
            console.log("Mail not sent:", err);
        }
    };

    await sendMailAsync(mailOptions);
};

export default mail;
