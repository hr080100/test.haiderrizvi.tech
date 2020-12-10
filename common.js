const navSlide = () => {
    const burger = document.querySelector('.burger');
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');
    const menu = document.querySelector('.menu');
    const theme = document.querySelector('.theme');
    const light = document.querySelector('.light');
    const dark = document.querySelector('.dark');

    burger.addEventListener('click', () => {
        menu.classList.toggle('menu-active');
        line1.classList.toggle('line1-active');
        line2.classList.toggle('line2-active');
        line3.classList.toggle('line3-active');
        theme.classList.toggle('theme-active');
    });

    light.addEventListener('click', () => {
        document.body.style.backgroundColor = "#99ddff";
        document.getElementById('light').style.color = "#00ff00";
        document.getElementById('light').style.textShadow = "0px 0px 10px #00ff00";
        document.getElementById('light').style.boxShadow = "0px 3px 3px 0px #000000, inset 0px 0px 10px #000000";
        document.getElementById('dark').style.color = "#00458b";
        document.getElementById('dark').style.textShadow = "0px 0px 0px #00000000";
        document.getElementById('dark').style.boxShadow = "0px 3px 3px 0px #000000, inset 0px 0px 0px #000000";
        document.getElementById('dark').style.border = "2px solid #99ddff";
        document.getElementById('light').style.border = "2px solid #99ddff";
        document.getElementById('menu').style.backgroundColor = "#99ddff";
        document.getElementById('home').style.color = "#00458b";
        document.getElementById('home').style.fontWeight = "bold";
        document.getElementById('projects').style.color = "#00458b";
        document.getElementById('projects').style.fontWeight = "bold";
        document.getElementById('resume').style.color = "#00458b";
        document.getElementById('resume').style.fontWeight = "bold";
        document.getElementById('contact').style.color = "#00458b";
        document.getElementById('contact').style.fontWeight = "bold";
        document.getElementById('copy').style.color = "#00458b";
        document.getElementById('foot-icon1').src = "icons/twitterdark.png";
        document.getElementById('foot-icon2').src = "icons/linkedindark.png";
        document.getElementById('foot-icon3').src = "icons/facebookdark.png";
        document.getElementById('foot-icon4').src = "icons/instagramdark.png";
        document.getElementById('foot-icon5').src = "icons/githubdark.png";
        document.getElementById('line1').style.backgroundColor = "#00458b";
        document.getElementById('line2').style.backgroundColor = "#00458b";
        document.getElementById('line3').style.backgroundColor = "#00458b";
    })

    dark.addEventListener('click', () => {
        document.body.style.backgroundColor = "#051622";
        document.getElementById('dark').style.color = "#00ff00";
        document.getElementById('dark').style.textShadow = "0px 0px 10px #00ff00";
        document.getElementById('dark').style.boxShadow = "0px 3px 3px 0px #000000, inset 0px 0px 10px #000000";
        document.getElementById('light').style.color = "#1ba098";
        document.getElementById('light').style.textShadow = "0px 0px 0px #00000000";
        document.getElementById('light').style.boxShadow = "0px 3px 3px 0px #000000, inset 0px 0px 0px #000000";
        document.getElementById('dark').style.border = "2px solid #051622";
        document.getElementById('light').style.border = "2px solid #051622";
        document.getElementById('menu').style.backgroundColor = "#051622";
        document.getElementById('home').style.color = "#1ba098";
        document.getElementById('home').style.fontWeight = "bold";
        document.getElementById('projects').style.color = "#1ba098";
        document.getElementById('projects').style.fontWeight = "bold";
        document.getElementById('resume').style.color = "#1ba098";
        document.getElementById('resume').style.fontWeight = "bold";
        document.getElementById('contact').style.color = "#1ba098";
        document.getElementById('contact').style.fontWeight = "bold";
        document.getElementById('copy').style.color = "#1ba098";
        document.getElementById('foot-icon1').src = "icons/twitter.png";
        document.getElementById('foot-icon2').src = "icons/linkedin.png";
        document.getElementById('foot-icon3').src = "icons/facebook.png";
        document.getElementById('foot-icon4').src = "icons/instagram.png";
        document.getElementById('foot-icon5').src = "icons/github.png";
        document.getElementById('line1').style.backgroundColor = "#1ba098";
        document.getElementById('line2').style.backgroundColor = "#1ba098";
        document.getElementById('line3').style.backgroundColor = "#1ba098";
    })
}

navSlide();