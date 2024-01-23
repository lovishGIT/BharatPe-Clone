var Merchant= document.getElementById("Merchant-mainBody")
var active_button= document.getElementsByClassName("active")
var Merchant_btns= document.querySelectorAll(".merchant-button-area > button")
function Merchant_change(x) {

    Merchant_btns[0].classList.remove("active")
    Merchant_btns[1].classList.remove("active")
    Merchant_btns[2].classList.remove("active")

    if(x==1) {
        Merchant_btns[1].classList.add("active")
        Merchant.innerHTML= `<div class="Merchant-card" style="width: 100%;">
            <img src="https://bp-wp-website-prod.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/BharatPe-Investment.jpg" alt="">
            <h4>Investment Platform</h4>
            <p>Invest with RBI-approved partners & earn more</p>
            <a href="https://bharatpe.com/products/">Know More ></a>
        </div>`
    }
    else if(x==2) {
        Merchant_btns[2].classList.add("active")
        Merchant.innerHTML= `<div class="Merchant-card" style="width: 100%;">
        <img src="https://bp-wp-website-prod.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/Easy-Loans-1.jpg" alt="">
        <h4>BharatPe Easy Loans</h4>
        <p>Collateral-free loans to fast forward your business growth</p>
        <a href="https://bharatpemoney.com/">Know More ></a>
    </div>`
    }
    else {
        Merchant_btns[0].classList.add("active")
        Merchant.innerHTML= `<div class="Merchant-card" style="width: 50%;">
        <img src="https://bp-wp-website-prod.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/bharatPeswipe.jpg" alt="" />
        <h4>BharatPe Swipe</h4>
        <p>Accept fast payments from multiple debit and credit cards</p>
        <a href="https://bharatpe.com/bharatswipe/">Know More ></a>
    </div>
    <div class="Merchant-card">
        <img src="https://bp-wp-website-prod.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/bharatPe-speaker.jpg" alt="">
        <h4>BharatPe Swipe</h4>
        <p>Accept fast payments from multiple debit and credit cards</p>
        <a href="https://bharatpe.com/bharatswipe/">Know More ></a>
    </div>`
    }
}