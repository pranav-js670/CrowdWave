function sendOTP()
{
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];
    let otp_val = Math.floor(Math.random()*10000);
    let emailbody = 'Welcome to CrowdWave! <h2>Your OTP is </h2> ${otp_val}';
    email.send({
        SecureToken : "9457ca92-6c2b-4035-9a66-dc2a35d8b200",
        To : email.value,
        From : "crowdwavesupport@gmail.com",
        Subject : "CrowdWave Signup OTP",
        Body : emailbody,
    }).then(
        message => {
            if(message == "OK")
                {
                    alert("OTP sent to your email!" + email.value);
                    otpverify.style.display = 'flex';
                    const otp_inp = document.getElementById('otp_inp');
                    const otp_btn = document.getElementById('otp-btn');
                    otp_btn.addEventListener('click', () => {
                        if(otp_inp.value == otp_val)
                        {
                            alert("OTP Verified!");
                            otpverify.style.display = 'none';
                        }
                        else
                        {
                            alert("Invalid OTP!");
                        }
                    })

                }
        }
    );
}